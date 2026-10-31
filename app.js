
/* =========================================================
   ATH CAMPUS SUBSTITUTE TEACHER MANAGER
   Academic Session: 2026–27
   Timetable: Monday–Thursday (Zero + 1–8)
             Friday (1–6)
   ========================================================= */

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday"
];

const WEEKDAY_PERIODS = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8"
];

const FRIDAY_PERIODS = [
  "1", "2", "3", "4", "5", "6"
];

const PERIODS = [
  "0", "1", "2", "3", "4", "Break",
  "5", "6", "7", "8"
];

const PERIOD_LABELS = {
  "0": "Zero Period",
  "1": "Period 1",
  "2": "Period 2",
  "3": "Period 3",
  "4": "Period 4",
  "5": "Period 5",
  "6": "Period 6",
  "7": "Period 7",
  "8": "Period 8"
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
  return day === "Friday"
    ? FRIDAY_PERIODS
    : WEEKDAY_PERIODS;
}

function periodLabel(period) {
  return PERIOD_LABELS[String(period)] || `Period ${period}`;
}

function teachers() {
  if (typeof TIMETABLE === "undefined" || !Array.isArray(TIMETABLE)) {
    return [];
  }

  return [
    ...new Set(
      TIMETABLE
        .map(x => String(x.Teacher || "").trim())
        .filter(Boolean)
    )
  ].sort();
}

function rows(day, teacher) {
  return TIMETABLE.filter(x =>
    x.Day === day &&
    String(x.Teacher).trim() === teacher
  );
}

function getCell(day, teacher, period) {
  return TIMETABLE.find(x =>
    x.Day === day &&
    String(x.Teacher).trim() === teacher &&
    String(x.Period).trim() === String(period)
  ) || null;
}

function isFree(row) {
  if (!row) return false;

  const status = String(row.Status || "").trim().toLowerCase();
  const className = String(row.Class || "").trim();

  return (
    status === "free" ||
    status === "available" ||
    (!className && !status)
  );
}

function getFree(day, period, absent = [], already = []) {
  if (!periodsForDay(day).includes(String(period))) {
    return [];
  }

  return teachers().filter(teacher => {
    if (absent.includes(teacher)) return false;
    if (already.includes(teacher)) return false;

    const record = getCell(day, teacher, period);

    // Missing timetable records are NOT assumed to be free.
    return record !== null && isFree(record);
  });
}


/* =========================================================
   SUBJECT MATCHING
   ========================================================= */

function subjectScore(target, candidate) {
  const a = String(target.Subject || "")
    .toLowerCase()
    .replace(/\s/g, "");

  const b = String(candidate.Subject || "")
    .toLowerCase()
    .replace(/\s/g, "");

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
    ...document.querySelectorAll(
      "#absentTeachers input:checked"
    )
  ].map(input => input.value);

  if (!absent.length) {
    $("message").textContent =
      "Select at least one absent teacher.";

    return;
  }

  const generated = [];
  const workload = {};

  approved
    .filter(record => record.Day === day)
    .forEach(record => {
      if (record.Substitute) {
        workload[record.Substitute] =
          (workload[record.Substitute] || 0) + 1;
      }
    });

  const validPeriods = periodsForDay(day);

  absent.forEach(absentTeacher => {

    const teachingRows = rows(day, absentTeacher)
      .filter(record =>
        !isFree(record) &&
        validPeriods.includes(String(record.Period)) &&
        String(record.Period).toLowerCase() !== "break" &&
        String(record.Class || "").trim()
      );

    teachingRows.forEach(target => {

      const period = String(target.Period);

      // A teacher cannot supervise two classes in the same period.
      const alreadyAssigned = generated
        .filter(record => record.Period === period)
        .map(record => record.Substitute)
        .filter(Boolean);

      const candidates = getFree(
        day,
        period,
        absent,
        alreadyAssigned
      );

      let best = "";
      let bestScore = -1;
      let bestReason = "No free teacher available";

      candidates.forEach(candidate => {

        const candidateRow = getCell(
          day,
          candidate,
          period
        );

        const matchScore = subjectScore(
          target,
          candidateRow
        );

        const workloadScore = Math.max(
          0,
          20 - (workload[candidate] || 0) * 5
        );

        const totalScore = matchScore + workloadScore;

        if (totalScore > bestScore) {
          bestScore = totalScore;
          best = candidate;

          bestReason =
            matchScore >= 50
              ? "Same subject + free"
              : matchScore > 0
                ? "Related subject + free"
                : "Free teacher";
        }
      });

      if (best) {
        workload[best] = (workload[best] || 0) + 1;
      }

      generated.push({
        Day: day,
        Period: period,
        "Absent Teacher": absentTeacher,
        Class: target.Class,
        Subject: target.Subject || "",
        Substitute: best,
        Reason: bestReason
      });
    });
  });

  window.currentPlan = generated;

  renderResults(generated);

  $("message").textContent = generated.length
    ? `${generated.length} substitution duties generated. Review allocations before approval.`
    : "No teaching periods found for the selected absent teachers.";
}


