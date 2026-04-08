// v3.7: chapter labels now reflect the corrected 1:1 LE mapping
function normalizeChapterLabel(q){
  return q.chapter
    .replace('Kap. 9 · Agile RE & Werkzeuge',  'LE9 · Agile RE & Werkzeuge')
    .replace('Kap. 8 · Anforderungsverwaltung', 'LE8 · Anforderungsverwaltung')
    .replace('Kap. 7 · Anforderungsprüfung',    'LE7 · Anforderungsprüfung')
    .replace('Kap. 6 · Anforderungsqualität',   'LE6 · Anforderungsqualität')
    .replace('Kap. 5 · Anforderungsdokumentation','LE5 · Anforderungsdokumentation')
    .replace('Kap. 4 · Anforderungserhebung',   'LE4 · Anforderungserhebung')
    .replace('Kap. 3 · RE-Prozess',             'LE3 · RE-Prozess')
    .replace('Kap. 2 · Systemkontext',          'LE2 · Systemkontext')
    .replace('Kap. 1 · Was ist eine Anforderung?','LE1 · Was ist eine Anforderung?');
}
function inferLE(q){
  const c=(q.chapter+' '+(q.text||'')+' '+(q.assertion||'')+' '+(q.reason||'')).toLowerCase();
  if(c.includes('werkzeug')||c.includes('tool')) return 'LE7';
  if(c.includes('traceab')||c.includes('verfolgbarkeit')||c.includes('version')||c.includes('basislinie')||c.includes('prioris')||c.includes('änder')||c.includes('attribut')||c.includes('sicht')) return 'LE6';
  if(c.includes('prozess')||c.includes('iterativ')||c.includes('präskriptiv')||c.includes('explorativ')||c.includes('konfigurier')) return 'LE5';
  if(c.includes('stakeholder')||c.includes('kano')||c.includes('interview')||c.includes('brainstorm')||c.includes('prototyp')||c.includes('konflikt')||c.includes('validier')||c.includes('review')||c.includes('inspektion')||c.includes('walkthrough')||c.includes('erhebung')||c.includes('feldbeobachtung')||c.includes('dokumentenanalyse')) return 'LE4';
  if(c.includes('modell')||c.includes('use case')||c.includes('use-case')||c.includes('sequenz')||c.includes('zustands')||c.includes('aktivitäts')||c.includes('erd')||c.includes('dfd')||c.includes('klasse')||c.includes('glossar')||c.includes('schablone')||c.includes('dokumentation')||c.includes('qualitätsmerkmal')||c.includes('eindeutig')||c.includes('vollständig')||c.includes('prüfbarkeit')||c.includes('mehrdeutig')) return 'LE3';
  if(c.includes('wertorient')||c.includes('kontext')||c.includes('problem')||c.includes('lösung')||c.includes('evolution')||c.includes('innovation')||c.includes('gemeinsame')||c.includes('stakeholder-prinzip')) return 'LE2';
  return 'LE1';
}
function inferK(q){
  const c=(q.text||q.assertion||'').toLowerCase();
  if(q.type==='ktype') return 'K2';
  if(/welches|was versteht man|welche aussage|was bezeichnet|was beschreibt/.test(c)) return 'K1';
  if(c.includes('eignet sich')||c.includes('am besten')||c.includes('verletz')||c.includes('unterschied')||c.includes('implizit')||c.includes('szenario')) return 'K2';
  if(c.includes('welche modellierungsnotation')||c.includes('welches erhebungsverfahren')||c.includes('wie würden')||c.includes('wählen sie alle')||c.includes('in welcher situation')) return 'K3';
  if(q.type==='multiple') return 'K3';
  return 'K2';
}
function inferLZ(q){
  const c=(q.chapter+' '+(q.text||'')+' '+(q.assertion||'')+' '+(q.reason||'')).toLowerCase();
  const le=inferLE(q);
  if(le==='LE1'){
    if(c.includes('qualitätsanforderung')||c.includes('funktionale')||c.includes('constraint')||c.includes('randbeding')) return 'LZ 1.1 Typen von Anforderungen';
    if(c.includes('mehrwert')||c.includes('warum')) return 'LZ 1.2 Nutzen von RE';
    return 'LZ 1.x Einführung & Begriffe';
  }
  if(le==='LE2'){
    if(c.includes('kontext')) return 'LZ 2.2 Prinzip Kontext';
    if(c.includes('stakeholder')) return 'LZ 2.2 Prinzip Stakeholder';
    if(c.includes('validier')) return 'LZ 2.2 Prinzip Validierung';
    if(c.includes('evolution')||c.includes('änder')) return 'LZ 2.2 Prinzip Evolution';
    return 'LZ 2.2 RE-Prinzipien';
  }
  if(le==='LE3'){
    if(c.includes('glossar')) return 'LZ 3.5 Glossare';
    if(c.includes('sequenz')||c.includes('aktivitäts')||c.includes('zustands')||c.includes('erd')||c.includes('dfd')||c.includes('klasse')||c.includes('use case')||c.includes('use-case')) return 'LZ 3.4 Modellbasierte Arbeitsprodukte';
    if(c.includes('natürliche sprache')||c.includes('schablone')||c.includes('template')||c.includes('formular')) return 'LZ 3.2/3.3 Natürlichsprachig & vorlagenbasiert';
    if(c.includes('eindeutig')||c.includes('vollständig')||c.includes('prüfbarkeit')||c.includes('mehrdeutig')||c.includes('qualität')) return 'LZ 3.8 Qualitätskriterien';
    return 'LZ 3.6 Dokumentationsstrukturen';
  }
  if(le==='LE4'){
    if(c.includes('stakeholder')||c.includes('quelle')) return 'LZ 4.1 Quellen für Anforderungen';
    if(c.includes('kano')||c.includes('interview')||c.includes('brainstorm')||c.includes('prototyp')||c.includes('dokumentenanalyse')||c.includes('feldbeobachtung')||c.includes('erhebung')) return 'LZ 4.2 Ermittlungstechniken';
    if(c.includes('konflikt')) return 'LZ 4.3 Konfliktlösung';
    return 'LZ 4.4 Validierungstechniken';
  }
  if(le==='LE5'){
    if(c.includes('linear')||c.includes('iterativ')||c.includes('präskriptiv')||c.includes('explorativ')||c.includes('kundenspezifisch')||c.includes('marktorientiert')) return 'LZ 5.2 Prozessfacetten';
    return 'LZ 5.3 RE-Prozess konfigurieren';
  }
  if(le==='LE6'){
    if(c.includes('version')) return 'LZ 6.3 Versionskontrolle';
    if(c.includes('basislinie')||c.includes('konfiguration')) return 'LZ 6.4 Konfigurationen & Basislinien';
    if(c.includes('attribut')||c.includes('sicht')) return 'LZ 6.5 Attribute & Sichten';
    if(c.includes('traceab')||c.includes('verfolgbarkeit')) return 'LZ 6.6 Verfolgbarkeit';
    if(c.includes('änder')) return 'LZ 6.7 Umgang mit Änderungen';
    if(c.includes('prioris')) return 'LZ 6.8 Priorisierung';
    return 'LZ 6.x Requirements Management';
  }
  return 'LZ 7.1/7.2 Werkzeugunterstützung';
}

