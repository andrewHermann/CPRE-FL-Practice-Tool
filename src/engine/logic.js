// ── Answer correctness ───────────────────────────────────────────
function isCorrectAnswer(q,ua){
  if(ua===null)return false;
  if(q.type==='multiple'){
    const cs=new Set(q.answer),us=new Set(ua);
    return cs.size===us.size&&[...cs].every(v=>us.has(v));
  }
  return ua===q.answer;
}

// ── Trap label for Survival Mode feedback ────────────────────────
function getTrapLabel(q){
  const lz=q.lz||'';const et=q.errorType||'';const le=q.le||'';
  const ex=(q.explanation||'').toLowerCase();
  if(et==='trap') return 'Kognitive Falle';
  if(lz==='LZ 3-3'||(ex.includes('validierung')&&ex.includes('verifikation')))
    return 'Validierung vs. Verifikation — Top-3-Prüfungsfehler';
  if(lz.startsWith('LZ 2-')||lz==='LZ 5-2')
    return 'Akteur- &amp; Systemgrenzen-Falle';
  if(lz.startsWith('LZ 5-1')&&et==='terminology')
    return 'Satzschablonen-Falle (MUSS / SOLL / KANN)';
  if(le==='LE6'&&et==='terminology')
    return 'Qualitätskriterien-Verwechslung';
  if(le==='LE7'&&et==='terminology')
    return 'Review-Typ / Rollen-Verwechslung';
  if(le==='LE8'&&et==='terminology')
    return 'Verwaltungsbegriff-Falle';
  if(et==='terminology')
    return 'Terminologie-Falle';
  return 'Konzept-Anwendungsfehler';
}

// ── Error bucket classification ──────────────────────────────────
const ERROR_BUCKETS={
  terminology:  {label:'Terminology Error',     css:'terminology',  desc:'Misunderstood a key CPRE term or definition'},
  method:       {label:'Method Confusion',       css:'method',       desc:'Mixed up two similar techniques or process steps'},
  scenario:     {label:'Scenario Misread',       css:'scenario',     desc:'Misread what the question was actually asking'},
  trap:         {label:'Trap Answer Seduction',  css:'trap',         desc:'Chose a plausible-sounding but incorrect distractor'},
  timepressure: {label:'Time-Pressure Guess',    css:'timepressure', desc:'Complex reasoning likely rushed under time pressure'}
};

function inferErrorType(q){
  if(q.errorType) return q.errorType;
  if(q.type==='ktype') return 'trap';
  const ch=q.chapter||'';
  if(ch.includes('Kap. 1')) return 'terminology';
  if(ch.includes('Kap. 2')) return 'scenario';
  if(ch.includes('Kap. 3')) return 'method';
  if(ch.includes('Kap. 4')) return 'method';
  if(ch.includes('Kap. 5')) return 'scenario';
  if(ch.includes('Kap. 6')) return 'trap';
  if(ch.includes('Kap. 7')) return 'method';
  if(ch.includes('Kap. 8')) return 'timepressure';
  return 'timepressure';
}
