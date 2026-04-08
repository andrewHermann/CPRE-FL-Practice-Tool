const KTYPE_OPTIONS=[
  'Behauptung richtig, Begründung richtig — Begründung erklärt die Behauptung',
  'Behauptung richtig, Begründung richtig — Begründung erklärt die Behauptung NICHT',
  'Behauptung richtig, Begründung falsch',
  'Behauptung falsch'
];

// ═══════════════════════════════════════════════════════════════
//  TERM MAP — inline EN translations (sorted longest-first for one-pass regex)
// ═══════════════════════════════════════════════════════════════
const TERM_MAP_RAW=[
  ['Anforderungserhebung','Requirements Elicitation'],
  ['Anforderungsverwaltung','Requirements Management'],
  ['Anforderungsspezifikation','Requirements Specification'],
  ['Anforderungsvalidierung','Requirements Validation'],
  ['Anforderungsverifikation','Requirements Verification'],
  ['Anforderungsmanagement','Requirements Management'],
  ['Anforderungsartefakt','Requirements Artefact'],
  ['Anforderungsverhandlung','Requirements Negotiation'],
  ['Anforderungsdokumentation','Requirements Documentation'],
  ['Anforderungsprüfung','Requirements Review'],
  ['Anforderungslebenszyklus','Requirements Lifecycle'],
  ['Anforderungsworkshop','Requirements Workshop'],
  ['Qualitätsanforderung','Quality Requirement'],
  ['Anforderungsattribut','Requirements Attribute'],
  ['Nicht-funktionale Anforderung','Non-functional Requirement'],
  ['Funktionale Anforderung','Functional Requirement'],
  ['Anforderungs-ID','Requirements ID'],
  ['Perspektivenbasierte Lesemethode','Perspective-Based Reading'],
  ['perspektivenbasierten Lesemethode','Perspective-Based Reading'],
  ['perspektivenbasierte Lesemethode','Perspective-Based Reading'],
  ['Perspective-Based Reading','Perspective-Based Reading'],
  ['Traceability-Matrix','Traceability Matrix'],
  ['Stakeholder-Analyse','Stakeholder Analysis'],
  ['Stakeholder-Identifikation','Stakeholder Identification'],
  ['Stakeholder-Karte','Stakeholder Map'],
  ['Änderungsmanagement','Change Management'],
  ['Change Control Board','Change Control Board'],
  ['Randbedingung','Constraint'],
  ['Systemkontext','System Context'],
  ['Systemgrenze','System Boundary'],
  ['Anforderung','Requirement'],
  ['Stakeholder','Stakeholder'],
  ['Validierung','Validation'],
  ['Verifikation','Verification'],
  ['Verhandlung','Negotiation'],
  ['Verfolgbarkeit','Traceability'],
  ['Traceability','Traceability'],
  ['Basislinie','Baseline'],
  ['Baseline','Baseline'],
  ['Priorisierung','Prioritisation'],
  ['Prüfbarkeit','Testability'],
  ['Eindeutigkeit','Unambiguity'],
  ['Vollständigkeit','Completeness'],
  ['Konsistenz','Consistency'],
  ['Atomarität','Atomicity'],
  ['Akteur','Actor'],
  ['Zustandsautomat','State Machine'],
  ['Sequenzdiagramm','Sequence Diagram'],
  ['Aktivitätsdiagramm','Activity Diagram'],
  ['Klassendiagramm','Class Diagram'],
  ['Kontextdiagramm','Context Diagram'],
  ['Datenflussdiagramm','Data Flow Diagram'],
  ['Use-Case-Diagramm','Use Case Diagram'],
  ['Use-Case-Szenario','Use Case Scenario'],
  ['Use Case','Use Case'],
  ['Inspektion','Inspection'],
  ['Walkthrough','Walkthrough'],
  ['Fragebogen','Questionnaire'],
  ['Feldbeobachtung','Field Observation'],
  ['Dokumentenanalyse','Document Analysis'],
  ['Brainstorming','Brainstorming'],
  ['Prototyping','Prototyping'],
  ['MoSCoW','MoSCoW'],
  ['Kano-Modell','Kano Model'],
  ['User Story','User Story'],
  ['Abnahmekriterien','Acceptance Criteria'],
  ['Product Backlog','Product Backlog'],
  ['Satzschablone','Sentence Template'],
  ['Erhebung','Elicitation'],
  ['Konflikt','Conflict'],
  ['Mehrdeutigkeit','Ambiguity'],
  ['Artefakt','Artefact'],
  ['BPMN','Business Process Model and Notation'],
];
// Sort longest DE string first so one-pass regex matches compound terms before roots
TERM_MAP_RAW.sort((a,b)=>b[0].length-a[0].length);
const _termKeys=TERM_MAP_RAW.map(([de])=>de.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));
const _termRE=new RegExp(`(${_termKeys.join('|')})(?!<)(?![^<]*>)(?![^<]*\\[)`, 'g');
const _termMapObj=Object.fromEntries(TERM_MAP_RAW);

function injectTerms(text){
  if(!text)return '';
  // Track what we've already annotated to avoid double-tagging
  let annotated=new Set();
  return text.replace(_termRE,(match)=>{
    if(annotated.has(match))return match;
    annotated.add(match);
    const en=_termMapObj[match];
    if(!en||en===match)return match;
    return `${match}<span class="en-tag">${en}</span>`;
  });
}

// ═══════════════════════════════════════════════════════════════
//  QUESTION BANK — 374 Fragen (234/73/67) · v3.9l · K1=137 K2=217 K3=15 · LE7: review roles, defect classification, re-inspection · LE8: Kano/MoSCoW applied, attribute-task
//  type:'single' → answer: 0-3
//  type:'multiple' → answer: [i,j,…]
//  type:'ktype' → assertion+reason; answer: 0(A) 1(B) 2(C) 3(D)
// ═══════════════════════════════════════════════════════════════

