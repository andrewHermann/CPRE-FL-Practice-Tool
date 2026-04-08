const singlePool=[
  {type:'single',chapter:'Kap. 1 · Was ist eine Anforderung?',errorType:'terminology',
   text:'"Das System MUSS OAuth 2.0 zur Authentifizierung verwenden." Ein RE-Ingenieur ordnet dies als Randbedingung ein. Welche Aussage ist korrekt?',
   options:['Die Einordnung ist falsch, da jede Vorgabe, die mit \'muss\' formuliert ist, per Definition eine funktionale Anforderung darstellt.','Die Einordnung ist korrekt: OAuth 2.0 schränkt den Lösungsraum ein (nur dieses Protokoll zulässig) und ist damit eine Randbedingung, unabhängig davon, wer sie formuliert hat.','Die Einordnung hängt davon ab, ob OAuth 2.0 vom Auftraggeber oder vom Entwicklungsteam vorgeschlagen wurde.','OAuth 2.0 ist stets eine Sicherheits-Qualitätsanforderung, da Authentifizierung das Qualitätsmerkmal \'Security\' betrifft.'],
   answer:1,explanation:'Eine Randbedingung (Constraint) schränkt den Lösungsraum ein — die Vorgabe eines konkreten Protokolls schließt alle Alternativen aus. Hätte man nur \'Authentifizierung ist erforderlich\' gefordert, wäre das eine funktionale Anforderung. Das Subjekt der Formulierung (Auftraggeber vs. Team) ist für die Klassifikation unerheblich. Sicherheit als Qualitätsmerkmal beschreibt die Güte einer Funktion, nicht die Einschränkung der Implementierungswahl.',lz:'LZ 1-1',k:'K2'},

  {type:'single',chapter:'Kap. 1 · Was ist eine Anforderung?',errorType:'terminology',
   text:'Welche der folgenden Anforderungen ist am eindeutigsten als QUALITÄTSANFORDERUNG — und nicht als Randbedingung — einzuordnen?',
   options:['Das System muss auf PostgreSQL 15 als Datenbank betrieben werden.','Das System muss gewährleisten, dass 99,5 % aller Buchungsanfragen innerhalb von 1 Sekunde beantwortet werden.','Das System muss in einer zertifizierten ISO-27001-Umgebung betrieben werden.','Das System darf ausschließlich Open-Source-Bibliotheken mit MIT-Lizenz verwenden.'],
   answer:1,explanation:'Die 99,5%-Antwortzeit beschreibt ein messbares Gütemerkmal des Systems (Performance/Zuverlässigkeit) — eine Qualitätsanforderung. PostgreSQL, ISO-27001-Umgebung und Lizenzvorgabe schränken alle den Lösungsraum ein: Sie sind Randbedingungen. Der Unterschied: Eine QA beschreibt WIE GUT das System etwas tut; eine Randbedingung schreibt eine Implementierungsentscheidung vor.',lz:'LZ 1-2',k:'K2'},

  {type:'single',chapter:'Kap. 1 · Was ist eine Anforderung?',errorType:'terminology',
   text:'Eine Behörde schreibt vor: \'Das System darf ausschließlich auf Servern betrieben werden, die physisch innerhalb der EU stehen.\' Um welchen PRIMÄREN Anforderungstyp handelt es sich?',
   options:['Qualitätsanforderung (Datenschutz-Compliance), da sie die Sicherheit und DSGVO-Konformität des Systems betrifft','Funktionale Anforderung, da sie beschreibt, was das System leisten muss','Randbedingung (Constraint), da sie den Lösungsraum durch eine technisch-rechtliche Vorgabe einschränkt','Stakeholder-Anforderung auf Bedürfnisebene, da sie von einer externen Partei formuliert wurde'],
   answer:2,explanation:'Die Serverstandort-Vorschrift schränkt den Lösungsraum ein — Hosting-Optionen außerhalb der EU sind ausgeschlossen. Das ist eine Randbedingung. Obwohl DSGVO-Konformität eine Qualitätseigenschaft ist, beschreibt diese spezifische Anforderung keine messbare Güte des Systems, sondern eine Implementierungseinschränkung. Der Typ der ausstellenden Partei (Behörde) bestimmt nicht die Anforderungskategorie.',lz:'LZ 1-2',k:'K1'},

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'terminology',
   text:'Welche Aussage beschreibt den Begriff SYSTEMKONTEXT im IREB-Sinne am präzisesten?',
   options:['Der Systemkontext ist der Teil der Systemumgebung, der für das zu entwickelnde System relevant ist — Faktoren außerhalb der Systemgrenze, die das System beeinflussen oder von ihm beeinflusst werden.','Der Systemkontext umfasst alle technischen Komponenten, die das System bei der Ausführung benötigt.','Der Systemkontext ist identisch mit der Systemarchitektur und definiert, welche Module das System enthält.','Der Systemkontext beschreibt ausschließlich die menschlichen Nutzer und deren Interaktionen mit dem System.'],
   answer:0,explanation:'Der Systemkontext ist explizit der Teil der Umgebung AUSSERHALB der Systemgrenze, der für das System relevant ist. Er umfasst externe Systeme, Stakeholder, Regularien und Prozesse, die das System beeinflussen oder von ihm beeinflusst werden. Technische Komponenten, Architektur und Module gehören zum System selbst, nicht zu seinem Kontext.',lz:'LZ 2-1',k:'K1'},

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'terminology',
   text:'Ein Projektleiter behauptet: \'Die vier IREB-Kernaktivitäten des RE-Prozesses sind Erhebung, Dokumentation, Design und Verwaltung.\' Was ist an dieser Aussage falsch?',
   options:['Nichts — Design ist laut IREB-Syllabus v3 eine vollwertige RE-Kernaktivität.','Design ist keine RE-Kernaktivität; die vierte Aktivität ist Prüfung/Validierung. Design gehört zum Systems Engineering.','Es gibt laut IREB keine feste Anzahl von Kernaktivitäten — die Aufzählung ist beliebig.','Verwaltung ist keine Kernaktivität; die korrekte vierte Aktivität ist Modellierung.'],
   answer:1,explanation:'Die vier IREB-Kernaktivitäten sind: Erhebung (Elicitation), Dokumentation, Prüfung/Validierung und Verwaltung (Management). Design ist eine Aktivität des Systems Engineering bzw. der Softwarearchitektur — sie liegt außerhalb des RE. Modellierung ist Teil der Dokumentation, keine eigenständige Kernaktivität.',lz:'LZ 3-1',k:'K1'},

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'terminology',
   text:'Welche RE-Aktivität prüft, ob die Spezifikation den tatsächlichen Stakeholder-Bedürfnissen entspricht?',
   options:['Verifikation — prüft, ob der Code fehlerfrei kompiliert','Validierung — prüft, ob Spezifikation ≡ Stakeholder-Bedürfnisse ("Bauen wir das RICHTIGE System?")','Dokumentation — erstellt die Spezifikation','Priorisierung — ordnet Anforderungen nach Wichtigkeit'],
   answer:1,explanation:'Validierung beantwortet "Bauen wir das RICHTIGE System?" — prüft, ob Spezifikation den realen Stakeholder-Bedarf deckt. Verifikation beantwortet "Bauen wir das System RICHTIG?" — prüft, ob Implementierung der Spezifikation entspricht.',lz:'LZ 3-3',k:'K1'},

  {type:'single',chapter:'Kap. 4 · Anforderungserhebung',errorType:'method',
   text:'Ein RE-Team erhebt Anforderungen für ein Steuererklärungssystem. Steuerberater können ihre Arbeitsschritte \'kaum in Worte fassen\'. Das Budget ist eng, die Stakeholder zeitlich stark belastet. Welche Erhebungsstrategie bietet den besten Kompromiss?',
   options:['Strukturiertes Interview mit vorgefertigtem Fragebogen — kostengünstig und zeitsparend, auch wenn implizites Wissen verborgen bleibt','Einfacher Papier-Prototyp der Kernworkflows, begleitet von kurzen Feedback-Sitzungen — externalisiert tacit knowledge bei überschaubarem Aufwand','Mehrwöchige ethnografische Feldbeobachtung aller Steuerberater — maximale Erkenntnistiefe, auch wenn Aufwand hoch ist','Ausschließliche Dokumentenanalyse bestehender Steuerformulare — nutzt vorhandene Quellen ohne Stakeholder-Belastung'],
   answer:1,explanation:'Low-Fidelity-Prototyping kombiniert die wichtigsten Stärken: Es externalisiert implizites Wissen (tacit knowledge), das Interviews nicht erreichen, bei deutlich geringerem Aufwand als Ethnografie. Der Fragebogen scheitert an der Natur des Problems (implizites Wissen). Reine Dokumentenanalyse erfasst keine prozessualen Feinheiten. Ethnografie wäre optimal, ist aber bei engem Budget nicht realisierbar — der Trade-off liegt klar beim Prototyp.',lz:'LZ 4-3',k:'K3'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'trap',
   text:'Ein Gutachter beanstandet: \'Das externe Lohnbuchhaltungssystem ist als Akteur eingetragen — das ist falsch, denn Akteure können nur Menschen sein.\' Welche Aussage ist korrekt?',
   options:['Der Gutachter hat recht: In der UML-Definition sind Akteure immer menschliche Benutzerrollen.','Der Gutachter irrt: Akteure können auch externe Systeme sein, sofern sie außerhalb der Systemgrenze agieren und mit dem System interagieren.','Der Gutachter hat recht, aber nur dann, wenn das externe System vollautomatisch ohne menschliche Beteiligung arbeitet.','Der Gutachter irrt teilweise: Externe Systeme sind zulässige Akteure, müssen jedoch als \'sekundäre Akteure\' gekennzeichnet werden.'],
   answer:1,explanation:'Laut UML und IREB sind Akteure alle Rollen außerhalb der Systemgrenze, die mit dem System interagieren — Personen, Organisationen oder externe Systeme. Die Einschränkung auf Menschen ist eine verbreitete Fehlvorstellung. Optionen C und D enthalten plausible Teilwahrheiten, die aber im IREB-Standard nicht belegt sind.',lz:'LZ 5-2',k:'K1'},

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'trap',
   text:'Eine Anforderung lautet: \'Das System muss 99,9 % aller Anfragen korrekt verarbeiten.\' Ein RE-Kollege hält die Anforderung für prüfbar, da sie eine Prozentzahl enthält. Welches Qualitätsproblem besteht trotzdem?',
   options:['Die Anforderung ist zu kurz und muss ausführlicher formuliert werden.','99,9 % klingt präzise, ist aber ohne definierten Messzeitraum nicht prüfbar: Gilt dies täglich, monatlich oder jährlich? Die Werte unterscheiden sich gravierend.','Die Anforderung verletzt das Atomaritätsprinzip, da sie zwei Aspekte (Korrektheit und Verfügbarkeit) kombiniert.','Die Anforderung ist nicht konsistent mit typischen SLAs und muss an Branchenstandards angepasst werden.'],
   answer:1,explanation:'Eine Zahl allein macht eine Anforderung nicht prüfbar. Ohne Messzeitraum bedeutet 99,9% täglich ~86 fehlerhafte Anfragen/Tag — bei monatlichem Bezug sind es ~720. Der Prüfkontext fehlt. Options A und D adressieren reale, aber nachrangige Aspekte. Option C ist sachlich falsch: \'korrekt\' und \'Verarbeitungsquote\' sind keine getrennten Anforderungsaspekte.',lz:'LZ 6-2',k:'K2'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'terminology',
   text:'Ein Team muss REQ-047 ändern. Es existieren Traceability-Links von REQ-047 zu Testfällen TC-012 und TC-031 sowie zu Design-Element DE-07. Was ist der PRIMÄRE Nutzen dieser Links für die Änderung?',
   options:['Die Links aktualisieren TC-012, TC-031 und DE-07 automatisch, sobald REQ-047 geändert wird.','Die Links identifizieren alle Artefakte, die von der Änderung an REQ-047 potenziell betroffen sind — Grundlage der Auswirkungsanalyse.','Die Links verhindern eine Änderung an REQ-047, solange das Change Control Board nicht zugestimmt hat.','Die Links stellen sicher, dass REQ-047 die ursprünglichen Stakeholder-Bedürfnisse korrekt widerspiegelt.'],
   answer:1,explanation:'Traceability-Links ermöglichen Auswirkungsanalysen (Impact Analysis): Welche Testfälle, Design-Elemente und anderen Anforderungen sind von der Änderung betroffen? Das ist ihr Kernnutzen bei Änderungen. Automatische Aktualisierung (A) und Genehmigungssperrung (C) sind separate Prozesse; Stakeholder-Validierung (D) ist eine andere RE-Aktivität.',lz:'LZ 8-3',k:'K1'},

  {type:'single',chapter:'Kap. 4 · Anforderungserhebung',errorType:'terminology',
   text:'Welche Erhebungstechnik ist am besten geeignet, um IMPLIZITES Wissen (tacit knowledge) zu externalisieren, das Stakeholder nicht direkt verbalisieren können?',
   options:['Strukturiertes Interview mit Fragebogen','Dokumentenanalyse vorhandener Prozesshandbücher','Feldbeobachtung oder Prototyping','Fragebogenerhebung per E-Mail'],
   answer:2,explanation:'Feldbeobachtung und Prototyping externalisieren tacit knowledge: Beim Beobachten zeigen Stakeholder unbewusst Abläufe, die sie nicht artikulieren können. Beim Prototyping reagieren sie auf ein Modell und erkennen, was fehlt oder falsch ist. Interviews und Fragebögen scheitern an der Verbalisierungsbarriere.',lz:'LZ 4-2',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Welche Notation eignet sich zur Modellierung von ZUSTÄNDEN eines Objekts und den Ereignissen, die Zustandsübergänge auslösen?',
   options:['Use-Case-Diagramm','Aktivitätsdiagramm','Zustandsautomat (State Machine Diagram)','Sequenzdiagramm'],
   answer:2,explanation:'Der Zustandsautomat modelliert Zustände eines Objekts und die Ereignisse, die Übergänge auslösen. Use-Case-Diagramme: Funktionsüberblick. Aktivitätsdiagramme: Prozessabläufe. Sequenzdiagramme: Interaktionsfolgen zwischen Komponenten.',lz:'LZ 5-3',k:'K1'},

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'trap',
   text:'Eine Anforderung lautet: \'Das System soll schnell, sicher und benutzerfreundlich sein.\' Welches Qualitätsmerkmal wird am SCHWERWIEGENDSTEN verletzt?',
   options:['Konsistenz — \'schnell\' und \'sicher\' stehen häufig im Widerspruch zueinander','Prüfbarkeit — keines der drei Adjektive enthält einen messbaren Schwellenwert','Atomarität — drei verschiedene Qualitätseigenschaften werden in einer einzigen Anforderung gebündelt','Vollständigkeit — die Anforderung enthält keine technischen Implementierungsdetails'],
   answer:2,explanation:'Obwohl auch Prüfbarkeit verletzt ist (keine messbaren Werte), ist das gravierendste Problem die Verletzung der Atomarität: Performance, Sicherheit und Usability sind drei unterschiedliche Qualitätsaspekte, die separat priorisiert, getestet und verwaltet werden müssen. Atomizität ist die strukturelle Voraussetzung für alle anderen Qualitätskriterien.',lz:'LZ 6-1',k:'K1'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'terminology',
   text:'Welche Review-Technik ist durch AUTORPRÄSENTATION und spontanes Gutachter-Feedback ohne strukturierte Vorbereitung gekennzeichnet?',
   options:['Formale Inspektion (Fagan)','Walkthrough','Technisches Review','Informelles Peer Review per E-Mail'],
   answer:1,explanation:'Der Walkthrough: Autor präsentiert das Dokument, Gutachter geben spontanes Feedback — keine vorbereiteten Checklisten, keine Fehlermetriken. Die formale Inspektion erfordert obligatorische individuelle Vorbereitung. Das technische Review liegt zwischen beiden.',lz:'LZ 7-2',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'trap',
   text:'Ein Prüfer bemängelt: \'Der interne Buchhalter darf nicht als Akteur eingetragen werden, da er Mitarbeiter des Unternehmens ist — Akteure müssen extern sein.\' Welche Aussage ist korrekt?',
   options:['Der Prüfer hat recht — nur Personen außerhalb des Unternehmens können Akteure sein.','Der Prüfer irrt: Maßgeblich ist die SYSTEMGRENZE, nicht die Unternehmensgrenze. Ein interner Mitarbeiter, der das System von außen nutzt, ist ein gültiger Akteur.','Der Prüfer hat recht, aber nur wenn der Buchhalter keinen Admin-Zugang hat.','Der Prüfer irrt teilweise: Interne Mitarbeiter sind Akteure, aber müssen als \'interne Akteure\' markiert werden, um sie von externen zu unterscheiden.'],
   answer:1,explanation:'Die Akteur-Definition basiert auf der Systemgrenze, nicht auf der Unternehmensgrenze. Ein Mitarbeiter, der das System verwendet, agiert aus Systemsicht \'außerhalb\' — er ist ein vollwertiger Akteur. Optionen C und D enthalten plausibel klingende, aber im IREB-Standard nicht vorgesehene Unterscheidungen.',lz:'LZ 5-2',k:'K1'},

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'trap',
   text:'Eine Spezifikation enthält 200 nummerierte Anforderungen, aber REQ-015 fehlt ohne Erklärung. Welches Qualitätsmerkmal der SPEZIFIKATION (nicht einer einzelnen Anforderung) ist verletzt?',
   options:['Konsistenz der Spezifikation — die Lücke impliziert möglicherweise verborgene Widersprüche','Vollständigkeit der Spezifikation — alle notwendigen Anforderungen müssen dokumentiert sein','Eindeutigkeit — REQ-015 könnte unterschiedlich interpretiert werden','Prüfbarkeit — bestimmte Testfälle können ohne REQ-015 nicht erstellt werden'],
   answer:1,explanation:'Eine fehlende Anforderung verletzt die Vollständigkeit der Spezifikation (Dokumentenebene). Vollständigkeit bedeutet: alle notwendigen Anforderungen sind enthalten. Konsistenz und Eindeutigkeit betreffen den Inhalt vorhandener Anforderungen, nicht Lücken. Prüfbarkeit ist ein Merkmal einzelner Anforderungen.',lz:'LZ 6-1',k:'K1'},

  {type:'single',chapter:'Kap. 4 · Anforderungserhebung',errorType:'trap',
   text:'Ein Requirements Engineer bemerkt, dass Stakeholder-Antworten stark von der Frageformulierung abhängen. In welchem Interview-Format kann dieser Bias am stärksten systematisch auftreten?',
   options:['Unstrukturiertes Interview — offene Fragen laden zu freien Erzählungen ein','Strukturiertes Interview mit festen Suggestivfragen — ein fehlerhafter Fragebogen erzeugt bei allen Befragten dieselbe Verzerrung','Halb-strukturiertes Interview — flexibler Leitfaden erlaubt Nachfragen','Der Bias ist unabhängig vom Format und entsteht ausschließlich durch den Interviewer'],
   answer:1,explanation:'Im strukturierten Interview wird derselbe Fragebogen bei allen Stakeholdern eingesetzt. Enthält er Suggestivfragen, pflanzt er bei jedem Befragten dieselbe Verzerrung ein — systematischer Bias in großem Maßstab. Im unstrukturierten Interview variieren die Fragen; im halb-strukturierten gibt es Spielraum für Korrekturen.',lz:'LZ 4-2',k:'K1'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'method',
   text:'Ein Projektleiter trägt eine Funktionserweiterung direkt in die Spezifikation ein — ohne Genehmigungsprozess. Welcher Verstoß gegen das Änderungsmanagement ist am schwerwiegendsten?',
   options:['Der Stakeholder hätte den Wunsch schriftlich einreichen müssen, bevor er mündlich kommuniziert wird.','Die Änderung wurde ohne Auswirkungsanalyse und formale Genehmigung durch eine legitimierte Instanz in die Baseline aufgenommen.','Das Entwicklungsteam hätte zuerst die technische Machbarkeit prüfen müssen.','Die Erweiterung hätte zuerst mit allen Stakeholdern abgestimmt werden müssen.'],
   answer:1,explanation:'Änderungsmanagement erfordert: (1) dokumentierte Einreichung, (2) Auswirkungsanalyse (Scope, Kosten, Qualität, Termine), (3) Entscheidung durch eine legitimierte Instanz (z. B. Change Control Board), (4) Umsetzung mit Aktualisierung aller betroffenen Artefakte. Das direkte Eintragen überspringt alle drei ersten Schritte und destabilisiert die vereinbarte Baseline.',lz:'LZ 8-4',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Eine englischsprachige Anforderung lautet: \'The system should encrypt all passwords at rest.\' Was ist die korrekte Interpretation dieser Verbwahl?',
   options:['\'Should\' kennzeichnet eine verbindliche Pflichtanforderung — sie muss implementiert werden.','\'Should\' bedeutet empfohlen, aber nicht verpflichtend; für eine obligatorische Anforderung müsste \'shall\' verwendet werden.','\'Should\' und \'shall\' sind in modernen Spezifikationen austauschbar, da beide Dringlichkeit ausdrücken.','\'Should\' ist stärker als \'shall\', weil es eine ethische Verpflichtung ausdrückt.'],
   answer:1,explanation:'Gemäß ISO/IEC/IEEE 29148 und RFC 2119: \'shall\' = obligatorisch, \'should\' = empfohlen (nicht zwingend), \'may\' = optional. Passwort-Verschlüsselung im Ruhezustand ist eine kritische Sicherheitsanforderung — \'should\' lässt rechtlich und technisch Spielraum offen, der in der Praxis problematisch sein kann.',lz:'LZ 5-1',k:'K1'},

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'trap',
   text:'Ein Scrum-Team behauptet: \'In unserem agilen Projekt erübrigt sich strukturiertes Requirements Engineering — wir klären alles direkt im Sprint Planning mit dem Product Owner.\' Was ist die treffendste Einschätzung?',
   options:['Die Aussage ist korrekt — Scrum-Zeremonien ersetzen alle IREB-RE-Aktivitäten vollständig.','Die Aussage ist für kleine Teams richtig, bei mehr als 10 Personen aber nicht skalierbar.','Die Aussage ist unvollständig — RE-Aktivitäten finden in Scrum statt, aber verteilt: Erhebung im Refinement, Validierung im Sprint Review, Verwaltung im Backlog.','Die Aussage ist falsch: Scrum-Projekte müssen vor dem ersten Sprint eine vollständige Anforderungsspezifikation erstellen.'],
   answer:2,explanation:'RE ist nicht abwesend in agilen Projekten — es ist angepasst: Erhebung im Backlog Refinement, Dokumentation als User Stories mit Akzeptanzkriterien, Validierung in Sprint Reviews und Retrospektiven, Verwaltung durch den priorisierten Product Backlog. IREB betont: RE-Aktivitäten existieren unabhängig vom Vorgehensmodell.',lz:'LZ 3-2',k:'K2'},

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'terminology',
   text:'Welche Elemente gehören zum SYSTEMKONTEXT nach IREB?',
   options:['Nur Personen, die das System direkt nutzen (direkte Endnutzer).',
            'Alle Elemente außerhalb der Systemgrenze, die das System beeinflussen oder von ihm beeinflusst werden.',
            'Alle internen Subsysteme und Datenbankkomponenten des Systems.',
            'Nur externe Stakeholder, die an RE-Workshops teilnehmen.'],
   answer:1,explanation:'Systemkontext = alle relevanten Elemente AUSSERHALB der Systemgrenze: externe Systeme, Stakeholder, Regularien, physische Umgebung. Ob beteiligt am Projekt oder nicht ist irrelevant — entscheidend ist die wechselseitige Beeinflussung.',lz:'LZ 2-2',k:'K1'},

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'scenario',
   text:'Eine Spezifikation enthält: REQ-12 \'Alle Kundendaten werden 10 Jahre archiviert\' (Compliance-Anforderung) und REQ-47 \'Alle Kundendaten werden nach 2 Jahren gemäß DSGVO gelöscht.\' Wie sollte ein Requirements Engineer vorgehen?',
   options:['REQ-47 als die neuere Anforderung automatisch bevorzugen und REQ-12 aus der Spezifikation entfernen.','Den Widerspruch dokumentieren, als offenen Konflikt markieren und zur Auflösung an die zuständigen Stakeholder eskalieren.','Beide Anforderungen in der Spezifikation belassen und dem Entwicklungsteam überlassen, eine technische Lösung zu finden.','Die Anforderung mit der höheren Priorität automatisch bevorzugen.'],
   answer:1,explanation:'Anforderungskonflikte sind nicht vom RE unilateral aufzulösen, da die Entscheidung Domänenwissen und Legitimation erfordert (hier: Compliance- vs. Datenschutz-Fachleute). Widersprüche müssen dokumentiert und eskaliert werden. Option C ist ein typischer, aber gefährlicher Ausweg, der die Entscheidungsverantwortung unzulässig ans Entwicklungsteam übergibt.',lz:'LZ 6-3',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'method',
   text:'Ein RE-Team soll die Systemgrenzen und externen Datenaustauschpartner für ein Vertriebssystem visualisieren. Was zeigt ein KONTEXTDIAGRAMM (DFD Level 0)?',
   options:['Die interne Datenbankstruktur mit allen Entitäten und Fremdschlüsselbeziehungen','Das System als einzelnen Prozess, alle externen Entitäten und die Datenflüsse über die Systemgrenze','Alle internen Teilprozesse und Datenspeicher innerhalb des Systems','Die zeitliche Abfolge von Transaktionen zwischen zwei Systemen über einen Kommunikationskanal'],
   answer:1,explanation:'Ein DFD Level-0 (Kontextdiagramm) zeigt: (1) das System als Black-Box-Prozess, (2) alle externen Entitäten und (3) alle Datenflüsse über die Systemgrenze. Interne Details, Datenbankstrukturen und Prozessabfolgen sind nicht Teil des Kontextdiagramms — diese erscheinen erst in verfeinerten DFD-Ebenen.',lz:'LZ 5-3',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'method',
   text:'Ein Use Case \'Rechnung erstellen\' hat eine <<include>>-Beziehung zu \'Kundendaten verifizieren\'. Was bedeutet dies für die Ausführung?',
   options:['\'Kundendaten verifizieren\' wird nur ausgeführt, wenn während \'Rechnung erstellen\' ein Fehler auftritt.','\'Kundendaten verifizieren\' wird obligatorisch und vollständig jedes Mal ausgeführt, wenn \'Rechnung erstellen\' aufgerufen wird.','\'Kundendaten verifizieren\' ist optional und wird nur auf ausdrückliche Anforderung des Nutzers eingebunden.','Beide Use Cases teilen einen Akteur und können je nach Nutzerrolle unabhängig voneinander ausgelöst werden.'],
   answer:1,explanation:'<<include>> modelliert eine obligatorische Abhängigkeit: Der Basis-Use-Case kann ohne den eingebundenen Use Case sein Ziel nicht erreichen und schließt ihn deshalb immer ein. Bei konditionaler Ausführung (nur bei bestimmten Bedingungen) wäre <<extend>> korrekt. Option A beschreibt <<extend>> mit Fehlerbedingung.',lz:'LZ 5-2',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'method',
   text:'In welchem Fall ist eine <<extend>>-Beziehung in einem Use-Case-Diagramm die KORREKTE Wahl?',
   options:['Wenn Use Case A immer vollständig in Use Case B eingebettet werden muss, damit B sein Ziel erreicht','Wenn Use Case A den Basis-Use-Case B unter bestimmten Bedingungen optional um zusätzliche Schritte ergänzt','Wenn Use Case A und B denselben Primärakteur teilen','Wenn Use Case A in einer neueren Systemversion Use Case B inhaltlich ersetzt'],
   answer:1,explanation:'<<extend>> modelliert optionale Erweiterungen unter definierten Bedingungen (Extension Points): z. B. erweitert \'Ratenzahlung anbieten\' den Basis-UC \'Zahlung durchführen\' nur, wenn der Betrag eine Schwelle überschreitet. <<include>> hingegen ist obligatorisch. Gemeinsame Akteure und inhaltlicher Ersatz sind keine Kriterien für <<extend>>.',lz:'LZ 5-2',k:'K1'},

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'scenario',
   text:'Ein RE erstellt eine Stakeholder-Karte für ein Logistiksystem und identifiziert Endnutzer und Auftraggeber. Welche kritische Stakeholder-Gruppe wird typischerweise übersehen?',
   options:['Externe Berater, die das Projekt begleiten — sie beeinflussen Requirements Engineering direkt','Regulierungsbehörden, IT-Betrieb, Datenschutzbeauftragte und Lieferanten-Systeme — indirekte Stakeholder mit legitimen Anforderungen','Das Entwicklungsteam — sie müssen die Anforderungen implementieren','Das Testteam — sie validieren die Implementierung und haben spezifische Anforderungen'],
   answer:1,explanation:'Indirekte Stakeholder werden häufig übersehen: Zollbehörden (Compliance-Anforderungen), IT-Betrieb (Wartbarkeit, Betriebsanforderungen), Datenschutzbeauftragte (DSGVO), Schnittstellenpartner (technische Anforderungen). Eine Stakeholder-Karte muss über direkte Nutzer hinausgehen. Berater, Entwicklungs- und Testteams werden in der Regel korrekt erfasst.',lz:'LZ 2-5',k:'K1'},

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'terminology',
   text:'Ein RM-Tool bietet: Versionierung, Traceability-Links, automatische Code-Generierung, Status-Tracking. Welche Funktion ist ATYPISCH für ein RM-Tool?',
   options:['Versionierung von Anforderungen','Traceability-Links zu Testfällen','Automatische Code-Generierung aus Anforderungstexten','Status-Tracking für Anforderungen'],
   answer:2,explanation:'RM-Tools (DOORS, Polarion, Jira, Azure DevOps) spezialisieren sich auf Verwaltung, Versionierung, Traceability und Statusverfolgung. Automatische Code-Generierung ist Domäne von Model-Driven Engineering (MDE)-Werkzeugen wie Rational Rhapsody oder Eclipse OCL. Wer diese Funktion in einem RM-Tool vermutet, verwechselt zwei verschiedene Werkzeugkategorien.',lz:'LZ 9-2',k:'K1'},

  {type:'single',chapter:'Kap. 1 · Was ist eine Anforderung?',errorType:'terminology',
   text:'"Das System muss intuitiv bedienbar sein." — Warum ist dies KEINE fertige Systemanforderung?',
   options:['"Intuitiv" ist eine vollständige und prüfbare Systemeigenschaft.',
            '"Intuitiv" ist eine Stakeholder-Anforderung auf Bedürfnisebene — sie muss in messbare Systemanforderungen übersetzt werden (z. B. "80 % der Erstnutzer lösen Aufgabe X beim ersten Versuch").',
            'Stakeholder- und Systemanforderungen beschreiben dieselbe Ebene.',
            '"Intuitiv" ist bereits so präzise wie möglich, da Usability nicht quantifizierbar ist.'],
   answer:1,explanation:'"Intuitiv" ist nicht prüfbar — es fehlt ein messbarer Schwellenwert. Systemanforderungen müssen konkret und prüfbar sein: messbare Usability-Metriken (Erfolgsrate, Fehlerrate, Erlernbarkeit). Stakeholder-Anforderungen drücken Ziele aus; RE übersetzt sie in prüfbare Systemanforderungen.',lz:'LZ 1-4',k:'K1'},

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'trap',
   text:'Welche der folgenden Aussagen beschreibt KONSISTENZ einer Anforderungsspezifikation am präzisesten?',
   options:['Alle Anforderungen verwenden einheitliche Formulierungsvorlagen und denselben Dokumentenstil.','Keine Anforderung in der Spezifikation widerspricht einer anderen Anforderung derselben Spezifikation.','Alle Anforderungen haben denselben Detaillierungsgrad und Abstraktionslevel.','Alle Anforderungen wurden von denselben Stakeholdern geprüft und genehmigt.'],
   answer:1,explanation:'Konsistenz ist ein inhaltliches Kriterium: Widerspruchsfreiheit zwischen Anforderungen. Einheitliche Templates (A) betreffen Lesbarkeit und Formkonformität. Gleicher Detaillierungsgrad (C) ist ein Strukturmerkmal. Gemeinsame Genehmigung (D) ist ein Prozessmerkmal. Keines davon ist per Definition Konsistenz.',lz:'LZ 6-1',k:'K1'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'method',
   text:'In einer Fagan-Inspektion — welche Phase findet unmittelbar VOR der Inspektionsbesprechung statt?',
   options:['Überarbeitung (Rework) — Fehler aus dem letzten Zyklus werden behoben','Follow-up — die Korrektheit der Korrekturen wird geprüft','Individuelle Vorbereitung (Preparation) — jeder Gutachter prüft das Dokument vorab allein','Planung (Planning) — Inspektionsziele und Gutachter werden festgelegt'],
   answer:2,explanation:'Fagan-Phasen: 1. Planung, 2. Überblick (Overview), 3. Individuelle Vorbereitung (Preparation), 4. Inspektionsbesprechung (Meeting), 5. Überarbeitung (Rework), 6. Follow-up. Die individuelle Vorbereitung unmittelbar vor der Besprechung ist das Qualitätsmerkmal der formalen Inspektion — Gutachter kommen vorbereitet.',lz:'LZ 7-3',k:'K1'},

  {type:'single',chapter:'Kap. 4 · Anforderungserhebung',errorType:'terminology',
   text:'Was ist eine typische EINSCHRÄNKUNG der Feldbeobachtung als Erhebungstechnik?',
   options:['Sie kann keine explizit dokumentierten Anforderungen erfassen.',
            'Sie liefert nur quantitative Daten über Systemnutzung.',
            'Sie erfordert physische Präsenz vor Ort und ist bei global verteilten Stakeholdern ohne Reisebudget schwer realisierbar.',
            'Sie ist ausschließlich für agile Projekte geeignet.'],
   answer:2,explanation:'Feldbeobachtung erfordert physische Präsenz. Bei global verteilten Teams ohne Reisebudget ist dies logistisch kaum realisierbar. In solchen Fällen sind Remote-Interviews, Video-Shadowing oder Fragebögen besser geeignet. Der Hauptvorteil der Feldbeobachtung — tacit knowledge erfassen — bleibt dabei aber eingeschränkt.',lz:'LZ 4-3',k:'K1'},

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'method',
   text:'Was ist das WESENTLICHE Ergebnis einer erfolgreichen ANFORDERUNGSVERHANDLUNG?',
   options:['Alle Anforderungen des einflussreichsten Stakeholders werden vollständig akzeptiert','Das Entwicklungsteam überzeugt das Business, alle optionalen Anforderungen zu streichen','Ein für alle Beteiligten akzeptierter Kompromiss oder priorisierter Konsens, der im gegebenen Rahmen realisierbar ist','Ein vollständiges, unterschriebenes Pflichtenheft mit allen diskutierten Anforderungen'],
   answer:2,explanation:'Anforderungsverhandlung zielt auf einen akzeptierten Konsens — keine Partei setzt sich vollständig durch. Der RE als Moderator hilft, Prioritäten zu klären und Kompromisse zu strukturieren. Ein \'vollständiges Pflichtenheft\' ist ein mögliches Ergebnis späterer Dokumentation, nicht das Verhandlungsergebnis selbst.',lz:'LZ 3-4',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'method',
   text:'Welches UML-Diagramm zeigt AUSSCHLIESSLICH die statische Struktur eines Systems — Klassen, Attribute, Beziehungen — ohne zeitliche oder verhaltensorientierte Dimension?',
   options:['Zustandsautomat (State Machine Diagram)','Sequenzdiagramm','Klassendiagramm (Class Diagram)','Aktivitätsdiagramm'],
   answer:2,explanation:'Das Klassendiagramm modelliert die statische Struktur: Klassen (oder Entitäten), ihre Attribute und die Beziehungen (Assoziation, Aggregation, Komposition, Generalisierung). Es hat keine zeitliche Dimension. Zustandsautomaten, Sequenz- und Aktivitätsdiagramme sind dynamische Notationen.',lz:'LZ 5-3',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'method',
   text:'Ein agiles Team fragt: \'Brauchen wir eine formale Anforderungsspezifikation oder reichen User Stories?\' Welche Antwort ist am treffendsten?',
   options:['User Stories ersetzen formale Spezifikationen vollständig — agile Teams benötigen keine RE-Dokumente.','Formale Spezifikationen sind immer notwendig — auch in agilen Projekten muss ein Pflichtenheft erstellt werden.','Die Wahl hängt vom Kontext ab: In regulierten Domänen oder bei Festpreisverträgen kann formale Dokumentation rechtlich erforderlich sein; agile Stories sind in vielen Kontexten ausreichend.','User Stories sind nur für die Entwicklungsphase geeignet; formale Spezifikationen nur für die Analysephase.'],
   answer:2,explanation:'Es gibt keine universelle Antwort. In Medizintechnik, Luftfahrt oder bei regulierten Domänen (CE-Kennzeichnung, FDA) kann formale Dokumentation gesetzlich vorgeschrieben sein. In agilen Startups ohne regulatorische Anforderungen reichen Stories oft aus. IREB-Kompetenz beinhaltet das kontextabhängige Urteilsvermögen.',lz:'LZ 5-1',k:'K2'},

  {type:'single',chapter:'Kap. 4 · Anforderungserhebung',errorType:'terminology',
   text:'Was beschreibt PERSPEKTIVENBASIERTES LESEN (Perspective-Based Reading) als Review-Technik am genauesten?',
   options:['Jeder Gutachter liest dasselbe Dokument dreimal aus seiner eigenen, subjektiven Perspektive.','Gutachter lesen ein Dokument gezielt aus einer definierten Rolle (z. B. Tester, Designer, Betreiber), um rollenspezifische Fehler und Lücken zu finden.','Nur Stakeholder einer bestimmten Abteilung dürfen an einem Review teilnehmen.','Eine Technik, bei der dasselbe Dokument in verschiedenen Sprachen auf Konsistenz geprüft wird.'],
   answer:1,explanation:'Perspektivenbasiertes Lesen weist jedem Gutachter eine klar definierte Rolle zu: Ein Tester sucht nicht prüfbare Anforderungen; ein Designer sucht Architekturkonflikte; ein Betreiber sucht fehlende Wartungsanforderungen. Diese fokussierten Perspektiven decken rollenspezifische Fehlertypen effizienter auf als unkritisches, allgemeines Lesen.',lz:'LZ 4-4',k:'K1'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'method',
   text:'Was unterscheidet eine formale INSPEKTION von einem TECHNISCHEN REVIEW am stärksten?',
   options:['Inspektionen haben immer mehr Teilnehmer als technische Reviews.','Eine formale Inspektion hat strikte Phasen, definierte Rollen (Moderator ≠ Autor), strukturierte Vorbereitung und Fehlermetriken; ein technisches Review ist weniger formell.','Technische Reviews prüfen ausschließlich Quellcode, Inspektionen nur Anforderungsdokumente.','Formale Inspektionen erfordern externe Gutachter; technische Reviews nutzen ausschließlich interne Experten.'],
   answer:1,explanation:'Das Hauptunterscheidungsmerkmal ist der Formalisierungsgrad: Fagan-Inspektionen haben obligatorische Phasen, Rollentrennung (Moderator ≠ Autor ist entscheidend), Checklisten und Metriken. Technische Reviews sind flexibler und fokussieren auf fachliche Korrektheit ohne den vollständigen formalen Apparat. Teilnehmerzahl und Prüfgegenstand sind keine definierenden Unterschiede.',lz:'LZ 7-2',k:'K1'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'method',
   text:'Ein Team diskutiert: numerische IDs (REQ-001) versus sprechende IDs (REQ-LOGIN-001). Was ist der primäre Trade-off?',
   options:['Numerische IDs sind bei Restrukturierungen stabiler; sprechende IDs verbessern die Orientierung ohne Nachschlagen — beide Ansätze sind kontextabhängig legitim.','Sprechende IDs sind grundsätzlich besser, da sie ohne Glossar verständlich sind.','Numerische IDs sind nach ISO-Norm vorgeschrieben; sprechende IDs sind in regulierten Projekten unzulässig.','Sprechende IDs machen Traceability-Links überflüssig, da der Kontext bereits im Namen steckt.'],
   answer:0,explanation:'Numerische IDs sind stabil: REQ-001 bleibt REQ-001, auch wenn die Anforderung verschoben wird. Sprechende IDs (REQ-LOGIN-001) verlieren Bedeutung, wenn die Anforderung in eine andere Kategorie wechselt. Sprechende IDs erleichtern die Navigation in großen Spezifikationen. Weder ist ISO-vorgeschrieben noch ersetzen Namen Traceability-Links.',lz:'LZ 8-1',k:'K1'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'trap',
   text:'Ein Stakeholder fragt: \'Anforderungen der Kategorie Won\'t have — werden die dauerhaft aus dem Projekt gestrichen?\' Was ist die korrekte Antwort?',
   options:['\'Won\'t have\' bedeutet dauerhafter Ausschluss — diese Anforderungen kommen in keinem künftigen Release vor.','\'Won\'t have (this time)\' bedeutet: bewusst für diesen Release ausgeschlossen; sie können in künftigen Releases wieder aufgegriffen werden.','\'Won\'t have\' ist identisch mit \'niedrige Priorität\' und wird als letztes im Projekt umgesetzt.','\'Won\'t have\' wird immer einseitig vom Entwicklungsteam entschieden, ohne Stakeholder zu informieren.'],
   answer:1,explanation:'Der vollständige MoSCoW-Begriff lautet \'Won\'t have THIS TIME\' — der Zusatz \'this time\' ist entscheidend. Es ist ein explizites Scope-Management-Werkzeug: Anforderungen werden bewusst zurückgestellt, nicht verworfen. Dies ermöglicht transparente Erwartungssteuerung und fokussiert Ressourcen ohne falschen Ausschluss.',lz:'LZ 8-6',k:'K1'},

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'scenario',
   text:'Ein Scrum-Team hat alle Sprint-Stories abgearbeitet, aber der Product Owner ist mit dem Ergebnis unzufrieden — die Features entsprechen nicht seinen Erwartungen. Welche RE-Aktivität war unzureichend?',
   options:['Backlog-Priorisierung — die falschen Stories wurden zuerst umgesetzt','Schätzung — die Story Points waren zu optimistisch angesetzt','Validierung — Akzeptanzkriterien wurden nicht ausreichend definiert oder im Sprint Review überprüft','Dokumentation — die Stories waren zu knapp formuliert'],
   answer:2,explanation:'Der Product Owner ist unzufrieden trotz vollständig abgearbeiteter Stories — das klassische Zeichen fehlender Validierung. Unzureichende Akzeptanzkriterien (Acceptance Criteria) lassen Interpretationsspielräume offen. Das Sprint Review ist der Validierungsmoment: entspricht das Ergebnis den Erwartungen? Priorisierung, Schätzung und Dokumentation sind hier Ablenkungsoptionen.',lz:'LZ 9-3',k:'K2'},

  {type:'single',chapter:'Kap. 4 · Anforderungserhebung',errorType:'terminology',
   text:'Was ist der Hauptunterschied zwischen EXPLIZITEM und IMPLIZITEM WISSEN (tacit knowledge) im RE-Kontext?',
   options:['Explizites Wissen ist immer wichtiger als implizites Wissen für die Anforderungserhebung.','Explizites Wissen ist dokumentiert und direkt zugänglich; tacit knowledge ist in Erfahrungen und Gewohnheiten verankert und kann von Stakeholdern oft nicht bewusst artikuliert werden.','Implizites Wissen findet sich ausschließlich bei technischen Experten; explizites Wissen nur bei Managern.','Explizites Wissen liegt nur in schriftlichen Quellen vor; implizites Wissen nur in mündlichen Überlieferungen.'],
   answer:1,explanation:'Explizites Wissen ist kodifiziert (Handbücher, Verträge, Regelwerke) und durch Dokumentenanalyse oder direkte Befragung zugänglich. Tacit knowledge ist in Praxis, Erfahrung und Intuition eingebettet — Stakeholder \'wissen es\', können es aber nicht artikulieren (\'so machen wir das immer\'). Das ist das zentrale Problem, das Feldbeobachtung und Prototyping lösen sollen.',lz:'LZ 4-1',k:'K1'},

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'trap',
   text:'"Als registrierter Nutzer möchte ich mein Passwort zurücksetzen, damit ich wieder Zugang erhalte." Kollege: "Keine echte User Story — enthält technische Details." Stimmt das?',
   options:['Der Kollege hat recht — User Stories dürfen keinerlei systemspezifische Begriffe enthalten.','Der Kollege irrt: Die Story folgt dem Standardformat (Rolle/Ziel/Nutzen), enthält keine Implementierungsdetails und ist eine valide User Story.','Der Kollege hat recht, da User Stories nur für neue Funktionen gelten, nicht für Sicherheitsmechanismen.','Der Kollege irrt teilweise: Die Story ist valide, aber der Nutzen-Teil (\'damit\') ist unnötig und sollte weggelassen werden.'],
   answer:1,explanation:'\'Passwort zurücksetzen\' ist die Funktionsbeschreibung aus Nutzersicht — keine Implementierungsdetails (kein \'via SMTP\', kein \'AES-256\'). Die Story folgt exakt dem Format. Der Kollege verwechselt fachliche Beschreibung mit technischer Spezifikation. Option D widerspricht dem User-Story-Konzept: Der Nutzen-Teil (\'damit\') ist der wertvollste Teil der Story.',lz:'LZ 9-1',k:'K1'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'terminology',
   text:'Wozu wird eine ANFORDERUNGS-ID (z. B. REQ-042) PRIMÄR benötigt?',
   options:['Um die Wichtigkeit einer Anforderung zu signalisieren — niedrige IDs haben höhere Priorität.','Um jede Anforderung eindeutig referenzierbar zu machen, damit Traceability-Links, Änderungsanträge und Testfälle präzise auf sie verweisen können.','Um sicherzustellen, dass Anforderungen in der Reihenfolge ihrer ID implementiert werden.','Um automatisch die Priorität nach MoSCoW-Kriterien zu codieren.'],
   answer:1,explanation:'Anforderungs-IDs dienen der eindeutigen Referenzierung: REQ-042 → TC-017 (Testfall-Link), REQ-042 in Änderungsantrag CR-005, REQ-042 im Inspektionsprotokoll. IDs implizieren keine Priorität oder Implementierungsreihenfolge — das sind separate Attribute. IDs sind das Rückgrat der Traceability.',lz:'LZ 8-1',k:'K1'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'trap',
   text:'Was ist der WESENTLICHE Unterschied zwischen dem KANO-MODELL und der MOSCOW-METHODE zur Anforderungspriorisierung?',
   options:['Das Kano-Modell eignet sich nur für agile Projekte; MoSCoW nur für klassische Projekte.','MoSCoW priorisiert nach Release-Notwendigkeit; Kano klassifiziert nach Kundenzufriedenheitseinfluss (Basis-, Leistungs-, Begeisterungsmerkmal).','MoSCoW wird nur für funktionale Anforderungen verwendet; das Kano-Modell nur für Qualitätsanforderungen.','Das Kano-Modell ist quantitativ; MoSCoW ist qualitativ und damit weniger präzise.'],
   answer:1,explanation:'MoSCoW klassifiziert nach Release-Dringlichkeit (Must/Should/Could/Won\'t). Das Kano-Modell bewertet den psychologischen Einfluss auf Kundenzufriedenheit: Basisanforderungen (Hygienefaktoren — Unzufriedenheit bei Fehlen), Leistungsanforderungen (lineare Zufriedenheit) und Begeisterungsmerkmale (Delight — Überraschungseffekt). Beide Methoden sind komplementär.',lz:'LZ 8-6',k:'K2'},

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'terminology',
   text:'Welches der folgenden Elemente ist ein ANFORDERUNGSARTEFAKT (RE-Artefakt)?',
   options:['Ein Sprint-Burndown-Chart des Entwicklungsteams','Ein JUnit-Testergebnis nach dem letzten Sprint','Eine System Requirements Specification (SRS) mit allen dokumentierten Anforderungen','Ein CI/CD-Deployment-Pipeline-Skript'],
   answer:2,explanation:'Ein RE-Artefakt ist jedes im Rahmen des Requirements Engineering erstellte Arbeitsergebnis: Anforderungsspezifikationen, Use-Case-Beschreibungen, Glossare, Traceability-Matrizen, Kontextdiagramme, Stakeholder-Karten. Burndown-Charts gehören zum Projektmanagement; Testergebnisse zum Test; Pipeline-Skripte zur Entwicklung/DevOps.',lz:'LZ 3-5',k:'K1'},


  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'scenario',
   text:'Ein Audit ergibt: 12 von 47 Anforderungen können keiner Stakeholder-Quelle, Regulierung oder Geschäftsanforderung zugeordnet werden. Welches Traceability-Problem liegt vor?',
   options:['Fehlende Vorwärts-Traceability — Anforderungen können nicht zu Testfällen verfolgt werden','Fehlende Rückwärts-Traceability — Anforderungen können nicht zu ihrer Ursprungsquelle zurückverfolgt werden','Inkonsistente Traceability — Anforderungen widersprechen ihren Quellen','Fehlende horizontale Traceability — Anforderungen wurden nicht mit anderen Anforderungen verknüpft'],
   answer:1,explanation:'Rückwärts-Traceability (Backward Traceability) verbindet jede Anforderung mit ihrer Quelle (Stakeholder-Bedürfnis, regulatorische Vorgabe, Geschäftsziel). Anforderungen ohne Quelle sind \'verwaist\' — sie sind nicht begründbar, kaum zu priorisieren und bei Audits problematisch. Vorwärts-Traceability verbindet zu Implementierung und Test.',lz:'LZ 8-3',k:'K2'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'method',
   text:'Was ist der ERSTE SCHRITT im formalen Änderungsmanagement nach Eingang eines Änderungsantrags?',
   options:['Sofortige Umsetzung, falls die Änderung technisch trivial erscheint','Dokumentation des Änderungsantrags und Durchführung einer Auswirkungsanalyse','Ablehnung, da Anforderungen nach Baseline-Vereinbarung nicht mehr geändert werden dürfen','Direkte Information der Stakeholder über die geplante Änderung'],
   answer:1,explanation:'Formaler Änderungsprozess: (1) Dokumentation und Auswirkungsanalyse (welche Artefakte, Kosten, Termine sind betroffen?), (2) Bewertung und Entscheidung durch legitimierte Instanz (Change Control Board), (3) Umsetzung mit Aktualisierung aller betroffenen Artefakte. Sofortige Umsetzung oder Ablehnung ohne Analyse sind Prozessverstöße.',lz:'LZ 8-4',k:'K1'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'terminology',
   text:'Die Projektleiterin erklärt den aktuellen Anforderungsstand zur BASISLINIE (Baseline). Was gilt für spätere Änderungen?',
   options:['Keine weiteren Änderungen sind nach der Basislinie zulässig — die Spezifikation ist eingefroren.','Alle künftigen Änderungen müssen durch den formalen Änderungsprozess gehen und werden gegen die Basislinie dokumentiert.','Die Basislinie ist informell und hindert das Team nicht daran, Anforderungen direkt zu ändern.','Die Basislinie bedeutet, dass Anforderungen nun in Sprints eingeteilt und umgesetzt werden.'],
   answer:1,explanation:'Eine Basislinie (Baseline) ist ein vereinbarter, freigegebener Stand — kein Einfrieren. Änderungen sind weiterhin möglich, aber über einen kontrollierten Prozess (Einreichung → Analyse → Genehmigung → Dokumentation). Das Ziel ist Nachvollziehbarkeit und Stabilität, nicht Unveränderlichkeit.',lz:'LZ 8-5',k:'K1'},

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'method',
   text:'In einem SAFe-Projekt werden Anforderungen als Epics, Features und User Stories dokumentiert. Wie verhält sich dies zu den IREB-RE-Kernaktivitäten?',
   options:['SAFe ersetzt den IREB-RE-Prozess durch eine eigene Methodik ohne Bezug zu IREB-Aktivitäten.','IREB-RE-Aktivitäten finden in SAFe statt, aber verteilt: Erhebung im PI Planning, Validierung in Iteration Reviews, Verwaltung über den Backlog.','IREB-RE ist nur für Wasserfall-Projekte relevant; in SAFe entfällt strukturiertes RE.','SAFe verwendet ausschließlich informelle Techniken ohne strukturierte Erhebung oder Dokumentation.'],
   answer:1,explanation:'IREB-RE ist methodenagnostisch: Die vier Kernaktivitäten existieren in allen Vorgehensmodellen, aber mit unterschiedlichen Artefakten, Rollen und Zeitpunkten. In SAFe: Erhebung in PI Planning und Refinement, Dokumentation als Hierarchie (Epic→Feature→Story), Validierung in Iteration Reviews und System Demos, Verwaltung über priorisierte Backlogs auf allen Ebenen.',lz:'LZ 9-3',k:'K2'},


  // ── NEW LE2: Systemkontext — Stakeholder-Analyse & Kontextdiagramm ──
  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'terminology',
   text:'Was ist das primäre Ziel einer STAKEHOLDER-ANALYSE im Requirements Engineering?',
   options:['Die technische Architektur des Systems mit allen Stakeholdern abzustimmen','Alle Personen, Gruppen und Organisationen zu identifizieren, die Anforderungen stellen oder von deren Ergebnis betroffen sind','Den Projektbudgetplan mit den Interessen der Stakeholder abzugleichen','Die Kommunikationskanäle zwischen Entwicklungsteam und Auftraggeber festzulegen'],
   answer:1,explanation:'Die Stakeholder-Analyse identifiziert und bewertet alle Parteien, die Anforderungen beisteuern oder vom System betroffen sind. Nur wer als Stakeholder erfasst wird, kann zur Anforderungserhebung herangezogen werden. Architekturabstimmung, Budgetplanung und Kommunikationskanäle sind nachgelagerte Aktivitäten.',lz:'LZ 2-4',k:'K1'},

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'method',
   text:'Ein RE-Team erstellt eine STAKEHOLDER-KARTE für ein Krankenhausinformationssystem. Welche Gruppe wird am häufigsten übersehen, ist aber systemkritisch?',
   options:['Ärzte und Pflegekräfte — sie sind offensichtliche Hauptnutzer','Datenschutzbeauftragte, IT-Betrieb und Abrechnungsstellen — indirekte Stakeholder mit verbindlichen Anforderungen','Das Softwareentwicklungsteam, das das System implementiert','Das Testteam, das die Abnahme durchführt'],
   answer:1,explanation:'Direkte Nutzer wie Ärzte und Pflegekräfte werden selten vergessen. Indirekte Stakeholder — Datenschutzbeauftragte (DSGVO-Anforderungen), IT-Betrieb (Wartbarkeits- und Betriebsanforderungen), Abrechnungsstellen (Schnittstellen- und Datenformat-Anforderungen) — werden häufig übersehen, stellen aber verbindliche und schwer nachzurüstende Anforderungen. Entwickler und Tester sind interne Projektrollen.',lz:'LZ 2-5',k:'K2'},

  // ── NEW LE7: Anforderungsprüfung — Inspektionsrollen & Metriken ──
  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'terminology',
   text:'Welche Rolle hat bei einer formalen INSPEKTION (Fagan) die Aufgabe, den Inspektionsprozess zu steuern und sicherzustellen, dass alle Phasen korrekt durchlaufen werden?',
   options:['Autor (Author)','Moderator (Moderator)','Schriftführer (Scribe)','Inspektor / Gutachter (Inspector / Reviewer)'],
   answer:1,explanation:'Der Moderator plant und leitet die Inspektion: Er sorgt für korrekte Rollenzuweisung, Einhaltung der Phasen (Planung → Überblick → Vorbereitung → Besprechung → Überarbeitung → Follow-up) und zeitlichen Rahmen. Der Autor hat das Dokument erstellt, darf aber die eigene Arbeit nicht moderieren. Der Schriftführer protokolliert Fehler. Gutachter prüfen das Dokument inhaltlich.',lz:'LZ 7-3',k:'K1'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'terminology',
   text:'Wozu dient FEHLERDICHTE (Fehler/Seite) als Metrik in einer Inspektion?',
   options:['Sie misst die Leistung einzelner Gutachter.','Sie identifiziert Dokumentabschnitte mit überdurchschnittlich vielen Problemen.','Sie belegt, dass das Dokument die Mindestqualität für die Abnahme erreicht.','Sie sagt die Dauer der nächsten Inspektion voraus.'],
   answer:1,explanation:'Fehlerdichte ist ein Lokalisierungsindikator: Bereiche mit hoher Dichte haben strukturelle Qualitätsprobleme und erfordern gezielte Überarbeitung. Sie ist kein Maß für Gutachterleistung, kein Freigabekriterium und kein Zeitvorhersageinstrument.',lz:'LZ 7-1',k:'K1'},

  // ── NEW LE8: Anforderungsverwaltung — Priorisierung, Versionierung, Attribute ──
  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'terminology',
   text:'Welche der folgenden Größen ist ein typisches ANFORDERUNGSATTRIBUT, das jeder verwalteten Anforderung zugeordnet werden sollte?',
   options:['Der Name des Entwicklers, der die Anforderung implementieren wird','Der Priorisierungswert (z. B. hoch / mittel / niedrig), der den relativen Wert der Anforderung angibt','Die geschätzte Anzahl an Codezeilen für die Implementierung','Das geplante Deployment-Datum der ersten Produktionsversion'],
   answer:1,explanation:'Priorität ist ein klassisches Anforderungsattribut im Lebenszyklus: Es beschreibt den relativen Wert oder die Dringlichkeit und ermöglicht Scope-Management. Weitere typische Attribute: Status, Version, Quelle (Stakeholder), Akzeptanzkriterien, Risiko. Entwicklername, Codezeilen und Deployment-Datum sind Projekt- und Implementierungsgrößen, keine RE-Attribute.',lz:'LZ 8-2',k:'K1'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'terminology',
   text:'Was versteht man unter VERSIONIERUNG von Anforderungen im Requirements Management?',
   options:['Das Zuweisen von Versionsnummern ausschließlich zur Unterscheidung von Produktreleases','Die systematische Nachverfolgung aller Änderungen an Anforderungen, sodass frühere Zustände nachvollziehbar und wiederherstellbar bleiben','Das Einfrieren aller Anforderungen am Ende der Analysephase, um Änderungen zu verhindern','Die Zuweisung einer Versionsnummer zu einem Anforderungsdokument nach der ersten Freigabe durch das CCB'],
   answer:1,explanation:'Versionierung im RE bedeutet die lückenlose Dokumentation von Änderungen: Wer hat was wann und warum geändert? Damit ist jeder frühere Zustand reproduzierbar und Entscheidungen nachvollziehbar. Es geht nicht um Produktreleases, nicht um Einfrieren (das ist eine Baseline) und nicht nur um Dokumentversionen.',lz:'LZ 8-5',k:'K1'},

  // ── NEW: Modellvergleich (K2, weniger Trick) ──
  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'method',
   text:'Ein Team muss die Datenstrukturen und ihre Beziehungen in einem Lagerverwaltungssystem modellieren (Produkt, Lieferant, Bestellung, Lagerort). Welche Notation ist am geeignetsten?',
   options:['Aktivitätsdiagramm — beschreibt den Prozessablauf der Lagerbewegungen','Sequenzdiagramm — zeigt die Kommunikation zwischen Lagersystem und ERP','Klassendiagramm oder Entity-Relationship-Diagramm (ERD) — modelliert statische Datenstrukturen und Beziehungen','Zustandsautomat — bildet die Zustände eines Lagerartikels ab'],
   answer:2,explanation:'Klassen- und ER-Diagramme sind die kanonischen Notationen für statische Datenstrukturen: Entitäten, Attribute und Beziehungen (1:n, m:n). Aktivitätsdiagramme zeigen Prozessabläufe, Sequenzdiagramme Kommunikationsfolgen, Zustandsautomaten Objektzustände. Die Frage verlangt Strukturmodellierung — kein dynamisches Verhalten.',lz:'LZ 5-3',k:'K2'},

  // ── NEW: Reines K1 — RE-Definition ──
  {type:'single',chapter:'Kap. 1 · Was ist eine Anforderung?',errorType:'terminology',
   text:'Wie definiert IREB Requirements Engineering (RE) in seinem CPRE-Lehrplan?',
   options:['RE ist der Prozess der technischen Implementierung von Softwareanforderungen durch ein Entwicklungsteam','RE ist eine eigenständige Systemdisziplin, die sich mit der Ermittlung, Dokumentation, Prüfung und Verwaltung von Anforderungen an ein System befasst','RE ist ausschließlich die Erstellung eines vollständigen Pflichtenhefts vor Beginn der Softwareentwicklung','RE ist der Teilbereich des Projektmanagements, der Kostenschätzungen für Softwareprojekte erstellt'],
   answer:1,explanation:'IREB definiert RE als eigenständige Systemdisziplin, die alle Aktivitäten umfasst, die zur Ermittlung, Dokumentation, Prüfung und Verwaltung von Anforderungen notwendig sind. RE ist nicht auf Implementierung, ein einziges Artefakt (Pflichtenheft) oder Projektmanagement beschränkt.',lz:'LZ 1-3',k:'K1'},

  // ══ K1 LAYER — reine Wissensabfrage, kurze Stems ══════════════════

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'terminology',
   text:'Welches der folgenden Merkmale ist KEIN Qualitätskriterium für eine EINZELNE Anforderung?',
   options:['Prüfbarkeit — die Anforderung enthält einen messbaren oder verifizierbaren Schwellenwert','Eindeutigkeit — die Anforderung hat nur eine mögliche Interpretation','Konsistenz der Spezifikation — alle Anforderungen im Dokument widersprechen sich nicht','Atomarität — die Anforderung beschreibt genau eine Eigenschaft oder Fähigkeit'],
   answer:2,explanation:'Konsistenz der SPEZIFIKATION ist ein Merkmal des Gesamtdokuments, nicht einer einzelnen Anforderung. Qualitätskriterien für EINZELNE Anforderungen nach IREB: Eindeutigkeit, Korrektheit, Vollständigkeit (der Anforderung), Prüfbarkeit, Atomarität, Verständlichkeit.',lz:'LZ 6-1',k:'K1'},

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'terminology',
   text:'Welche Aussage beschreibt VERIFIKATION im Requirements Engineering korrekt?',
   options:['Verifikation prüft, ob die Anforderungen die tatsächlichen Stakeholder-Bedürfnisse erfüllen.','Verifikation prüft, ob die Implementierung der Spezifikation entspricht — "Bauen wir das System RICHTIG?"','Verifikation prüft, ob das Systemkontext-Modell vollständig ist.','Verifikation prüft, ob alle Stakeholder den Anforderungen zugestimmt haben.'],
   answer:1,explanation:'Verifikation = "Bauen wir das System RICHTIG?" → Implementierung ≡ Spezifikation. Validierung = "Bauen wir das RICHTIGE System?" → Spezifikation ≡ Stakeholder-Bedürfnisse. Verifikation prüft interne Konsistenz (Artefakt ↔ Artefakt), Validierung prüft externe Relevanz (Artefakt ↔ reale Welt).',lz:'LZ 3-3',k:'K1'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'terminology',
   text:'Welche Aufgabe hat der SCHRIFTFÜHRER (Scribe) in einer formalen Inspektion?',
   options:['Den Inspektionsprozess leiten und alle Phasen koordinieren','Das zu prüfende Dokument den Gutachtern erläutern','Fehler und Anmerkungen während der Inspektionsbesprechung protokollieren','Checklisten für die individuelle Gutachtervorbereitung erstellen'],
   answer:2,explanation:'Der Schriftführer protokolliert alle Befunde der Inspektionsbesprechung. Prozessleitung = Moderator. Dokumenterläuterung = Autor (in der Überblick-Phase). Checklisten werden typischerweise vom Moderator oder durch den Standardprozess bereitgestellt.',lz:'LZ 7-3',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Wozu dient ein GLOSSAR im Requirements Engineering?',
   options:['Zur Auflistung aller Systemfunktionen in alphabetischer Reihenfolge','Zur einheitlichen Definition von Fachbegriffen und Abkürzungen — um Mehrdeutigkeiten in Anforderungen zu vermeiden','Zur Dokumentation aller genehmigten Anforderungsänderungen','Zur Beschreibung der Systemarchitektur in für Stakeholder verständlicher Sprache'],
   answer:1,explanation:'Das Glossar definiert projektspezifische Fachbegriffe eindeutig und verbindlich — das zentrale Werkzeug gegen terminologische Mehrdeutigkeit. "Kunde" kann Endnutzer, Auftraggeber oder ein externes System bedeuten. Ohne Glossar interpretiert jeder Stakeholder denselben Begriff anders.',lz:'LZ 5-5',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Welches Modalverb kennzeichnet laut ISO/IEC/IEEE 29148 eine OPTIONALE Anforderung in englischsprachigen Spezifikationen?',
   options:['shall','should','may','will'],
   answer:2,explanation:'"shall" = obligatorisch, "should" = empfohlen (nicht verpflichtend), "may" = optional (darf / kann). Die korrekte Wahl des Modalverbs hat erhebliche rechtliche und technische Konsequenzen für die Verbindlichkeit einer Anforderung.',lz:'LZ 5-1',k:'K1'},

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'terminology',
   text:'Welches der folgenden Elemente ist KEIN Bestandteil des SYSTEMKONTEXTS?',
   options:['Ein externes Zahlungsdienstleister-System, das Transaktionen verarbeitet','Die DSGVO als rechtliche Anforderung an das System','Das interne Datenbankschema des zu entwickelnden Systems','Der Datenschutzbeauftragte des Unternehmens als indirekter Stakeholder'],
   answer:2,explanation:'Das interne Datenbankschema ist eine Entwurfsentscheidung INNERHALB des Systems — hinter der Systemgrenze. Der Systemkontext umfasst nur Elemente AUSSERHALB der Systemgrenze: externe Systeme (A), rechtliche Vorgaben (B), Stakeholder (D).',lz:'LZ 2-1',k:'K1'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'terminology',
   text:'Welche der folgenden Aktivitäten ist nach IREB KEIN Review-Typ?',
   options:['Walkthrough','Formale Inspektion (Fagan-Inspektion)','Brainstorming','Technisches Review'],
   answer:2,explanation:'Brainstorming ist eine ERHEBUNGSTECHNIK, kein Review-Typ. Die Review-Typen nach IREB sind: informeller Review, Walkthrough, technisches Review und formale Inspektion. Brainstorming dient der kreativen Anforderungsermittlung, nicht der Prüfung von Dokumenten.',lz:'LZ 7-2',k:'K1'},

  // ══ EXAM-STYLE TRAPS — gleiche Wörter, andere Reihenfolge / subtiler Unterschied ════

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'trap',
   text:'Eine Anforderung lautet: "Das System SHALL alle Passwörter mit AES-256 verschlüsseln." Welche Aussage zur Verbindlichkeit ist korrekt?',
   options:['"Shall" kennzeichnet eine empfohlene, aber nicht verpflichtende Anforderung — vergleichbar mit "should".','\"Shall\" kennzeichnet eine obligatorische Anforderung — die Implementierung MUSS AES-256 verwenden.','"Shall" und "should" sind in modernen Standards gleichwertig.','Die Anforderung ist ungültig, weil "shall" nicht für Sicherheitsanforderungen verwendet werden darf.'],
   answer:1,explanation:'"Shall" ist das stärkste normative Schlüsselwort: obligatorisch, ohne Ausnahme. "Should" wäre empfohlen. "May" wäre optional. Die Verwechslung von "shall" und "should" ist ein klassischer Prüfungsfehler mit realen Vertragskonsequenzen.',lz:'LZ 5-1',k:'K1'},

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'trap',
   text:'Ein System wurde gemäß Spezifikation vollständig implementiert. Im Akzeptanztest: Das System löst das Geschäftsproblem nicht. Was ist eingetreten?',
   options:['Verifikationsfehler — die Implementierung entspricht nicht der Spezifikation','Validierungsfehler — die Spezifikation entspricht nicht den realen Stakeholder-Bedürfnissen','Verifikationsfehler — die Spezifikation entspricht nicht den realen Stakeholder-Bedürfnissen','Validierungsfehler — die Implementierung entspricht nicht der Spezifikation'],
   answer:1,explanation:'Die Implementierung entspricht der Spezifikation (Verifikation war erfolgreich). Das Problem: Die Spezifikation hat die realen Bedürfnisse nicht korrekt erfasst — Validierungsversagen. Option C vertauscht Verifikation und Validierung. Option D vertauscht Ursache und Wirkung.',lz:'LZ 3-3',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'trap',
   text:'Was unterscheidet einen USE CASE von einem USE-CASE-SZENARIO?',
   options:['Ein Use Case beschreibt einen spezifischen Ablaufpfad; ein Use-Case-Szenario beschreibt alle Ablaufpfade.','Ein Use Case beschreibt alle möglichen Ablaufpfade (Normal-, Alternativ- und Fehlerszenarien); ein Use-Case-Szenario beschreibt genau einen spezifischen Ablaufpfad.','Ein Use-Case-Szenario ist ein Synonym für ein Use-Case-Diagramm.','Ein Use Case wird von Entwicklern erstellt; ein Use-Case-Szenario wird von Testern erstellt.'],
   answer:1,explanation:'Ein Use Case ist ein vollständiger Anwendungsfall mit Normalablauf, Alternativpfaden und Fehlerszenarien. Ein Use-Case-Szenario ist ein einzelner Ausführungspfad — z. B. genau der Normalablauf oder genau ein Fehlerfall. Option A vertauscht die Definitionen — der häufigste Prüfungsfehler bei diesem Thema.',lz:'LZ 5-2',k:'K1'},

  // ══ LZ-GAP FILL: K1/K2 DIREKTRECALL ═══════════════════════════════════════════

  {type:'single',chapter:'Kap. 1 · Was ist eine Anforderung?',errorType:'terminology',
   text:'Was sind RANDBEDINGUNGEN (Constraints) im IREB-Sinne?',
   options:['Anforderungen, die beschreiben, wie gut das System seine Funktionen erfüllen muss.','Vorgaben, die den Lösungsraum einschränken und im RE-Prozess nicht verändert werden können.','Anforderungen an das Verhalten des Systems in Ausnahmesituationen.','Nichttechnische Anforderungen, die ausschließlich von Regulierungsbehörden stammen.'],
   answer:1,explanation:'Randbedingungen (Constraints) sind vorgegebene Einschränkungen des Lösungsraums — z. B. Technologievorgaben, gesetzliche Vorgaben oder Budgetzwänge. Sie werden nicht durch den RE-Prozess verhandelt, sondern als gegeben akzeptiert. Option A beschreibt Qualitätsanforderungen, Option C beschreibt Ausnahmeverhalten.',lz:'LZ 1-3',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Welchen Hauptzweck hat ein GLOSSAR in der Anforderungsdokumentation?',
   options:['Das Glossar listet alle Use Cases und ihre Akteure auf.','Das Glossar definiert projektspezifische Begriffe einheitlich, um Mehrdeutigkeiten zu vermeiden.','Das Glossar enthält alle Qualitätsanforderungen in strukturierter Form.','Das Glossar ist eine Liste aller Stakeholder mit ihren Rollen.'],
   answer:1,explanation:'Ein Glossar standardisiert die Bedeutung von Fachbegriffen im Projekt. Unterschiedliche Stakeholder verwenden oft gleiche Wörter mit verschiedenen Bedeutungen — das Glossar löst diesen Konflikt durch klare Begriffsdefinitionen und verhindert Missverständnisse in Anforderungen.',lz:'LZ 5-5',k:'K2'},

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'method',
   text:'Eine Anforderung lautet: "Das System soll benutzerfreundlich sein." Welches Qualitätsproblem liegt primär vor?',
   options:['Die Anforderung ist redundant — sie wiederholt eine bereits dokumentierte Anforderung.','Die Anforderung ist nicht atomar — sie enthält mehrere eigenständige Anforderungen.','Die Anforderung ist nicht verifizierbar — "benutzerfreundlich" ist kein messbares Kriterium.','Die Anforderung ist widersprüchlich — sie widerspricht typischen Performanzanforderungen.'],
   answer:2,explanation:'"Benutzerfreundlich" ist subjektiv und nicht messbar — es gibt keinen objektiven Test, der prüft, ob das System diese Anforderung erfüllt. Eine verifizierbare Formulierung wäre z. B. "Das System soll Aufgabe X in ≤ 3 Klicks erledigen." Nicht-Verifizierbarkeit ist das häufigste Qualitätsproblem bei solchen Formulierungen.',lz:'LZ 6-4',k:'K2'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'terminology',
   text:'Welche Rolle ist bei der FORMALEN INSPEKTION (Fagan-Inspektion) für die Leitung des Inspektionsmeetings zuständig?',
   options:['Der Autor des Dokuments','Der Gutachter (Reviewer)','Der Moderator (Meeting Leader)','Der Auftraggeber'],
   answer:2,explanation:'Bei der Fagan-Inspektion übernimmt der Moderator die Leitung des Meetings. Er steuert die Diskussion, ist aber NICHT der Autor. Der Autor darf das Dokument nicht selbst moderieren, da Interessenkonflikte entstehen würden. Die Inspektion trennt bewusst Autor- und Moderatorrolle.',lz:'LZ 7-5',k:'K1'},

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'terminology',
   text:'Warum wird der Requirements-Engineering-Prozess nach IREB als ITERATIV beschrieben?',
   options:['Weil Requirements Engineering ausschließlich in agilen Projekten angewendet wird.','Weil RE-Aktivitäten wie Erhebung, Dokumentation und Validierung in Schleifen wiederholt werden und sich gegenseitig verfeinern.','Weil in jedem Projekt exakt drei Iterationen durchgeführt werden müssen.','Weil Stakeholder während des Projekts keine neuen Anforderungen einbringen dürfen.'],
   answer:1,explanation:'Der RE-Prozess ist iterativ, weil Erhebung, Dokumentation und Validierung nicht einmalig sequenziell, sondern wiederholend und sich gegenseitig verfeinernd durchgeführt werden. Neue Erkenntnisse aus der Validierung führen zu weiterer Erhebung — diese Zyklizität ist kein Fehler, sie ist das Design des Prozesses.',lz:'LZ 3-2',k:'K1'},

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'terminology',
   text:'Was ist das primäre Ziel der VERHANDLUNG (Negotiation) im RE-Prozess nach IREB?',
   options:['Den Auftraggeber von allen Stakeholder-Anforderungen zu überzeugen.','Widersprüchliche oder konkurrierende Anforderungen zwischen Stakeholdern aufzulösen und eine akzeptierte Lösung zu finden.','Anforderungen zu priorisieren und in eine Releaseplanung einzuordnen.','Technische Machbarkeit von Anforderungen mit dem Entwicklungsteam abzustimmen.'],
   answer:1,explanation:'Verhandlung im RE-Prozess zielt auf die Auflösung von Konflikten zwischen Stakeholdern — wenn zwei Parteien widersprüchliche Anforderungen haben. Das Ergebnis ist eine akzeptierte Priorisierung oder ein Kompromiss. Option C (Priorisierung) ist ein verwandter, aber separater Prozessschritt.',lz:'LZ 3-4',k:'K1'},

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'terminology',
   text:'Was ist ein RE-ARTEFAKT im Sinne des IREB-Syllabus?',
   options:['Ein Dokument, das ausschließlich von Requirements Engineers erstellt wird.','Jedes Arbeitsergebnis des RE-Prozesses — z. B. ein Lastenheft, ein Use-Case-Modell oder ein Glossar.','Ein Softwaresystem, das als Ergebnis des RE-Prozesses entwickelt wurde.','Eine formale Beschreibung der Systemarchitektur.'],
   answer:1,explanation:'Ein RE-Artefakt ist jedes Arbeitsergebnis des RE-Prozesses. Das umfasst Dokumente (Lastenheft, Pflichtenheft), Modelle (Use-Case-Diagramm, Zustandsdiagramm) und Hilfsdokumente (Glossar, Stakeholder-Liste). Artefakte werden nicht ausschließlich von Requirements Engineers erstellt — auch Stakeholder und Entwickler tragen bei.',lz:'LZ 3-5',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'trap',
   text:'Was zeigt ein USE-CASE-DIAGRAMM im Vergleich zur USE-CASE-BESCHREIBUNG?',
   options:['Das Diagramm beschreibt den detaillierten Ablauf aller Szenarien; die Beschreibung zeigt nur die Übersicht.','Das Diagramm zeigt die strukturelle Übersicht der Anwendungsfälle und Akteure; die Beschreibung enthält die detaillierten Ablaufschritte.','Diagramm und Beschreibung enthalten dieselben Informationen in verschiedenen Darstellungsformen.','Das Diagramm ist normativ; die Beschreibung ist informell und optional.'],
   answer:1,explanation:'Das Use-Case-Diagramm ist eine strukturelle Übersicht: Es zeigt, welche Akteure welche Use Cases auslösen, und die Beziehungen zwischen Use Cases (include, extend). Die Ablaufdetails stehen in der textlichen Use-Case-Beschreibung (Normalablauf, Alternativpfade, Vor-/Nachbedingungen). Option A vertauscht beide Rollen.',lz:'LZ 5-6',k:'K1'},

  // ══ K3 KURZ-SZENARIEN ════════════════════════════════════════════════════════

  {type:'single',chapter:'Kap. 4 · Anforderungserhebung',errorType:'scenario',
   text:'Ein Buchhalter beherrscht seine tägliche Arbeit problemlos, kann aber nicht erklären, wie er vorgeht: "Das mache ich einfach so." Welche Erhebungstechnik ist am besten geeignet?',
   options:['Strukturiertes Interview — er kann seine Schritte in einem Interview systematisch beschreiben.','Prototyping — ein Klickprototyp hilft ihm, Anforderungen zu artikulieren.','Feldbeobachtung (Ethnografie) — der Requirements Engineer beobachtet ihn bei der täglichen Arbeit.','Dokumentenanalyse — bestehende Handbücher beschreiben die korrekten Abläufe.'],
   answer:2,explanation:'Das Szenario zeigt implizites Wissen (tacit knowledge) — Wissen, das der Experte besitzt, aber nicht verbalisieren kann. Feldbeobachtung ist die optimale Technik: Der RE beobachtet direkt, was der Experte tut, ohne auf verbale Beschreibung angewiesen zu sein. Ein Interview scheitert explizit (Option A), weil der Experte es "nicht erklären kann".',lz:'LZ 4-3',k:'K2'},

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'scenario',
   text:'Eine Anforderung lautet: "Das System soll schnell reagieren." Welche überarbeitete Formulierung erfüllt das IREB-Qualitätsmerkmal der Verifizierbarkeit am besten?',
   options:['"Das System soll so schnell wie möglich reagieren."','"Das System soll eine akzeptable Reaktionszeit haben."','"Das System soll auf Benutzereingaben innerhalb von 2 Sekunden antworten."','"Das System soll performant und reaktionsfreudig sein."'],
   answer:2,explanation:'Nur Option C enthält ein messbares Kriterium (2 Sekunden), das durch einen Lasttest verifiziert werden kann. "So schnell wie möglich" (A), "akzeptabel" (B) und "performant" (D) sind subjektiv und nicht testbar. Verifizierbarkeit erfordert konkrete, quantifizierbare Akzeptanzkriterien.',lz:'LZ 6-4',k:'K2'},

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'scenario',
   text:'Marketing fordert: "Keine Login-Schranke — maximale Reichweite." IT-Sicherheit fordert: "Alle Nutzer müssen sich authentifizieren." Welcher RE-Prozessschritt löst diesen Konflikt?',
   options:['Erhebung — mehr Stakeholder befragen, um einen Konsens zu finden.','Dokumentation — beide Anforderungen im Lastenheft nebeneinander dokumentieren.','Verhandlung — die widersprüchlichen Anforderungen zwischen den Stakeholdern moderiert auflösen.','Validierung — das fertige System zeigen und Feedback einholen.'],
   answer:2,explanation:'Dies ist ein klassischer Stakeholder-Interessenkonflikt — genau das Szenario, für das die RE-Aktivität "Verhandlung" vorgesehen ist. Ziel ist eine moderierte, akzeptierte Lösung (z. B. Gastmodus mit eingeschränktem Zugriff). Option B wäre eine Nicht-Entscheidung — Widersprüche dürfen nicht einfach weitergereicht werden.',lz:'LZ 3-4',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'scenario',
   text:'Welche Formulierung entspricht der IREB-Satzschablone für eine OBLIGATORISCHE SYSTEMFUNKTION am besten?',
   options:['"Es wäre schön, wenn das System Berichte im PDF-Format ausgeben könnte."','"Das System soll in der Lage sein, Berichte im PDF-Format auszugeben."','"Das System MUSS die Funktion bieten, Berichte im PDF-Format auszugeben."','"Das Entwicklungsteam sollte eine PDF-Exportfunktion implementieren."'],
   answer:2,explanation:'Die IREB-Satzschablone für obligatorische Systemfunktionen verwendet "MUSS" (bzw. SHALL). Option C ist konform: [System] + MUSS + [Funktion]. Option B verwendet "soll in der Lage sein" — eine schwächere Formulierung. Option A ("wäre schön") ist optional, Option D adressiert das Team statt das System.',lz:'LZ 5-1',k:'K2'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'scenario',
   text:'Ein Team hat einen ersten Lastenheft-Entwurf. Ziele: schnelles Feedback, informeller Austausch, kein formaler Prozessaufwand. Welcher Review-Typ nach IREB ist am geeignetsten?',
   options:['Formale Inspektion — maximale Fehleraufdeckung durch strukturierten Prozess.','Walkthrough — der Autor führt durch das Dokument, Gutachter geben informelles Feedback.','Technisches Review — Experten prüfen systematisch die technische Korrektheit.','Peer Review mit Checklisten — standardisierte Prüfung nach vordefinierten Kriterien.'],
   answer:1,explanation:'Der Walkthrough ist der informellste Review-Typ: Der Autor präsentiert das Dokument, Gutachter diskutieren — kein formales Eingangs-/Ausgangskriterium. Bei einem frühen Entwurf mit dem Ziel "schnelles Feedback" ist dies der angemessene Rahmen. Die formale Inspektion (A) wäre für diesen Zweck unverhältnismäßig aufwendig.',lz:'LZ 7-2',k:'K2'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'scenario',
   text:'50 Anforderungen müssen priorisiert werden. Stakeholder sollen aktiv einbezogen werden, der Zeitrahmen ist begrenzt. Welche Methode ist am geeignetsten?',
   options:['Nutzwertanalyse — mathematisch präzise, aber zeitaufwendig.','Kano-Modell — unterscheidet Basis-, Leistungs- und Begeisterungsmerkmale.','MoSCoW-Verfahren — teilt Anforderungen in Must/Should/Could/Won\'t-Kategorien ein.','Vollständiger paarweiser Vergleich — jede Anforderung gegen jede andere abwägen.'],
   answer:2,explanation:'MoSCoW ist für begrenzte Zeit und aktive Stakeholder-Einbindung optimal: Es ist schnell erlernbar, partizipativ und liefert direkt umsetzbare Priorisierungsstufen. Der paarweise Vergleich (D) wäre bei 50 Anforderungen mit 1.225 Vergleichspaaren unzumutbar aufwendig. Das Kano-Modell (B) kategorisiert Produktmerkmale, nicht Implementierungsprioritäten.',lz:'LZ 8-6',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'scenario',
   text:'Eine Bestellung kann "Offen", "Bezahlt" oder "Storniert" sein. Von "Offen" kann sie nach "Bezahlt" oder "Storniert" wechseln; von "Bezahlt" ist keine Stornierung mehr möglich. Welches Modell dokumentiert diese Regeln am geeignetsten?',
   options:['Ein Use-Case-Diagramm — es zeigt Akteure und deren Interaktion mit dem Bestellprozess.','Ein Aktivitätsdiagramm — es zeigt den zeitlichen Ablauf der Bestellschritte.','Ein Zustandsdiagramm (Statechart) — es modelliert Zustände und zulässige Übergänge.','Eine Entscheidungstabelle — sie listet alle Bedingungen und Aktionen.'],
   answer:2,explanation:'Zustandsdiagramme modellieren Objekte mit definierten Zuständen und Übergangsbedingungen. Das Szenario beschreibt genau das: diskrete Zustände (Offen, Bezahlt, Storniert) und eingeschränkte Transitionen. Ein Use-Case-Diagramm zeigt keine Zustandsübergänge; ein Aktivitätsdiagramm zeigt Prozessfluss, nicht Objektzustände.',lz:'LZ 5-3',k:'K2'},

  {type:'single',chapter:'Kap. 4 · Anforderungserhebung',errorType:'scenario',
   text:'Beim perspektivenbasierten Lesen (PBR) nimmt Reviewer Maria die Perspektive "Tester" ein. Worauf fokussiert sie sich dabei hauptsächlich?',
   options:['Sie prüft, ob die Anforderungen mit der geplanten Systemarchitektur kompatibel sind.','Sie bewertet, ob die Anforderungen aus Endnutzer-Sicht verständlich formuliert sind.','Sie identifiziert Anforderungen ohne klare Testbarkeit oder fehlende Akzeptanzkriterien.','Sie prüft, ob das Dokument die Projektbudgetvorgaben einhält.'],
   answer:2,explanation:'Die Tester-Perspektive im PBR fokussiert auf Testbarkeit: Welche Anforderungen sind nicht verifizierbar? Fehlen Erfolgskriterien? Kann ein Testfall abgeleitet werden? Option A wäre die Architekten-Perspektive, Option B die Endnutzer-Perspektive. PBR-Stärke liegt darin, dass verschiedene Perspektiven verschiedene Fehlerklassen aufdecken.',lz:'LZ 4-4',k:'K1'},

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'scenario',
   text:'Eine Anforderung lautet: "Das System soll Benutzer authentifizieren und nach erfolgreichem Login weiterleiten sowie fehlgeschlagene Logins protokollieren." Welches Qualitätsproblem liegt vor?',
   options:['Fehlende Eindeutigkeit — präzisere Formulierungen sind nötig.','Fehlende Atomarität — die Anforderung muss in separate Anforderungen aufgeteilt werden.','Fehlende Konsistenz — die Anforderung widerspricht Sicherheitsstandards.','Fehlende Vollständigkeit — Ausnahmebehandlungen fehlen.'],
   answer:1,explanation:'Die Anforderung enthält drei eigenständige Funktionen: (1) Authentifizierung, (2) Weiterleitung nach Erfolg, (3) Protokollierung fehlgeschlagener Logins. Das verletzt Atomarität — jede Anforderung soll genau eine Sache beschreiben. Lösung: in drei atomare Anforderungen aufteilen, die unabhängig priorisiert und getestet werden können.',lz:'LZ 6-4',k:'K2'},

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'scenario',
   text:'Zu Beginn eines Projekts für Krankenhausverwaltungssoftware soll eine Stakeholder-Analyse durchgeführt werden. Was ist der sinnvollste erste Schritt?',
   options:['Alle Stakeholder zu einem gemeinsamen Workshop einladen, um Anforderungen direkt zu erheben.','Alle möglichen Stakeholder-Gruppen identifizieren und kategorisieren — z. B. nach direktem/indirektem Einfluss.','Mit der Dokumentation der bekannten Anforderungen beginnen.','Die wichtigsten Stakeholder durch Priorisierung nach Einfluss sofort identifizieren und ansprechen.'],
   answer:1,explanation:'Der erste Schritt einer Stakeholder-Analyse ist die Identifikation: Wer ist betroffen? Wer hat Einfluss? Wer hat Interessen? Erst wenn die vollständige Stakeholder-Landschaft bekannt ist, kann priorisiert (D) oder eingeladen (A) werden. Option D ist der zweite Schritt — Priorisierung setzt voraus, dass alle Stakeholder bereits identifiziert wurden.',lz:'LZ 2-5',k:'K2'},

  // ══ KAP. 9 AGILE RE & WERKZEUGE — K1-ERWEITERUNG ════════════════════════════

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'terminology',
   text:'Welches FORMAT hat eine USER STORY nach IREB?',
   options:['Als [Funktion] soll das System [Nutzen] liefern.','Als [Rolle] möchte ich [Ziel/Funktion], damit ich [Nutzen] erhalte.','Als [Stakeholder] fordere ich [Anforderung] mit [Priorität].','Das System MUSS [Funktion] für [Rolle] bereitstellen.'],
   answer:1,explanation:'Das IREB-anerkannte User-Story-Format: "Als [Rolle] möchte ich [Ziel/Funktion], damit ich [Nutzen] erhalte." Drei Teile: Wer? Was? Warum? Das "damit"-Teil (Nutzen) ist entscheidend — es begründet den Wert und ermöglicht die Priorisierung durch den Product Owner.',lz:'LZ 9-1',k:'K1'},

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'terminology',
   text:'Was sind ABNAHMEKRITERIEN (Acceptance Criteria) einer User Story?',
   options:['Technische Design-Vorgaben, die das Entwicklungsteam einhalten muss.','Bedingungen, die erfüllt sein müssen, damit eine User Story als vollständig abgenommen gilt.','Eine Prioritätsliste, nach der Stories im Sprint umgesetzt werden.','Qualitätsstandards, die für alle Stories des gesamten Projekts gelten.'],
   answer:1,explanation:'Abnahmekriterien definieren, wann eine User Story "fertig" ist. Sie werden idealerweise zusammen mit der Story geschrieben und im Sprint Review geprüft. Ohne Abnahmekriterien gibt es keinen objektiven Maßstab für Fertigstellung — der Product Owner kann dann beliebig unzufrieden sein.',lz:'LZ 9-1',k:'K1'},

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'terminology',
   text:'Was beschreibt das GIVEN-WHEN-THEN-Format?',
   options:['Ein Rahmenwerk für die Priorisierung von User Stories im Product Backlog.','Eine Struktur für Abnahmekriterien: Ausgangssituation (Given) · Aktion (When) · erwartetes Ergebnis (Then).','Das dreiteilige Format für das Schreiben von User Stories (Rolle/Ziel/Nutzen).','Eine Methode zur Schätzung von Story Points.'],
   answer:1,explanation:'Given-When-Then strukturiert Abnahmekriterien als testbare Szenarien: Given = Vorbedingung/Kontext, When = Auslöser/Aktion, Then = erwartetes Ergebnis. Das Format macht Abnahmekriterien präzise und direkt ausführbar als automatisierter Test. Nicht zu verwechseln mit dem User-Story-Format (Rolle/Ziel/Nutzen).',lz:'LZ 9-1',k:'K1'},

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'terminology',
   text:'Was ist ein PRODUCT BACKLOG?',
   options:['Ein vollständig ausgearbeitetes Lastenheft für das gesamte Produkt.','Eine priorisierte Liste aller bekannten Anforderungen, Funktionen und Verbesserungen für das Produkt.','Ein Protokoll aller abgeschlossenen Sprints und deliverter Features.','Ein technischer Implementierungsplan für den nächsten Sprint.'],
   answer:1,explanation:'Der Product Backlog ist das zentrale Anforderungsartefakt in agilen Projekten: eine priorisierte, lebendige Liste aller Anforderungen (User Stories, Epics, Bugs, technische Schulden). Er wird kontinuierlich gepflegt (Refinement). Der Product Owner verantwortet Inhalt und Priorisierung.',lz:'LZ 9-2',k:'K1'},

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',
   errorType:'terminology',
   text:'Welche KERNFUNKTION unterstützt ein ANFORDERUNGSMANAGEMENT-WERKZEUG (RM-Tool) primär?',
   options:['Automatische Codegenerierung aus Anforderungstexten.','Verwaltung, Versionierung und Rückverfolgbarkeit (Traceability) von Anforderungen.','Projektzeitplanung und Ressourcenallokation.','Statische Codeanalyse und Qualitätssicherung.'],
   answer:1,explanation:'RM-Tools wie DOORS, Polarion oder Jama sind spezialisiert auf: Verwaltung großer Anforderungsmengen, Versionierung (Änderungshistorie), Traceability (Verlinkung zu Tests, Design, Code) und Status-Tracking. Codegenerierung ist Domäne von MDE-Tools, Zeitplanung gehört zum PM, Codeanalyse zu DevOps.',lz:'LZ 9-2',k:'K1'},

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'terminology',
   text:'Welches SCRUM-EVENT entspricht am ehesten der RE-Aktivität VALIDIERUNG?',
   options:['Sprint Planning — Anforderungen werden in Aufgaben zerlegt.','Sprint Review — das Team zeigt dem Product Owner und Stakeholdern das fertige Inkrement.','Daily Scrum — das Team koordiniert die täglichen Aufgaben.','Sprint Retrospektive — das Team reflektiert den Prozess.'],
   answer:1,explanation:'Das Sprint Review ist das Validierungsevent in Scrum: Das fertige Inkrement wird Stakeholdern präsentiert und gegen ihre Erwartungen geprüft. Entspricht das Ergebnis den Bedürfnissen? Feedback führt zu neuen oder angepassten Backlog-Einträgen. Sprint Planning = Planung, Daily = Koordination, Retro = Prozessverbesserung.',lz:'LZ 9-3',k:'K1'},

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'terminology',
   text:'Was bedeutet TRACEABILITY (Rückverfolgbarkeit) im Requirements Engineering?',
   options:['Die Fähigkeit, Anforderungen nach Priorität zu ordnen.','Die Fähigkeit, jede Anforderung zu ihrer Quelle zurückzuverfolgen und vorwärts zu ihren Artefakten (Tests, Design, Code) zu verknüpfen.','Ein Maß für die Verständlichkeit einer Anforderungsspezifikation.','Die Eigenschaft, dass Anforderungen ohne Werkzeugunterstützung geprüft werden können.'],
   answer:1,explanation:'Traceability hat zwei Richtungen: Rückwärts (Backward) — Anforderung → Quelle (Stakeholder, Gesetz, Geschäftsziel); Vorwärts (Forward) — Anforderung → Implementierung, Testfall, Design. Sie ermöglicht Impact Analysis bei Änderungen: Welche Artefakte sind betroffen?',lz:'LZ 9-2',k:'K1'},

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'terminology',
   text:'Welches agile ARTEFAKT entspricht am ehesten einer Anforderungsspezifikation?',
   options:['Das Sprint-Burndown-Chart.','Der priorisierte Product Backlog mit User Stories und Abnahmekriterien.','Das Team-Velocity-Diagramm.','Das Release-Gantt-Diagramm.'],
   answer:1,explanation:'Im agilen RE ersetzt der Product Backlog (mit User Stories, Abnahmekriterien und ergänzenden Beschreibungen) die klassische Anforderungsspezifikation. Er ist das lebendige, priorisierte Anforderungsartefakt. Sprint-Burndown, Velocity und Gantt sind Projektmanagement-/Monitoring-Artefakte, keine Anforderungsartefakte.',lz:'LZ 9-3',k:'K1'},

  // ══ KAP. 2 SYSTEMKONTEXT — K1-TIEFE ═════════════════════════════════════════

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'terminology',
   text:'Was umfasst der SYSTEMKONTEXT nach IREB?',
   options:['Nur die direkten Endnutzer des Systems.','Alle Elemente der Systemumgebung, die das System beeinflussen oder von ihm beeinflusst werden.','Das interne Design des Systems einschließlich aller Subsysteme.','Alle Stakeholder, die an Anforderungs-Reviews teilnehmen.'],
   answer:1,explanation:'Der Systemkontext umfasst alle Elemente außerhalb der Systemgrenze, die für das System relevant sind: Nachbarsysteme, Nutzer, regulatorische Vorgaben, physische Umgebung. Was das System beeinflusst oder von ihm beeinflusst wird, ist Kontext. Interne Designentscheidungen liegen innerhalb der Systemgrenze.',lz:'LZ 2-1',k:'K1'},

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'terminology',
   text:'Was trennt die SYSTEMGRENZE (System Boundary)?',
   options:['Funktionale Anforderungen von nicht-funktionalen.','Das zu entwickelnde System von seiner Umgebung (Kontext).','Das Projektteam von den Stakeholdern.','Pflichtanforderungen von optionalen Anforderungen.'],
   answer:1,explanation:'Die Systemgrenze trennt das zu entwickelnde System von allem außerhalb (Kontext). Sie definiert: Was wird entwickelt? Was ist Umgebung? Alles innerhalb wird gebaut; alles außerhalb liefert Anforderungen, wird aber nicht entwickelt. Die Grenzziehung ist eine der wichtigsten RE-Entscheidungen.',lz:'LZ 2-1',k:'K1'},

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'terminology',
   text:'Was ist ein NACHBARSYSTEM (Neighboring System) im IREB-Sinne?',
   options:['Ein System desselben Herstellers mit gemeinsamer Codebasis.','Ein System außerhalb der Systemgrenze, das Daten oder Steuerbefehle mit dem zu entwickelnden System austauscht.','Ein Backup-System, das bei Ausfall des Hauptsystems aktiviert wird.','Ein Altsystem, das durch das neue System ersetzt wird.'],
   answer:1,explanation:'Nachbarsysteme liegen außerhalb der Systemgrenze (im Kontext) und haben direkte Schnittstellen zum System. Sie tauschen Daten oder Steuersignale aus. Aus RE-Sicht sind sie wichtig, weil sie Schnittstellenanforderungen generieren. Sie werden nicht entwickelt — sie sind gegeben.',lz:'LZ 2-2',k:'K1'},

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'terminology',
   text:'Was ist der IRRELEVANTE SYSTEMKONTEXT?',
   options:['Stakeholder, die keine Anforderungen stellen.','Teile der Systemumgebung, die das System nicht beeinflussen und nicht von ihm beeinflusst werden.','Anforderungen, die als "Could have" priorisiert wurden.','Externe Systeme mit geringem Integrationsaufwand.'],
   answer:1,explanation:'Der irrelevante Kontext ist alles in der Systemumgebung, das weder das System beeinflusst noch von ihm beeinflusst wird. Die Kontextabgrenzung entscheidet bewusst, was relevant ist und was ausgeklammert wird. Klare Abgrenzung verhindert Scope Creep.',lz:'LZ 2-1',k:'K1'},

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'terminology',
   text:'Was zeigt ein KONTEXTDIAGRAMM?',
   options:['Die internen Klassen und deren Beziehungen im System.','Das System als Black Box, alle relevanten Nachbarsysteme/Akteure und die Datenflüsse über die Systemgrenze.','Alle Use Cases des Systems mit ihren Akteuren.','Den Zeitplan der Anforderungserhebungsworkshops.'],
   answer:1,explanation:'Ein Kontextdiagramm visualisiert: (1) das System als undurchsichtige Black Box (ohne interne Details), (2) alle relevanten externen Systeme und Akteure, (3) alle Schnittstellen/Datenflüsse über die Systemgrenze. Es ist das Ergebnis der Systemkontextanalyse und Grundlage für die Anforderungserhebung.',lz:'LZ 2-3',k:'K1'},

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'terminology',
   text:'Wer gilt nach IREB als STAKEHOLDER?',
   options:['Ausschließlich Personen, die das System täglich bedienen.','Jede Person, Gruppe oder Organisation mit direktem oder indirektem Einfluss auf Anforderungen oder die vom System betroffen ist.','Ausschließlich Auftraggeber und Entwicklungsteam.','Nur Personen mit Stimmrecht in Anforderungs-Reviews.'],
   answer:1,explanation:'Der IREB-Begriff ist weit: direkter Einfluss (Nutzer, Auftraggeber) und indirekter Einfluss (Regulierungsbehörden, Datenschutzbeauftragte, betroffene Dritte). Wer Anforderungen stellt ODER vom System betroffen ist, ist Stakeholder — auch ohne das System selbst zu bedienen.',lz:'LZ 2-4',k:'K1'},

  // ══ MODELLIERUNGSBREITE — DFD UND BPMN ════════════════════════════════════

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Welche VIER Grundelemente enthält ein DATENFLUSSDIAGRAMM (DFD)?',
   options:['Klassen, Attribute, Methoden und Vererbungsbeziehungen.','Prozesse, Datenspeicher, externe Entitäten und Datenflüsse.','Zustände, Transitionen, Ereignisse und Aktionen.','Akteure, Use Cases, Include- und Extend-Beziehungen.'],
   answer:1,explanation:'Die vier DFD-Grundelemente: (1) Prozesse — transformieren Daten (Kreis oder abgerundetes Rechteck), (2) Datenspeicher — persistente Datenbestände (offenes Rechteck), (3) externe Entitäten — Quellen/Senken außerhalb des Systems (geschlossenes Rechteck), (4) Datenflüsse — Datenbewegungen zwischen Elementen (Pfeile mit Labels).',lz:'LZ 5-3',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Was modelliert BPMN (Business Process Model and Notation) primär?',
   options:['Datenstrukturen und ihre Beziehungen innerhalb eines Systems.','Geschäftsprozesse und Arbeitsabläufe mit Ereignissen, Gateways und Aufgaben.','Die statischen Klassen und Assoziationen eines Objektmodells.','Zustände eines Objekts und die Ereignisse, die Übergänge auslösen.'],
   answer:1,explanation:'BPMN ist die Standardnotation für Geschäftsprozessmodellierung: Wer tut was in welcher Reihenfolge? BPMN-Kernelemente: Events (Start/End/Intermediate), Activities (Tasks, Sub-Processes), Gateways (AND/XOR/OR für Ablaufsteuerung), Sequence Flows. Es beschreibt ABLAUF aus organisatorischer Sicht, nicht Datenstruktur oder Systemzustand.',lz:'LZ 5-3',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Was ist die Funktion eines GATEWAYS in einem BPMN-Diagramm?',
   options:['Ein Gateway repräsentiert eine Aufgabe, die von mehreren Teilnehmern gleichzeitig ausgeführt wird.','Ein Gateway steuert den Ablauf: Es verzweigt oder synchronisiert Pfade basierend auf Bedingungen oder Parallelität.','Ein Gateway markiert den Start- oder Endpunkt eines Prozesses.','Ein Gateway zeigt eine Schnittstelle zu einem externen System an.'],
   answer:1,explanation:'BPMN-Gateways steuern den Fluss: XOR-Gateway (Entweder-oder-Verzweigung), AND-Gateway (alle Pfade parallel), OR-Gateway (einer oder mehrere Pfade). Sie sind das Mittel für Entscheidungen und Synchronisierungen. Start-/Endpunkte werden durch Events (Kreise) dargestellt.',lz:'LZ 5-3',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'method',
   text:'Ein Team will Datenbewegungen zwischen System, Datenbank und externen Schnittstellen modellieren. Welche Notation ist am geeignetsten?',
   options:['BPMN — modelliert Geschäftsprozesse mit Ereignissen und Gateways.','DFD (Datenflussdiagramm) — visualisiert Datenflüsse, Prozesse, Datenspeicher und externe Entitäten.','Zustandsdiagramm — beschreibt Zustandsübergänge des Systems.','Klassendiagramm — zeigt Datenstrukturen und Beziehungen.'],
   answer:1,explanation:'Das DFD ist für Datenflussmodellierung optimiert: woher kommen Daten, wie werden sie transformiert, wo gespeichert oder ausgegeben? BPMN ist für Prozessabläufe aus organisatorischer Sicht (wer tut was). Für die technische Datenflussperspektive ist DFD das Standardwerkzeug.',lz:'LZ 5-3',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Was ist der Unterschied zwischen DFD Level 0 und DFD Level 1?',
   options:['Level 0 hat mehr Details als Level 1.','Level 0 zeigt das Gesamtsystem als einzelnen Prozess; Level 1 verfeinert es in Teilprozesse mit Datenflüssen.','Level 0 enthält interne Datenspeicher; Level 1 zeigt nur externe Entitäten.','Level 0 und Level 1 enthalten dieselben Informationen in verschiedenen Layouts.'],
   answer:1,explanation:'DFDs sind hierarchisch: Level 0 (Kontextdiagramm) zeigt das System als einzelnen abstrakten Prozess mit externen Entitäten und Systemgrenz-Datenflüssen. Level 1 verfeinert diesen Prozess in interne Teilprozesse und Datenspeicher. Jede Ebene verfeinert einen Prozess der übergeordneten Ebene.',lz:'LZ 5-3',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Was modelliert eine LANE (Schwimmbahn) in einem BPMN-Pool?',
   options:['Einen optionalen Prozesszweig, der bei Ausnahmen aktiviert wird.','Eine Verantwortlichkeitszone innerhalb eines Prozesses, die einer Rolle oder Abteilung zugeordnet ist.','Einen parallelen Prozess, der unabhängig vom Hauptprozess abläuft.','Eine Datenbank oder einen externen Dienst, auf den der Prozess zugreift.'],
   answer:1,explanation:'Pools repräsentieren in BPMN einen Teilnehmer (Organisation, System). Lanes unterteilen den Pool in Verantwortlichkeitsbereiche (Rollen, Abteilungen) und zeigen: Welche Aktivitäten werden von wem ausgeführt? Die Zuordnung macht Zuständigkeiten sichtbar — wichtig für RE, um zu verstehen, wer welche Anforderungen stellt.',lz:'LZ 5-3',k:'K1'},

  // ══ ALLGEMEINE K1-DIREKTRECALL QUER DURCH KAPITEL ═══════════════════════════

  {type:'single',chapter:'Kap. 1 · Was ist eine Anforderung?',errorType:'terminology',
   text:'Was ist das Ziel von REQUIREMENTS ENGINEERING (RE)?',
   options:['Die technische Architektur des Systems zu entwerfen.','Anforderungen zu ermitteln, zu dokumentieren, zu prüfen und zu verwalten, um ein gemeinsames Systemverständnis zu schaffen.','Software-Tests zu planen und durchzuführen.','Projektpläne und Ressourcenallokation zu erstellen.'],
   answer:1,explanation:'Requirements Engineering ist die systematische Disziplin zur Behandlung von Anforderungen: Erhebung (was wollen Stakeholder?), Dokumentation (wie wird es festgehalten?), Prüfung (ist es korrekt?) und Verwaltung (wie werden Änderungen kontrolliert?). Ziel ist ein gemeinsames, konsistentes Verständnis des zu bauenden Systems.',lz:'LZ 1-1',k:'K1'},

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'terminology',
   text:'Was ist der Unterschied zwischen ERHEBUNG (Elicitation) und DOKUMENTATION im RE-Prozess?',
   options:['Erhebung ist formeller als Dokumentation.','Erhebung ermittelt Anforderungen von Stakeholdern; Dokumentation hält sie in Artefakten fest.','Erhebung findet nach der Dokumentation statt.','Erhebung und Dokumentation sind Synonyme für denselben Schritt.'],
   answer:1,explanation:'Erhebung (Elicitation): RE-Aktivität zur Gewinnung von Anforderungen aus Stakeholdern, Dokumenten und anderen Quellen. Dokumentation: RE-Aktivität zur strukturierten Aufzeichnung der ermittelten Anforderungen in definierten Artefakten (SRS, User Stories, Use-Case-Beschreibungen). Beide sind eigenständige, eng verknüpfte Aktivitäten.',lz:'LZ 3-1',k:'K1'},

  {type:'single',chapter:'Kap. 4 · Anforderungserhebung',errorType:'terminology',
   text:'Was ist das KENNZEICHEN eines STRUKTURIERTEN INTERVIEWS?',
   options:['Der Interviewer folgt keiner Vorgabe und passt Fragen frei an.','Alle Fragen sind vorab festgelegt; alle Befragten erhalten dieselben Fragen in derselben Reihenfolge.','Das Interview endet erst, wenn alle Themen erschöpft sind.','Strukturierte Interviews werden ausschließlich schriftlich durchgeführt.'],
   answer:1,explanation:'Strukturierte Interviews haben einen festen Fragenkatalog: Alle Stakeholder erhalten dieselben Fragen, was direkte Vergleichbarkeit ermöglicht. Nachteil: kein individuelles Eingehen auf Besonderheiten. Unstrukturierte Interviews sind offen und flexibel. Halb-strukturierte kombinieren beide Ansätze.',lz:'LZ 4-2',k:'K1'},

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'terminology',
   text:'Was bedeutet VOLLSTÄNDIGKEIT einer EINZELNEN Anforderung?',
   options:['Alle notwendigen Anforderungen des Systems sind in der Spezifikation vorhanden.','Die Anforderung enthält alle Informationen, die für Implementierung und Test benötigt werden.','Die Anforderung wurde von allen Stakeholdern genehmigt.','Die Anforderung enthält keine überflüssigen Details.'],
   answer:1,explanation:'Vollständigkeit auf Einzelanforderungsebene: Die Anforderung ist in sich vollständig — sie enthält alle Informationen, die ein Entwickler für die Implementierung und ein Tester für den Test benötigt. Vollständigkeit der Spezifikation (alle Anforderungen sind enthalten) ist ein separates, übergeordnetes Merkmal.',lz:'LZ 6-1',k:'K1'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'terminology',
   text:'Was ist der Hauptunterschied zwischen REVIEW und TEST bei der Anforderungsprüfung?',
   options:['Reviews werden nur von externen Prüfern durchgeführt; Tests vom internen Team.','Reviews prüfen Dokumente durch menschliche Inspektion; Tests prüfen ausführbare Systeme durch Ausführung.','Reviews sind immer günstiger als Tests.','Reviews prüfen nur funktionale; Tests nur nicht-funktionale Anforderungen.'],
   answer:1,explanation:'Reviews sind statische Prüftechniken: Schriftliche Artefakte (Anforderungen, Design, Code) werden durch menschliche Begutachtung geprüft — ohne Systemausführung. Tests sind dynamisch: Sie führen das System aus und prüfen Verhalten. Anforderungs-Reviews finden vor dem Code-Schreiben statt — kostengünstigste Fehleraufdeckung.',lz:'LZ 7-1',k:'K1'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'terminology',
   text:'Was ist eine BASISLINIE (Baseline) im Anforderungsmanagement?',
   options:['Die Mindestanzahl an Anforderungen für einen Release.','Ein vereinbarter, freigegebener Stand der Anforderungen, gegen den Änderungen formal verwaltet werden.','Ein Dokument, das die technischen Grundlagen des Systems beschreibt.','Die erste Produktionsversion des Systems.'],
   answer:1,explanation:'Eine Baseline ist ein formal vereinbarter, versionierter Anforderungsstand. Sie markiert einen Kontrollpunkt: Ab hier werden Änderungen durch den formalen Änderungsprozess geführt. Sie bedeutet nicht Einfrieren — Änderungen bleiben möglich, müssen aber beantragt, analysiert und genehmigt werden.',lz:'LZ 8-5',k:'K1'},

  {type:'single',chapter:'Kap. 4 · Anforderungserhebung',errorType:'terminology',
   text:'Was ist das GRUNDPRINZIP von BRAINSTORMING als Erhebungstechnik?',
   options:['Ideen werden sofort bewertet und priorisiert, damit nur die besten weiterverfolgt werden.','Ideen werden zunächst unkritisch gesammelt — keine Bewertung oder Kritik während der Ideenphase.','Jeder Teilnehmer gibt schriftlich Ideen auf einem Fragebogen ab.','Brainstorming findet ausschließlich mit einzelnen Experten statt.'],
   answer:1,explanation:'Das Brainstorming-Grundprinzip: Quantität vor Qualität in der Generierungsphase. Keine Kritik, kein Widerspruch, kein Bewerten während der Sammlung — das tötet Kreativität. Erst nach der Sammelphase werden Ideen strukturiert und bewertet. Als Erhebungstechnik generiert Brainstorming innovative Ideen, die andere Techniken nicht liefern.',lz:'LZ 4-3',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Was ist das HAUPTPROBLEM bei rein NATÜRLICHSPRACHLICHEN Anforderungen?',
   options:['Sie sind zu präzise und lassen keinen Raum für Lösungen.','Natürliche Sprache ist inhärent mehrdeutig — Begriffe können von Lesern unterschiedlich interpretiert werden.','Sie können nicht in Use Cases überführt werden.','Sie sind nur für technische Stakeholder verständlich.'],
   answer:1,explanation:'Natürliche Sprache ist ausdrucksstark, aber anfällig für Mehrdeutigkeit: "Das System soll schnell sein" — für wen? Wie schnell? Unter welchen Bedingungen? Satzschablonen, Glossare und Modelle reduzieren Ambiguität. Trotzdem bleibt natürliche Sprache die dominierende Dokumentationsform, da sie für alle Stakeholder verständlich ist.',lz:'LZ 5-1',k:'K1'},

  // ══ v3.9 FIX 1 — KONZEPTABDECKUNG: Satzschablone, Glossar, Prüfbarkeit ══════

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Was ist der HAUPTZWECK einer SATZSCHABLONE (structured natural language template) in der Anforderungsdokumentation?',
   options:['Anforderungen in formale Logik (Prädikatenlogik) zu überführen.','Die Struktur natürlichsprachlicher Anforderungen zu standardisieren und Mehrdeutigkeit zu reduzieren.','Grafische Modelle wie UML-Diagramme zu ersetzen.','Die Priorität jeder Anforderung festzulegen.'],
   answer:1,explanation:'Eine Satzschablone gibt eine feste Syntaxstruktur vor — typischerweise [System] + [Modalverb: MUSS/SOLL/KANN] + [Verb + Objekt]. Dadurch wird Mehrdeutigkeit reduziert (klar wer, was, unter welchen Bedingungen) und alle Anforderungen erhalten ein einheitliches Format. Satzschablonen ersetzen keine Modelle (C) und legen keine Prioritäten fest (D).',lz:'LZ 5-1',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Eine Systemfunktion ist OPTIONAL — das System kann sie anbieten, ist aber nicht verpflichtet. Welches Modalverb ist laut IREB-Satzschablone korrekt?',
   options:['MUSS — obligatorisch, zwingend erforderlich.','SOLL — stark erwünscht, aber begründet weglassbar.','KANN — optional, Ermessensspielraum des Systems.','WIRD — zukünftige Planung, noch nicht festgelegt.'],
   answer:2,explanation:'IREB unterscheidet drei Bindungsgrade: MUSS (obligatorisch, nicht verhandelbar), SOLL (stark gewünscht, Abweichung mit Begründung möglich) und KANN (optional, das System darf aber muss nicht). Für eine rein optionale Funktion ist KANN die korrekte Wahl. "WIRD" ist kein IREB-Modalverb.',lz:'LZ 5-1',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Was ist eine ZIRKULÄRE DEFINITION im Glossar?',
   options:['Ein Begriff wird mit einem Synonym definiert, das selbst nicht im Glossar steht.','Ein Begriff wird durch sich selbst oder durch einen anderen Begriff definiert, der wiederum den ersten Begriff zur Definition verwendet.','Ein Begriff hat mehr als eine akzeptierte Definition im Fachbereich.','Ein Begriff ist zu allgemein formuliert und passt auf mehrere Konzepte.'],
   answer:1,explanation:'Eine zirkuläre Definition kreist im Kreis: "Ein Stakeholder ist jemand, der Stakeholder-Interessen hat" — der Begriff wird durch sich selbst erklärt. Oder zwei Begriffe definieren sich gegenseitig. Glossarregeln fordern nicht-zirkuläre, nicht selbstreferenzielle Definitionen. Option A beschreibt ein anderes Problem (fehlender Eintrag für das Synonym).',lz:'LZ 5-5',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'trap',
   text:'Welcher der folgenden Glossar-Einträge entspricht den IREB-Qualitätsregeln für Glossare am besten?',
   options:['"Benutzer: Jemand, der das System benutzt."','"Authentifizierung: Der Prozess, bei dem ein Benutzer verifiziert, dass er der ist, der er zu sein behauptet, durch Eingabe von Login-Daten."','"Login: Vorgang, bei dem der Benutzer sich anmeldet."','"Session: Eine Session ist eine aktive Benutzer-Session im System."'],
   answer:1,explanation:'Option B definiert Authentifizierung ohne den Begriff selbst zu verwenden, beschreibt den Prozess, nennt den Mechanismus (Eingabe von Login-Daten) und nennt das Ziel (Identitätsverifikation). Option A ist zirkulär ("benutzt" statt einer inhaltlichen Definition). Option C ist zirkulär ("anmeldet" ~ "Login"). Option D ist explizit zirkulär ("Session ist eine … Session").',lz:'LZ 5-5',k:'K2'},

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'trap',
   text:'Eine Anforderung lautet: "Der Login-Button MUSS für sehbehinderte Nutzer zugänglich sein (gemäß WCAG 2.1 Level AA)." Ist diese Anforderung PRÜFBAR (verifizierbar)?',
   options:['Nein — "zugänglich" ist ein subjektiver Begriff ohne Messwert.','Ja — WCAG 2.1 Level AA ist ein definiertes Regelwerk; Konformität kann binär geprüft werden.','Nein — Barrierefreiheit kann nur durch Nutzertests gemessen werden.','Ja — aber nur wenn zusätzlich eine Antwortzeit in Millisekunden angegeben wird.'],
   answer:1,explanation:'Prüfbarkeit (Verifizierbarkeit) erfordert KEIN quantitativen Messwert — ein binäres Prüfergebnis (konform/nicht konform) reicht aus. WCAG 2.1 AA definiert exakte Kriterien (Kontrastverhältnisse, Fokusindikatoren, Screenreader-Kompatibilität). Ein WCAG-Audit liefert ein eindeutiges Ja/Nein. Dies zeigt: Prüfbarkeit ≠ Messbarkeit.',lz:'LZ 6-2',k:'K2'},

  // ══ v3.9 FIX 2 — ECHTE K3: Konflikte, Trade-offs, Ressourcenengpässe ═════════

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'scenario',
   text:'REQ-1: "Nutzerdaten MÜSSEN nach 3 Jahren gelöscht werden (DSGVO)." REQ-2: "Buchungsdaten MÜSSEN 10 Jahre archiviert werden (HGB)." Beide betreffen dieselben Datensätze. Was ist die korrekte RE-Maßnahme?',
   options:['Die DSGVO-Anforderung hat Vorrang — Datenschutz ist wichtiger als Handelsrecht.','Die HGB-Anforderung hat Vorrang — Archivierungspflicht schlägt Löschpflicht.','Den Konflikt an die zuständigen juristischen und Compliance-Stakeholder eskalieren — RE kann diesen Rechtskonflikt nicht alleine auflösen.','Beide Anforderungen dokumentieren und dem Entwicklungsteam die Entscheidung überlassen.'],
   answer:2,explanation:'Dies ist ein echter rechtlicher Konflikt — DSGVO vs. HGB — den der RE nicht eigenständig lösen kann und auch nicht darf. Die korrekte RE-Reaktion: Konflikt exakt dokumentieren, betroffene Stakeholder (Jurist, Datenschutzbeauftragter, Compliance) benennen und den Entscheid eskalieren. Option D wäre Verantwortungsabgabe. Optionen A und B wären eigenmächtige juristische Entscheidungen ohne Mandat.',lz:'LZ 3-4',k:'K3'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'scenario',
   text:'Ein Medizinprodukt (FDA Class II) muss in 2 Wochen zur Zulassung eingereicht werden. Der Projektleiter möchte die formale Inspektion überspringen und durch einen informellen Walkthrough ersetzen, um Zeit zu sparen. Als RE-Verantwortlicher — was tun Sie?',
   options:['Zustimmen — bei Zeitdruck ist ein Walkthrough eine akzeptable Alternative zur formalen Inspektion.','Den Walkthrough akzeptieren, aber zusätzlich eine verkürzte Checklisten-Prüfung durchführen.','Den Verzicht auf die formale Inspektion schriftlich dokumentieren und dem Projektleiter die Verantwortung für Compliance-Risiken formal bestätigen lassen.','Die formale Inspektion auf nach der Einreichung verschieben.'],
   answer:2,explanation:'Bei regulierten Produkten (FDA Class II) ist die formale Inspektion typischerweise Pflicht im Qualitätsmanagementsystem. RE kann den Verzicht nicht allein genehmigen. Die professionelle Reaktion: Risiko klar und schriftlich kommunizieren, Entscheidung beim zuständigen Verantwortlichen (Projektleiter/Management) einholen und dokumentieren — nicht still zustimmen (A) oder eigenmächtig verschieben (D).',lz:'LZ 7-2',k:'K3'},

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'scenario',
   text:'REQ-A: "API-Aufrufe MÜSSEN unter 100 ms antworten." REQ-B: "Jeder Aufruf MUSS Zero-Trust-Validierung durchlaufen." Beide priorisiert. Entwicklungsteam: gleichzeitige Umsetzung technisch unmöglich. Was tut RE?',
   options:['Die Performance-Anforderung auf 500 ms abschwächen — Sicherheit hat immer Vorrang.','Die Zero-Trust-Anforderung entfernen — Performance ist für Nutzerakzeptanz kritischer.','Den Konflikt formell erfassen, beide Stakeholder zu einer moderierten Priorisierungsentscheidung einladen und die Entscheidung dokumentieren.','Dem Entwicklungsteam erlauben, selbst eine Lösung zu wählen.'],
   answer:2,explanation:'Das ist ein klassischer K3-Konflikt: zwei valide, priorisierte Anforderungen schließen sich technisch aus. RE ist nicht befugt, eigenständig eine zu verwerfen (A, B) oder die Entscheidung an Entwickler zu delegieren (D). Der korrekte Weg: Konflikt formal erfassen, betroffene Stakeholder mit Entscheidungskompetenz zusammenbringen, moderieren, Entscheid mit Begründung und Risikoabwägung dokumentieren.',lz:'LZ 6-1',k:'K3'},

  {type:'single',chapter:'Kap. 4 · Anforderungserhebung',errorType:'scenario',
   text:'Sprint 8 von 10. Der Datenschutzbeauftragter tritt dem Projekt bei und identifiziert 12 neue Datenschutz-Anforderungen, von denen 3 bestehende akzeptierte Anforderungen direkt widersprechen. Das Budget ist erschöpft. Was ist die RICHTIGE RE-Reaktion?',
   options:['Die 12 neuen Anforderungen ablehnen — das Budget lässt keine Änderungen mehr zu.','Alle 12 Anforderungen sofort in den Backlog aufnehmen und im nächsten Sprint umsetzen.','Die neuen Anforderungen prüfen, Konflikte mit bestehenden dokumentieren, Risiken bewerten und Priorisierung mit dem Management abstimmen.','Den Datenschutzbeauftragten bitten, erst nach Projektabschluss Feedback zu geben.'],
   answer:2,explanation:'Spät eingebrachte Anforderungen von legitimen Stakeholdern können nicht einfach abgelehnt werden (A) — besonders nicht von einem Datenschutzbeauftragten, da DSGVO-Verstöße rechtliche Konsequenzen haben. Option B ignoriert Budget und Konflikte. Option D ist unprofessionell. Die RE-Pflicht: alle 12 erfassen, die 3 Konflikte präzise dokumentieren, Risiken und Kosten bewerten und Management entscheiden lassen.',lz:'LZ 4-1',k:'K3'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'scenario',
   text:'Feature X: 3 Stakeholder widersprechen sich in 3 Moderationsrunden. Keine Einigung. Budget für weitere Workshops ist verbraucht. Was ist die NÄCHSTE RE-Maßnahme?',
   options:['Feature X aus dem Scope streichen — unlösbare Konflikte blockieren das Projekt.','Die Mehrheitsposition nehmen — 2 von 3 Stakeholdern sind sich einig.','Den Eskalationsweg nutzen: Konflikt und alle Positionen formell an den Projektentscheider/Sponsor berichten und eine bindende Entscheidung einfordern.','Feature X zurückstellen und nach Projektabschluss als Change Request neu einreichen.'],
   answer:2,explanation:'Wenn RE-Moderation nicht zur Einigung führt, endet die RE-Kompetenz — die Entscheidungsbefugnis liegt beim Projektverantwortlichen/Sponsor. RE-Pflicht: vollständige, neutrale Dokumentation aller Positionen, Risiken und Optionen, Eskalation an den Entscheider, bindende Entscheidung dokumentieren. Eigenmächtig streichen (A), Mehrheit nehmen (B) oder verschieben (D) sind keine RE-konformen Reaktionen.',lz:'LZ 8-4',k:'K2'},

  // ══ v3.9 FIX 3 — PRÜFUNGSAMBIGUITÄT: 2 technisch korrekte, 1 am besten ════════

  {type:'single',chapter:'Kap. 4 · Anforderungserhebung',errorType:'trap',
   text:'Ein Experte kann seine Arbeitsabläufe nicht verbalisieren: "Das mache ich automatisch." Zwei Optionen erscheinen sinnvoll: (A) Strukturiertes Interview und (B) Feldbeobachtung. Welche ist laut IREB die GEEIGNETERE Erhebungstechnik?',
   options:['Strukturiertes Interview — gezielt formulierte Fragen helfen dem Experten, sein Wissen zu explizieren.','Feldbeobachtung (Ethnografie) — der RE beobachtet die Tätigkeit direkt, ohne auf Verbalisierung angewiesen zu sein.','Beide Techniken sind gleichwertig geeignet — es kommt auf den Kontext an.','Prototyping — ein früher Prototyp hilft dem Experten, sein Wissen zu erkennen.'],
   answer:1,explanation:'Dies ist eine klassische Ambiguitätsfalle: Ein Interview KANN helfen (Option A ist nicht falsch), aber es scheitert genau dann, wenn der Experte sein Wissen nicht verbalisieren KANN — das ist das definierte Problem im Szenario. Feldbeobachtung umgeht die Verbalisierungshürde vollständig. Bei implizitem Wissen (tacit knowledge) ist Feldbeobachtung die primär empfohlene IREB-Technik.',lz:'LZ 4-2',k:'K2'},

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'trap',
   text:'Zwei Anforderungen widersprechen sich logisch. Stakeholder A hat höhere Priorität als Stakeholder B. Löst die Priorität den Konflikt?',
   options:['Ja — höhere Priorität bedeutet, dass Stakeholder As Anforderung gilt und Stakeholder Bs Anforderung entfällt.','Ja — Priorisierung ist der IREB-Standardmechanismus zur Konfliktlösung.','Nein — Priorität regelt Implementierungsreihenfolge, nicht logische Widersprüche. Ein inhaltlicher Konflikt erfordert Verhandlung oder Eskalation.','Nein — logische Widersprüche können grundsätzlich nicht aufgelöst werden.'],
   answer:2,explanation:'Priorisierung und Konfliktlösung sind verschiedene RE-Aktivitäten. Priorität regelt: was wird zuerst gebaut? Ein logischer Widerspruch (z. B. "System MUSS Daten löschen" vs. "System MUSS Daten 10 Jahre archivieren") kann nicht durch Priorität aufgelöst werden — beide Anforderungen bleiben aktiv und widersprüchlich. Lösung erfordert Verhandlung oder Eskalation an Entscheider.',lz:'LZ 6-3',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'trap',
   text:'Datenflüsse zwischen Subsystemen sollen modelliert werden. Zwei Notationen sind möglich: Datenflussdiagramm (DFD Level 0) und BPMN. Welche ist für REINE DATENFLÜSSE direkter geeignet?',
   options:['BPMN — es ist der ISO-Standard für Prozesse und damit immer vorzuziehen.','Datenflussdiagramm (DFD) — es modelliert explizit Datenflüsse, Datenspeicher und Transformationen, ohne Prozesssteuerungslogik zu vermischen.','Beide sind gleichwertig — die Wahl ist reine Konvention.','UML-Sequenzdiagramm — es zeigt den zeitlichen Verlauf von Nachrichten zwischen Komponenten.'],
   answer:1,explanation:'BPMN ist ausgezeichnet für Geschäftsprozesse mit Ablaufsteuerung (Gateways, Events, Lanes). Für reine Datenflüsse (welche Daten fließen wohin, welche Datenspeicher existieren) ist das DFD direkter — es abstrahiert Prozesssteuerung weg und fokussiert auf Daten und Transformationen. BPMN wäre nicht falsch, aber überladen für diese Aufgabe.',lz:'LZ 5-3',k:'K2'},

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'trap',
   text:'Die DSGVO verpflichtet das zu bauende System zur Datenlöschung nach 3 Jahren. Ist der Gesetzgeber (EU-Parlament) ein STAKEHOLDER im IREB-Sinne?',
   options:['Nein — Stakeholder sind nur natürliche Personen oder direkte Organisationen, die mit dem System arbeiten.','Ja — im IREB-Sinne ist jede Person oder Organisation ein Stakeholder, die Anforderungen stellt oder von ihnen betroffen ist — einschließlich Gesetzgeber und Regulatoren.','Nein — der Gesetzgeber ist ein externer Einflussfaktor, aber kein Stakeholder.','Ja — aber nur wenn der Gesetzgeber aktiv am Projekt mitwirkt.'],
   answer:1,explanation:'IREB definiert Stakeholder weit: jede Person, Gruppe oder Organisation, die ein Interesse an oder einen Einfluss auf die Systemanforderungen hat oder von ihnen betroffen ist. Der Gesetzgeber (DSGVO, HGB, FDA) diktiert Anforderungen, ohne am Projekt teilzunehmen — er ist dennoch ein Stakeholder, dessen Anforderungen identifiziert und berücksichtigt werden müssen. Option C unterscheidet künstlich zwischen "Einflussfaktor" und "Stakeholder".',lz:'LZ 2-4',k:'K2'},

  // ══ v3.9 FIX 4 — LE9: INVEST-Verletzungen, User Stories, Abnahmekriterien ════

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'trap',
   text:'User Story: "Als Nutzer möchte ich, dass das System schnell reagiert, damit ich effizient arbeiten kann." Welches INVEST-Kriterium verletzt diese Story am offensichtlichsten?',
   options:['I — Independent: Die Story hängt von anderen Stories ab.','N — Negotiable: Die Story ist zu starr formuliert.','T — Testable: "Schnell" ist nicht messbar — kein Abnahmekriterium kann definiert werden.','S — Small: Die Story ist zu groß für einen Sprint.'],
   answer:2,explanation:'"Schnell" ist ein klassischer nicht-testbarer Begriff. Ein Abnahmekriterium wie "Antwortzeit < X ms unter Y Last" kann nicht aus der Story abgeleitet werden. Das verletzt T (Testable) im INVEST-Modell. Eine gute Story muss mit konkreten, messbaren Abnahmekriterien (Given-When-Then) verifizierbar sein. Alle anderen Optionen treffen nicht zu: die Story ist unabhängig (I ✓), verhandelbar (N ✓) und klein genug (S ✓).',lz:'LZ 9-1',k:'K2'},

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'trap',
   text:'User Story: "Als Produktmanager möchte ich alle Features der alten Software im neuen System haben, damit Nutzer nicht umlernen müssen." Welche INVEST-Kriterien werden verletzt?',
   options:['Nur I (Independent) — die Story hängt von der alten Software ab.','S (Small) und E (Estimable) — "alle Features" ist unabgegrenzt und nicht schätzbar.','Nur T (Testable) — "alle Features" kann nicht getestet werden.','V (Valuable) — der Nutzen ist unklar formuliert.'],
   answer:1,explanation:'"Alle Features der alten Software" verletzt S (Small): eine Story, die hunderte Features umfasst, kann nicht in einem Sprint umgesetzt werden. Gleichzeitig verletzt sie E (Estimable): ohne Auflistung der Features kann der Aufwand nicht geschätzt werden. Dies ist ein häufiges Anti-Muster — eine "Epic" wird fälschlicherweise als einzelne User Story formuliert. Sie muss in einzelne schätzbare Stories aufgeteilt werden.',lz:'LZ 9-1',k:'K2'},

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'trap',
   text:'Welche der folgenden User Stories folgt korrekt dem IREB-Format UND erfüllt die INVEST-Kriterien am besten?',
   options:['Das System soll Berichte im PDF-Format exportieren können.','Als Buchhalter möchte ich monatliche Umsatzberichte als PDF exportieren, damit ich sie an den Steuerberater weiterleiten kann.','Als Nutzer möchte ich alle Berichte und Statistiken exportieren können, damit ich Daten analysieren kann.','Als Administrator möchte ich mehr Kontrolle über das System haben.'],
   answer:1,explanation:'Option B: klare Rolle (Buchhalter), konkretes Ziel (monatliche Umsatzberichte PDF), klarer Nutzen (Weiterleitung an Steuerberater). Klein genug (ein Berichtstyp), testbar (PDF-Export vorhanden?), unabhängig, schätzbar. Option A verwendet kein User-Story-Format. Option C ist zu groß (S) und vage (T). Option D ist vage in Ziel und Nutzen — "mehr Kontrolle" ist nicht testbar (T) und nicht schätzbar (E).',lz:'LZ 9-1',k:'K2'},

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'trap',
   text:'Abnahmekriterium für eine Login-Story: "Der Login MUSS sicher und benutzerfreundlich sein." Was stimmt damit NICHT?',
   options:['Es ist korrekt formuliert — "sicher" und "benutzerfreundlich" sind akzeptierte Industriestandards.','Es verletzt das T-Kriterium von INVEST — weder "sicher" noch "benutzerfreundlich" sind messbar oder testbar.','Es ist zu kurz — Abnahmekriterien müssen mindestens drei Bedingungen enthalten.','Es ist akzeptabel als übergeordnetes Qualitätsziel, solange technische Details im Code festgelegt werden.'],
   answer:1,explanation:'Abnahmekriterien sind Tests, keine Wunschlisten. "Sicher" und "benutzerfreundlich" sind adjektive Qualitätsziele ohne Operationalisierung — kein Tester kann prüfen, ob sie erfüllt sind. Korrekte Abnahmekriterien wären z. B.: "Gegeben ein falsches Passwort, wenn 3 Versuche fehlschlagen, dann wird der Account für 5 Minuten gesperrt." INVEST T (Testable) gilt für Stories UND ihre Abnahmekriterien.',lz:'LZ 9-1',k:'K2'},

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'terminology',
   text:'Welches der folgenden Abnahmekriterien folgt dem GIVEN-WHEN-THEN-Format KORREKT?',
   options:['"Das System soll den Nutzer nach 3 Fehlversuchen sperren."','"Gegeben ein registrierter Nutzer, wenn er 3 falsche Passwörter eingibt, dann wird sein Account für 15 Minuten gesperrt."','"Wenn der Nutzer sich einloggt, soll das System sicher reagieren."','"Der Account wird nach Fehlversuchen gesperrt (Details folgen)."'],
   answer:1,explanation:'Given-When-Then (GWT) ist das Standard-Abnahmeformat: GIVEN = Ausgangszustand (registrierter Nutzer), WHEN = auslösendes Ereignis (3 falsche Passwörter), THEN = erwartetes Ergebnis (Account 15 min gesperrt). Option B erfüllt alle drei Teile präzise und testbar. Option A ist eine Anforderung, kein Abnahmekriterium. Option C fehlt der GIVEN-Teil. Option D ist ein Platzhalter, kein Kriterium.',lz:'LZ 9-1',k:'K2'},

  // ══ v3.9 FIX 5 — CROSS-LE: kapitelübergreifende Fragen ══════════════════════

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'scenario',
   text:'Eine akzeptierte Anforderung wird geändert (neue Datenschutzregel). Sie war bereits durch Reviews validiert. Was MUSS nach der Änderung zwingend erfolgen?',
   options:['Nichts — eine bereits validierte Anforderung bleibt gültig, auch wenn sie geändert wird.','Die geänderte Anforderung MUSS erneut durch den Review-Prozess (Validierung) geführt werden.','Die Änderung wird dokumentiert, aber eine Re-Validierung ist optional und abhängig vom Änderungsumfang.','Die Änderung wird direkt in die Implementierung übergeben, da das Review bereits stattgefunden hat.'],
   answer:1,explanation:'Änderungen invalidieren vorherige Reviews. Eine geänderte Anforderung ist eine neue Version — sie hat nicht mehr denselben geprüften Inhalt. Change Management (LE8) und Anforderungsvalidierung (LE7) sind verzahnt: nach jeder inhaltlichen Änderung ist eine Re-Validierung Pflicht. Dies gilt unabhängig vom Änderungsumfang — auch kleine Änderungen können neue Fehler oder Widersprüche einführen.',lz:'LZ 8-4',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'scenario',
   text:'Eine Anforderung ist in natürlicher Sprache dokumentiert als: "Das System soll benutzerfreundlich sein." Welches QUALITÄTSMERKMAL (LE6) wird durch diese Dokumentationsform (LE5) direkt verletzt?',
   options:['Vollständigkeit — wichtige Details fehlen.','Konsistenz — der Begriff "benutzerfreundlich" widerspricht anderen Anforderungen.','Prüfbarkeit/Verifizierbarkeit — die Anforderung kann nicht in einen testbaren Zustand überführt werden.','Eindeutigkeit — der Begriff ist für alle Leser klar.'],
   answer:2,explanation:'Dieser Cross-LE-Fall zeigt: die DOKUMENTATIONSFORM (natürliche Sprache ohne Operationalisierung, LE5) beeinflusst direkt die erreichbare QUALITÄT (LE6). "Benutzerfreundlich" ist nicht verifizierbar (kein Messkriterium, kein Schwellenwert). Eine Satzschablone allein reicht nicht — der Inhalt muss messbare Akzeptanzkriterien enthalten. Vollständigkeit (A) und Konsistenz (B) sind nicht das primäre Problem.',lz:'LZ 5-1',k:'K2'},

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'scenario',
   text:'Ein RE-Team beginnt mit Stakeholder-Interviews, bevor der Systemkontext abgegrenzt wurde. Welches Problem entsteht?',
   options:['Keine Probleme — Stakeholder-Interviews liefern die Informationen, die zur Systemkontextabgrenzung benötigt werden.','Das Team erhebt möglicherweise Anforderungen für Elemente, die außerhalb des Systemkontexts liegen, oder übersieht relevante Nachbarsysteme und Einflussfaktoren.','Die Erhebung ist ineffizient, aber inhaltlich korrekt.','Ohne Systemkontext kann keine Priorisierung erfolgen.'],
   answer:1,explanation:'Der Systemkontext (LE2) legt fest, was IN-SCOPE und was OUT-OF-SCOPE ist. Ohne diese Abgrenzung fehlt dem RE-Team der Rahmen: Stakeholder können Anforderungen für Out-of-Scope-Elemente einbringen, Nachbarsysteme können übersehen werden, und Schnittstellen werden falsch oder gar nicht erfasst. Die Systemkontextanalyse ist konzeptionell eine Voraussetzung für gezielte Erhebung (LE4).',lz:'LZ 2-1',k:'K2'},

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'scenario',
   text:'Der Projektleiter nach abgeschlossenen Entwicklertests: "Validierung ist abgeschlossen — das System ist getestet." Was ist daran FALSCH?',
   options:['Nichts — erfolgreiche Tests sind der Abschluss der Validierung im IREB-Sinne.','Tests prüfen, ob das System korrekt gebaut wurde (Verifikation). Validierung im RE-Sinne prüft, ob die ANFORDERUNGEN die echten Stakeholder-Bedürfnisse abbilden — das können Tests allein nicht leisten.','Validierung ist optional, wenn die Tests alle Anforderungen abdecken.','Validierung findet ausschließlich am Anfang des RE-Prozesses statt.'],
   answer:1,explanation:'Klassische Verwechslung: Tests = Verifikation ("Bauen wir es richtig?"). RE-Validierung = "Bauen wir das Richtige?" — d. h. spiegeln die Anforderungen die echten Bedürfnisse wider? Validierung erfordert Stakeholder-Feedback auf Anforderungsniveau (nicht Systemtests). Review-Techniken (LE7) sind RE-Validierungsinstrumente. Selbst 100% Testabdeckung validiert nur, ob das System den Anforderungen entspricht — nicht ob die Anforderungen korrekt waren.',lz:'LZ 3-3',k:'K2'},

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'scenario',
   text:'Eine akzeptierte Anforderung widerspricht einer anderen (Inkonsistenz). Sie wurde bereits von Stakeholdern freigegeben und ist im Change-Log dokumentiert. Was ist der korrekte nächste Schritt?',
   options:['Die qualitativ schlechtere Anforderung entfernen — Konsistenz hat Vorrang vor Stakeholder-Akzeptanz.','Den Widerspruch im Anforderungsdokument als "bekanntes Problem" markieren und weiterarbeiten.','Den Konflikt formell als Änderungsantrag (Change Request) erfassen, beide Stakeholder in eine Konfliktlösung einbeziehen, die Entscheidung dokumentieren und die korrigierte Anforderung erneut validieren.','Den Widerspruch dem Entwicklungsteam mitteilen und die Lösung im Code treffen lassen.'],
   answer:2,explanation:'Dieser Fall verknüpft LE6 (Qualitätsfehler: Inkonsistenz) mit LE8 (Anforderungsverwaltung: Change Management). Ein Qualitätsfehler nach Akzeptanz ist nicht einfach zu löschen — er ist eine Änderung an einer bereits akzeptierten Anforderung und muss als Change Request behandelt werden. Stakeholder müssen einbezogen werden (ihre Akzeptanz war Bestandteil des Baselines). Nach Entscheidung: Re-Validierung Pflicht. Options A, B, D umgehen jeweils einen Pflichtschritt.',lz:'LZ 6-3',k:'K3'},

  // ══ v3.9b — LE2 LÜCKENSCHLUSS: Grenzentscheidung, Interaktionstypen, Modellierung ══

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'terminology',
   text:'IREB unterscheidet verschiedene TYPEN VON KONTEXTELEMENTEN. Welche Aufteilung ist korrekt?',
   options:['Funktionale, nichtfunktionale und Randbedingungsanforderungen.','Personen/Rollen, Nachbarsysteme sowie Prozesse und Ereignisse (und ggf. physische Objekte/Geräte).','Input-Systeme, Output-Systeme und bidirektionale Systeme.','Direkte Stakeholder, indirekte Stakeholder und externe Regulatoren.'],
   answer:1,explanation:'IREB klassifiziert Kontextelemente nach ihrer Natur: (1) Personen und Rollen (menschliche Akteure, die mit dem System interagieren), (2) Nachbarsysteme (externe IT-Systeme mit Schnittstellen zum System), (3) Prozesse und Ereignisse (externe Abläufe, die das System auslösen oder von ihm ausgelöst werden) sowie physische Objekte/Geräte. Diese Typen helfen, keine Kontextelementkategorie zu übersehen.',lz:'LZ 2-2',k:'K1'},

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'scenario',
   text:'Das Projektteam diskutiert: Soll das bestehende Legacy-Zahlungssystem in die Systemgrenze eingeschlossen oder als Nachbarsystem behandelt werden? Welches Kriterium ist AUSSCHLAGGEBEND für diese Entscheidung?',
   options:['Die technische Komplexität des Zahlungssystems — komplexe Systeme gehören nach außen.','Ob das Zahlungssystem im Rahmen des Projekts vom Team entwickelt, geändert oder kontrolliert wird.','Die Anzahl der Schnittstellen — mehr als drei Schnittstellen = Nachbarsystem.','Die Kosten — Systeme, die Kosten verursachen, bleiben außerhalb der Grenze.'],
   answer:1,explanation:'Das entscheidende Kriterium für die Systemgrenze ist Kontrollierbarkeit und Scope: Was entwickelt oder verändert das Projektteam? Das liegt INNERHALB der Systemgrenze. Was vorgegeben ist und nicht verändert wird, liegt AUSSERHALB — im Kontext. Das Zahlungssystem bleibt Nachbarsystem, wenn das Team es nicht anpassen darf/soll. Diese Entscheidung ist eine der wichtigsten RE-Weichenstellungen zu Projektbeginn.',lz:'LZ 2-2',k:'K2'},

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'trap',
   text:'Ein Barcode-Scanner übergibt Artikelnummern an das Warenwirtschaftssystem. Wie wird er im Systemkontextmodell korrekt klassifiziert?',
   options:['Als Nachbarsystem — er kommuniziert mit dem System über eine definierte Schnittstelle.','Als menschlicher Akteur — ein Mitarbeiter bedient den Scanner.','Als physisches Kontextelement/Gerät — er ist ein technisches Gerät außerhalb der Systemgrenze, das Daten liefert.','Als Teil des Systems — er ist Hardware des Gesamtsystems.'],
   answer:2,explanation:'Ein Barcode-Scanner ist kein IT-System mit eigener Logik (kein Nachbarsystem) und kein Mensch (kein menschlicher Akteur). Er ist ein physisches Gerät im Systemkontext, das über eine Schnittstelle Daten liefert — ein typisches physisches Kontextelement. Diese Unterscheidung ist relevant, weil physische Geräte andere Schnittstellenanforderungen erzeugen als IT-Systeme oder Menschen.',lz:'LZ 2-2',k:'K2'},

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'terminology',
   text:'Welche Notation ist die PRIMÄRE IREB-Technik, um den Systemkontext auf höchster Abstraktionsstufe darzustellen?',
   options:['UML-Klassendiagramm — modelliert statische Datenstrukturen des Systems.','Kontextdiagramm (DFD Level 0) — zeigt das System als Black Box mit allen externen Entitäten und Datenflüssen über die Systemgrenze.','UML-Sequenzdiagramm — zeigt zeitlichen Ablauf von Nachrichten zwischen Komponenten.','BPMN-Prozessdiagramm — zeigt Geschäftsprozessabläufe.'],
   answer:1,explanation:'Das Kontextdiagramm (auch als DFD Level 0 oder UML-Kontextdiagramm realisiert) ist das zentrale IREB-Instrument für die Systemkontextmodellierung: Das System erscheint als einzelne, undifferenzierte Einheit ("Black Box"), alle externen Entitäten (Akteure, Nachbarsysteme) erscheinen außerhalb, Pfeile zeigen Datenflüsse oder Interaktionen über die Grenze. Klassendiagramme, Sequenzdiagramme und BPMN zeigen andere Aspekte.',lz:'LZ 2-3',k:'K1'},

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'trap',
   text:'Worin unterscheidet sich ein KONTEXTDIAGRAMM grundlegend von einem UML-ANWENDUNGSFALLDIAGRAMM (Use Case Diagram)?',
   options:['Das Kontextdiagramm zeigt einzelne Systemfunktionen; das Use-Case-Diagramm zeigt Datenflüsse.','Das Kontextdiagramm zeigt Datenflüsse und Systemgrenzen ohne Funktionsdetails; das Use-Case-Diagramm zeigt, welche Systemfunktionen welche Akteure nutzen.','Beide zeigen dasselbe — sie sind vollständig austauschbar.','Das Use-Case-Diagramm enthält interne Systemkomponenten; das Kontextdiagramm nicht.'],
   answer:1,explanation:'Das Kontextdiagramm beantwortet "Was sind alle externen Entitäten und welche Daten/Signale fließen über die Systemgrenze?" — ohne Systemfunktionen zu benennen. Das Use-Case-Diagramm beantwortet "Welche Funktionen bietet das System, und welche Akteure nutzen sie?" — es zeigt das System als weißen Kasten mit einzelnen Use Cases. Beide sind komplementär: Kontextdiagramm = Scope-Überblick, Use-Case-Diagramm = Funktionsübersicht.',lz:'LZ 2-3',k:'K2'},

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'scenario',
   text:'Im Kontextdiagramm ist ein Pfeil von "Steuerbehörde" zum System eingezeichnet. Was repräsentiert dieser Pfeil korrekt?',
   options:['Die Steuerbehörde ist ein interner Stakeholder des Projekts.','Eine Schnittstelle: die Steuerbehörde liefert eine Anforderung oder Regulierung, die über die Systemgrenze wirkt (z. B. Meldepflicht, Datenformat).','Der Pfeil ist falsch — staatliche Stellen gehören nie in ein Kontextdiagramm.','Die Steuerbehörde hat Zugriffsrechte auf das System.'],
   answer:1,explanation:'Im Kontextdiagramm repräsentiert ein Pfeil eine Schnittstelle — eine Interaktion, einen Datenfluss oder einen Einfluss, der die Systemgrenze kreuzt. Eine Steuerbehörde kann z. B. Meldedaten vom System empfangen oder regulatorische Anforderungen (Datenformate, Aufbewahrungsfristen) vorgeben. Staatliche und regulatorische Stellen sind vollkommen gültige externe Entitäten im Kontextdiagramm.',lz:'LZ 2-3',k:'K2'},

  // ══ v3.9g — LE8 LÜCKENSCHLUSS: Baselines tief, Priorisierungstechniken, Attributverwaltung ══

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'terminology',
   text:'Welche STANDARDATTRIBUTE enthält eine vollständige Anforderung in einem professionellen RE-Tool neben Titel und Text?',
   options:['Ausschließlich ID und Priorität — alle anderen Informationen gehören in die Beschreibung.','ID, Status, Priorität, Autor, Quelle/Herkunft, Version, Stabilität und ggf. Risiko und Aufwandsschätzung.','Nur ID, Datum und Genehmigungsstatus — alles weitere ist projektspezifisch.','ID, Kategorie und Testimplementierung — alle anderen Attribute sind optional.'],
   answer:1,explanation:'Vollständige Anforderungsattribute nach IREB: (1) ID — eindeutige Referenz, (2) Status — Lebenszykluszustand (vorgeschlagen/genehmigt/implementiert/getestet/abgelehnt), (3) Priorität — Umsetzungsreihenfolge, (4) Autor — wer die Anforderung eingebracht hat, (5) Quelle/Herkunft — welcher Stakeholder, welches Dokument, (6) Version — aktuelle Versionskennung, (7) Stabilität — Änderungswahrscheinlichkeit, (8) Risiko und Aufwand — für Planung. Diese Attribute ermöglichen systematisches Filtering, Reporting und Planung.',lz:'LZ 8-2',k:'K1'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'scenario',
   text:'Wie verändert sich das ATTRIBUT "Status" einer Anforderung typischerweise im Projektverlauf?',
   options:['Status ändert sich nie — er wird einmalig bei Erstellung gesetzt.','Status durchläuft einen Lebenszyklus: vorgeschlagen → prüfend → genehmigt → implementiert → getestet → abgenommen (oder: abgelehnt/zurückgezogen an verschiedenen Punkten).','Status zeigt ausschließlich, ob die Anforderung genehmigt oder abgelehnt wurde.','Status wird nur vom Auftraggeber gesetzt und vom RE-Team nicht verändert.'],
   answer:1,explanation:'Der Status ist das dynamischste Attribut im Anforderungslebenszyklus. Er spiegelt wider, wo sich die Anforderung im Prozess befindet: von der initialen Einreichung über die RE-Prüfung und Genehmigung bis zu Implementierung, Test und finaler Abnahme — oder Ablehnung an verschiedenen Punkten. Tools wie DOORS oder Jira nutzen Status-Übergänge, um Anforderungsfortschritt zu tracken und Berichte über Anforderungsabdeckung zu erstellen.',lz:'LZ 8-2',k:'K2'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'scenario',
   text:'Wofür sind ANFORDERUNGSATTRIBUTE im Projektmanagement praktisch nützlich?',
   options:['Ausschließlich für die finale Dokumentation — während der Entwicklung spielen sie keine Rolle.','Für Filterung (z. B. "alle ungenehmigten Must-Have-Anforderungen"), Fortschrittsreporting ("% implementiert"), Risikoanalyse und Release-Planung.','Nur zur Erfüllung formaler Prozessanforderungen ohne praktischen Nutzen.','Ausschließlich für externe Auditoren — interne Teams nutzen andere Tracking-Methoden.'],
   answer:1,explanation:'Attribute ermöglichen effizientes Management: Filter nach Status zeigt, welche Anforderungen noch offen sind. Filter nach Priorität fokussiert Ressourcen. Stabilität-Attribut warnt vor instabilen Anforderungen. Quelle ermöglicht Stakeholder-basiertes Reporting. Aufwand + Priorität ermöglicht Release-Planung. Ohne strukturierte Attribute wäre die Verwaltung von 200+ Anforderungen kaum durchführbar.',lz:'LZ 8-2',k:'K2'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'scenario',
   text:'Wann sollte typischerweise eine neue BASISLINIE (Baseline) erstellt werden?',
   options:['Immer nach jeder einzelnen Anforderungsänderung.','An definierten Projektmeilensteinen — z. B. nach Abschluss der Erhebungsphase, vor Sprint-Start, vor Systemtest-Beginn oder vor einem Release.','Ausschließlich am Projektanfang — eine einzige Baseline für das gesamte Projekt ist ausreichend.','Nur wenn der Auftraggeber eine Änderung genehmigt.'],
   answer:1,explanation:'Baselines werden an Schnittstellen zwischen Phasen oder Entscheidungspunkten erstellt: (1) Ende der Erhebungsphase (Entwicklungs-Baseline), (2) Beginn des Systemtests (Test-Baseline), (3) vor einem Release (Release-Baseline), (4) vor Sprint-Start in agilen Projekten. Zu viele Baselines (nach jeder Änderung) wären operativ untragbar; zu wenige Baselines (nur eine) würden Rückverfolgbarkeit und Rollback ermöglichen.',lz:'LZ 8-5',k:'K2'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'trap',
   text:'Ein Projekt hat drei Baselines: B1 (Entwicklungsstart), B2 (Testbeginn), B3 (Release-Kandidat). Während des Tests werden kritische Fehler in B3 entdeckt, die auf fehlerhafte Anforderungen zurückgehen. Was ist der Nutzen der früheren Baselines?',
   options:['Frühere Baselines haben nach Erstellung von B3 keinen Nutzen mehr.','B1 und B2 ermöglichen einen Vergleich, um festzustellen, wann die problematischen Anforderungen eingeführt wurden — und ggf. auf einen früheren Stand zurückzukehren.','Frühere Baselines sind nur für externe Audits relevant, nicht für die laufende Entwicklung.','Nur B2 (Testbeginn) ist relevant, da B1 zu alt ist.'],
   answer:1,explanation:'Baseline-Recovery ist ein zentraler Nutzen von Versionierung: Wenn B3 fehlerhafte Anforderungen enthält, ermöglicht der Vergleich B1 → B2 → B3, zu identifizieren, WANN die Anforderungsänderung eingeführt wurde. Das Team kann auf B2 oder B1 zurückgreifen, die Fehlerursache lokalisieren und gezielt korrigieren, statt das gesamte Dokument neu zu erarbeiten. Ohne Baselines wäre der Fehlerzustand nicht rekonstruierbar.',lz:'LZ 8-5',k:'K2'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'terminology',
   text:'Was ist der PAARWEISE VERGLEICH (pairwise comparison) als Priorisierungstechnik, und was ist seine größte Einschränkung?',
   options:['Eine Technik, bei der Stakeholder ihre Favoriten nennen — Einschränkung: subjektiv.','Jede Anforderung wird mit jeder anderen verglichen, um eine relative Reihenfolge zu erstellen. Einschränkung: bei n Anforderungen entstehen n×(n-1)/2 Vergleichspaare — bei 50 Anforderungen sind das 1.225 Vergleiche, was unpraktikabel wird.','Eine Methode, bei der je zwei Stakeholder miteinander diskutieren — Einschränkung: Zeitaufwand.','Eine mathematische Methode aus der Spieltheorie — Einschränkung: setzt Zahlenwerte voraus.'],
   answer:1,explanation:'Der paarweise Vergleich liefert eine vollständige Präferenzordnung durch Direktvergleiche: Welche Anforderung ist wichtiger, A oder B? Das Ergebnis ist präzise, aber der Aufwand skaliert quadratisch: 10 Anforderungen = 45 Vergleiche, 20 = 190, 50 = 1.225, 100 = 4.950. Für kleine Anforderungsmengen (10-15) ist er sinnvoll. Für größere Mengen ist er unpraktikabel — dann sind MoSCoW oder Wiegers-Scoring effizienter.',lz:'LZ 8-6',k:'K1'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'terminology',
   text:'Was ist das GRUNDPRINZIP der NUTZWERTANALYSE (Weighted Scoring) als Priorisierungstechnik?',
   options:['Anforderungen werden nach einem einzigen Kriterium (z. B. Wichtigkeit für den Nutzer) geordnet.','Jede Anforderung wird nach mehreren gewichteten Kriterien bewertet (z. B. Kundenwert 40%, Risiko 30%, Aufwand 30%) — die Summe der gewichteten Bewertungen ergibt eine Gesamtpunktzahl für das Ranking.','Anforderungen werden ausschließlich nach Implementierungsaufwand in zwei Kategorien eingeteilt.','Stakeholder stimmen anonym ab, und die Mehrheit entscheidet die Reihenfolge.'],
   answer:1,explanation:'Die Nutzwertanalyse löst das Problem, dass verschiedene Kriterien gleichzeitig relevant sind: Nur nach Kundenwert zu priorisieren ignoriert Risiko und Aufwand. Die Methode macht Kriteriengewichtung explizit und nachvollziehbar. Beispiel: Anforderung A: Wert=9, Risiko=7, Aufwand=5 → gewichtete Summe. Anforderung B: Wert=10, Risiko=3, Aufwand=9 → niedrigere Gesamtpunktzahl trotz höherem Wert. Stärke: transparent und rational. Schwäche: Aufwand für Bewertungsmatrix.',lz:'LZ 8-6',k:'K1'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'scenario',
   text:'Ein Team hat 80 Anforderungen und muss priorisieren. 5 Stakeholder, 3 Tage Budget, heterogene Interessen, keine klare Mehrheit. Welche Priorisierungsmethode ist am geeignetsten?',
   options:['Paarweiser Vergleich — liefert die präziseste Reihenfolge.','Kano-Modell — klassifiziert nach Kundenzufriedenheitseinfluss und hilft, Must-haves von Begeisterungsmerkmalen zu trennen.','MoSCoW mit moderierter Stakeholder-Session — schnell, partizipativ, liefert direkt umsetzbare Scope-Entscheidungen trotz heterogener Interessen.','Nutzwertanalyse — die mathematische Präzision löst heterogene Interessenkonflikte.'],
   answer:2,explanation:'K3-Abwägung: Paarweiser Vergleich (80 Anforderungen = 3.160 Vergleiche) ist mit 3 Tagen und 5 Stakeholdern unrealistisch. Nutzwertanalyse ist präziser, aber die Bewertungsmatrix für 80 Anforderungen × mehrere Kriterien × 5 Stakeholder würde das Budget sprengen. Kano-Modell kategorisiert, aber löst keine Priorisierungsrangfolge. MoSCoW ist der pragmatische Kompromiss: schnell, transparent, stakeholder-partizipativ, direkt in Release-Planung übertragbar.',lz:'LZ 8-6',k:'K3'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'scenario',
   text:'Nach Sprint 4 hat sich der Markt verändert: Ein Wettbewerber bringt ein ähnliches Produkt heraus. Was sollte das RE-Team bezüglich der PRIORISIERUNG tun?',
   options:['Nichts — Priorisierung wird nur einmalig zu Projektbeginn festgelegt.','Die bestehende Priorisierung überprüfen und ggf. anpassen: Features, die zur Differenzierung vom Wettbewerber beitragen, sollten aufgewertet werden. Priorisierung ist ein lebendiger Prozess.','Die Priorisierung nur ändern, wenn ein formaler Change Request vom Auftraggeber eingereicht wurde.','Die gesamte Priorisierung neu starten — alte Priorisierungen sind nach externen Änderungen ungültig.'],
   answer:1,explanation:'Priorisierung ist kein einmaliger Prozessschritt — sie muss auf externe Ereignisse reagieren: Marktveränderungen, Wettbewerb, neue Regulatorik, geänderte Stakeholder-Prioritäten. IREB betont: Anforderungsmanagement ist iterativ. Die bestehende Prioritätseinstufung bleibt gültig bis zur bewussten Anpassung (nicht C — warten auf formalen Change Request ist zu starr) und wird nicht komplett verworfen (nicht D — das verliert die historische Grundlage).',lz:'LZ 8-6',k:'K2'},

  // ══ v3.9f — LE7 LÜCKENSCHLUSS: Eintrittskriterien, Defektklassen, Rollen, Techniken ══════

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'terminology',
   text:'Was sind EINTRITTSKRITERIEN (entry criteria) bei einer formalen Inspektion?',
   options:['Bedingungen, die NACH Abschluss der Inspektion erfüllt sein müssen, bevor das Dokument freigegeben wird.','Bedingungen, die VOR dem Start der Inspektion erfüllt sein müssen — z. B. Dokumentenversion ist stabil, Gutachter haben Vorbereitungszeit, Checklisten liegen vor.','Eine Liste aller Anforderungen, die in der Inspektion geprüft werden sollen.','Die formale Zustimmung des Auftraggebers zur Durchführung der Inspektion.'],
   answer:1,explanation:'Eintrittskriterien schützen die Inspektionsqualität: Eine Inspektion kann nicht produktiv sein, wenn das Dokument noch instabil ist oder Gutachter keine Zeit zur Vorbereitung hatten. Typische Eintrittskriterien: (1) Dokument ist in einer stabilen Version, (2) Gutachter haben ausreichend Vorbereitungszeit erhalten, (3) Checklisten und Prüfbasis sind vorhanden, (4) Moderator ist verfügbar. Fehlt ein Eintrittskriterium, wird die Inspektion verschoben.',lz:'LZ 7-2',k:'K1'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'terminology',
   text:'Was sind AUSTRITTSKRITERIEN (exit criteria) einer formalen Inspektion?',
   options:['Die maximale Anzahl an Fehlern, die eine Inspektion aufdecken darf.','Bedingungen, die erfüllt sein müssen, damit die Inspektion als abgeschlossen gilt — z. B. alle Befunde dokumentiert, Überarbeitung zugewiesen, Follow-up geplant.','Die Liste der Gutachter, die ihre Prüfung abgeschlossen haben.','Das Datum, an dem die Inspektionsergebnisse an den Auftraggeber weitergegeben werden.'],
   answer:1,explanation:'Austrittskriterien stellen sicher, dass die Inspektion einen definierten Abschluss hat — keine offenen Enden. Typische Austrittskriterien: (1) Alle Befunde sind im Protokoll erfasst, (2) Befunde sind nach Schwere klassifiziert, (3) Überarbeitungsaufgaben sind zugewiesen, (4) Entscheidung über Re-Inspektion ist getroffen. Erst wenn alle Austrittskriterien erfüllt sind, gilt die Inspektion als beendet.',lz:'LZ 7-2',k:'K1'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'scenario',
   text:'Kurz vor einer geplanten Inspektion meldet ein Gutachter: "Ich hatte keine Zeit für die individuelle Vorbereitung — ich habe das Dokument noch nicht gelesen." Was sollte der Moderator tun?',
   options:['Die Inspektion starten und den Gutachter trotzdem teilnehmen lassen — Spontanfeedback ist wertvoll.','Die Inspektion verschieben — fehlende Vorbereitung verletzt das Eintrittskriterium der individuellen Vorbereitung und gefährdet die Inspektionsqualität.','Den Gutachter durch eine andere Person kurzfristig ersetzen.','Die Inspektionszeit verlängern, damit der Gutachter sich während der Besprechung vorbereiten kann.'],
   answer:1,explanation:'Die individuelle Vorbereitung (Preparation) ist eine Pflichtphase der formalen Inspektion (Fagan) und damit ein Eintrittskriterium. Ohne Vorbereitung können Gutachter keine fundierten Befunde einbringen — die Inspektion produziert oberflächliche Ergebnisse. Ein professioneller Moderator verschiebt die Inspektion, bis alle Eintrittskriterien erfüllt sind. Spontanfeedback mag wertvoll sein, entspricht aber einem Walkthrough, nicht einer formalen Inspektion.',lz:'LZ 7-2',k:'K2'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'terminology',
   text:'Was ist der Unterschied zwischen einem SCHWERWIEGENDEN Befund (Major Defect) und einem GERINGFÜGIGEN Befund (Minor Defect) in einer Inspektion?',
   options:['Schwerwiegend = viele Wörter müssen geändert werden; geringfügig = nur ein Wort.','Schwerwiegend = verhindert die Nutzung des Dokuments als Entwicklungsgrundlage (Überarbeitung zwingend vor Baseline); geringfügig = kann behoben werden, blockiert aber den Prozess nicht.','Schwerwiegend = vom Kunden gemeldet; geringfügig = intern entdeckt.','Der Unterschied ist projektspezifisch — es gibt keine IREB-Definition.'],
   answer:1,explanation:'Die Defektschwere bestimmt die Prozesskonsequenz: Ein schwerwiegender Befund (Major Defect) macht das Dokument als Baseline ungeeignet — es muss überarbeitet und ggf. re-inspiziert werden. Ein geringfügiger Befund (Minor Defect) kann im Follow-up behoben werden, blockiert aber die Weiterarbeit nicht. Diese Klassifikation trifft der Moderator gemeinsam mit dem Team während der Besprechung — nicht der Autor allein.',lz:'LZ 7-1',k:'K1'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'scenario',
   text:'Nach einer formalen Inspektion wurden 12 Befunde dokumentiert: 3 schwerwiegend, 9 geringfügig. Der Autor überarbeitet das Dokument. Was passiert in der FOLLOW-UP-PHASE?',
   options:['Die Inspektion wird vollständig wiederholt, da Befunde gefunden wurden.','Der Moderator oder ein beauftragter Gutachter prüft, ob alle Befunde korrekt adressiert wurden — insbesondere die schwerwiegenden. Bei vollständiger und korrekter Adressierung wird das Dokument freigegeben.','Der Auftraggeber prüft die Überarbeitungen und gibt das Dokument frei.','Die Gutachter treffen sich erneut für eine vollständige Neu-Inspektion des überarbeiteten Dokuments.'],
   answer:1,explanation:'Die Follow-up-Phase (Phase 6 der Fagan-Inspektion) dient der Verifikation der Überarbeitung — nicht der Neu-Inspektion. Der Moderator oder ein delegierter Gutachter prüft, ob alle dokumentierten Befunde (besonders die schwerwiegenden) korrekt und vollständig adressiert wurden. Nur wenn schwerwiegende Befunde nicht vollständig behoben oder neue schwerwiegende Probleme entdeckt wurden, wird eine Re-Inspektion angesetzt.',lz:'LZ 7-3',k:'K2'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'terminology',
   text:'Welche VALIDIERUNGSTECHNIKEN nennt IREB neben Reviews und Prototyping?',
   options:['Codereview, Unit-Testing und Integrationstests.','Simulation, perspektivenbasiertes Lesen (PBR), Abnahmetests und formale Methoden.','Brainstorming, Mind-Mapping und Storyboarding.','Datenflussanalyse, Zustandsraumanalyse und Modellprüfung.'],
   answer:1,explanation:'IREB nennt mehrere Validierungstechniken: (1) Reviews — systematische Prüfung durch Gutachter, (2) Prototyping — frühe Systemmodelle für Stakeholder-Feedback, (3) Simulation — dynamisches Modell zeigt Systemverhalten für Stakeholder-Validierung, (4) Perspektivenbasiertes Lesen (PBR) — Gutachter nehmen gezielt unterschiedliche Stakeholder-Perspektiven ein, (5) Formale Methoden — mathematische Verifikation von Spezifikationen, (6) Akzeptanztest-Workshops — Stakeholder definieren und validieren Abnahmekriterien. Code-Reviews und Unit-Tests sind Verifikationstechniken.',lz:'LZ 7-4',k:'K1'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'terminology',
   text:'Was ist PERSPEKTIVENBASIERTES LESEN (Perspective-Based Reading, PBR)?',
   options:['Eine Technik, bei der ein Gutachter das Dokument aus verschiedenen Blickwinkeln mehrfach liest.','Eine Review-Technik, bei der jeder Gutachter eine definierte Stakeholder-Perspektive einnimmt (z. B. Tester, Entwickler, Nutzer), um perspektivspezifische Fehlerklassen aufzudecken.','Eine Technik, bei der der Autor das Dokument aus der Sicht des Kunden überarbeitet.','Ein informelles Feedback-Verfahren, bei dem Stakeholder das Dokument selbst annotieren.'],
   answer:1,explanation:'PBR (Perspective-Based Reading) systematisiert Reviews durch Perspektiventrennung: Jeder Gutachter erhält eine spezifische Rolle (z. B. Tester: sucht nicht-prüfbare Anforderungen; Entwickler: sucht unvollständige technische Spezifikationen; Nutzer: sucht Usability-Mängel). Verschiedene Perspektiven decken verschiedene Fehlerklassen auf, die bei einer einheitlichen Gutachterrolle übersehen würden. PBR erhöht die Fehlerfindungsrate bei heterogenen Anforderungsdokumenten.',lz:'LZ 7-4',k:'K2'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'scenario',
   text:'Ein Echtzeitsystem mit komplexem Verhalten soll validiert werden. Stakeholder können das System schwer mental simulieren. Welche Validierungstechnik ist hier besonders geeignet?',
   options:['Formale Inspektion — die höchste Fehlererkennungsrate macht sie immer zur besten Wahl.','Glossarbasiertes Review — einheitliche Terminologie ist die Grundlage jeder Validierung.','Simulation — ein dynamisches Modell des Systemverhaltens ermöglicht Stakeholdern, das System interaktiv zu erleben und Abweichungen von Erwartungen zu erkennen.','Walkthrough — der Autor erklärt das Systemverhalten; Stakeholder geben Feedback.'],
   answer:2,explanation:'Simulation ist besonders wertvoll, wenn: (1) das Systemverhalten zeitabhängig oder komplex ist, (2) Stakeholder das Verhalten nicht aus Spezifikationstext mental ableiten können, (3) Echtzeit-Reaktionen oder Zustandsübergänge im Fokus stehen. Ein dynamisches Simulationsmodell erlaubt "Was-wäre-wenn"-Szenarien — Stakeholder erkennen intuitiv Abweichungen von ihren Erwartungen, ohne die Spezifikation interpretieren zu müssen.',lz:'LZ 7-4',k:'K2'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'scenario',
   text:'Ein RE-Team hat 3 Wochen, begrenzte Gutachterkapazität (2 Personen) und muss sowohl die KORREKTHEIT der Anforderungen als auch die ÜBEREINSTIMMUNG mit Stakeholder-Erwartungen sichern. Welche Kombination von Techniken ist am effizientesten?',
   options:['Zwei vollständige Fagan-Inspektionen — eine für Korrektheit, eine für Stakeholder-Erwartungen.','Ein technisches Review (Korrektheit) kombiniert mit einem Prototyp-Walkthrough mit Stakeholdern (Validierung der Erwartungen) — zwei gezielte Techniken für zwei verschiedene Prüfziele.','Ausschließlich informelle Reviews — bei 3 Wochen und 2 Personen ist mehr nicht möglich.','Ausschließlich Prototyping — Stakeholder-Feedback ist wichtiger als Korrektheit.'],
   answer:1,explanation:'K3-Trade-off: Zwei Fagan-Inspektionen (A) würden die Kapazität überlasten und sind für Stakeholder-Erwartungsvalidierung weniger geeignet. Die Kombination ist effizient: Technisches Review für Korrektheit nutzt die 2 Gutachter optimal (Fachexpertise). Prototyp-Walkthrough für Stakeholder-Validierung adressiert die zweite Prüfdimension ohne vollen Inspektionsaufwand. Korrekte Technikenauswahl nach Prüfziel ist eine K3-Kompetenz.',lz:'LZ 7-4',k:'K3'},

  // ══ v3.9e — LE6 QUALITÄTSKRITERIEN: systematisch, positiv, konstruktiv ══════════════════

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'terminology',
   text:'Welche SECHS Qualitätskriterien nennt IREB für eine EINZELNE Anforderung?',
   options:['Vollständigkeit, Konsistenz, Aktualität, Traceability, Eindeutigkeit, Prüfbarkeit.','Eindeutigkeit, Korrektheit, Vollständigkeit, Konsistenz, Prüfbarkeit, Atomarität.','Prüfbarkeit, Atomarität, Modellierbarkeit, Eindeutigkeit, Relevanz, Umsetzbarkeit.','Korrektheit, Vollständigkeit, Atomarität, Priorisierung, Prüfbarkeit, Lesbarkeit.'],
   answer:1,explanation:'Die sechs IREB-Qualitätskriterien für EINZELNE Anforderungen: (1) Eindeutigkeit — nur eine Interpretation, (2) Korrektheit — inhaltlich richtig, (3) Vollständigkeit — alle notwendigen Informationen vorhanden, (4) Konsistenz — kein Widerspruch zu anderen Anforderungen, (5) Prüfbarkeit — objektiv testbar, (6) Atomarität — genau eine Eigenschaft/Fähigkeit. Diese Liste ist prüfungsrelevant — alle sechs müssen abrufbar sein.',lz:'LZ 6-1',k:'K1'},

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'method',
   text:'Welche der folgenden Anforderungen erfüllt die IREB-Qualitätskriterien am vollständigsten?',
   options:['"Das System soll performant, sicher und stabil sein."','"Das System MUSS auf Suchanfragen innerhalb von 1,5 Sekunden antworten (gemessen bei 95 % der Anfragen unter Standard-Last von 500 gleichzeitigen Nutzern)."','"Das System soll Benutzeranfragen möglichst schnell verarbeiten."','"Das System MUSS alle Sicherheitsstandards einhalten und nach erfolgreichem Login weiterleiten sowie Logs schreiben."'],
   answer:1,explanation:'Option B ist die einzige gut formulierte Anforderung: messbare Schwellenwerte (1,5 Sekunden), Prüfkontext (95 % der Anfragen), definierter Testrahmen (500 gleichzeitige Nutzer). Eindeutig (eine Interpretation), atomar (eine Qualitätseigenschaft), vollständig (alle Prüfparameter vorhanden), prüfbar (Lasttest möglich). Option A: nicht atomar + nicht prüfbar. Option C: vage. Option D: nicht atomar (drei Funktionen) + nicht prüfbar ("alle Standards").',lz:'LZ 6-1',k:'K2'},

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'method',
   text:'Warum ist ATOMARITÄT eine VORAUSSETZUNG für PRÜFBARKEIT?',
   options:['Sie ist keine Voraussetzung — beide Kriterien sind vollständig unabhängig voneinander.','Eine nicht-atomare Anforderung enthält mehrere Eigenschaften — ein Test kann nur prüfen, ob ALLE erfüllt sind, nicht welche davon fehlt. Die Prüfbarkeit wird durch Vermischung zerstört.','Atomarität verbessert die Lesbarkeit, hat aber keinen Einfluss auf die Prüfbarkeit.','Eine atomare Anforderung ist automatisch prüfbar — beide Kriterien sind immer gemeinsam erfüllt.'],
   answer:1,explanation:'Die Kriterieninteraktion: "Das System soll schnell und sicher sein" — Testfall? Wenn der Test scheitert, weiß man nicht, ob es an der Geschwindigkeit oder der Sicherheit liegt. Die Anforderung ist nicht atomar und deshalb nicht isoliert prüfbar. Umgekehrt: eine atomare Anforderung KANN immer noch nicht prüfbar sein (z. B. "schnell"), aber eine nicht-atomare macht präzise Prüfbarkeit strukturell unmöglich. Atomarität ist notwendige, aber nicht hinreichende Bedingung für Prüfbarkeit.',lz:'LZ 6-1',k:'K2'},

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'method',
   text:'Eine Anforderung lautet: "Das System soll auf Benutzereingaben sofort reagieren und dabei alle Nutzeraktionen in einer Audit-Log-Datei protokollieren." Welche Version ist die VOLLSTÄNDIG KORREKTE Überarbeitung?',
   options:['"Das System soll auf Benutzereingaben sofort und vollständig reagieren."','"Das System MUSS Benutzereingaben innerhalb von 500 ms verarbeiten." und (separate Anforderung) "Das System MUSS jede Nutzeraktion mit Zeitstempel in der Audit-Log-Datei protokollieren."','"Das System soll schnell auf Eingaben reagieren und Logs schreiben."','"Das System MUSS alle Aktionen innerhalb von 500 ms verarbeiten, protokollieren und dem Nutzer bestätigen."'],
   answer:1,explanation:'Option B korrigiert BEIDE Probleme der Originalanforderung: (1) Nicht-Atomarität — durch Aufteilen in zwei separate, unabhängige Anforderungen, (2) Nicht-Prüfbarkeit von "sofort" — durch den Schwellenwert "500 ms". Option A behält "sofort" (nicht prüfbar) und verbessert die Atomarität nicht. Option C ist weiterhin vage. Option D bündelt erneut drei Aspekte in einer Anforderung.',lz:'LZ 6-4',k:'K2'},

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'scenario',
   text:'Ein RE-Team reviewt eine Spezifikation mit 80 Anforderungen. Was ist die EFFIZIENTESTE systematische Vorgehensweise?',
   options:['Jede Anforderung sofort vollständig neu formulieren, sobald ein Problem entdeckt wird.','Zuerst alle Anforderungen auf Atomarität prüfen (grobe Strukturfehler), dann auf Prüfbarkeit und Eindeutigkeit (Formulierungsfehler), zuletzt paarweise auf Konsistenz (Widersprüche).','Zuerst die Anforderungen mit den höchsten Prioritäten prüfen und den Rest überspringen.','Direkt mit der Konsistenzprüfung beginnen — Widersprüche sind das häufigste Problem.'],
   answer:1,explanation:'Systematische Qualitätsprüfung folgt einem logischen Trichter: (1) Atomarität zuerst — sie ist strukturelle Voraussetzung. Nicht-atomare Anforderungen können gar nicht sinnvoll auf andere Kriterien geprüft werden. (2) Prüfbarkeit + Eindeutigkeit — Formulierungsqualität der Einzelanforderung. (3) Konsistenz zuletzt — erfordert paarweisen Vergleich (quadratischer Aufwand), lohnt sich erst, wenn Einzelanforderungen bereinigt sind.',lz:'LZ 6-4',k:'K2'},

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'scenario',
   text:'Was ist der Unterschied zwischen VOLLSTÄNDIGKEIT einer EINZELNEN Anforderung und VOLLSTÄNDIGKEIT einer SPEZIFIKATION?',
   options:['Es gibt keinen Unterschied — beide meinen dasselbe.','Vollständigkeit einer Anforderung: alle für Implementierung und Test notwendigen Informationen sind in der Anforderung selbst enthalten. Vollständigkeit der Spezifikation: alle notwendigen Anforderungen des Systems sind im Dokument vorhanden.','Vollständigkeit der Spezifikation bedeutet, dass alle Anforderungen atomar formuliert sind.','Vollständigkeit einer Anforderung bedeutet, dass sie von allen Stakeholdern genehmigt wurde.'],
   answer:1,explanation:'Zwei verschiedene Ebenen: Einzelanforderung — sind alle Informationen in DIESER Anforderung da? (Akteur, Bedingung, Schwellenwert, Ausnahmen). Spezifikation — sind alle ANFORDERUNGEN des Systems enthalten? Eine Spezifikation kann 100 vollständige Einzelanforderungen haben und trotzdem unvollständig sein, weil 20 notwendige Anforderungen fehlen. Beide Qualitätsdimensionen müssen separat geprüft werden.',lz:'LZ 6-1',k:'K2'},

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'scenario',
   text:'REQ-3: "Ladezeit MUSS unter 2 Sekunden liegen." REQ-7: "System MUSS Gerät identifizieren, Präferenzen laden und Inhalte rendern." In welcher Reihenfolge qualitätssichern?',
   options:['REQ-3 zuerst, da Performanzanforderungen kritischer als funktionale sind.','REQ-7 zuerst aufteilen (verletzt Atomarität: drei Funktionen), dann die resultierenden atomaren Anforderungen auf Konsistenz mit REQ-3 prüfen — ggf. entsteht durch die Präferenzladung ein Prüfbarkeitskonflikt.','REQ-7 ist korrekt formuliert — mehrere Aktionen in einem Request sind ein Ablauf, keine Atomaritätsverletzung.','Beide Anforderungen sind korrekt — kein Handlungsbedarf.'],
   answer:1,explanation:'REQ-7 enthält drei eigenständige Funktionen (Identifikation, Präferenz-Laden, Rendering) — ein klarer Atomaritätsfehler. Nach Aufteilung: REQ-7b "Präferenzen laden" muss auf Konsistenz mit REQ-3 geprüft werden, weil das Laden von Nutzereinstellungen die Ladezeit beeinflussen kann. Das ist die korrekte systematische Sequenz: strukturellen Fehler (Atomarität) zuerst beheben, dann Querabhängigkeiten prüfen.',lz:'LZ 6-4',k:'K3'},

  {type:'single',chapter:'Kap. 6 · Anforderungsqualität',errorType:'trap',
   text:'Ein Reviewer sagt: "Diese Anforderung ist vollständig — ich habe alle sechs Qualitätskriterien für Einzelanforderungen geprüft, und sie besteht alle." Kann die Spezifikation dennoch unvollständig sein?',
   options:['Nein — wenn alle Einzelanforderungen die sechs Kriterien bestehen, ist die Spezifikation automatisch vollständig.','Ja — Vollständigkeit der Einzelanforderung und Vollständigkeit der Spezifikation sind zwei verschiedene Qualitätsdimensionen. Die Spezifikation kann fehlen, auch wenn jede vorhandene Anforderung vollständig ist.','Nein — eine Spezifikation ist per Definition vollständig, sobald sie genehmigt wurde.','Ja — aber nur wenn weniger als 90 % der erwarteten Anforderungen dokumentiert sind.'],
   answer:1,explanation:'Vollständigkeit auf zwei Ebenen: (1) Einzelanforderung — alle für Implementierung und Test notwendigen Informationen sind IN dieser Anforderung vorhanden. (2) Spezifikation — ALLE notwendigen Anforderungen des Systems sind im Dokument vorhanden. Eine Spezifikation kann 50 perfekt formulierte Anforderungen enthalten und trotzdem 30 weitere vergessen haben. Beide Dimensionen müssen unabhängig geprüft werden.',lz:'LZ 6-1',k:'K2'},

  // ══ v3.9d — LE5 LÜCKENSCHLUSS: UC-Struktur, Daten/Verhalten, Publikum, Text-vs-Modell ═══

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Was beschreibt der NORMALABLAUF (main success scenario) in einer Use-Case-Beschreibung?',
   options:['Alle möglichen Fehler und Ausnahmefälle, die im Use Case auftreten können.','Die optimale, fehlerfreie Sequenz von Interaktionsschritten zwischen Akteur und System, die das Ziel des Use Case erfüllt.','Die Vorbedingungen, die vor dem Use Case erfüllt sein müssen.','Alle Akteure, die den Use Case auslösen dürfen.'],
   answer:1,explanation:'Der Normalablauf (auch: "Erfolgsszenario") ist die Schritt-für-Schritt-Beschreibung der Interaktion, wenn alles planmäßig verläuft — kein Fehler, kein Sonderfall. Er ist die Kernstruktur der UC-Beschreibung: nummerierte Schritte, die abwechselnd Akteur- und Systemaktionen beschreiben. Fehler und Ausnahmen gehören in die Alternativabläufe.',lz:'LZ 5-2',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Was definiert die VORBEDINGUNG (precondition) eines Use Case?',
   options:['Was der Akteur nach Abschluss des Use Case erreicht hat.','Den Systemzustand oder die Bedingungen, die VOR dem Start des Use Case erfüllt sein müssen, damit er ausgeführt werden kann.','Die Fehler, die während des Use Case auftreten können.','Die Schnittstellen, die der Use Case zu anderen Use Cases hat.'],
   answer:1,explanation:'Die Vorbedingung definiert den erforderlichen Ausgangszustand: Was muss zutreffen, damit der Use Case startet? Beispiel: "Der Nutzer ist eingeloggt" oder "Der Warenkorb ist nicht leer." Ist die Vorbedingung nicht erfüllt, wird der Use Case nicht gestartet. Sie grenzt den Gültigkeitsbereich des Use Case ein und hilft Testern, die richtige Testumgebung herzustellen.',lz:'LZ 5-2',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Was definiert die NACHBEDINGUNG (postcondition) eines Use Case nach IREB?',
   options:['Die Fehlerzustände, die nach einem fehlgeschlagenen Use Case möglich sind.','Den Systemzustand, der nach ERFOLGREICHEM Abschluss des Use Case eingetreten ist.','Die nächste Aktion, die der Akteur nach dem Use Case ausführen soll.','Die technischen Anforderungen, die nach der Implementierung erfüllt sein müssen.'],
   answer:1,explanation:'Die Nachbedingung beschreibt den garantierten Systemzustand nach erfolgreichem Abschluss des Use Case: "Die Bestellung wurde gespeichert und eine Bestätigungs-E-Mail wurde versendet." Sie ist die testbare Erfolgsdefinition — ein Testfall kann prüfen, ob der Systemzustand der Nachbedingung entspricht. Fehlerzustände werden in separaten Alternativabläufen beschrieben.',lz:'LZ 5-2',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'trap',
   text:'Ein Use Case "Produkt kaufen" hat folgenden Schritt im Normalablauf: "Schritt 4: Das System verarbeitet die Zahlung." Was sollte im Alternativablauf zu Schritt 4 dokumentiert werden?',
   options:['Nichts — Alternativabläufe sind optional und nur für sicherheitskritische Systeme nötig.','Was passiert, wenn die Zahlung fehlschlägt (z. B. Karte abgelehnt) — inklusive Systemreaktion und nächster Akteuraktion.','Der Name des Programmierers, der Schritt 4 implementiert.','Eine Beschreibung der internen Verarbeitungslogik der Zahlungskomponente.'],
   answer:1,explanation:'Alternativabläufe (auch: Erweiterungsszenarien / Ausnahmeszenarien) beschreiben, was passiert, wenn ein Schritt im Normalablauf abweicht — z. B. Fehler, Sonderfälle, Bedingungen. "Karte abgelehnt" ist ein klassischer Alternativablauf zu einem Zahlungsschritt: System informiert Akteur, bietet Alternativen an oder bricht ab. Gut dokumentierte Alternativabläufe sind oft wertvoller als der Normalablauf, weil sie Randfälle abdecken.',lz:'LZ 5-6',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Was ist der Unterschied zwischen STRUKTURELLEN Modellen und VERHALTENSMODELLEN in der Anforderungsdokumentation?',
   options:['Strukturelle Modelle zeigen zeitliche Abläufe; Verhaltensmodelle zeigen statische Datenstrukturen.','Strukturelle Modelle zeigen, WAS existiert (Entitäten, Attribute, Beziehungen); Verhaltensmodelle zeigen, WIE das System auf Ereignisse reagiert (Abläufe, Zustände, Interaktionen).','Strukturelle Modelle sind immer UML-basiert; Verhaltensmodelle sind immer textlich.','Strukturelle Modelle sind für Entwickler; Verhaltensmodelle sind für Stakeholder.'],
   answer:1,explanation:'Die fundamentale Unterscheidung in der Modellierung: Strukturmodelle (Klassendiagramm, ERD) beschreiben das statische "Was" — Entitäten, Attribute und ihre Beziehungen, zeitlos. Verhaltensmodelle (Aktivitätsdiagramm, Zustandsautomat, Sequenzdiagramm) beschreiben das dynamische "Wie" — wie reagiert das System auf Ereignisse, in welcher Reihenfolge, in welchen Zuständen? Beide Sichten sind für vollständige Anforderungen notwendig.',lz:'LZ 5-3',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'trap',
   text:'Das Team möchte dokumentieren, welche Bestellzustände existieren und unter welchen Bedingungen das System von einem Zustand in den nächsten wechselt. Ein Entwickler schlägt ein Klassendiagramm vor. Ist das korrekt?',
   options:['Ja — Klassendiagramme zeigen alle Eigenschaften einer Entität, einschließlich ihrer Zustände.','Nein — ein Zustandsautomat (State Machine Diagram) ist die geeignete Notation. Klassendiagramme zeigen statische Struktur, keine dynamischen Zustandsübergänge.','Ja — ein Klassendiagramm mit einem Attribut "status" reicht aus.','Nein — für Zustandsübergänge ist immer ein BPMN-Diagramm zu verwenden.'],
   answer:1,explanation:'Ein Klassendiagramm kann ein Attribut "status" enthalten, aber es zeigt NICHT, welche Übergänge erlaubt sind, welche Bedingungen sie auslösen und welche Aktionen dabei ausgeführt werden. Das ist genau die Aufgabe des Zustandsautomaten: diskrete Zustände, Transitionen mit Auslöser-Bedingung-Aktion. Ein Klassendiagramm + Zustandsautomat ergänzen sich — der erste zeigt die Struktur, der zweite das Verhalten der Entität.',lz:'LZ 5-4',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'scenario',
   text:'Ein RE-Team soll ein Modell für einen Workshop mit Fachbereichs-Stakeholdern (keine technische Ausbildung) erstellen. Welche Notation ist am besten geeignet?',
   options:['UML-Sequenzdiagramm — es zeigt präzise, wann welche Nachrichten ausgetauscht werden.','UML-Klassendiagramm mit Multiplizitäten und Assoziationsnamen.','BPMN-Prozessdiagramm oder Use-Case-Diagramm — beide sind intuitiver für fachliche Stakeholder ohne UML-Kenntnisse.','Entity-Relationship-Diagramm (ERD) — es ist domänenunabhängig und leicht verständlich.'],
   answer:2,explanation:'Modelle für fachliche Stakeholder müssen lesbar sein ohne Schulung. BPMN ist darauf ausgelegt, Geschäftsprozesse für Fachbereiche zu kommunizieren. Use-Case-Diagramme zeigen Systemfunktionen aus Nutzersicht — intuitiv verständlich. UML-Sequenzdiagramme und Klassendiagramme haben eine steilere Lernkurve und setzen technisches Vorwissen voraus. Die Notation muss zur Zielgruppe passen — dieses Kriterium ist wichtiger als technische Präzision allein.',lz:'LZ 5-3',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'scenario',
   text:'Wann ist eine TEXTLICHE Beschreibung (natürliche Sprache) einem Modell VORZUZIEHEN?',
   options:['Immer — natürliche Sprache ist für alle Stakeholder verständlich und deshalb die beste Wahl.','Bei einfachen, linearen Anforderungen ohne komplexe Logik und für heterogene Stakeholder-Gruppen, die keine Modellnotation kennen.','Wenn die Anforderung komplexe Zustandsübergänge oder Datenflüsse beschreibt.','Textliche Beschreibung wird durch Modelle vollständig ersetzt — IREB empfiehlt ausschließlich Modelle.'],
   answer:1,explanation:'Text (natürliche Sprache) ist bevorzugt bei: einfachen Anforderungen ohne Verzweigungslogik, heterogenem Stakeholder-Publikum ohne Modellkenntnisse, und schneller Erstellbarkeit. Modelle sind bevorzugt bei: komplexen Abläufen mit Verzweigungen (Aktivitätsdiagramm), Datenstrukturen (ERD), Zustandslogik (Zustandsautomat). IREB empfiehlt einen pragmatischen Mix — keine Notation ist universell überlegen.',lz:'LZ 5-1',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Wofür ist eine ENTSCHEIDUNGSTABELLE (Decision Table) in der Anforderungsdokumentation geeignet?',
   options:['Zur Dokumentation der zeitlichen Abfolge von Systemereignissen.','Zur systematischen Dokumentation aller Kombinationen von Eingabebedingungen und den zugehörigen Systemreaktionen.','Zur Visualisierung der Datenflüsse zwischen internen Systemkomponenten.','Zur Beschreibung der Klassenstruktur und Vererbungshierarchien.'],
   answer:1,explanation:'Eine Entscheidungstabelle ist ideal für komplexe Bedingungslogik: Wenn Bedingung A=wahr UND Bedingung B=falsch, dann Aktion X. Sie stellt sicher, dass alle Kombinationen explizit betrachtet werden — kein Sonderfall wird vergessen. Klassische Einsatzbereiche: Steuerberechnungen, Berechtigungsregeln, Tariflogik. Ihr Vorteil gegenüber Text: Vollständigkeit und Überschaubarkeit bei vielen Bedingungskombinationen.',lz:'LZ 5-4',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'scenario',
   text:'Bestellprozess: 3 Nutzerrollen, 8 Verzweigungen, 4 externe Systeme. Stakeholder-Präsentation in 4 Wochen, Zeit und Budget knapp. Welche Dokumentationsstrategie?',
   options:['Ausschließlich natürlichsprachige Anforderungen — schnellste Erstellungsmethode, die alle verstehen.','Nur Use-Case-Diagramme und BPMN für die Stakeholder-Präsentation — keine textlichen Details.','Einen kombinierten Ansatz: BPMN für den Prozessablauf (Stakeholder-Verständlichkeit), Use-Case-Beschreibungen für die 3 kritischsten Abläufe, Glossar für die 3 Nutzerrollen und externen Systeme.','Formale Spezifikation in UML mit Sequenzdiagrammen für alle 8 Verzweigungspunkte.'],
   answer:2,explanation:'Das ist eine K3-Trade-off-Entscheidung: Komplexität (8 Verzweigungen, 4 Systeme) erfordert Modelle — Text allein wird mehrdeutig. Zeitdruck schließt formale UML-Vollspezifikation aus. Der optimale Mix: BPMN gibt Stakeholdern den Prozessüberblick, UC-Beschreibungen sichern die kritischsten Abläufe textuell ab, das Glossar klärt Terminologie. Ausschließlich Diagramme ohne Text (B) riskiert, dass Ablaufdetails und Ausnahmen fehlen.',lz:'LZ 5-3',k:'K3'},

  // ══ v3.9c — LE3 LÜCKENSCHLUSS: Aktivitätsabhängigkeiten, Lifecycle, Prozessmodelle ══

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'scenario',
   text:'Während eines Anforderungsreviews stellt ein Stakeholder fest: "Diese Anforderung beschreibt nicht, was wir wirklich brauchen." Welche RE-Aktivität wird dadurch UNMITTELBAR ausgelöst?',
   options:['Verwaltung — die Anforderung wird ins Change-Log übertragen.','Erhebung — die realen Bedürfnisse des Stakeholders werden erneut ermittelt.','Dokumentation — die Anforderung wird in eine neue Vorlage umgeschrieben.','Verhandlung — der Stakeholder und das Team einigen sich auf einen Wortlaut.'],
   answer:1,explanation:'Dies zeigt die Feedbackschleife zwischen Validierung und Erhebung: Ein Review (Validierung) deckt auf, dass die dokumentierten Anforderungen die realen Bedürfnisse nicht korrekt abbilden. Das Ergebnis ist keine Textkorrektur, sondern eine neue Erhebungsrunde — der Stakeholder muss erneut befragt werden, um die echten Anforderungen zu verstehen. Das ist der Kern iterativer RE-Prozesse.',lz:'LZ 3-2',k:'K2'},

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'scenario',
   text:'Während der Dokumentationsphase stellt das RE-Team fest, dass eine wichtige Systemfunktion undokumentiert geblieben ist — kein Stakeholder hat sie erwähnt. Was ist der KORREKTE nächste Schritt?',
   options:['Die Lücke durch plausible Annahmen ausfüllen und dokumentieren.','Zur Erhebungsphase zurückkehren: die fehlenden Informationen gezielt mit den relevanten Stakeholdern klären.','Die Dokumentation ohne den fehlenden Teil abschließen und später nachtragen.','Die Entwicklung mit den vorhandenen Anforderungen starten und die Lücke im Sprint Review schließen.'],
   answer:1,explanation:'Die Interdependenz zwischen Dokumentation und Erhebung: Dokumentationsarbeit macht Lücken sichtbar, die eine neue Erhebungsrunde erfordern. "Plausible Annahmen" (A) verstoßen gegen das IREB-Prinzip der Stakeholder-basierten Anforderungsermittlung. Lücken schließen sich nicht von selbst (C). Option D verlagert das Problem und erhöht das Risiko kostspielig falscher Implementierungen.',lz:'LZ 3-2',k:'K2'},

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'scenario',
   text:'Ein Team übergibt nach Erhebung und Dokumentation direkt an die Entwicklung — ohne Validierung. Beim Abnahmetest lehnt der Auftraggeber 35 % der Features ab. Welches RE-Versagen liegt vor?',
   options:['Erhebungsversagen — zu wenige Stakeholder wurden befragt.','Validierungsversagen — die Anforderungsspezifikation wurde nie gegen die echten Stakeholder-Bedürfnisse geprüft.','Verifikationsversagen — die Implementierung entspricht nicht der Spezifikation.','Verwaltungsversagen — Änderungsanträge wurden nicht korrekt erfasst.'],
   answer:1,explanation:'Das System wurde korrekt gebaut (Verifikation: Implementierung entspricht Spezifikation — das ist nicht das Problem). Die Spezifikation spiegelte jedoch nicht die tatsächlichen Bedürfnisse wider (Validierungsversagen). Eine frühzeitige Validierungsrunde mit Stakeholdern hätte die Diskrepanz aufgedeckt, als eine Korrektur noch günstig war. Fehler in Anforderungen kosten in der Abnahme ein Vielfaches ihrer Korrektur in der RE-Phase.',lz:'LZ 3-2',k:'K2'},

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'trap',
   text:'In einem WASSERFALL-Projekt gibt es eine dedizierte "RE-Phase" zu Beginn. Bedeutet das, dass RE-Aktivitäten im Rest des Projekts entfallen?',
   options:['Ja — in Wasserfallprojekten sind Anforderungen nach der RE-Phase eingefroren; RE ist abgeschlossen.','Nein — auch wenn RE initial intensiv stattfindet, bleibt Verwaltung (Change Management) und gelegentliche Nacherhebung im gesamten Projektverlauf aktiv.','Ja — RE-Aktivitäten nach der RE-Phase verstoßen gegen das Wasserfallprinzip.','Nein — im Wasserfall müssen alle vier RE-Aktivitäten gleichmäßig in jedem Projektabschnitt durchgeführt werden.'],
   answer:1,explanation:'Auch im Wasserfall endet RE nicht mit der "RE-Phase". Sobald Anforderungen gestellt sind, beginnt Verwaltung (Baseline, Change Control). Anforderungsänderungen entstehen im gesamten Projekt — durch technische Erkenntnisse, Stakeholder-Feedback oder externe Änderungen. IREB betont: RE begleitet das Projekt, auch wenn Intensität und Fokus variieren. Die "Frozen Requirements"-Illusion des Wasserfalls ist eine der häufigsten Ursachen für Projektprobleme.',lz:'LZ 3-2',k:'K2'},

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'scenario',
   text:'In einem SCRUM-Projekt: Welche Sprint-Ereignisse und Aktivitäten entsprechen den IREB-RE-Kernaktivitäten?',
   options:['RE findet in Scrum ausschließlich im Sprint Planning statt.','Backlog Refinement ≈ Erhebung + Dokumentation; Sprint Review ≈ Validierung; Product Backlog ≈ Verwaltung.','RE ist in Scrum komplett in der Rolle des Scrum Masters verankert.','RE-Aktivitäten finden in Scrum ausschließlich am Anfang jedes Sprints statt.'],
   answer:1,explanation:'IREB-RE-Aktivitäten sind in Scrum-Ereignisse eingebettet: Backlog Refinement = Erhebung neuer User Stories + Dokumentation (Präzisierung mit Abnahmekriterien). Sprint Review = Validierung: Stakeholder bestätigen oder korrigieren die implementierten Anforderungen. Product Backlog = Verwaltung: priorisierte, versionierte Anforderungsliste. Die RE-Aktivitäten existieren — sie heißen anders und sind über den Entwicklungsprozess verteilt.',lz:'LZ 3-2',k:'K2'},

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'scenario',
   text:'Projektmanager im Sprint 5 von 8: "RE ist abgeschlossen — wir befassen uns jetzt nur noch mit der Entwicklung." Was ist an dieser Aussage FALSCH?',
   options:['Nichts — nach der RE-Phase übernimmt das Entwicklungsteam die volle Verantwortung.','RE-Verwaltung (Change Management, Traceability-Pflege, Priorisierungsanpassungen) läuft bis zum Projektabschluss weiter. Auch neue oder geänderte Anforderungen aus laufenden Sprints müssen RE-Aktivitäten auslösen.','RE ist nur in Sprint 5 nicht abgeschlossen — es endet mit Sprint 8.','RE endet erst mit der Produktionsabnahme, nicht schon im Sprint.'],
   answer:1,explanation:'RE ist kein Projektteil, der "abgeschlossen" wird — es ist eine kontinuierliche Querschnittsaktivität. Selbst wenn intensive Erhebung früh stattfindet: Change Requests, Stakeholder-Feedback in Reviews, neue Erkenntnis über Nachbarsysteme — all das löst RE-Aktivitäten aus. Verwaltung und Traceability sind permanent aktiv. Option D ist inhaltlich näher dran, beschreibt aber nicht den vollständigen RE-Umfang.',lz:'LZ 3-2',k:'K2'},

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'scenario',
   text:'Das Testteam fragt: "Auf Basis welches RE-Artefakts leiten wir unsere Testfälle ab?" Was ist die KORREKTE Antwort?',
   options:['Auf Basis der Systemarchitektur-Dokumentation, die vom Entwicklungsteam erstellt wurde.','Auf Basis der Anforderungsspezifikation (Pflichtenheft/SRS) — das zentrale RE-Artefakt, das beschreibt, was das System leisten MUSS.','Testfälle werden unabhängig von RE-Artefakten aus dem Quellcode abgeleitet.','Auf Basis von User Acceptance Test (UAT)-Skripten, die der Auftraggeber liefert.'],
   answer:1,explanation:'Die direkte Verbindung zwischen RE und Testing: Die Anforderungsspezifikation (SRS/Pflichtenheft) ist die primäre Grundlage für Testfälle. Jede dokumentierte Anforderung muss testbar (verifizierbar) sein — genau deshalb ist Prüfbarkeit ein RE-Qualitätsmerkmal. Traceability verbindet RE-Artefakte mit Testfällen (Traceability-Matrix). Systemarchitektur beschreibt das Wie, nicht das Was — Testfälle basieren auf dem Was.',lz:'LZ 3-5',k:'K2'},

  // ══ v3.9h — ECHTE K3: MEHRSCHRITT-ENTSCHEIDUNGEN UNTER NEBENBEDINGUNGEN ════════

  {type:'single',chapter:'Kap. 3 · RE-Prozess',errorType:'scenario',
   text:'Ein Audit meldet DSGVO-Verstöße in der Anforderungsspezifikation während eines laufenden Sprints. Das Sprint-Ziel ist für Montag zugesagt. Was ist die korrekte RE-Reaktion?',
   options:['DSGVO-Findings nach dem Sprint bearbeiten — die Frist ist noch nicht kritisch.','Findings sofort selbst in die Spezifikation einarbeiten; Sprint-Ziel aufgeben.','Findings als Change Requests erfassen, Impact analysieren, Sprint-/Compliance-Abwägung an Product Owner eskalieren — Baseline unverändert lassen.','Sprint sofort abbrechen und Compliance-Sprint einplanen.'],
   answer:2,explanation:'RE entscheidet weder über Sprint-Abbruch noch über Baseline-Änderungen allein. Pflicht: Compliance-Anforderungen als Change Requests formell erfassen, vollständige Impact-Analyse bereitstellen und die Entscheidung dem Product Owner eskalieren. Option B verletzt die Baseline-Integrität ohne Genehmigung.',lz:'LZ 3-1',k:'K3'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'scenario',
   text:'Ein Medizinprodukt berechnet Patientendosierungen (Genauigkeit ≤ 0,01 %). Budget für genau ZWEI Validierungstechniken. Welche Kombination hat die höchste Priorität?',
   options:['Workshop mit Pflegekräften + Simulation','Workshop mit Pflegekräften + Formaler Nachweis','Formaler Nachweis + Simulation mit regulatorisch validiertem Modell','Walkthrough + Formaler Nachweis'],
   answer:2,explanation:'Patientensicherheit ist das höchste Risiko. Nur der formale Nachweis belegt Genauigkeit ≤ 0,01 % mathematisch zwingend — weder Workshop noch Simulation kann das leisten. Die Simulation ergänzt für NFRs (Antwortzeit, Ausfallsicherheit). Der Workshop ist wertvoller dritter Schritt, aber nachrangig.',lz:'LZ 7-3',k:'K3'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'scenario',
   text:'Eine Berechnungslogik muss von der Fachabteilung fachlich abgenommen UND vom Entwicklungsteam direkt implementiert werden. Budget für NUR EIN Dokumentationsartefakt. Welches Modell eignet sich für BEIDE gleichzeitig?',
   options:['UML-Klassendiagramm','Natürlichsprachige Anforderungsbeschreibung','Entscheidungstabelle','BPMN-Prozessdiagramm'],
   answer:2,explanation:'Entscheidungstabelle: Fachlich validierbar (jede Zeile entspricht einer Fallkombination) UND direkt implementierbar. Klassendiagramm ist entwicklerzentriert, Natürlichsprache zu ambig für Implementierung, BPMN modelliert Prozessfluss — nicht Berechnungslogik.',lz:'LZ 5-3',k:'K3'},

  {type:'single',chapter:'Kap. 4 · Anforderungserhebung',errorType:'scenario',
   text:'Maschinenbediener können ihre Arbeit nicht verbalisieren (tacit knowledge). Kein bestehendes System, keine Dokumentation. Budget für ZWEI Erhebungstechniken. Welche Kombination ist richtig?',
   options:['Strukturiertes Interview + Dokumentenanalyse','Feldbeobachtung + Low-Fidelity-Prototyping','Workshop + Fragebogen','Contextual Inquiry + formales Experteninterview'],
   answer:1,explanation:'Tacit knowledge eliminiert alle sprachbasierten Techniken (Interview, Fragebogen, Experteninterview) — Experten können ihre Routinen nicht verbalisieren. Feldbeobachtung überbrückt die Lücke direkt. Ohne Bestandssystem ermöglicht ein Papier-Prototyp Reaktion statt Beschreibung. Option D scheitert: das formale Interview als zweite Technik verletzt dieselbe Nebenbedingung.',lz:'LZ 4-3',k:'K3'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'scenario',
   text:'REQ-47 (Verfügbarkeit ≥ 99,9 %) liegt in Baseline B2. Ein Stakeholder beantragt Reduktion auf 95 %. SLA-Verträge mit Kunden spezifizieren 99,9 %. CCB tagt in 5 Tagen. Was tut RE HEUTE?',
   options:['Änderung ablehnen — SLA-Verletzung macht sie ungültig; RE entscheidet das.','Änderung vorläufig in die Spezifikation eintragen ("Pending CCB").','Change Request erfassen, Impact-Analyse bereitstellen, Baseline unverändert lassen — Entscheidung dem CCB überlassen.','Stakeholder bitten, den Antrag nach dem nächsten Meilenstein erneut einzureichen.'],
   answer:2,explanation:'RE-Pflicht: (1) Change Request formell erfassen, (2) Impact analysieren und dokumentieren, (3) Entscheidung dem CCB überlassen — Baseline bleibt unverändert bis zur Freigabe. Option A überschreitet RE-Kompetenz (Ablehnung ist CCB-Aufgabe). Option B verletzt die Baseline-Integrität ohne Genehmigung.',lz:'LZ 8-3',k:'K3'},

  // ══ v3.9i — LE5 LÜCKENSCHLUSS: UC-Struktur, Szenario-Diagramm, Modellzweck ════

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'method',
   text:'Eine UC-Beschreibung für "Überweisung durchführen" enthält: Akteur (Bankkunde), Normalablauf (6 Schritte), Nachbedingung (Betrag transferiert). Was fehlt gemäß IREB-UC-Beschreibungsschema ZWINGEND?',
   options:['Ein Sequenzdiagramm als grafische Ergänzung.','Die Vorbedingung — der Systemzustand, der VOR dem Use Case erfüllt sein muss.','Eine vollständige Liste aller Akteure des Gesamtsystems.','Ein Verweis auf die Systemarchitektur.'],
   answer:1,explanation:'Die Vorbedingung ist ein Pflichtbestandteil jeder UC-Beschreibung: Sie definiert, unter welchen Bedingungen der Use Case überhaupt ausgelöst werden darf (z. B. "Nutzer ist eingeloggt und hat ein aktives Konto mit ausreichendem Guthaben"). Ohne Vorbedingung ist unklar, wann der UC gültig ausführbar ist. Pflichtbestandteile einer UC-Beschreibung: Name, Akteur, Vorbedingung, Normalablauf, Alternativabläufe, Nachbedingung.',lz:'LZ 5-6',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Was ist ein ALTERNATIVABLAUF in einer Use-Case-Beschreibung?',
   options:['Ein zweiter, paralleler Use Case mit ähnlichem Normalablauf.','Ein <<extend>>-Pfad im Use-Case-Diagramm, der optionale Erweiterungen zeigt.','Ein Pfad, der ausgelöst wird, wenn ein Schritt des Normalablaufs nicht erwartungsgemäß verläuft — z. B. bei ungültiger Eingabe, Systemfehler oder Sonderfall.','Eine Variante des Use Case, die nur für bestimmte Akteure gilt.'],
   answer:2,explanation:'Alternativabläufe (auch: Erweiterungsszenarien, Ausnahmeabläufe) beschreiben, was passiert, wenn der Normalablauf abweicht: Fehler, Sonderfälle, Grenzfälle. Beispiel: Normalablauf Schritt 3 "Karte wird geprüft" → Alternativablauf 3a "Karte wird abgelehnt: System informiert Nutzer, bietet alternative Zahlungsmethode an". Gut dokumentierte Alternativabläufe sind oft wertvoller als der Normalablauf — sie decken die Fälle ab, bei denen das System scheitert.',lz:'LZ 5-6',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'trap',
   text:'Ein Stakeholder betrachtet ein Use-Case-Diagramm mit 8 Use Cases, 4 Akteuren und <<include>>-Beziehungen. Was kann er aus dem Diagramm NICHT ableiten?',
   options:['Welche Akteure welche Use Cases auslösen.','Die Systemgrenze und welche Funktionen darin enthalten sind.','Die konkreten Schritte, die ablaufen, wenn Akteur "Kunde" Use Case "Bestellung aufgeben" startet.','Welche Use Cases andere Use Cases einschließen (<<include>>).'],
   answer:2,explanation:'Das Use-Case-Diagramm ist ein Übersichtsmodell: Es zeigt WER (Akteure), WAS (Use-Case-Namen), und strukturelle Beziehungen (<<include>>, <<extend>>, Systemgrenze). Es zeigt NICHT, WIE eine Interaktion abläuft. Die konkreten Schritte, Bedingungen, Vor-/Nachbedingungen und Alternativpfade stehen ausschließlich in der textuellen UC-Beschreibung. Dieses Informationsgefälle ist der Grund, warum UC-Diagramm und UC-Beschreibung beide notwendig sind.',lz:'LZ 5-6',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'scenario',
   text:'Das Entwicklungsteam fragt: "Was passiert Schritt für Schritt, wenn der Nutzer sein Passwort vergisst — inklusive aller Fehlerfälle?" Welches Artefakt beantwortet diese Frage DIREKT?',
   options:['Das Use-Case-Diagramm — es zeigt alle Systemfunktionen inklusive "Passwort zurücksetzen".','Die textliche UC-Beschreibung mit Normalablauf (Passwort-Reset-Schritte) und Alternativabläufen (Token abgelaufen, E-Mail-Adresse unbekannt).','Ein Klassendiagramm der Nutzerverwaltung.','Die Stakeholder-Liste mit Rollen und Verantwortlichkeiten.'],
   answer:1,explanation:'Nur die textliche UC-Beschreibung enthält den schrittweisen Normalablauf und alle Alternativabläufe. Das UC-Diagramm zeigt lediglich, dass der Use Case "Passwort zurücksetzen" existiert und welcher Akteur ihn auslöst — keine Schrittdetails, keine Fehlerbehandlung. Das Klassendiagramm zeigt Datenstrukturen, nicht Abläufe. Für "was passiert Schritt für Schritt" ist die UC-Beschreibung das einzig geeignete Artefakt.',lz:'LZ 5-6',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'method',
   text:'Was ist der Unterschied zwischen VORBEDINGUNG und NACHBEDINGUNG in einer UC-Beschreibung?',
   options:['Vorbedingung = auslösendes Ereignis; Nachbedingung = letzter Schritt des Normalablaufs.','Vorbedingung = Systemzustand, der VOR dem UC gelten muss; Nachbedingung = Systemzustand, der nach ERFOLGREICHEM Abschluss gilt.','Beide sind optionale Metadaten ohne Einfluss auf die Implementierung.','Vorbedingung benennt den primären Akteur; Nachbedingung benennt das System-Feedback.'],
   answer:1,explanation:'Vorbedingung: "Nutzer ist eingeloggt, Warenkorb enthält mindestens einen Artikel" — das muss WAHR sein, bevor der UC starten darf. Nachbedingung: "Bestellung ist im System gespeichert, Bestätigungs-E-Mail wurde versendet" — das muss WAHR sein, wenn der UC erfolgreich abgeschlossen wurde. Vorbedingungen begrenzen gültige Auslösekontexte; Nachbedingungen definieren den Erfolgsnachweis und die Grundlage für Tests.',lz:'LZ 5-6',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'method',
   text:'Warum sind UC-DIAGRAMM und textliche UC-BESCHREIBUNG BEIDE notwendig, statt nur eine Form zu verwenden?',
   options:['Das Diagramm ist für Entwickler; die Beschreibung für Tester — sie richten sich an verschiedene Zielgruppen.','Das Diagramm gibt die strukturelle Übersicht (Akteure, Systemgrenze, Beziehungen); die Beschreibung liefert die Ablaufdetails (Normalablauf, Alternativpfade, Vor-/Nachbedingungen). Beide ergänzen sich — keines ersetzt das andere.','Die Beschreibung ist obligatorisch; das Diagramm ist optional und nur für Präsentationen nützlich.','Beide enthalten dieselben Informationen in verschiedenen Darstellungsformen — man wählt je nach Präferenz.'],
   answer:1,explanation:'Das UC-Diagramm beantwortet: Welche Funktionen hat das System? Wer interagiert damit? Wie hängen Use Cases zusammen? Die UC-Beschreibung beantwortet: Wie läuft eine konkrete Interaktion ab? Was sind Vor-/Nachbedingungen? Was passiert bei Fehlern? Eine Anforderungsdokumentation braucht BEIDE Perspektiven: das Diagramm für Überblick und Kommunikation, die Beschreibung für präzise Ablaufdefinition und Testbarkeit.',lz:'LZ 5-6',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'scenario',
   text:'Die Fachabteilung (ohne UML-Kenntnisse) muss eine Preisberechnungslogik validieren: 4 Eingangsparameter, 3 mögliche Rabattstufen. Welches Dokumentationsmodell ist für DIESE Zielgruppe und DIESEN Zweck am geeignetsten?',
   options:['UML-Klassendiagramm — zeigt die Datenstrukturen der Preisberechnung.','UML-Aktivitätsdiagramm — modelliert den Berechnungsablauf mit Gateways.','Entscheidungstabelle — zeigt alle Bedingungskombinationen und zugehörige Ergebnisse in tabellarischer Form; fachlich validierbar ohne UML-Kenntnisse.','UML-Sequenzdiagramm — bildet die Komponenteninteraktion bei der Berechnung ab.'],
   answer:2,explanation:'Modellwahl erfordert zwei Kriterien: Zielgruppe und Zweck. Zielgruppe: Fachabteilung ohne UML-Kenntnisse → UML-Diagramme (A, B, D) scheiden aus. Zweck: Berechnungslogik validieren mit mehreren Bedingungen → Entscheidungstabelle ist ideal. Sie zeigt jede Kombination als eine Zeile; Fachexperten prüfen: "Wenn Kunde Typ A hat UND Bestellwert > 500 €, ist 15 % Rabatt korrekt?" — keine Notationskenntnisse notwendig.',lz:'LZ 5-4',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'method',
   text:'Ein Stakeholder fragt: "Ich will verstehen, welche Daten das System verwaltet und wie sie zusammenhängen — aber NICHT, wie Prozesse ablaufen." Welcher Modelltyp passt?',
   options:['Aktivitätsdiagramm — zeigt Abläufe und Entscheidungspunkte.','Sequenzdiagramm — zeigt Interaktionen zwischen Komponenten über die Zeit.','Klassendiagramm oder Entity-Relationship-Diagramm — strukturelle Modelle für Daten und Beziehungen, ohne Prozess- oder Zeitdimension.','Zustandsdiagramm — modelliert Zustände und Übergangsbedingungen.'],
   answer:2,explanation:'Modelle teilen sich in zwei Klassen: Strukturmodelle (WAS existiert) und Verhaltensmodelle (WIE das System reagiert). Aktivitäts-, Sequenz- und Zustandsdiagramme sind Verhaltensmodelle — sie zeigen Abläufe, Zeit, Ereignisse. Das Klassendiagramm und ERD sind Strukturmodelle: Sie zeigen Entitäten, Attribute, Beziehungen (1:n, m:n) ohne Zeitdimension. Für "welche Daten, wie zusammenhängend" ist das Strukturmodell die direkte Antwort.',lz:'LZ 5-4',k:'K2'},

  // ══ v3.9j — LE7: Review-Rollen, Defektklassifikation, Validierungstechniken ══

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'terminology',
   text:'Welche VIER ROLLEN sind in einer formalen Inspektion nach IREB definiert?',
   options:['Projektmanager, Entwickler, Tester, Auftraggeber.','Moderator, Autor, Gutachter, Protokollant — ergänzbar durch einen Manager.','Requirements Engineer, Reviewer, Stakeholder, Facilitator.','Inspektor, Beobachter, Freigeber, Koordinator.'],
   answer:1,explanation:'Formale Inspektion: (1) Moderator — leitet das Meeting neutral, steuert Diskussion, ist nicht der Autor; (2) Autor — hat das Dokument verfasst, empfängt die Befunde, verantwortet Korrekturen; (3) Gutachter — bereitet sich individuell vor, findet und meldet Defekte; (4) Protokollant (Scribe) — dokumentiert alle Befunde während des Meetings vollständig. Optional: Manager — entscheidet über Ressourcen und Follow-up-Freigabe. Klare Rollentrennung ist der Kern der Fagan-Inspektion.',lz:'LZ 7-5',k:'K1'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'terminology',
   text:'Was ist die HAUPTAUFGABE des PROTOKOLLANTEN (Scribe) in einer formalen Inspektion?',
   options:['Das Dokument inhaltlich prüfen und alle Defekte mit Begründung dokumentieren.','Das Meeting leiten, Diskussionen strukturieren und alle Eintrittskriterien vor dem Start prüfen.','Alle genannten Befunde während der Inspektionsbesprechung vollständig und korrekt schriftlich festhalten.','Das überarbeitete Dokument nach der Follow-up-Phase formal freigeben.'],
   answer:2,explanation:'Der Protokollant (Scribe) ist kein Gutachter — er prüft nicht selbst inhaltlich. Seine Aufgabe ist die lückenlose Dokumentation: Jeder in der Besprechung genannte Befund wird mit Fundstelle, Beschreibung und Schweregradklassifikation protokolliert. Ohne zuverlässigen Protokollanten gehen Befunde verloren oder werden unvollständig erfasst. In kleinen Inspektionen kann ein Gutachter diese Rolle mit übernehmen — im Idealfall sind die Rollen aber getrennt.',lz:'LZ 7-5',k:'K1'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'method',
   text:'Warum darf der AUTOR eines Dokuments NICHT gleichzeitig die MODERATORROLLE übernehmen?',
   options:['Der Autor kennt das Dokument zu gut — er würde keine neuen Fehler entdecken.','Interessenkonflikt: Der Autor hat ein natürliches Interesse daran, sein Dokument als korrekt darzustellen; der Moderator muss neutral leiten, alle Befunde sachlich erfassen und Diskussionen steuern — ohne eigene Verteidigungshaltung.','Der Autor ist für Korrekturen verantwortlich und hat in der Besprechung keine Zeit für die Moderation.','IREB schreibt vor, dass der Moderator aus einer anderen Abteilung stammen muss.'],
   answer:1,explanation:'Rollentrennung ist strukturelles Qualitätsmerkmal der formalen Inspektion. Der Autor verteidigt tendenziell sein Werk; ein neutraler Moderator schafft das psychologisch sichere Klima, in dem Gutachter Kritik frei äußern. Würde der Autor moderieren, würde er Diskussionen unbewusst steuern, Befunde abschwächen und Follow-up-Aufgaben minimieren. Das Fagan-Verfahren betont explizit: Autor und Moderator sind unterschiedliche Personen.',lz:'LZ 7-5',k:'K2'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'method',
   text:'Was ist die PFLICHT des GUTACHTERS VOR dem Inspektionstreffen?',
   options:['Das Dokument erst beim Meeting zum ersten Mal lesen und spontane Eindrücke teilen.','Eine Liste aller Stakeholder erstellen, die das Dokument betrifft.','Das Dokument individuell und gründlich durcharbeiten, Befunde identifizieren und schriftlich dokumentieren — bereit für das Treffen.','Den Moderator über alle geplanten Befunde im Voraus informieren, damit die Agenda geplant werden kann.'],
   answer:2,explanation:'Die individuelle Vorbereitung (Preparation) ist eine der Pflichtphasen der formalen Inspektion — und Eintrittskriterium für das Meeting. Gutachter, die unvorbereitet erscheinen, verringern die Fehlerfindungsrate erheblich: Die Inspektion lebt von der individuellen Tiefenanalyse, nicht von gemeinsamer Erstdurchsicht. Fehlende Vorbereitung ist ein Grund, die Inspektion zu verschieben.',lz:'LZ 7-5',k:'K2'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'scenario',
   text:'In einer Inspektion meldet ein Gutachter: REQ-55 lautet "Das System soll schnell antworten." Wie ist dieser Befund zu klassifizieren?',
   options:['Kein Befund — "schnell" ist branchenüblich und für alle verständlich.','Minor Defect — die Formulierung ist schwach, aber das Ziel ist erkennbar; das Dokument kann als Basis dienen.','Major Defect — "schnell" ist nicht messbar; die Anforderung kann weder getestet noch implementiert werden; das Dokument ist in diesem Zustand nicht als Baseline geeignet.','Observation — zur Verbesserung empfohlen, aber ohne Prozesskonsequenz.'],
   answer:2,explanation:'Die Klassifikation bestimmt die Prozesskonsequenz. Ein Major Defect macht das Dokument als Implementierungsgrundlage unbrauchbar — REQ-55 erfüllt keines der Qualitätskriterien Prüfbarkeit (nicht messbar) und Eindeutigkeit (jeder interpretiert "schnell" anders). Entwickler können nicht implementieren; Tester können keinen Testfall ableiten. Solche Anforderungen MÜSSEN überarbeitet werden, bevor das Dokument als Baseline freigegeben wird.',lz:'LZ 7-1',k:'K2'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'scenario',
   text:'Nach der Follow-up-Phase stellt der Moderator fest: Die 3 ursprünglichen schwerwiegenden Befunde wurden korrekt behoben. Bei der Überarbeitung entstanden aber 2 neue schwerwiegende Probleme. Was ist die nächste Maßnahme?',
   options:['Das Dokument freigeben — alle ursprünglichen Befunde wurden adressiert.','Das Dokument zurückstellen, ohne weitere Prüfung auf Autorenkorrektur warten.','Eine Re-Inspektion ansetzen — neue schwerwiegende Befunde, die bei der Überarbeitung entstanden sind, erfordern eine erneute formale Prüfung.','Die neuen Befunde im Follow-up-Protokoll vermerken und in der Implementierungsphase berücksichtigen.'],
   answer:2,explanation:'Follow-up-Zweck ist Verifikation der Korrekturen — nicht Neu-Inspektion. Aber wenn der Moderator neue Major Defects entdeckt, reicht Follow-up nicht mehr aus: neue schwerwiegende Probleme wurden beim Reparieren erzeugt. Das Dokument ist weiterhin nicht baseline-tauglich. Re-Inspektion ist die einzig korrekte Reaktion. Das ist auch der Grund, warum komplexe Überarbeitungen Risiko erzeugen: Korrekturen können neue Fehler einführen.',lz:'LZ 7-3',k:'K2'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'method',
   text:'Worin unterscheidet sich ein ABNAHMETEST-WORKSHOP als Validierungstechnik von einem klassischen Review?',
   options:['Ein Abnahmetest-Workshop prüft den Quellcode; ein Review prüft das Anforderungsdokument.','Im Abnahmetest-Workshop definieren und validieren Stakeholder gemeinsam die Abnahmekriterien — Ziel ist Übereinstimmung darüber, was "fertig" bedeutet, nicht die Suche nach Dokumentfehlern.','Abnahmetest-Workshops finden nach der Implementierung statt; Reviews immer davor.','Im Abnahmetest-Workshop ist der Autor nicht anwesend; in einem Review ist er es.'],
   answer:1,explanation:'Review-Ziel: Defekte im Artefakt finden. Abnahmetest-Workshop-Ziel: Konsens herstellen, was "Fertigstellung" einer Anforderung bedeutet — konkrete, messbare Akzeptanzkriterien gemeinsam formulieren. Stakeholder werden aktiv eingebunden, bevor die Implementierung beginnt. Das Ergebnis ist keine Fehlerliste, sondern ein geteiltes Verständnis der Erfolgsbedingungen. Besonders wertvoll für NFRs und Use Cases mit komplexen Erfolgsbedingungen.',lz:'LZ 7-4',k:'K2'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'method',
   text:'Für welchen ANFORDERUNGSTYP sind FORMALE METHODEN als Validierungstechnik am geeignetsten?',
   options:['Für User Stories in agilen Projekten — formale Methoden helfen beim Schreiben von Akzeptanzkriterien.','Für Stakeholder-Interviews — sie strukturieren die Dokumentation von Gesprächsergebnissen.','Für sicherheitskritische oder mathematisch präzise Anforderungen, bei denen Korrektheit formal nachgewiesen werden muss — z. B. Steuerungssoftware, Medizinprodukte, Kryptographie.','Für alle Anforderungstypen — formale Methoden liefern immer die höchste Qualitätssicherung.'],
   answer:2,explanation:'Formale Methoden (z. B. Z-Notation, TLA+, B-Methode) erlauben mathematische Beweise über Systemspezifikationen. Sinnvoll nur, wenn: (1) Fehler katastrophale Folgen hätten (Safety-Critical), (2) mathematische Genauigkeit gefordert ist (z. B. Kryptographie-Protokolle, medizinische Dosierungsalgorithmen), (3) der Aufwand durch das Risiko gerechtfertigt wird. Für normale Business-Anforderungen überwiegt der Aufwand den Nutzen deutlich.',lz:'LZ 7-4',k:'K2'},

  // ══ v3.9j — LE8: Kano angewandt, MoSCoW angewandt, Attribut-Aufgaben-Zuordnung ══

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'terminology',
   text:'Das Kano-Modell unterscheidet drei Hauptkategorien. Welche sind die KORREKTEN Bezeichnungen?',
   options:['Must-Have, Should-Have, Could-Have.','Basismerkmal, Leistungsmerkmal, Begeisterungsmerkmal.','Kern-Feature, Erweiterungs-Feature, Innovations-Feature.','Funktionale Anforderung, Qualitätsanforderung, Randbedingung.'],
   answer:1,explanation:'Kano-Kategorien: (1) Basismerkmal — vom Nutzer als selbstverständlich vorausgesetzt; Abwesenheit erzeugt Unzufriedenheit, Anwesenheit wird nicht aktiv wahrgenommen. (2) Leistungsmerkmal — je mehr/besser, desto zufriedener; linearer Zusammenhang. (3) Begeisterungsmerkmal — unerwartet, erzeugt Begeisterung; Abwesenheit wird nicht vermisst. Das Modell hilft, Anforderungen nach ihrem Zufriedenheitspotenzial zu kategorisieren, nicht nach Implementierungsreihenfolge.',lz:'LZ 8-6',k:'K1'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'scenario',
   text:'Nutzer eines Online-Shops erwähnen die Funktion "Meine Bestellungen einsehen" nie positiv — sie wird als selbstverständlich angesehen. Fehlt sie, beschweren sich Nutzer massiv. Welche Kano-Kategorie trifft zu?',
   options:['Begeisterungsmerkmal — die Funktion begeistert Nutzer, wenn sie besonders gut umgesetzt ist.','Leistungsmerkmal — eine bessere Implementierung erzeugt mehr Zufriedenheit.','Basismerkmal — Nutzer setzen die Funktion voraus; Anwesenheit wird nicht wahrgenommen, Abwesenheit erzeugt starke Unzufriedenheit.','Irrelevantes Merkmal — keine starken Reaktionen in beide Richtungen.'],
   answer:2,explanation:'Das Charakteristikum eines Basismerkmals: asymmetrische Zufriedenheitswirkung. Vorhanden: neutral (keine Begeisterung). Fehlend: starke Unzufriedenheit. Stakeholder nennen Basismerkmale selten in Interviews — sie gelten als so selbstverständlich, dass sie nicht explizit gefordert werden. RE-Konsequenz: Basismerkmale MÜSSEN identifiziert werden, auch wenn Stakeholder sie nicht aktiv formulieren. Erkennung oft durch Negativ-Fragestellung: "Was würde Sie extrem ärgern, wenn es fehlt?"',lz:'LZ 8-6',k:'K2'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'scenario',
   text:'Eine Navigations-App bietet: "KI-generierte Sehenswürdigkeits-Stories für die aktuelle Route — Nutzer die es entdecken, sind begeistert; Nutzer die es nicht kennen, vermissen es nicht." Welche Kano-Kategorie?',
   options:['Basismerkmal — jede Navigations-App braucht Inhalte neben der Navigation.','Leistungsmerkmal — mehr Stories bedeuten mehr Zufriedenheit.','Begeisterungsmerkmal — unerwartet, erzeugt Begeisterung bei Entdeckung; Abwesenheit erzeugt keine Unzufriedenheit.','Dissatisfier — die Funktion senkt die Zufriedenheit bei Fehlen.'],
   answer:2,explanation:'Begeisterungsmerkmal (Delighter/Exciter): Nutzer erwarten die Funktion nicht, aber sie erzeugt Begeisterung, wenn sie vorhanden ist. Abwesenheit: keine Unzufriedenheit, weil niemand damit gerechnet hat. Strategische Bedeutung für Produktdifferenzierung: Begeisterungsmerkmale können Wettbewerbsvorteile schaffen und "Mundpropaganda" auslösen. Kano-Modell warnt: Begeisterungsmerkmale werden über Zeit zu Leistungsmerkmalen und schließlich zu Basismerkmalen (Erwartungsinflation).',lz:'LZ 8-6',k:'K2'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'scenario',
   text:'REQ-004: "Das System MUSS DSGVO-konforme Datenlöschung nach 3 Jahren implementieren — Verstoß würde zu Bußgeldern bis 4 % des Jahresumsatzes führen." Welche MoSCoW-Kategorie?',
   options:['Should Have — wichtig, aber in einem späteren Release lieferbar.','Could Have — wäre gut, aber verzichtbar wenn Zeit knapp wird.','Must Have — nicht verhandelbar; rechtliche Anforderung, deren Fehlen den Projekterfolg oder die Betriebserlaubnis blockiert.','Won\'t Have — aktuell nicht im Scope, für zukünftige Releases vorgesehen.'],
   answer:2,explanation:'Must Have im MoSCoW-Sinne bedeutet: Das System kann ohne diese Anforderung nicht ausgeliefert werden — oder die Konsequenzen des Fehlens sind inakzeptabel. DSGVO-Compliance mit 4%-Umsatz-Bußgeld ist ein klassisches Must Have: regulatorische Pflicht, nicht optional, nicht verschiebbar. MoSCoW-Faustregel für Must Have: "Würde das Fehlen dieser Anforderung das Projekt scheitern lassen?" → Ja: Must Have.',lz:'LZ 8-6',k:'K2'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'scenario',
   text:'Ein Product Owner fragt: "Welche Anforderungen sollte ich NICHT in den nächsten Sprint nehmen, weil sie sich wahrscheinlich noch ändern werden?" Welches Attribut liefert die DIREKTESTE Antwort?',
   options:['Priorität — zeigt, welche Anforderungen zuerst umgesetzt werden sollen.','Status — zeigt, in welcher Prozessphase sich eine Anforderung befindet.','Stabilität — gibt an, wie wahrscheinlich eine Anforderung noch geändert wird.','Version — zeigt, wie oft eine Anforderung bereits geändert wurde.'],
   answer:2,explanation:'Das Stabilitäts-Attribut beantwortet genau diese Frage: Eine Anforderung mit Stabilität "niedrig" oder "instabil" signalisiert, dass eine Änderung erwartet wird. Sprint-Planung mit instabilen Anforderungen erhöht das Risiko von Re-Work. Das Versions-Attribut (D) zeigt historische Änderungshäufigkeit — ein Proxy, aber kein direktes Maß für zukünftige Stabilität. Status zeigt den Prozessstand, nicht die Änderungswahrscheinlichkeit.',lz:'LZ 8-2',k:'K2'},

  {type:'single',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'scenario',
   text:'Ein QA-Manager fragt: "Zeig mir alle Anforderungen, die implementiert sind, aber noch keinen Testfall haben." Welches Attribut filtert diese Menge DIREKT?',
   options:['Priorität — zeigt die Implementierungsreihenfolge.','Version — zeigt die aktuelle Versionskennung der Anforderung.','Status — filtert genau die Anforderungen mit Status "implementiert" aus der Menge aller Anforderungen heraus.','Quelle — zeigt, welcher Stakeholder die Anforderung eingebracht hat.'],
   answer:2,explanation:'Der Anforderungsstatus ist ein Lebenszyklusattribut mit definierten Zuständen: vorgeschlagen → genehmigt → implementiert → getestet → abgenommen (oder abgelehnt). Der QA-Manager sucht den Zustand "implementiert" — genau das, was das Status-Attribut abbildet. Ohne strukturiertes Status-Attribut muss er manuell suchen oder externe Tracking-Tools befragen. Das Status-Attribut ist das zentrale Attribut für Fortschritts- und Lückenverfolgung.',lz:'LZ 8-2',k:'K2'},

  // ══ v3.9m — DIAGRAMM-LESEFRAGEN (inline SVG) ══════════════════════════════════════

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'scenario',
   text:'Betrachten Sie das Kontextdiagramm. Was repräsentiert der Pfeil vom "Finanzamt" zum "Buchungssystem"?',
   diagram:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 190" style="max-width:100%;height:auto;display:block;margin:auto;font-family:system-ui,sans-serif"><defs><marker id="da1" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#555"/></marker></defs><rect x="155" y="60" width="110" height="50" rx="5" fill="#f0f2f7" stroke="#445" stroke-width="2"/><text x="210" y="81" text-anchor="middle" font-size="12" font-weight="600" fill="#223">Buchungs-</text><text x="210" y="97" text-anchor="middle" font-size="12" font-weight="600" fill="#223">system</text><rect x="10" y="70" width="80" height="32" rx="3" fill="#fff" stroke="#667" stroke-width="1.3"/><text x="50" y="91" text-anchor="middle" font-size="12" fill="#334">Kunde</text><rect x="330" y="70" width="80" height="32" rx="3" fill="#fff" stroke="#667" stroke-width="1.3"/><text x="370" y="91" text-anchor="middle" font-size="12" fill="#334">Lager</text><rect x="155" y="145" width="110" height="32" rx="3" fill="#fff" stroke="#667" stroke-width="1.3"/><text x="210" y="166" text-anchor="middle" font-size="12" fill="#334">Finanzamt</text><line x1="91" y1="86" x2="153" y2="86" stroke="#555" stroke-width="1.3" marker-end="url(#da1)"/><text x="122" y="80" text-anchor="middle" font-size="10" fill="#556">Bestelldaten</text><line x1="267" y1="86" x2="328" y2="86" stroke="#555" stroke-width="1.3" marker-end="url(#da1)"/><text x="298" y="80" text-anchor="middle" font-size="10" fill="#556">Lieferauftrag</text><line x1="210" y1="144" x2="210" y2="112" stroke="#555" stroke-width="1.3" marker-end="url(#da1)"/><text x="232" y="135" font-size="10" fill="#556">Steuervorgaben</text></svg>',
   options:['Das Finanzamt hat Lesezugriff auf alle Buchungsdaten des Systems.','Das System schickt Buchungsdaten an das Finanzamt (Meldepflicht).','Das Buchungssystem empfängt Daten vom Finanzamt — z. B. Steuervorgaben oder Meldepflichten.','Das Finanzamt ist Auftraggeber des Systems.'],
   answer:2,explanation:'In einem Kontextdiagramm (DFD Level 0) zeigt ein eingehender Pfeil einen Datenfluss IN das System. Der Pfeil "Steuervorgaben" vom Finanzamt bedeutet: das System empfängt Daten (z. B. Steuersätze, Meldeformate) vom Finanzamt. Ausgehende Pfeile würden Systemoutput an externe Entitäten zeigen.',lz:'LZ 2-3',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'trap',
   text:'In diesem Use-Case-Diagramm ist ein Modellierungsfehler. Was ist FALSCH?',
   diagram:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 210" style="max-width:100%;height:auto;display:block;margin:auto;font-family:system-ui,sans-serif"><defs><marker id="da2" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#555"/></marker></defs><rect x="100" y="10" width="240" height="190" rx="5" fill="none" stroke="#888" stroke-width="1.5" stroke-dasharray="7,3"/><text x="220" y="26" text-anchor="middle" font-size="11" fill="#777">System</text><ellipse cx="220" cy="80" rx="70" ry="22" fill="#f0f2f7" stroke="#556" stroke-width="1.3"/><text x="220" y="85" text-anchor="middle" font-size="11" fill="#334">Bestellung aufgeben</text><ellipse cx="220" cy="160" rx="70" ry="22" fill="#f0f2f7" stroke="#556" stroke-width="1.3"/><text x="220" y="165" text-anchor="middle" font-size="11" fill="#334">Zahlung prüfen</text><circle cx="320" cy="75" r="11" fill="none" stroke="#445" stroke-width="1.3"/><line x1="320" y1="86" x2="320" y2="112" stroke="#445" stroke-width="1.3"/><line x1="311" y1="97" x2="329" y2="97" stroke="#445" stroke-width="1.3"/><line x1="320" y1="112" x2="308" y2="128" stroke="#445" stroke-width="1.3"/><line x1="320" y1="112" x2="332" y2="128" stroke="#445" stroke-width="1.3"/><text x="320" y="144" text-anchor="middle" font-size="11" fill="#445">Backoffice</text><circle cx="40" cy="80" r="11" fill="none" stroke="#445" stroke-width="1.3"/><line x1="40" y1="91" x2="40" y2="117" stroke="#445" stroke-width="1.3"/><line x1="31" y1="102" x2="49" y2="102" stroke="#445" stroke-width="1.3"/><line x1="40" y1="117" x2="28" y2="133" stroke="#445" stroke-width="1.3"/><line x1="40" y1="117" x2="52" y2="133" stroke="#445" stroke-width="1.3"/><text x="40" y="149" text-anchor="middle" font-size="11" fill="#445">Kunde</text><line x1="52" y1="85" x2="148" y2="82" stroke="#666" stroke-width="1.2" marker-end="url(#da2)"/><line x1="305" y1="100" x2="293" y2="138" stroke="#666" stroke-width="1.2" marker-end="url(#da2)"/></svg>',
   options:['Der Use Case "Zahlung prüfen" fehlt eine <<include>>-Beziehung.','Der Akteur "Backoffice" befindet sich innerhalb der Systemgrenze — Akteure müssen immer außerhalb der Systemgrenze stehen.','Der Akteur "Kunde" muss ebenfalls innerhalb der Systemgrenze dargestellt werden.','Das Diagramm hat zu wenige Use Cases für ein reales System.'],
   answer:1,explanation:'Akteure repräsentieren externe Rollen, die mit dem System interagieren — sie stehen per Definition AUSSERHALB der Systemgrenze. Ein Akteur innerhalb der Systemgrenze ist ein fundamentaler Modellierungsfehler: es wäre dann keine externe Entität mehr, sondern ein Systembestandteil.',lz:'LZ 5-2',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Das Zustandsdiagramm zeigt den Lebenszyklus einer Bestellung. Von welchem Zustand aus ist laut Diagramm ein direkter Übergang nach "Storniert" NICHT möglich?',
   diagram:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 160" style="max-width:100%;height:auto;display:block;margin:auto;font-family:system-ui,sans-serif"><defs><marker id="da3" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#555"/></marker></defs><circle cx="30" cy="80" r="8" fill="#445"/><rect x="60" y="60" width="80" height="36" rx="18" fill="#f0f2f7" stroke="#556" stroke-width="1.5"/><text x="100" y="83" text-anchor="middle" font-size="12" fill="#334">Offen</text><rect x="180" y="60" width="80" height="36" rx="18" fill="#f0f2f7" stroke="#556" stroke-width="1.5"/><text x="220" y="83" text-anchor="middle" font-size="12" fill="#334">Bezahlt</text><rect x="300" y="60" width="100" height="36" rx="18" fill="#f0f2f7" stroke="#556" stroke-width="1.5"/><text x="350" y="83" text-anchor="middle" font-size="12" fill="#334">Abgeschlossen</text><rect x="130" y="125" width="90" height="30" rx="15" fill="#f0f2f7" stroke="#556" stroke-width="1.5"/><text x="175" y="145" text-anchor="middle" font-size="12" fill="#334">Storniert</text><line x1="38" y1="80" x2="58" y2="80" stroke="#555" stroke-width="1.3" marker-end="url(#da3)"/><line x1="141" y1="80" x2="178" y2="80" stroke="#555" stroke-width="1.3" marker-end="url(#da3)"/><text x="159" y="73" text-anchor="middle" font-size="9" fill="#666">Zahlung</text><line x1="261" y1="80" x2="298" y2="80" stroke="#555" stroke-width="1.3" marker-end="url(#da3)"/><text x="279" y="73" text-anchor="middle" font-size="9" fill="#666">Lieferung</text><line x1="108" y1="96" x2="155" y2="123" stroke="#555" stroke-width="1.3" marker-end="url(#da3)"/><text x="118" y="116" font-size="9" fill="#666">Abbruch</text></svg>',
   options:['Offen','Abgeschlossen','Bezahlt','Keiner — alle Zustände können direkt storniert werden'],
   answer:2,explanation:'Laut Diagramm gibt es einen Übergang von "Offen" → "Storniert" (Abbruch vor Zahlung). Kein Pfeil führt von "Bezahlt" nach "Storniert" oder von "Abgeschlossen" nach "Storniert". Von "Abgeschlossen" gibt es überhaupt keinen ausgehenden Pfeil (Endzustand). Von "Bezahlt" fehlt explizit ein Stornierungspfad — ob das korrekt oder ein Fehler ist, hängt vom fachlichen Kontext ab.',lz:'LZ 5-4',k:'K2'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Welchen BPMN-Gateway-Typ zeigt das Diagramm, und was bedeutet er?',
   diagram:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 160" style="max-width:100%;height:auto;display:block;margin:auto;font-family:system-ui,sans-serif"><defs><marker id="da4" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#555"/></marker></defs><rect x="20" y="65" width="80" height="30" rx="4" fill="#f0f2f7" stroke="#556" stroke-width="1.3"/><text x="60" y="85" text-anchor="middle" font-size="11" fill="#334">Zahlung</text><text x="60" y="98" text-anchor="middle" font-size="11" fill="#334">eingegangen</text><polygon points="155,80 180,55 205,80 180,105" fill="#f0f2f7" stroke="#556" stroke-width="1.8"/><line x1="168" y1="68" x2="192" y2="92" stroke="#445" stroke-width="2"/><line x1="192" y1="68" x2="168" y2="92" stroke="#445" stroke-width="2"/><line x1="101" y1="80" x2="153" y2="80" stroke="#555" stroke-width="1.3" marker-end="url(#da4)"/><line x1="207" y1="72" x2="300" y2="45" stroke="#555" stroke-width="1.3" marker-end="url(#da4)"/><line x1="207" y1="80" x2="300" y2="80" stroke="#555" stroke-width="1.3" marker-end="url(#da4)"/><line x1="207" y1="88" x2="300" y2="115" stroke="#555" stroke-width="1.3" marker-end="url(#da4)"/><rect x="302" y="32" width="90" height="26" rx="3" fill="#fff" stroke="#889" stroke-width="1"/><text x="347" y="50" text-anchor="middle" font-size="11" fill="#334">Kreditkarte</text><rect x="302" y="67" width="90" height="26" rx="3" fill="#fff" stroke="#889" stroke-width="1"/><text x="347" y="85" text-anchor="middle" font-size="11" fill="#334">Überweisung</text><rect x="302" y="102" width="90" height="26" rx="3" fill="#fff" stroke="#889" stroke-width="1"/><text x="347" y="120" text-anchor="middle" font-size="11" fill="#334">PayPal</text></svg>',
   options:['Paralleles Gateway (AND) — alle drei Zahlungswege werden gleichzeitig ausgeführt.','Inklusives Gateway (OR) — mindestens ein Zahlungsweg wird gewählt.','Exklusives Gateway (XOR) — genau ein Zahlungsweg wird gewählt; das X-Symbol kennzeichnet diesen Typ.','Ereignisbasiertes Gateway — der erste eintretende Zahlungseingang entscheidet.'],
   answer:2,explanation:'Das X im Gateway-Symbol kennzeichnet das exklusive (XOR) Gateway. Es wird genau ein ausgehender Pfad genommen — das System entscheidet sich für EINEN Zahlungsweg. Das AND-Gateway hat ein "+"-Symbol (alle Pfade). Das OR-Gateway hat einen Kreis im Inneren (mindestens ein Pfad). Das XOR ist der häufigste Gateway-Typ für Entscheidungspunkte.',lz:'LZ 5-3',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Das Diagramm zeigt zwei Use-Case-Beziehungen. Welche Aussage ist korrekt?',
   diagram:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 200" style="max-width:100%;height:auto;display:block;margin:auto;font-family:system-ui,sans-serif"><defs><marker id="da5s" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#555"/></marker><marker id="da5o" markerWidth="7" markerHeight="5" refX="0" refY="2.5" orient="auto"><polygon points="7 0,0 2.5,7 5" fill="#555"/></marker></defs><text x="210" y="16" text-anchor="middle" font-size="11" fill="#778">Beziehung A</text><ellipse cx="130" cy="55" rx="65" ry="20" fill="#f0f2f7" stroke="#556" stroke-width="1.3"/><text x="130" y="60" text-anchor="middle" font-size="11" fill="#334">Bestellung aufgeben</text><ellipse cx="310" cy="55" rx="65" ry="20" fill="#f0f2f7" stroke="#556" stroke-width="1.3"/><text x="310" y="60" text-anchor="middle" font-size="11" fill="#334">Warenkorb prüfen</text><line x1="196" y1="55" x2="244" y2="55" stroke="#555" stroke-width="1.2" stroke-dasharray="5,3" marker-end="url(#da5s)"/><text x="220" y="48" text-anchor="middle" font-size="10" fill="#556">«include»</text><text x="210" y="110" text-anchor="middle" font-size="11" fill="#778">Beziehung B</text><ellipse cx="130" cy="150" rx="65" ry="20" fill="#f0f2f7" stroke="#556" stroke-width="1.3"/><text x="130" y="155" text-anchor="middle" font-size="11" fill="#334">Bestellung aufgeben</text><ellipse cx="310" cy="150" rx="65" ry="20" fill="#f0f2f7" stroke="#556" stroke-width="1.3"/><text x="310" y="155" text-anchor="middle" font-size="11" fill="#334">Express wählen</text><line x1="244" y1="150" x2="196" y2="150" stroke="#555" stroke-width="1.2" stroke-dasharray="5,3" marker-end="url(#da5o)"/><text x="220" y="143" text-anchor="middle" font-size="10" fill="#556">«extend»</text></svg>',
   options:['Beide Pfeile zeigen in dieselbe Richtung — das ist korrekt für include und extend.','Beziehung A ist falsch: bei «include» muss der Pfeil vom eingebundenen UC ausgehen.','Beide Pfeile sind korrekt: «include» zeigt vom Basis-UC zum eingebundenen UC; «extend» zeigt vom Erweiterungs-UC zum Basis-UC.','Beziehung B ist falsch: «extend»-Pfeile müssen vom Basis-UC ausgehen.'],
   answer:2,explanation:'«include»: Pfeil geht vom Basis-UC zum obligatorisch eingebundenen UC (A ruft B immer auf). «extend»: Pfeil geht vom Erweiterungs-UC zum Basis-UC (B erweitert A optional). Beide Pfeile sind gestrichelt und mit Stereotyp beschriftet. Die entgegengesetzten Richtungen sind beabsichtigt und korrekt.',lz:'LZ 5-2',k:'K2'},

  // ══ v3.8: LE7 — VALIDIERUNG/VERIFIKATION fast recall + classic traps ════════

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'terminology',
   text:'Welche Aussage beschreibt VALIDIERUNG im Requirements Engineering korrekt?',
   options:['Validierung prüft, ob die Implementierung der Spezifikation entspricht.',
            'Validierung prüft, ob die Spezifikation die tatsächlichen Stakeholder-Bedürfnisse erfüllt — "Bauen wir das RICHTIGE System?"',
            'Validierung prüft die interne Konsistenz eines Anforderungsdokuments auf Widersprüche.',
            'Validierung erfolgt ausschließlich durch automatisierte Tests nach der Implementierung.'],
   answer:1,explanation:'Validierung = "Bauen wir das RICHTIGE System?" — prüft, ob die Spezifikation den echten Bedarf der Stakeholder deckt. Verifikation = "Bauen wir das System RICHTIG?" — prüft, ob die Implementierung der Spezifikation entspricht. Zentraler Prüfungsklassiker.',lz:'LZ 7-4',k:'K1'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'trap',
   text:'Welche Frage steht für VERIFIKATION?',
   options:['Bauen wir das RICHTIGE System?',
            'Bauen wir das System RICHTIG?',
            'Prüfen wir die richtigen Stakeholder?',
            'Dokumentieren wir die Anforderungen vollständig?'],
   answer:1,explanation:'"Bauen wir das System RICHTIG?" = Verifikation (Implementierung ≡ Spezifikation). "Bauen wir das RICHTIGE System?" = Validierung (Spezifikation ≡ Stakeholder-Bedürfnisse). Merkhilfe: Verifikation = Korrektheit des Artefakts, Validierung = Wert für den Stakeholder.',lz:'LZ 7-4',k:'K1'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'trap',
   text:'"Das RICHTIGE System bauen" steht für:',
   options:['Verifikation','Validierung','Inspektion','Technisches Review'],
   answer:1,explanation:'Validierung = "Bauen wir das RICHTIGE System?" — das Ergebnis entspricht dem echten Stakeholder-Bedarf. Verifikation = "Bauen wir es RICHTIG?" — die Implementierung entspricht der Spezifikation.',lz:'LZ 7-4',k:'K1'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'terminology',
   text:'Wann sollte VALIDIERUNG von Anforderungen idealerweise durchgeführt werden?',
   options:['Ausschließlich am Projektende nach vollständiger Implementierung.',
            'Frühzeitig und kontinuierlich — bereits bei ersten Anforderungsentwürfen.',
            'Nur wenn ein formales Review durch externe Gutachter gefordert wird.',
            'Erst nach Abschluss aller Verifikationsmaßnahmen.'],
   answer:1,explanation:'Validierung so früh wie möglich: Fehler in Anforderungen, die früh entdeckt werden, kosten deutlich weniger als Korrekturen nach der Implementierung. Frühzeitige Validierung durch Prototypen, Reviews oder Workshops reduziert Nacharbeit erheblich.',lz:'LZ 7-4',k:'K1'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'terminology',
   text:'Welche Review-Technik erfordert KEINE strukturierte individuelle Vorbereitung der Gutachter?',
   options:['Formale Inspektion (Fagan-Inspektion)',
            'Walkthrough',
            'Technisches Review mit Checklisten',
            'Peer Review mit Fehlerprotokoll'],
   answer:1,explanation:'Der Walkthrough erfordert keine Vorbereitung: Autor präsentiert das Dokument, Gutachter geben spontanes Feedback. Die formale Inspektion (Fagan) ERFORDERT dagegen eine obligatorische individuelle Vorbereitungsphase als Pflichtschritt.',lz:'LZ 7-2',k:'K1'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'terminology',
   text:'Welche Review-Technik erzielt die HÖCHSTE Fehlererkennungsrate?',
   options:['Informelles Review','Walkthrough','Technisches Review','Formale Inspektion (Fagan-Inspektion)'],
   answer:3,explanation:'Die formale Inspektion erzielt die höchste Fehlererkennungsrate: obligatorische individuelle Vorbereitung der Gutachter, klare Rollenverteilung, Checklisten, strukturierte Besprechung und Fehlermetriken. Informelle Techniken sind schneller, aber weniger gründlich.',lz:'LZ 7-1',k:'K1'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'terminology',
   text:'Welche der folgenden Techniken ist eine anerkannte VALIDIERUNGSTECHNIK nach IREB?',
   options:['Syntaxprüfung durch einen Parser',
            'Formale Inspektion mit Fehlermetriken',
            'Prototyping mit Stakeholder-Feedback',
            'Automatisierter Regressionstest'],
   answer:2,explanation:'Prototyping ist eine Validierungstechnik: Stakeholder interagieren mit einem frühen Modell und erkennen, ob es ihren Bedürfnissen entspricht. Formale Inspektion ist eine Verifikationstechnik (prüft Artefakt gegen Qualitätskriterien). Syntaxprüfung und Regressionstest sind technische Prüftechniken.',lz:'LZ 7-4',k:'K1'},

  {type:'single',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'trap',
   text:'"Reviews prüfen, ob das System korrekt funktioniert." — Diese Aussage ist:',
   options:['Korrekt — Reviews sind die wichtigste Form der Systemqualitätssicherung.',
            'Falsch — Reviews prüfen schriftliche ARTEFAKTE (Anforderungen, Design) ohne das System auszuführen.',
            'Korrekt — Reviews und dynamische Tests sind gleichwertig.',
            'Falsch — Reviews werden nur bei agilen Projekten eingesetzt.'],
   answer:1,explanation:'Reviews sind STATISCHE Prüftechniken: Sie prüfen Artefakte durch menschliche Begutachtung — ohne Systemausführung. Tests sind DYNAMISCH: Das System wird ausgeführt. Häufigster Prüfungsfehler: Reviews mit Tests gleichzusetzen.',lz:'LZ 7-1',k:'K1'},

  // ══ v3.8: LE9 — WERKZEUGE fast recall + traps ════════════════════════════════

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'terminology',
   text:'Welche WERKZEUGKATEGORIE wird primär für die Erstellung von UML- und BPMN-Diagrammen eingesetzt?',
   options:['Anforderungsmanagement-Werkzeug (RM-Tool) wie DOORS oder Polarion',
            'Modellierungswerkzeug wie Enterprise Architect oder Visual Paradigm',
            'Testmanagement-Werkzeug wie TestRail oder Zephyr',
            'Konfigurationsmanagement-Werkzeug wie Git'],
   answer:1,explanation:'Modellierungswerkzeuge sind spezialisiert auf grafische Notation (UML, BPMN, ERD). RM-Tools verwalten textuelle Anforderungen mit Versionierung und Traceability — sie unterstützen Modellierung nur eingeschränkt.',lz:'LZ 9-2',k:'K1'},

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'trap',
   text:'Was können ANFORDERUNGSMANAGEMENT-WERKZEUGE (RM-Tools) NICHT automatisch sicherstellen?',
   options:['Versionierung und Änderungshistorie von Anforderungen',
            'Traceability-Links zwischen Anforderungen und Testfällen',
            'Die inhaltliche Qualität und Korrektheit der Anforderungen',
            'Status-Tracking für jede einzelne Anforderung'],
   answer:2,explanation:'RM-Tools verwalten, verlinken und versionieren — schlechte Anforderungen bleiben schlechte Anforderungen. Inhaltliche Qualität entsteht durch RE-Kompetenz, Prozess und menschliche Reviews. Das Werkzeug ersetzt den RE-Prozess nicht.',lz:'LZ 9-2',k:'K1'},

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'terminology',
   text:'Wofür steht das INVEST-Kriterium bei User Stories?',
   options:['Ein Schätzverfahren für Story Points in der agilen Planung.',
            'Kriterien für gute User Stories: Independent, Negotiable, Valuable, Estimable, Small, Testable.',
            'Ein Framework zur Priorisierung des Product Backlogs nach Geschäftswert.',
            'Die sechs Pflichtbestandteile einer formalen Anforderungsspezifikation.'],
   answer:1,explanation:'INVEST: I=Independent (unabhängig), N=Negotiable (verhandelbar), V=Valuable (wertvoll), E=Estimable (schätzbar), S=Small (klein genug für einen Sprint), T=Testable (prüfbar mit Akzeptanzkriterien). Eine gute User Story erfüllt alle sechs Kriterien.',lz:'LZ 9-1',k:'K1'},

  {type:'single',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'trap',
   text:'Ein Team nutzt DOORS: Anforderungen versioniert, verlinkt, priorisiert — aber 40 % sind mehrdeutig und nicht prüfbar. Was erklärt dieses Problem?',
   options:['DOORS ist für agile Projekte nicht mehr geeignet.',
            'Das Team hätte ein Modellierungswerkzeug verwenden sollen.',
            'RM-Tools verwalten Anforderungen — sie verbessern nicht automatisch deren inhaltliche Qualität.',
            'Die Traceability-Links wurden nicht korrekt konfiguriert.'],
   answer:2,explanation:'RM-Tools wie DOORS speichern, verlinken und versionieren. Schlechte Anforderungen bleiben schlecht — das Werkzeug kann Qualität nicht erkennen oder korrigieren. Inhaltliche Qualität entsteht durch RE-Kompetenz, Prozess und Reviews.',lz:'LZ 9-2',k:'K2'},

  // ══ v3.8: CLASSIC EXAM TRAPS — blunt, fast, pattern-recognition ═════════════

  {type:'single',chapter:'Kap. 1 · Was ist eine Anforderung?',errorType:'trap',
   text:'"Das System soll bei 1 000 gleichzeitigen Nutzern in unter 2 Sekunden antworten." Welcher Anforderungstyp ist das?',
   options:['Funktionale Anforderung — sie beschreibt, WAS das System tut.',
            'Qualitätsanforderung (nicht-funktional) — sie beschreibt eine messbare Leistungseigenschaft.',
            'Randbedingung — sie schränkt das System von außen ein.',
            'Designanforderung — sie legt die technische Umsetzung fest.'],
   answer:1,explanation:'Antwortzeit ist eine Leistungseigenschaft (Performance) — eine Qualitätsanforderung (nicht-funktional). Funktionale Anforderungen beschreiben Funktionen ("Das System soll Bestellungen annehmen"). Prüfungsfehler: Messbarkeit ≠ Funktionalität.',lz:'LZ 1-2',k:'K1'},

  {type:'single',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'trap',
   text:'"Das System SOLL eine Exportfunktion bereitstellen." Was bedeutet \'SOLL\' im normativen IREB-Sprachgebrauch?',
   options:['Empfohlen, aber optional.',
            'Obligatorisch / Pflicht — die Anforderung ist verbindlich zu erfüllen.',
            'Nur gültig wenn Budget vorhanden.',
            'Gleichbedeutend mit "darf" — erlaubt, aber nicht gefordert.'],
   answer:1,explanation:'"SOLL" entspricht im normativen deutschen Sprachgebrauch (IREB, DIN) dem englischen "shall" — OBLIGATORISCH. "Sollte" = empfohlen (should). "Darf" = optional (may). Verwechslung von "soll" und "sollte" führt zu fehlinterpretierten Anforderungen.',lz:'LZ 5-1',k:'K1'},

  {type:'single',chapter:'Kap. 2 · Systemkontext',errorType:'trap',
   text:'"Als Buchhalterin möchte ich Monatsberichte als PDF exportieren können." — Stakeholder-Anforderung oder Systemanforderung?',
   options:['Systemanforderung — sie beschreibt eine konkrete Funktion des Systems.',
            'Stakeholder-Anforderung — sie drückt ein Bedürfnis aus, ohne technische Umsetzung festzulegen.',
            'Randbedingung — externe Vorgabe.',
            'Qualitätsanforderung — Eigenschaft der Systemleistung.'],
   answer:1,explanation:'Stakeholder-Anforderungen drücken Bedürfnisse aus — "Wer will was?" ohne technische Details. Systemanforderungen leiten sich daraus ab und beschreiben, WIE das System das Bedürfnis technisch erfüllt.',lz:'LZ 2-4',k:'K1'},

  {type:'single',chapter:'Kap. 1 · Was ist eine Anforderung?',errorType:'trap',
   text:'Welches ist eine QUALITÄTSANFORDERUNG (nicht-funktionale Anforderung)?',
   options:['Das System soll Benutzer authentifizieren.',
            'Das System soll eine Suchfunktion bereitstellen.',
            'Das System soll zu 99,9 % der Zeit verfügbar sein.',
            'Das System soll Bestellungen speichern.'],
   answer:2,explanation:'Verfügbarkeit (99,9 %) ist eine Qualitätseigenschaft — nicht-funktionale Anforderung. Authentifizierung, Suche und Bestellungen speichern sind Funktionen — funktionale Anforderungen. Merkhilfe: Qualitätsanforderungen = WIE GUT, funktionale = WAS.',lz:'LZ 1-2',k:'K1'},

  {type:'single',chapter:'Kap. 1 · Was ist eine Anforderung?',errorType:'terminology',
   text:'Was unterscheidet eine RANDBEDINGUNG von einer QUALITÄTSANFORDERUNG?',
   options:['Randbedingungen sind immer teurer in der Umsetzung.',
            'Randbedingungen schränken den Lösungsraum ein (z. B. Technologievorgabe, Gesetz), ohne eine Güte des Systems zu beschreiben.',
            'Qualitätsanforderungen sind messbar, Randbedingungen nicht.',
            'Randbedingungen werden nur von externen Stakeholdern formuliert.'],
   answer:1,explanation:'Randbedingung = schränkt Lösungsraum ein (z. B. "System MUSS Java-basiert sein" — keine messbare Güte, sondern Implementierungseinschränkung). Qualitätsanforderung = beschreibt WIE GUT (z. B. Antwortzeit, Verfügbarkeit). Beide können messbar sein und von externen Parteien kommen.',lz:'LZ 1-2',k:'K1'}
];

// ─────────────── MEHRFACHAUSWAHL (30) ───────────────
