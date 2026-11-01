/* =========================================================
   ATH CAMPUS SUBSTITUTE TEACHER MANAGER
   Academic Session: 2026–27
   Data source: timetable.js  (TIMETABLE.teachers[...].days[day][period])
   Slot values: [class, subject] = teaching | "Free" | null = no period
   ========================================================= */

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const WEEKDAY_PERIODS = ["Zero", "P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8"];
const FRIDAY_PERIODS  = ["P1", "P2", "P3", "P4", "P5", "P6"];

const PERIOD_NAMES = {
  Zero: "Zero Period",
  P1: "Period 1", P2: "Period 2", P3: "Period 3", P4: "Period 4",
  P5: "Period 5", P6: "Period 6", P7: "Period 7", P8: "Period 8"
};

/* Approximate period times (P3/P4 on Friday and P5/P6 on Mon–Thu
   are split evenly inside the bell-time blocks). */
const PERIOD_TIMES = {
  weekday: {
    Zero: "8:55–9:25",
    P1: "9:25–9:55",   P2: "9:55–10:25",
    P3: "10:25–10:55", P4: "10:55–11:25",
    P5: "11:45–12:15", P6: "12:15–12:45",
    P7: "12:45–1:10",  P8: "1:10–1:35"
  },
  friday: {
    P1: "8:55–9:30",   P2: "9:30–10:05",
    P3: "10:05–10:35", P4: "10:35–11:05",
    P5: "11:30–12:00", P6: "12:00–12:30"
  }
};

const STORAGE_KEY = "substitutionPlans";

let approved = [];

try {
  approved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  if (!Array.isArray(approved)) approved = [];
} catch (error) {
  approved = [];
}

window.currentPlan = [];

const $ = id => document.getElementById(id);


/* =========================================================
   BASIC TIMETABLE FUNCTIONS
   ========================================================= */

function periodsForDay(day) {
  return day === "Friday" ? FRIDAY_PERIODS : WEEKDAY_PERIODS;
}

function periodLabel(period, day) {
  const name = PERIOD_NAMES[period] || period;
  if (!day) return name;
  const times = day === "Friday" ? PERIOD_TIMES.friday : PERIOD_TIMES.weekday;
  return times[period] ? `${name} (${times[period]})` : name;
}

function teacherRecords() {
  if (typeof TIMETABLE === "undefined" || !Array.isArray(TIMETABLE.teachers)) {
    return [];
  }
  return TIMETABLE.teachers;
}

const teacherMap = {};

function buildTeacherMap() {
  teacherRecords().forEach(t => { teacherMap[t.name] = t; });
}

function teachers() {
  return teacherRecords()
    .map(t => t.name)
    .sort((a, b) => a.localeCompare(b));
}

/* Returns [class, subject], "Free", null, or undefined (unknown) */
function getSlot(day, teacher, period) {
  const t = teacherMap[teacher];
  if (!t || !t.days || !t.days[day]) return undefined;
  return t.days[day][period];
}

function isTeaching(slot) {
  return Array.isArray(slot);
}

function isFree(slot) {
  return slot === "Free";
}

/* Main subject = the subject a teacher teaches most often */
const mainSubjectCache = {};

function mainSubject(teacher) {
  if (mainSubjectCache[teacher] !== undefined) return mainSubjectCache[teacher];

  const counts = {};
  const t = teacherMap[teacher];

  if (t) {
    DAYS.forEach(day => {
      Object.values(t.days[day] || {}).forEach(slot => {
        if (isTeaching(slot) && slot[1]) {
          counts[slot[1]] = (counts[slot[1]] || 0) + 1;
        }
      });
    });
  }

  const best = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  mainSubjectCache[teacher] = best ? best[0] : "";
  return mainSubjectCache[teacher];
}

/* Teachers already approved as substitutes for this day/period */
function approvedAssigned(day, period, ignoreAbsent = []) {
  return approved
    .filter(r =>
      r.Day === day &&
      r.Period === period &&
      !ignoreAbsent.includes(r["Absent Teacher"]) &&
      r.Substitute
    )
    .map(r => r.Substitute);
}

function getFree(day, period, absent = [], already = []) {
  if (!periodsForDay(day).includes(period)) return [];

  return teachers().filter(teacher => {
    if (absent.includes(teacher)) return false;
    if (already.includes(teacher)) return false;
    // Only periods explicitly marked Free in the timetable qualify.
    return isFree(getSlot(day, teacher, period));
  });
}


/* =========================================================
   SUBJECT MATCHING
   ========================================================= */

function subjectScore(targetSubject, candidate) {
  const a = String(targetSubject || "").toLowerCase().replace(/\s/g, "");
  const b = String(mainSubject(candidate) || "").toLowerCase().replace(/\s/g, "");

  if (!a || !b) return 0;
  if (a === b) return 50;
  if (a.slice(0, 3) === b.slice(0, 3)) return 15;
  return 0;
}


/* =========================================================
   HTML SAFETY
   ========================================================= */

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}


/* =========================================================
   ABSENT TEACHER SELECTION
   ========================================================= */

function populateTeachers() {
  const box = $("absentTeachers");
  box.innerHTML = "";

  teachers().forEach(teacher => {
    const label = document.createElement("label");
    label.className = "teacher-chip";
    label.innerHTML = `
      <input type="checkbox" value="${escapeHtml(teacher)}">
      <span>${escapeHtml(teacher)}</span>
    `;
    box.appendChild(label);
  });
}


/* =========================================================
   SUBSTITUTE PLAN GENERATION
   ========================================================= */

function generate() {
  const day = $("day").value;

  const absent = [
    ...document.querySelectorAll("#absentTeachers input:checked")
  ].map(input => input.value);

  if (!absent.length) {
    $("message").textContent = "Select at least one absent teacher.";
    return;
  }

  const generated = [];
  const workload = {};

  // Existing approved duties for the day (excluding plans being replaced)
  approved
    .filter(r => r.Day === day && !absent.includes(r["Absent Teacher"]))
    .forEach(r => {
      if (r.Substitute) workload[r.Substitute] = (workload[r.Substitute] || 0) + 1;
    });

  periodsForDay(day).forEach(period => {

    absent.forEach(absentTeacher => {
      const slot = getSlot(day, absentTeacher, period);
      if (!isTeaching(slot)) return;

      const [className, subject] = slot;

      const alreadyAssigned = [
        ...generated.filter(r => r.Period === period).map(r => r.Substitute),
        ...approvedAssigned(day, period, absent)
      ].filter(Boolean);

      const candidates = getFree(day, period,
