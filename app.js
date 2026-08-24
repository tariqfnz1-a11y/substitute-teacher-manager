
const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
const PERIODS = ["0","1","2","3","4","Break","5","6","7","8"];
let approved = JSON.parse(localStorage.getItem("substitutionPlans") || "[]");

const $ = id => document.getElementById(id);

function teachers() {
  return [...new Set(TIMETABLE.map(x => x.Teacher))].sort();
}
function rows(day, teacher) {
  return TIMETABLE.filter(x => x.Day === day && x.Teacher === teacher);
}
function isFree(r) {
  return !r.Class || String(r.Status).toLowerCase() === "free";
}
function getCell(day, teacher, period) {
  return TIMETABLE.find(x => x.Day === day && x.Teacher === teacher && String(x.Period) === String(period));
}
function getFree(day, period, absent, already=[]) {
  return teachers().filter(t => !absent.includes(t) && !already.includes(t))
    .filter(t => isFree(getCell(day,t,period) || {}));
}
function subjectScore(target, cand) {
  const a = (target.Subject || "").toLowerCase().replace(/\s/g,"");
  const b = (cand.Subject || "").toLowerCase().replace(/\s/g,"");
  if (!a || !b) return 0;
  if (a === b) return 50;
  if (a.slice(0,3) === b.slice(0,3)) return 15;
  return 0;
}

function populateTeachers() {
  const box = $("absentTeachers");
  box.innerHTML = "";
  teachers().forEach(t => {
    const label = document.createElement("label");
    label.className = "teacher-chip";
    label.innerHTML = `<input type="checkbox" value="${escapeHtml(t)}"> <span>${escapeHtml(t)}</span>`;
    box.appendChild(label);
  });
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
}

function generate() {
  const day = $("day").value;
  const absent = [...document.querySelectorAll("#absentTeachers input:checked")].map(x=>x.value);
  const body = $("resultsBody");
  body.innerHTML = "";

  if (!absent.length) {
    $("message").textContent = "Select at least one absent teacher.";
    return;
  }

  const workload = {};
  approved.filter(x=>x.Day===day).forEach(x => {
    if (x.Substitute) workload[x.Substitute] = (workload[x.Substitute]||0)+1;
  });

  const generated = [];
  absent.forEach(t => {
    rows(day,t).filter(r=>!isFree(r) && r.Period!=="Break").forEach(target => {
      const already = generated.filter(x=>x.Period===target.Period).map(x=>x.Substitute);
      const candidates = getFree(day,target.Period,absent,already);
      let best = "";
      let bestScore = -1;
      let bestReason = "No free teacher";

      candidates.forEach(c => {
        const cRow = getCell(day,c,target.Period) || {};
        let score = subjectScore(target,cRow);
        score += Math.max(0, 20-(workload[c]||0)*5);
        if (score > bestScore) {
          bestScore = score;
          best = c;
          bestReason = subjectScore(target,cRow) >= 50 ? "Same subject + free" :
                       subjectScore(target,cRow) > 0 ? "Related subject + free" : "Free teacher";
        }
      });

      if (best) workload[best] = (workload[best]||0)+1;
      generated.push({
        Day:day, Period:String(target.Period), "Absent Teacher":t,
        Class:target.Class, Subject:target.Subject, Substitute:best, Reason:bestReason
      });
    });
  });

  window.currentPlan = generated;
  renderResults(generated);
  $("message").textContent = generated.length ? `${generated.length} substitution duties generated. Review before approval.` : "No teaching periods found.";
}

