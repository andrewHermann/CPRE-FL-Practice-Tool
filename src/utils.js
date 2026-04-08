// ── Scoring ──────────────────────────────────────────────────────
function qPoints(q){return q.type==='single'?1:2;}
function earnedPoints(q,ua){return isCorrectAnswer(q,ua)?qPoints(q):0;}

// ── DOM helpers ──────────────────────────────────────────────────
function $(id){return document.getElementById(id);}
function showScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));$(id).classList.add('active');}
function formatTime(s){return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');}

// ── Fisher-Yates shuffle ─────────────────────────────────────────
function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