/* =========================================================
   DISPLAY RECOMMENDED PLAN
   ========================================================= */

function renderResults(data) {
  const body = $("resultsBody");

  body.innerHTML = "";

  if (!data.length) {
    body.innerHTML = `
      <tr>
        <td colspan="6">No substitution duties to display.</td>
      </tr>
    `;

    return;
  }

  data.forEach((record, index) => {

    const tr = document.createElement("tr");

    const options = `
      <option value="">-- No substitute --</option>
      ${teachers().map(teacher => `
        <option value="${escapeHtml(teacher)}"
          ${teacher === record.Substitute ? "selected" : ""}>
          ${escapeHtml(teacher)}
        </option>
      `).join("")}
    `;

    tr.innerHTML = `
      <td>${escapeHtml(periodLabel(record.Period))}</td>
      <td>${escapeHtml(record.Class)}</td>
      <td>${escapeHtml(record["Absent Teacher"])}</td>
      <td>${escapeHtml(record.Subject)}</td>
      <td>
        <select data-index="${index}" class="sub-select">
          ${options}
        </select>
      </td>
      <td>${escapeHtml(record.Reason)}</td>
    `;

    body.appendChild(tr);
  });

  document.querySelectorAll(".sub-select").forEach(select => {

    select.addEventListener("change", event => {

      const index = Number(event.target.dataset.index);

      window.currentPlan[index].Substitute =
        event.target.value;

      const record = window.currentPlan[index];

      if (record.Substitute) {
        record.Reason = "Manually selected — verify availability";
      } else {
        record.Reason = "No substitute selected";
      }
    });
  });
}


/* =========================================================
   VALIDATE AND APPROVE PLAN
   ========================================================= */

function validatePlan(plan) {
  const absentTeachers = [
    ...new Set(plan.map(x => x["Absent Teacher"]))
  ];

  const assigned = new Set();

  for (const record of plan) {

    if (!record.Substitute) {
      return `No substitute selected for ${record.Class}, ${periodLabel(record.Period)}.`;
    }

    if (absentTeachers.includes(record.Substitute)) {
      return `${record.Substitute} is marked absent and cannot be a substitute.`;
    }

    const period = String(record.Period);

    if (!periodsForDay(record.Day).includes(period)) {
      return `Invalid period ${period} for ${record.Day}.`;
    }

    const key = `${record.Day}|${period}|${record.Substitute}`;

    if (assigned.has(key)) {
      return `${record.Substitute} has been assigned more than once in the same period.`;
    }

    assigned.add(key);

    const timetableRecord = getCell(
      record.Day,
      record.Substitute,
      period
    );

    if (!timetableRecord || !isFree(timetableRecord)) {
      return `${record.Substitute} is not recorded as free in ${periodLabel(period)}.`;
    }
  }

  return "";
}

function approve() {
  const plan = window.currentPlan || [];

  if (!plan.length) {
    $("message").textContent =
      "Generate a substitution plan first.";

    return;
  }

  const error = validatePlan(plan);

  if (error) {
    $("message").textContent =
      `Approval blocked: ${error}`;

    return;
  }

  const day = plan[0].Day;

  // Replace the previous plan for the same absent teacher(s) and day.
  const absentTeachers = [
    ...new Set(plan.map(x => x["Absent Teacher"]))
  ];

  approved = approved.filter(record =>
    !(record.Day === day &&
      absentTeachers.includes(record["Absent Teacher"]))
  );

  approved.push(...plan.map(record => ({ ...record })));

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(approved)
  );

  $("message").textContent =
    "Plan successfully approved and saved on this device.";

  showWorkload();
}


/* =========================================================
   INDIVIDUAL TEACHER WEEKLY TIMETABLE
   Compatible with the revised two-column HTML table.
   ========================================================= */

