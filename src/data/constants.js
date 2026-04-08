// quick: 10×1pt + 5×2pt + 5×2pt = 30 pts / 20 questions
// full:  22×1pt + 12×2pt + 12×2pt = 70 pts / 46 questions
const MODES={
  quick:{nSingle:10,nMulti:5,nKtype:5,seconds:30*60,totalPts:30,label:'Schnelldurchlauf · 20 Fragen · 30 Min',
    leTargets:{'LE1':1,'LE2':2,'LE3':3,'LE4':2,'LE5':4,'LE6':2,'LE7':2,'LE8':3,'LE9':1},
    kTargets:{K1:12,K2:6,K3:2},
    minLE:['LE1','LE2','LE3','LE4','LE5','LE6','LE7','LE8','LE9']},
  full: {nSingle:22,nMulti:12,nKtype:12,seconds:75*60,totalPts:70,label:'Vollständige Prüfung · 46 Fragen · 75 Min',
    leTargets:{'LE1':3,'LE2':5,'LE3':6,'LE4':5,'LE5':8,'LE6':5,'LE7':5,'LE8':6,'LE9':3},
    kTargets:{K1:28,K2:14,K3:4},
    minLE:['LE1','LE2','LE3','LE4','LE5','LE6','LE7','LE8','LE9']},
  // Survival: failure-driven, pattern-weighted — NOT blueprint-steered
  survival:{nSingle:20,nMulti:0,nKtype:8,seconds:32*60,totalPts:28,label:'Survival Mode · 28 Fragen · 32 Min',
    leTargets:{},kTargets:{},minLE:[]}
};

// v3.7: LE titles mirror the 9 syllabus chapters 1:1
const LE_TITLES={
  LE1:'LE1 · Was ist eine Anforderung?',
  LE2:'LE2 · Systemkontext & Stakeholder',
  LE3:'LE3 · RE-Prozess',
  LE4:'LE4 · Anforderungserhebung',
  LE5:'LE5 · Anforderungsdokumentation',
  LE6:'LE6 · Anforderungsqualität',
  LE7:'LE7 · Anforderungsprüfung',
  LE8:'LE8 · Anforderungsverwaltung',
  LE9:'LE9 · Agile RE & Werkzeuge'
};

const LZ_TITLES={
  'LZ 1-1':'LZ 1-1 · Definition Anforderung',
  'LZ 1-2':'LZ 1-2 · Typen von Anforderungen',
  'LZ 1-3':'LZ 1-3 · Definition Requirements Engineering',
  'LZ 1-4':'LZ 1-4 · Stakeholder- vs. Systemanforderungen',
  'LZ 2-1':'LZ 2-1 · Systemkontext & Systemgrenze',
  'LZ 2-2':'LZ 2-2 · Systemgrenze vs. Kontextelemente',
  'LZ 2-3':'LZ 2-3 · Relevante Kontextelemente',
  'LZ 2-4':'LZ 2-4 · Stakeholder-Identifikation & -Analyse',
  'LZ 2-5':'LZ 2-5 · Stakeholder-Karte',
  'LZ 3-1':'LZ 3-1 · Vier RE-Kernaktivitäten',
  'LZ 3-2':'LZ 3-2 · Iterativer RE-Prozess',
  'LZ 3-3':'LZ 3-3 · Validierung vs. Verifikation',
  'LZ 3-4':'LZ 3-4 · Anforderungsverhandlung',
  'LZ 3-5':'LZ 3-5 · RE-Artefakte',
  'LZ 4-1':'LZ 4-1 · Tacit Knowledge & Erhebungsherausforderungen',
  'LZ 4-2':'LZ 4-2 · Erhebungstechniken im Vergleich',
  'LZ 4-3':'LZ 4-3 · Geeignete Erhebungstechnik auswählen (K3)',
  'LZ 4-4':'LZ 4-4 · Perspektivenbasierte Lesemethode',
  'LZ 5-1':'LZ 5-1 · NL-Dokumentation & Satzschablonen',
  'LZ 5-2':'LZ 5-2 · Use Cases, Akteure & UC-Beziehungen',
  'LZ 5-3':'LZ 5-3 · Verhaltensmodelle',
  'LZ 5-4':'LZ 5-4 · Strukturmodelle',
  'LZ 5-5':'LZ 5-5 · Glossare',
  'LZ 5-6':'LZ 5-6 · UC-Diagramm vs. UC-Beschreibung',
  'LZ 6-1':'LZ 6-1 · Qualitätskriterien für einzelne Anforderungen',
  'LZ 6-2':'LZ 6-2 · Qualitätsmängel erkennen',
  'LZ 6-3':'LZ 6-3 · Qualität der Gesamtspezifikation',
  'LZ 6-4':'LZ 6-4 · Qualität verbessern (K3)',
  'LZ 7-1':'LZ 7-1 · Review-Typen (Überblick)',
  'LZ 7-2':'LZ 7-2 · Review-Techniken im Vergleich',
  'LZ 7-3':'LZ 7-3 · Rollen in der formalen Inspektion',
  'LZ 7-4':'LZ 7-4 · Prototyping als Validierungstechnik',
  'LZ 7-5':'LZ 7-5 · Konfliktlösung bei Anforderungen',
  'LZ 8-1':'LZ 8-1 · Grundkonzepte Anforderungsverwaltung',
  'LZ 8-2':'LZ 8-2 · Anforderungslebenszyklus & Attribute',
  'LZ 8-3':'LZ 8-3 · Traceability',
  'LZ 8-4':'LZ 8-4 · Änderungsmanagement',
  'LZ 8-5':'LZ 8-5 · Basislinien',
  'LZ 8-6':'LZ 8-6 · Priorisierungsmethoden',
  'LZ 9-1':'LZ 9-1 · User Stories & Abnahmekriterien',
  'LZ 9-2':'LZ 9-2 · Requirements-Management-Tools',
  'LZ 9-3':'LZ 9-3 · RE in agilen Projekten',
};