// ── Map LZ code → LE bucket ──────────────────────────────────────
function lzToLE(lz){
  const n=lz?parseInt(lz.replace('LZ ','').split('-')[0]):0;
  if(n===1) return 'LE1';
  if(n===2) return 'LE2';
  if(n===3) return 'LE3';
  if(n===4) return 'LE4';
  if(n===5) return 'LE5';
  if(n===6) return 'LE6';
  if(n===7) return 'LE7';
  if(n===8) return 'LE8';
  if(n===9) return 'LE9';
  return 'LE?';
}

function enrichQuestion(q, idx, type){
  const clone={...q};
  clone.type=type;
  clone.lz      = q.lz ? (LZ_TITLES[q.lz]||q.lz) : 'LZ ?-?';
  clone.kLevel  = q.k  || 'K?';
  clone.le      = q.lz ? lzToLE(q.lz) : 'LE?';
  clone.chapter=normalizeChapterLabel({...q, chapter:q.chapter});
  clone.qid=`${type.toUpperCase()}-${String(idx+1).padStart(3,'0')}`;
  return clone;
}

const singlePoolMeta=singlePool.map((q,i)=>enrichQuestion(q,i,'single'));
const multiPoolMeta =multiPool.map((q,i)=>enrichQuestion(q,i,'multiple'));
const ktypePoolMeta =ktypePool.map((q,i)=>enrichQuestion(q,i,'ktype'));
const allQuestions=[...singlePoolMeta,...multiPoolMeta,...ktypePoolMeta];
const ALL_LES=['LE1','LE2','LE3','LE4','LE5','LE6','LE7','LE8','LE9'];
const ALL_LZ=[...new Set(allQuestions.map(q=>q.lz))].sort();