function showTimetable() {
  const teacher = $("teacherView").value;
  const body = $("teacherTableBody");

  body.innerHTML = "";

  if (!teacher) {
    body.innerHTML = `
      <tr><td colspan="2">No teacher selected.</td></tr>
    `;

    return;
  }

  DAYS.forEach(day => {

    const periods = periodsForDay(day);

    periods.forEach(period => {

      const record = getCell(day, teacher, period);

      let status = "";

      if (!record) {
        status = "No timetable record";
      } else if (isFree(record)) {
        status = '<span class="free">FREE</span>';
      } else {
        status = `
          <strong>${escapeHtml(record.Class)}</strong>
          <br>
          <small>${escapeHtml(record.Subject || "")}</small>
        `;
      }

      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>
          <strong>${escapeHtml(day)}</strong>
          <br>
          <small>${escapeHtml(periodLabel(period))}</small>
        </td>
        <td>${status}</td>
      `;

      body.appendChild(tr);
    });
  });
}


/* =========================================================
   AVAILABLE TEACHERS
   ========================================================= */

function updatePeriodOptions() {
  const day = $("freeDay").value;
  const select = $("freePeriod");

  const previous = select.value;
  const validPeriods = periodsForDay(day);

  select.innerHTML = validPeriods.map(period => `
    <option value="${period}">
      ${escapeHtml(periodLabel(period))}
    </option>
  `).join("");

  if (validPeriods.includes(previous)) {
    select.value = previous;
  }

  showFree();
}

function showFree() {
  const day = $("freeDay").value;
  const period = $("freePeriod").value;

  const list = getFree(day, period);

  $("freeCount").textContent = list.length;

  $("freeList").innerHTML = list.length
    ? list.map(teacher => `
        <span class="free-pill">
          ${escapeHtml(teacher)}
        </span>
      `).join("")
    : "<p>No teachers recorded as free in this period.</p>";
}


/* =========================================================
   APPROVED SUBSTITUTION WORKLOAD
   ========================================================= */

function showWorkload() {
  const day = $("workDay").value;
  const map = {};

  approved
    .filter(record => record.Day === day)
    .forEach(record => {

      if (record.Substitute) {
        map[record.Substitute] =
          (map[record.Substitute] || 0) + 1;
      }
    });

  const sorted = Object.entries(map)
    .sort((a, b) => b[1] - a[1]);

  $("workloadBody").innerHTML = sorted.length
    ? sorted.map(([teacher, count]) => `
        <tr>
          <td>${escapeHtml(teacher)}</td>
          <td>${count}</td>
        </tr>
      `).join("")
    : `
        <tr>
          <td colspan="2">
            No approved substitutions for this day.
          </td>
        </tr>
      `;
}


/* =========================================================
   EXPORT APPROVED PLANS TO CSV
   ========================================================= */

function exportCSV() {
  if (!approved.length) {
    $("message").textContent =
      "No approved plans to export.";

    return;
  }

  const headers = [
    "Day",
    "Period",
    "Absent Teacher",
    "Class",
    "Subject",
    "Substitute",
    "Reason"
  ];

  const lines = [
    headers.join(",")
  ].concat(
    approved.map(record =>
      headers.map(header => {
        const value = String(record[header] ?? "");
        return `"${value.replace(/"/g, '""')}"`;
      }).join(",")
    )
  );

  const blob = new Blob(
    ["\uFEFF" + lines.join("\n")],
    { type: "text/csv;charset=utf-8" }
  );

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "ATH-Substitution-Plans-2026-27.csv";

  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}


/* =========================================================
   PRINT PLAN
   ========================================================= */

function printPlan() {
  window.print();
}


/* =========================================================
   INITIALIZE APPLICATION
   ========================================================= */

function init() {

  if (typeof TIMETABLE === "undefined" || !Array.isArray(TIMETABLE)) {
    $("message").textContent =
      "Error: timetable.js is missing or TIMETABLE data is not defined.";

    return;
  }

  $("day").innerHTML = DAYS.map(day => `
    <option value="${day}">${day}</option>
  `).join("");

  $("freeDay").innerHTML = DAYS.map(day => `
    <option value="${day}">${day}</option>
  `).join("");

  $("workDay").innerHTML = DAYS.map(day => `
    <option value="${day}">${day}</option>
  `).join("");

  $("teacherView").innerHTML = teachers().map(teacher => `
    <option value="${escapeHtml(teacher)}">
      ${escapeHtml(teacher)}
    </option>
  `).join("");

  populateTeachers();

  $("generate").onclick = generate;
  $("approve").onclick = approve;
  $("print").onclick = printPlan;
  $("export").onclick = exportCSV;

  $("teacherView").onchange = showTimetable;

  $("freeDay").onchange = updatePeriodOptions;
  $("freePeriod").onchange = showFree;

  $("workDay").onchange = showWorkload;

  updatePeriodOptions();

  showTimetable();
  showWorkload();
}

document.addEventListener("DOMContentLoaded", init);