function renderResults(data) {
  const body = $("resultsBody");
  body.innerHTML = "";
  data.sort((a,b)=>Number(a.Period)-Number(b.Period)).forEach((r,i)=>{
    const tr = document.createElement("tr");
    const opts = `<option value="">-- No substitute --</option>` +
      teachers().map(t=>`<option ${t===r.Substitute?"selected":""}>${escapeHtml(t)}</option>`).join("");
    tr.innerHTML = `
      <td>${escapeHtml(r.Period)}</td>
      <td>${escapeHtml(r.Class)}</td>
      <td>${escapeHtml(r["Absent Teacher"])}</td>
      <td>${escapeHtml(r.Subject)}</td>
      <td><select data-index="${i}" class="sub-select">${opts}</select></td>
      <td>${escapeHtml(r.Reason)}</td>`;
    body.appendChild(tr);
  });
  document.querySelectorAll(".sub-select").forEach(s=>{
    s.addEventListener("change", e=>{
      window.currentPlan[Number(e.target.dataset.index)].Substitute = e.target.value;
    });
  });
}

function approve() {
  if (!window.currentPlan?.length) {
    $("message").textContent = "Generate a substitution plan first.";
    return;
  }
  approved = approved.filter(x => !(x.Day===window.currentPlan[0].Day &&
    window.currentPlan.some(y=>y["Absent Teacher"]===x["Absent Teacher"])));
  approved.push(...window.currentPlan);
  localStorage.setItem("substitutionPlans", JSON.stringify(approved));
  $("message").textContent = "Plan approved and saved on this device.";
  showWorkload();
}

function showTimetable() {
  const t = $("teacherView").value;
  const body = $("teacherTableBody");
  body.innerHTML = "";
  PERIODS.forEach(p=>{
    if(p==="Break") return;
    const tr=document.createElement("tr");
    tr.innerHTML=`<td>${p}</td>` + DAYS.map(d=>{
      const r=getCell(d,t,p)||{};
      return `<td>${r.Class ? `<strong>${escapeHtml(r.Class)}</strong><br><small>${escapeHtml(r.Subject)}</small>` : `<span class="free">FREE</span>`}</td>`;
    }).join("");
    body.appendChild(tr);
  });
}

function showFree() {
  const day=$("freeDay").value, p=$("freePeriod").value;
  const list=getFree(day,p,[]);
  $("freeCount").textContent=list.length;
  $("freeList").innerHTML=list.map(t=>`<span class="free-pill">${escapeHtml(t)}</span>`).join("");
}

function showWorkload() {
  const day=$("workDay").value;
  const map={};
  approved.filter(x=>x.Day===day).forEach(x=>{if(x.Substitute) map[x.Substitute]=(map[x.Substitute]||0)+1;});
  const arr=Object.entries(map).sort((a,b)=>b[1]-a[1]);
  $("workloadBody").innerHTML=arr.map(x=>`<tr><td>${escapeHtml(x[0])}</td><td>${x[1]}</td></tr>`).join("");
}

function exportCSV() {
  if(!approved.length){$("message").textContent="No approved plans to export.";return;}
  const headers=["Day","Period","Absent Teacher","Class","Subject","Substitute","Reason"];
  const lines=[headers.join(",")].concat(approved.map(r=>headers.map(h=>`"${String(r[h]??"").replaceAll('"','""')}"`).join(",")));
  const blob=new Blob([lines.join("\n")],{type:"text/csv;charset=utf-8"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="substitution-plans.csv"; a.click();
}
function printPlan(){window.print();}

function init() {
  $("day").innerHTML=DAYS.map(x=>`<option>${x}</option>`).join("");
  $("freeDay").innerHTML=$("workDay").innerHTML=DAYS.map(x=>`<option>${x}</option>`).join("");
  $("freePeriod").innerHTML=PERIODS.filter(x=>x!=="Break").map(x=>`<option>${x}</option>`).join("");
  $("teacherView").innerHTML=teachers().map(x=>`<option>${escapeHtml(x)}</option>`).join("");
  populateTeachers();
  $("generate").onclick=generate;
  $("approve").onclick=approve;
  $("print").onclick=printPlan;
  $("export").onclick=exportCSV;
  $("teacherView").onchange=showTimetable;
  $("freeDay").onchange=showFree; $("freePeriod").onchange=showFree;
  $("workDay").onchange=showWorkload;
  showTimetable(); showFree(); showWorkload();
}
document.addEventListener("DOMContentLoaded",init);
