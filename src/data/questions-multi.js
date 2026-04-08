const multiPool=[
  {type:'multiple',chapter:'Kap. 2 · Systemkontext',errorType:'terminology',
   text:'Welche ZWEI der folgenden Aussagen beschreiben den Begriff STAKEHOLDER im IREB-Sinne korrekt?',
   options:['Stakeholder sind ausschließlich die direkten Endnutzer, die täglich mit dem System arbeiten.','Stakeholder können sowohl direkte als auch indirekte Interessen an den Anforderungen des Systems haben.','Regulierungsbehörden sind typische Stakeholder, auch wenn sie das System selbst nie nutzen.','Stakeholder sind ausschließlich Personen mit einem vertraglichen Verhältnis zum Auftraggeber.'],
   answer:[1,2],explanation:'Stakeholder sind alle Personen, Gruppen oder Organisationen mit direktem oder indirektem Einfluss auf Anforderungen oder die vom System betroffen sind (B). Regulierungsbehörden sind ein klassischer Fall indirekter Stakeholder: Sie nutzen das System nicht, stellen aber verbindliche Anforderungen (C). Nur direkte Endnutzer (A) und Vertragspartner (D) sind zu enge Definitionen.',lz:'LZ 2-4',k:'K2'},

  {type:'multiple',chapter:'Kap. 1 · Was ist eine Anforderung?',errorType:'terminology',
   text:'Welche ZWEI Aussagen über QUALITÄTSANFORDERUNGEN (nicht-funktionale Anforderungen) sind im IREB-Referenzmodell korrekt?',
   options:['Qualitätsanforderungen sind stets optional und müssen nur umgesetzt werden, wenn Zeit und Budget es erlauben.','Qualitätsanforderungen beschreiben, wie gut das System eine Funktion erbringen soll.','Qualitätsanforderungen können Leistungs-, Zuverlässigkeits- und Sicherheitsaspekte umfassen.','Qualitätsanforderungen beschreiben ausschließlich die Benutzeroberfläche des Systems.'],
   answer:[1,2],explanation:'Qualitätsanforderungen beschreiben die Güte der Leistungserbringung (B) und decken ein breites Spektrum ab: Performance, Zuverlässigkeit, Sicherheit, Verfügbarkeit, Wartbarkeit u. a. (C). Sie sind keineswegs optional (A); und sie sind nicht auf UI beschränkt (D).',lz:'LZ 1-2',k:'K2'},

  {type:'multiple',chapter:'Kap. 4 · Anforderungserhebung',errorType:'method',
   text:'Welche ZWEI Techniken eignen sich BESONDERS zur Aufdeckung von implizitem Wissen (tacit knowledge)?',
   options:['Schriftlicher Fragebogen mit Multiple-Choice-Antworten','Feldbeobachtung der Stakeholder in ihrer realen Arbeitsumgebung','Prototyping mit anschließenden Feedback-Sitzungen','Dokumentenanalyse bestehender Prozesshandbücher'],
   answer:[1,2],explanation:'Feldbeobachtung deckt implizites Wissen auf, indem tatsächliche Arbeitsabläufe sichtbar werden, die Stakeholder nicht beschreiben können (B). Prototyping externalisiert implizite Erwartungen durch die Reaktion auf ein konkretes Modell (C). Fragebögen setzen verbalisierbarkeit voraus (A); Dokumentenanalyse erschließt explizites, bereits kodifiziertes Wissen (D).',lz:'LZ 4-1',k:'K2'},

  {type:'multiple',chapter:'Kap. 2 · Systemkontext',errorType:'terminology',
   text:'Welche ZWEI Aussagen zur SYSTEMGRENZE sind korrekt?',
   options:['Die Systemgrenze legt fest, welche Teile der Realität zum System gehören und welche zur Umgebung (Kontext).','Die Systemgrenze ist durch die gewählte Softwarearchitektur technisch fest vorgegeben.','Alles innerhalb der Systemgrenze wird vom Entwicklungsteam entworfen und implementiert.','Die Systemgrenze wird ausschließlich vom Auftraggeber festgelegt und kann im Projektverlauf nicht verändert werden.'],
   answer:[0,2],explanation:'Die Systemgrenze trennt System und Kontext (A): Was innen liegt, ist Scope des Projekts und wird vom Team gebaut (C). Die Grenze ist keine technische Gegebenheit, sondern eine gemeinsam ausgehandelte Scope-Entscheidung (B falsch). Sie kann sich im Projektverlauf durch Verhandlungen verschieben (D falsch).',lz:'LZ 2-2',k:'K2'},

  {type:'multiple',chapter:'Kap. 6 · Anforderungsqualität',errorType:'trap',
   text:'Eine Anforderung lautet: \'Das System soll bei Bedarf performant reagieren und alle Sicherheitsstandards einhalten.\' Welche ZWEI Qualitätskriterien werden verletzt?',
   options:['Konsistenz — \'performant\' und \'sicher\' widersprechen sich per Definition','Atomarität — mehrere Qualitätseigenschaften (Performance, Sicherheit) werden in einer Anforderung gebündelt','Prüfbarkeit — \'bei Bedarf\' und \'performant\' sind subjektiv und nicht objektiv messbar','Vollständigkeit — Implementierungsdetails fehlen in der Anforderung'],
   answer:[1,2],explanation:'Atomarität ist verletzt: Performance und Sicherheit sind zwei verschiedene Qualitätseigenschaften, die separat priorisiert und getestet werden müssen (B). Prüfbarkeit ist verletzt: \'bei Bedarf\' definiert keinen Messzustand; \'performant\' enthält keine Schwellenwerte (C). Konsistenz wäre nur verletzt, wenn sich die Anforderungen logisch widersprechen (A falsch). Vollständigkeit bezieht sich auf fehlende Anforderungen, nicht fehlende Details (D falsch).',lz:'LZ 6-1',k:'K2'},

  {type:'multiple',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'method',
   text:'Welche ZWEI Aussagen zur formalen INSPEKTION (z. B. Fagan-Inspektion) sind korrekt?',
   options:['Die formale Inspektion folgt einem strukturierten Prozess mit definierten Rollen — Moderator, Autor, Gutachter, Schriftführer.','Bei einer formalen Inspektion übernimmt der Autor gleichzeitig die Moderation, um Zeit zu sparen.','Formale Inspektionen verwenden Checklisten und erheben Fehlermetriken.','Formale Inspektionen erfordern keine individuelle Vorbereitung der Gutachter.'],
   answer:[0,2],explanation:'Formale Inspektionen haben definierte, getrennte Rollen — Autor und Moderator sind explizit VERSCHIEDENE Personen (A, B falsch). Checklisten und Fehlermetriken sind Kernmerkmale der Fagan-Inspektion (C). Individuelle Vorbereitung der Gutachter ist eine Pflichtphase (D falsch).',lz:'LZ 7-2',k:'K2'},

  {type:'multiple',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'terminology',
   text:'Welche ZWEI Aktivitäten gehören EXPLIZIT zur ANFORDERUNGSVERWALTUNG (Requirements Management)?',
   options:['Versionierung von Anforderungen und Verwaltung der Änderungshistorie','Ersterhebung von Anforderungen durch Stakeholder-Interviews','Erstellung von UML-Modellen zur Systemstruktur','Pflege der Verfolgbarkeit (Traceability) über den gesamten Projektverlauf'],
   answer:[0,3],explanation:'Anforderungsverwaltung umfasst: Versionierung und Änderungshistorie (A), Statusverfolgung, Traceability-Pflege (D) und Änderungsmanagement. Ersterhebung (B) ist eine eigene RE-Kernaktivität. UML-Modellierung (C) gehört zur RE-Dokumentation.',lz:'LZ 8-1',k:'K2'},

  {type:'multiple',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'method',
   text:'Welche ZWEI Modellierungsnotationen eignen sich zur Beschreibung des DYNAMISCHEN VERHALTENS eines Systems?',
   options:['Entity-Relationship-Diagramm (ERD)','Zustandsautomat (State Machine Diagram)','Klassendiagramm (UML)','Sequenzdiagramm'],
   answer:[1,3],explanation:'Zustandsautomaten beschreiben, wie ein Objekt oder System zwischen Zuständen wechselt — dynamisches Verhalten über die Zeit (B). Sequenzdiagramme beschreiben die zeitliche Abfolge von Nachrichten zwischen Komponenten (D). ERDs und Klassendiagramme sind statische Strukturmodelle.',lz:'LZ 5-3',k:'K2'},

  {type:'multiple',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'method',
   text:'Welche ZWEI Aussagen zur ANFORDERUNGSPRIORISIERUNG sind korrekt?',
   options:['Priorisierung legt fest, welcher Entwickler welche Anforderung umsetzt.','Priorisierung hilft, bei begrenzten Ressourcen die wichtigsten Anforderungen zuerst umzusetzen.','Priorisierung kann eingesetzt werden, um den Scope bei Engpässen gezielt zu steuern.','Priorisierung ersetzt die Validierung von Anforderungen.'],
   answer:[1,2],explanation:'Priorisierung bestimmt den relativen Wert oder die Dringlichkeit von Anforderungen und hilft, Ressourcen gezielt einzusetzen (B). Sie ist ein Scope-Management-Werkzeug bei Engpässen (C). Sie weist keine Entwickler zu (A) und ersetzt keine Validierung (D).',lz:'LZ 8-6',k:'K2'},

  {type:'multiple',chapter:'Kap. 4 · Anforderungserhebung',errorType:'method',
   text:'Welche ZWEI Aussagen zum ANFORDERUNGSWORKSHOP als Erhebungstechnik sind korrekt?',
   options:['Ein Workshop ermöglicht es Stakeholdern, Konflikte direkt zu diskutieren und gemeinsam Einigkeit zu erzielen.','Workshops erfordern keine Moderation und keine Vorbereitung.','Workshops eignen sich ausschließlich für die Erhebung technischer Anforderungen.','Ein Workshop fördert das gemeinsame Verständnis des Problems unter mehreren Stakeholdern.'],
   answer:[0,3],explanation:'Anforderungsworkshops bringen Stakeholder zusammen, sodass Konflikte direkt ausgehandelt werden können (A) und ein gemeinsames Problemverständnis entsteht (D). Ohne Moderation und Vorbereitung sind Workshops wenig effektiv (B falsch). Workshops decken funktionale wie nicht-funktionale Anforderungen ab (C falsch).',lz:'LZ 4-2',k:'K2'},

  {type:'multiple',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'trap',
   text:'Welche ZWEI Aussagen zur Dokumentation in NATÜRLICHER SPRACHE sind richtig?',
   options:['Natürliche Sprache ist für alle Stakeholder unabhängig vom technischen Hintergrund zugänglich.','Natürlichsprachige Anforderungen sind immer präziser als formale Modellnotationen.','Natürliche Sprache eignet sich nur für nicht-funktionale Anforderungen.','Natürlichsprachige Anforderungen sind anfällig für Mehrdeutigkeiten und unterschiedliche Interpretationen.'],
   answer:[0,3],explanation:'Natürliche Sprache ist leicht zugänglich (A) — kein spezielles Notationswissen erforderlich. Sie leidet aber unter inhärenter Mehrdeutigkeit (D). Formale Notationen sind präziser, aber schwerer zugänglich (B falsch). Natürliche Sprache deckt funktionale wie nicht-funktionale Anforderungen ab (C falsch).',lz:'LZ 5-1',k:'K2'},

  {type:'multiple',chapter:'Kap. 4 · Anforderungserhebung',errorType:'method',
   text:'Welche ZWEI Aussagen über FELDBEOBACHTUNG (ethnografische Erhebung) sind korrekt?',
   options:['Feldbeobachtung eignet sich besonders, wenn Stakeholder ihre Arbeitsweise nicht vollständig beschreiben können.','Feldbeobachtung liefert ausschließlich quantitative, statistisch auswertbare Daten.','Feldbeobachtung kann implizites Wissen aufdecken, das in Interviews verborgen bleibt.','Feldbeobachtung ersetzt vollständig alle anderen Erhebungstechniken in jedem Projekt.'],
   answer:[0,2],explanation:'Feldbeobachtung ist optimal, wenn Stakeholder tacit knowledge besitzen, das sie nicht verbalisieren können (A). Sie deckt Wissen auf, das Interviews nicht erreichen (C). Feldbeobachtung liefert primär qualitative Daten (B falsch) und ergänzt, ersetzt aber nicht alle anderen Techniken (D falsch).',lz:'LZ 4-2',k:'K2'},

  {type:'multiple',chapter:'Kap. 6 · Anforderungsqualität',errorType:'scenario',
   text:'Welche ZWEI Konsequenzen entstehen typischerweise, wenn Anforderungen NICHT PRÜFBAR sind?',
   options:['Das Projekt wird automatisch vom Change Control Board gestoppt.','Es kann nicht objektiv festgestellt werden, ob die Anforderung erfüllt wurde.','Stakeholder lehnen nicht prüfbare Anforderungen automatisch ab.','Testfälle für die Anforderung können nicht sinnvoll abgeleitet werden.'],
   answer:[1,3],explanation:'Nicht prüfbare Anforderungen lassen keine objektive Erfolgsbeurteilung zu (B) — wer entscheidet, ob \'intuitiv\' erfüllt ist? Außerdem können keine aussagekräftigen Testfälle abgeleitet werden (D). Automatischer Projektstopp (A) und automatische Ablehnung (C) sind keine realistischen Konsequenzen.',lz:'LZ 6-2',k:'K2'},

  {type:'multiple',chapter:'Kap. 2 · Systemkontext',errorType:'scenario',
   text:'Welche ZWEI Faktoren sind typischerweise Bestandteil des SYSTEMKONTEXTS?',
   options:['Externe Systeme, die Daten mit dem zu entwickelnden System austauschen','Das interne Datenbankschema des zu entwickelnden Systems','Gesetzliche und regulatorische Vorgaben, die das System einhalten muss','Die interne Softwarearchitektur des zu entwickelnden Systems'],
   answer:[0,2],explanation:'Externe Systeme mit Datenaustausch liegen außerhalb der Systemgrenze und sind Systemkontext (A). Gesetzliche Vorgaben sind externe Einflüsse auf das System (C). Das interne Datenbankschema (B) und die Architektur (D) sind Teile des Systems selbst.',lz:'LZ 2-3',k:'K2'},

  {type:'multiple',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'method',
   text:'Welche ZWEI Aktivitäten sind KERNELEMENT des formalen ÄNDERUNGSMANAGEMENTS?',
   options:['Erhebung neuer Anforderungen durch Stakeholder-Workshops','Erstellung von UML-Diagrammen für jede geänderte Anforderung','Auswirkungsanalyse der Änderung auf bestehende Anforderungen und nachgelagerte Artefakte','Formale Genehmigung von Änderungen durch eine legitimierte Instanz (z. B. Change Control Board)'],
   answer:[2,3],explanation:'Änderungsmanagement erfordert Auswirkungsanalysen (C) und formale Genehmigung (D). Erhebung neuer Anforderungen (A) ist eine separate RE-Kernaktivität. UML-Diagramme (B) können Teil der Dokumentation sein, sind aber kein zwingendes Kernelement des Änderungsprozesses.',lz:'LZ 8-4',k:'K2'},

  {type:'multiple',chapter:'Kap. 3 · RE-Prozess',errorType:'method',
   text:'Welche ZWEI Aussagen über den REQUIREMENTS-ENGINEERING-PROZESS sind korrekt?',
   options:['RE ist ein iterativer Prozess — Aktivitäten wiederholen sich und beeinflussen sich gegenseitig.','RE endet formal mit dem Abschluss der Systemanalysephase.','RE-Aktivitäten können parallel und überlappend stattfinden.','RE ist ausschließlich Aufgabe des Requirements Engineers, nicht anderer Projektrollen.'],
   answer:[0,2],explanation:'RE ist iterativ (A) — neue Erkenntnisse aus Dokumentation oder Validierung können neue Erhebungsaktivitäten auslösen. Kernaktivitäten überlappen sich (C). RE begleitet das gesamte Projekt (B falsch). Stakeholder, Product Owner, Entwickler und Tester sind ebenfalls an RE-Aktivitäten beteiligt (D falsch).',lz:'LZ 3-2',k:'K2'},

  {type:'multiple',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   text:'Welche ZWEI Aussagen über USE CASES sind korrekt?',
   options:['Use Cases modellieren ausschließlich die internen Datenstrukturen eines Systems.','Use Cases beschreiben das Systemverhalten aus Sicht der Akteure und deren Interaktionen mit dem System.','Ein Use Case kann sowohl einen Normalablauf als auch Alternativ- und Fehlerszenarien beschreiben.','Use Cases sind ausschließlich für klassische (Wasserfall-)Projekte geeignet.'],
   answer:[1,2],explanation:'Use Cases beschreiben das externe Verhalten des Systems aus Akteursperspektive (B). Sie umfassen Haupt- und Alternativszenarien, Ausnahmen und Fehlerfälle (C). Sie modellieren keine internen Strukturen (A). Use Cases sind methodenagnostisch und in agilen wie klassischen Projekten einsetzbar (D falsch).',lz:'LZ 5-2',k:'K2'},

  {type:'multiple',chapter:'Kap. 6 · Anforderungsqualität',errorType:'trap',
   text:'Welche ZWEI Aussagen zur KONSISTENZ von Anforderungen sind korrekt?',
   options:['Konsistenz verlangt, dass keine Anforderung einer anderen in der Spezifikation widerspricht.','Konsistenz ist nur relevant, wenn Anforderungen von verschiedenen Stakeholdern stammen.','Widersprüche entstehen ausschließlich durch unklare Formulierungen, nie durch gegensätzliche Stakeholder-Interessen.','Traceability-Matrizen und systematische Reviews können bei der Konsistenzprüfung helfen.'],
   answer:[0,3],explanation:'Konsistenz bedeutet Widerspruchsfreiheit zwischen Anforderungen (A). Traceability-Matrizen helfen dabei, Anforderungen mit verwandten Artefakten zu vergleichen, und Reviews decken Inkonsistenzen systematisch auf (D). Konsistenz ist unabhängig von der Herkunft relevant (B falsch). Widersprüche entstehen häufig aus gegensätzlichen Stakeholder-Interessen (C falsch).',lz:'LZ 6-3',k:'K2'},

  {type:'multiple',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'method',
   text:'Welche ZWEI Techniken werden zur ANFORDERUNGSVALIDIERUNG eingesetzt?',
   options:['Brainstorming-Sitzungen zur Ideengenerierung für neue Features','Reviews (Inspektion, Walkthrough, technisches Review)','Prototyping zur frühzeitigen Rückmeldung durch Stakeholder','Entity-Relationship-Diagramme zur Datenmodellierung'],
   answer:[1,2],explanation:'Reviews prüfen Anforderungen systematisch auf Korrektheit, Vollständigkeit und Konsistenz (B). Prototyping lässt Stakeholder frühzeitig interagieren und Anforderungen validieren — \'Ist das das, was ich meinte?\' (C). Brainstorming (A) und Datenmodellierung (D) sind keine Validierungstechniken.',lz:'LZ 7-4',k:'K2'},

  {type:'multiple',chapter:'Kap. 2 · Systemkontext',errorType:'scenario',
   text:'Welche ZWEI Herausforderungen sind TYPISCH für die STAKEHOLDER-ANALYSE?',
   options:['Stakeholder-Gruppen können übersehen werden, was zu fehlenden oder falschen Anforderungen führt.','Alle Stakeholder haben stets vollständige und konsistente Anforderungen parat.','Verschiedene Stakeholder-Gruppen können konfliktäre oder widersprüchliche Anforderungen haben.','Stakeholder-Analysen sind nur in Projekten mit mehr als 100 Stakeholdern relevant.'],
   answer:[0,2],explanation:'Fehlende Stakeholder-Gruppen führen zu blinden Flecken in der Anforderungserhebung (A). Konfliktäre Interessen zwischen Stakeholdern sind eine zentrale Herausforderung, die Anforderungsverhandlung erfordert (C). Stakeholder haben selten vollständige, konsistente Anforderungen (B falsch). Stakeholder-Analyse ist in jedem Projekt relevant (D falsch).',lz:'LZ 2-4',k:'K2'},

  {type:'multiple',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'method',
   text:'Welche ZWEI Aussagen zur Dokumentation von QUALITÄTSANFORDERUNGEN sind richtig?',
   options:['Qualitätsanforderungen müssen als eigenständige Systemkomponenten implementiert werden.','Qualitätsanforderungen sollten messbare Kriterien enthalten, damit ihre Erfüllung nachweisbar ist.','Qualitätsanforderungen können nur in formalen Notationen, nicht in natürlicher Sprache dokumentiert werden.','Qualitätsanforderungen können die Implementierung funktionaler Anforderungen einschränken oder beeinflussen.'],
   answer:[1,3],explanation:'Messbare Qualitätsanforderungen (z. B. \'99,9 % Verfügbarkeit\') sind prüfbar (B). Qualitätsanforderungen (Sicherheit, Performance) beeinflussen unmittelbar, wie funktionale Anforderungen implementiert werden dürfen (D). Sie müssen nicht als separate Komponenten implementiert werden (A falsch). Natürliche Sprache ist für QA-Dokumentation zulässig (C falsch).',lz:'LZ 6-2',k:'K2'},

  {type:'multiple',chapter:'Kap. 4 · Anforderungserhebung',errorType:'method',
   text:'Welche ZWEI Aussagen über KREATIVITÄTSTECHNIKEN in der Anforderungserhebung sind richtig?',
   options:['Kreativitätstechniken wie Brainstorming sind besonders zu Projektbeginn nützlich, wenn der Lösungsraum noch offen ist.','Kreativitätstechniken können innovative Anforderungen aufdecken, die klassische Interviews nicht liefern.','Kreativitätstechniken ersetzen grundsätzlich alle anderen Erhebungsverfahren im RE-Prozess.','Kreativitätstechniken liefern immer sofort umsetzbare, vollständige Anforderungen.'],
   answer:[0,1],explanation:'Kreativitätstechniken sind besonders in frühen Projektstadien wertvoll, wenn Ideen generiert werden sollen (A). Sie fördern innovative Ideen, die strukturierte Interviews nicht hervorbringen (B). Sie ergänzen andere Techniken, ersetzen sie aber nicht (C falsch). Kreativtechniken liefern Rohmaterial, das weiter verfeinert werden muss (D falsch).',lz:'LZ 4-2',k:'K2'},

  {type:'multiple',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'trap',
   text:'Welche ZWEI Aussagen zur ANFORDERUNGSVERFOLGBARKEIT (Traceability) sind korrekt?',
   options:['Traceability ist nur in sicherheitskritischen Systemen (Medizintechnik, Luftfahrt) relevant.','Traceability ermöglicht die Auswirkungsanalyse bei Anforderungsänderungen.','Traceability wird ausschließlich rückwärts (zu Anforderungsquellen) hergestellt.','Traceability kann vorwärts (zu Design, Code, Tests) und rückwärts (zu Quellen, Stakeholdern) hergestellt werden.'],
   answer:[1,3],explanation:'Traceability unterstützt Auswirkungsanalysen: Welche Artefakte sind von einer Änderung betroffen? (B). Sie wird bidirektional aufgebaut — vorwärts und rückwärts (D). Traceability ist in allen Projekten wertvoll, nicht nur in sicherheitskritischen (A falsch). Nur rückwärts wäre unvollständig (C falsch).',lz:'LZ 8-3',k:'K2'},

  {type:'multiple',chapter:'Kap. 3 · RE-Prozess',errorType:'method',
   text:'Welche ZWEI Aussagen zur RE-Kernaktivität DOKUMENTATION sind korrekt?',
   options:['Anforderungsdokumentation kann sowohl natürlichsprachige als auch modellbasierte Darstellungen umfassen.','Anforderungsdokumentation ersetzt die laufende Kommunikation mit Stakeholdern.','Eine Anforderungsdokumentation muss zwingend UML-Diagramme enthalten.','Das Ziel der Dokumentation ist, Anforderungen für alle relevanten Stakeholder verständlich und eindeutig festzuhalten.'],
   answer:[0,3],explanation:'Dokumentation nutzt Text und Modelle (A). Ihr Primärziel ist die verständliche und eindeutige Festlegung für alle Stakeholder (D). Sie ergänzt die Kommunikation, ersetzt sie nicht (B falsch). UML ist eine Möglichkeit, nicht eine Pflicht (C falsch).',lz:'LZ 3-1',k:'K2'},

  {type:'multiple',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'method',
   text:'Welche ZWEI Aussagen zur KONFLIKTLÖSUNG bei widersprüchlichen Anforderungen sind korrekt?',
   options:['Konflikte sollten immer ausschließlich vom Projektmanager entschieden werden, ohne Stakeholder einzubeziehen.','Strukturierte Verhandlungen zwischen den betroffenen Stakeholdern sind eine legitime Lösungsstrategie.','Wenn kein Konsens erzielt wird, sollte der Konflikt eskaliert und durch eine legitimierte Instanz entschieden werden.','Anforderungskonflikte entstehen ausschließlich durch sprachliche Missverständnisse und nie durch echte Interessenkonflikte.'],
   answer:[1,2],explanation:'Strukturierte Verhandlungen mit allen betroffenen Stakeholdern sind der bevorzugte Ansatz (B). Wenn Konsens nicht erzielt wird, muss eskaliert werden (C). Einseitige Entscheidungen durch den Projektmanager ohne Stakeholder-Einbeziehung sind unprofessionell (A falsch). Konflikte entstehen häufig durch echte Interessengegensätze (D falsch).',lz:'LZ 7-5',k:'K2'},

  {type:'multiple',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'method',
   text:'Welche ZWEI Notationen sind der STRUKTURELLEN Beschreibung eines Systems zuzuordnen?',
   options:['Klassendiagramm (UML)','Sequenzdiagramm','Entity-Relationship-Diagramm (ERD)','Aktivitätsdiagramm (UML)'],
   answer:[0,2],explanation:'Klassendiagramme zeigen die statische Struktur von Klassen, Attributen und Beziehungen (A). ERDs modellieren Datenstrukturen und Entitätsbeziehungen (C). Sequenz- und Aktivitätsdiagramme sind verhaltensorientiert.',lz:'LZ 5-4',k:'K2'},

  {type:'multiple',chapter:'Kap. 6 · Anforderungsqualität',errorType:'trap',
   text:'Welche ZWEI Merkmale zeichnen eine gut formulierte natürlichsprachliche Anforderung aus?',
   options:['Sie enthält detaillierte Beschreibungen der technischen Implementierung.','Sie ist eindeutig und lässt nur eine einzige Interpretation zu.','Sie bündelt möglichst viele Bedingungen in einer Aussage, um Dokumentationsaufwand zu sparen.','Sie ist prüfbar, sodass ihre Erfüllung objektiv nachgewiesen werden kann.'],
   answer:[1,3],explanation:'Eindeutigkeit (eine Interpretation) (B) und Prüfbarkeit (objektiv messbar) (D) sind zwei der wichtigsten Qualitätskriterien für Anforderungen. Technische Details gehören in Design-Dokumente (A falsch). Das Bündeln vieler Bedingungen verletzt die Atomarität (C falsch).',lz:'LZ 6-1',k:'K2'},

  {type:'multiple',chapter:'Kap. 4 · Anforderungserhebung',errorType:'method',
   text:'Welche ZWEI Aussagen zum PROTOTYPING als Erhebungstechnik sind korrekt?',
   options:['Prototyping hilft, implizites Wissen von Stakeholdern zu externalisieren.','Prototyping ist nur sinnvoll, wenn bereits eine vollständige Anforderungsspezifikation vorliegt.','Prototyping ist besonders wertvoll, wenn Stakeholder ihre Anforderungen nicht verbalisieren können.','Prototypen müssen immer lauffähige Softwaresysteme mit vollständigem Code sein.'],
   answer:[0,2],explanation:'Prototyping externalisiert implizites Wissen durch die Reaktion auf ein konkretes Modell (A). Es ist gerade dann wertvoll, wenn Stakeholder Schwierigkeiten haben, Anforderungen zu verbalisieren (C). Prototyping ist am wertvollsten ohne vollständige Spezifikation (B falsch). Papierprototypen und Mockups sind oft effektiver als vollständige Software (D falsch).',lz:'LZ 4-3',k:'K2'},

  {type:'multiple',chapter:'Kap. 3 · RE-Prozess',errorType:'terminology',
   text:'Welche ZWEI der folgenden Aktivitäten sind laut IREB KERNAKTIVITÄTEN des RE-Prozesses?',
   options:['Systemdesign und Architekturentscheidungen','Anforderungserhebung (Elicitation)','Deployment und Inbetriebnahme','Anforderungsvalidierung und -prüfung'],
   answer:[1,3],explanation:'Die vier IREB-Kernaktivitäten sind: Erhebung (B), Dokumentation, Prüfung/Validierung (D) und Verwaltung. Systemdesign und Architektur (A) gehören zum Systems Engineering. Deployment und Inbetriebnahme (C) sind Aufgaben des Projektmanagements und Betriebs.',lz:'LZ 3-1',k:'K1'},

  {type:'multiple',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'trap',
   text:'Welche ZWEI Aussagen zum UNTERSCHIED zwischen Use-Case-DIAGRAMM und Use-Case-SZENARIO sind korrekt?',
   options:['Das Use-Case-Diagramm zeigt alle detaillierten Interaktionsschritte zwischen Akteur und System.','Das Use-Case-Diagramm gibt einen Überblick: Akteure, Systemgrenze, Use-Case-Namen und Beziehungen.','Ein Use-Case-Szenario beschreibt die konkreten Schritte eines bestimmten Ablaufs (Normal- oder Alternativfall).','Use-Case-Szenarien werden ausschließlich für Fehlerfälle verwendet.'],
   answer:[1,2],explanation:'Das Diagramm ist ein Übersichtsmodell — keine Schrittbeschreibungen (B). Szenarien beschreiben konkrete Interaktionsfolgen für Normal- und Alternativabläufe (C). Detaillierte Schritte sind im Szenario, nicht im Diagramm (A falsch). Szenarien decken Normal- und Sonderfälle ab (D falsch).',lz:'LZ 5-6',k:'K2'},

  {type:'multiple',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'terminology',
   text:'Welche ZWEI Aussagen über USER STORIES im agilen RE sind korrekt?',
   options:['Eine User Story ist ein formales UML-Diagramm, das Systemfunktionen beschreibt.','User Stories sind kurze Beschreibungen einer Systemfunktion aus Nutzersicht im Format \'Als [Rolle] möchte ich [Ziel], damit [Nutzen]\'.','Akzeptanzkriterien machen User Stories testbar und definieren, wann die Story als \'done\' gilt.','User Stories ersetzen alle anderen RE-Dokumente in agilen Projekten.'],
   answer:[1,2],explanation:'User Stories folgen dem Standardformat (Rolle/Ziel/Nutzen) und beschreiben Funktionen aus Nutzersicht (B). Akzeptanzkriterien sind untrennbar mit User Stories verbunden — sie definieren die Erfüllungsbedingungen (C). User Stories sind keine UML-Diagramme (A falsch) und ersetzen nicht alle RE-Dokumente (D falsch).',lz:'LZ 9-1',k:'K2'},

  {type:'multiple',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'terminology',
   text:'Welche ZWEI Aussagen zur BASISLINIE (Baseline) im Anforderungsmanagement sind korrekt?',
   options:['Eine Basislinie friert alle Anforderungen dauerhaft ein — Änderungen sind danach nicht mehr möglich.','Eine Basislinie ist ein vereinbarter, geprüfter Anforderungsstand, der als Referenz für alle weiteren Projektaktivitäten dient.','Änderungen nach Vereinbarung der Basislinie müssen durch einen formalen Änderungsprozess kontrolliert werden.','Eine Basislinie wird ausschließlich zu Projektende erstellt.'],
   answer:[1,2],explanation:'Eine Basislinie ist ein freigegebener Referenzstand (B). Änderungen danach sind möglich, aber nur über einen formalen Änderungsprozess (C). Eine Basislinie friert nicht dauerhaft ein (A falsch). Basislinien können an verschiedenen Meilensteinen im Projektverlauf vereinbart werden (D falsch).',lz:'LZ 8-5',k:'K2'},

  {type:'multiple',chapter:'Kap. 1 · Was ist eine Anforderung?',errorType:'scenario',
   text:'Ein Team diskutiert: (a) \'Das System muss Benutzer über OAuth 2.0 authentifizieren\' und (b) \'Das System muss innerhalb von 1 Sekunde auf Suchanfragen reagieren.\' Welche ZWEI Aussagen zur Klassifikation sind korrekt?',
   options:['(a) ist eine funktionale Anforderung und (b) ist eine Qualitätsanforderung — diese Klassifikation ist korrekt.','(a) ist eine Randbedingung (Constraint), da OAuth 2.0 den Lösungsraum einschränkt.','(b) ist eine funktionale Anforderung, da sie beschreibt, was das System tun soll.','(a) und (b) sind beide funktionale Anforderungen, da sie mit \'muss\' formuliert sind.'],
   answer:[0,1],explanation:'Aussage (a) KANN als funktionale Anforderung (Authentifizierung) oder als Randbedingung (OAuth 2.0 vorgeschrieben) interpretiert werden. A ist die naheliegendste Klassifikation, B ist fachlich vertretbar. (b) ist eine Qualitätsanforderung (Performance) (C falsch). Das Verb \'muss\' allein bestimmt nicht den Anforderungstyp (D falsch).',lz:'LZ 1-1',k:'K2'},

  {type:'multiple',chapter:'Kap. 3 · RE-Prozess',errorType:'trap',
   text:'Welche ZWEI Aussagen zur ANFORDERUNGSVALIDIERUNG im Unterschied zur Verifikation sind korrekt?',
   options:['Validierung prüft, ob die Implementierung den dokumentierten Anforderungen entspricht.','Validierung prüft, ob die dokumentierten Anforderungen die tatsächlichen Stakeholder-Bedürfnisse widerspiegeln.','Verifikation beantwortet die Frage: \'Bauen wir das System richtig?\' (Implementierung ≡ Spezifikation).','Validierung und Verifikation sind synonyme Begriffe im IREB-Sprachgebrauch.'],
   answer:[1,2],explanation:'Validierung fragt: \'Bauen wir das RICHTIGE System?\' — entsprechen Anforderungen den Stakeholder-Bedürfnissen? (B). Verifikation fragt: \'Bauen wir das System RICHTIG?\' — entspricht die Implementierung den Anforderungen? (C). Validierung prüft nicht die Implementierung (A falsch). Beide Begriffe sind explizit verschieden (D falsch).',lz:'LZ 3-3',k:'K2'},

  {type:'multiple',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'scenario',
   text:'Ein Team soll (1) die Zustände eines Auftrags (offen, in Bearbeitung, abgeschlossen, storniert) und (2) die Nachrichtenfolge zwischen Kunde und Bestellsystem modellieren. Welche ZWEI Notationen sind geeignet?',
   options:['Klassendiagramm für (1) und Aktivitätsdiagramm für (2)','Zustandsautomat für (1) und Sequenzdiagramm für (2)','Use-Case-Diagramm für (1) und Kontextdiagramm für (2)','Sequenzdiagramm für (1) und Zustandsautomat für (2)'],
   answer:[1,1],explanation:'Für Zustände eines Objekts ist der Zustandsautomat (State Machine) die geeignete Notation. Für Nachrichtenfolgen zwischen Akteuren und Systemen ist das Sequenzdiagramm korrekt. Antwort B enthält genau diese Kombination. Klassendiagramme (A) und Use-Case-Diagramme (C) beschreiben Struktur bzw. Funktionen.',lz:'LZ 5-3',k:'K2'},

  {type:'multiple',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'method',
   text:'Welche ZWEI Aussagen zur Anforderungsdokumentation in AGILEN PROJEKTEN sind korrekt?',
   options:['Agile Projekte dokumentieren Anforderungen ausschließlich als vollständige, vorab fertiggestellte Spezifikation.','User Stories, Akzeptanzkriterien und Backlog-Einträge sind typische Dokumentationsformen im agilen RE.','Anforderungen werden in agilen Projekten iterativ verfeinert und angepasst.','Agile Methoden lehnen jede Form der Anforderungsdokumentation ab.'],
   answer:[1,2],explanation:'Agile RE dokumentiert in Stories, Akzeptanzkriterien und Backlog-Einträgen (B). Die Dokumentation erfolgt iterativ und Just-in-time, nicht vorab vollständig (C). Vollständige Vorab-Spezifikationen widersprechen dem agilen Prinzip (A falsch). Dokumentation ist in agilen Projekten vorhanden, aber angepasst (D falsch).',lz:'LZ 9-3',k:'K2'},

  {type:'multiple',chapter:'Kap. 4 · Anforderungserhebung',errorType:'scenario',
   text:'In welchen ZWEI Szenarien ist PROTOTYPING als Erhebungstechnik BESONDERS geeignet?',
   options:['Wenn eine detaillierte Anforderungsspezifikation bereits vollständig vorliegt','Wenn Stakeholder Schwierigkeiten haben, ihre Anforderungen zu verbalisieren','Wenn ein neuartiges Produkt ohne Referenzsysteme entwickelt wird','Wenn ausschließlich quantitative Daten zur Anforderungspriorisierung benötigt werden'],
   answer:[1,2],explanation:'Prototyping ist wertvoll, wenn Stakeholder tacit knowledge besitzen und Anforderungen nicht klar formulieren können (B). Bei neuartigen Produkten hilft ein Prototyp, vage Vorstellungen zu konkretisieren und zu testen (C). Wenn Spezifikationen vollständig vorliegen (A) oder nur Zahlen gebraucht werden (D), ist Prototyping nicht der Primärnutzen.',lz:'LZ 4-3',k:'K2'},

  {type:'multiple',chapter:'Kap. 2 · Systemkontext',errorType:'terminology',
   text:'Welche ZWEI Aussagen beschreiben den SYSTEMKONTEXT korrekt?',
   options:['Der Systemkontext ist der für das System relevante Teil der Umgebung außerhalb der Systemgrenze.','Der Systemkontext umfasst die internen Module und Subsysteme des zu entwickelnden Systems.','Elemente des Systemkontexts stehen nicht unter direkter Kontrolle des Entwicklungsteams.','Der Systemkontext ist identisch mit der Systemarchitektur.'],
   answer:[0,2],explanation:'Der Systemkontext ist der relevante externe Teil der Umgebung (A). Kontextelemente sind nicht vom Entwicklungsteam kontrollierbar — sie müssen als gegebene Rahmenbedingungen behandelt werden (C). Interne Module gehören zum System (B falsch). Architektur ist Teil des Systems (D falsch).',lz:'LZ 2-1',k:'K2'},

  {type:'multiple',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'trap',
   text:'Welche ZWEI Aussagen zum KANO-MODELL als Priorisierungsmethode sind korrekt?',
   options:['Das Kano-Modell klassifiziert Anforderungen nach ihrem Beitrag zur Kundenzufriedenheit.','Das Kano-Modell verwendet die Kategorien Must/Should/Could/Won\'t.','Im Kano-Modell beschreiben Begeisterungsmerkmale (Delighters) Anforderungen, die Kunden positiv überraschen.','Das Kano-Modell ist ausschließlich für Hardware-Produkte geeignet.'],
   answer:[0,2],explanation:'Das Kano-Modell bewertet den Einfluss von Anforderungen auf Kundenzufriedenheit (A). Begeisterungsmerkmale sind unerwartete Features, die überproportionale Freude erzeugen (C). Must/Should/Could/Won\'t ist das MoSCoW-Schema, nicht Kano (B falsch). Kano ist für Software und Hardware geeignet (D falsch).',lz:'LZ 8-6',k:'K2'},

  {type:'multiple',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'method',
   text:'Welche ZWEI Rollen sind charakteristisch für eine formale INSPEKTION?',
   options:['Der Autor, der das Dokument erstellt hat und es im Review erklärt','Der Moderator, der unabhängig vom Autor die Inspektion leitet','Der Auftraggeber, der alle gefundenen Fehler genehmigt','Der Gutachter/Inspektor, der das Dokument individuell vorbereitet und prüft'],
   answer:[1,3],explanation:'Der Moderator (unabhängig vom Autor) und die Gutachter/Inspektoren (individuell vorbereitend) sind Kernrollen der formalen Inspektion. Der Autor ist zwar anwesend, spielt aber eine passive Zuhörerrolle (A — er darf nicht moderieren). Der Auftraggeber ist keine vorgeschriebene Inspektionsrolle (C falsch).',lz:'LZ 7-3',k:'K2'},

  {type:'multiple',chapter:'Kap. 1 · Was ist eine Anforderung?',errorType:'scenario',
   text:'Welche ZWEI der folgenden Anforderungen sind RANDBEDINGUNGEN (Constraints)?',
   options:['Das System muss Transaktionen in unter 500 ms verarbeiten.','Das System muss in Python 3.11 implementiert werden.','Das System muss alle Datenbankzugriffe über verschlüsselte Verbindungen abwickeln.','Das System darf ausschließlich quelloffene Bibliotheken mit Apache-2.0-Lizenz verwenden.'],
   answer:[1,3],explanation:'Python 3.11 (B) schränkt die Implementierungstechnologie ein — Randbedingung. Apache-2.0-Lizenzbeschränkung (D) schränkt die Werkzeugwahl ein — Randbedingung. Die Transaktionszeit (A) ist eine messbare Qualitätsanforderung (Performance). Verschlüsselte Verbindungen (C) ist eine Qualitätsanforderung (Sicherheit).',lz:'LZ 1-2',k:'K2'},

  {type:'multiple',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'method',
   text:'Welche ZWEI Aussagen zu Use-Case-BEZIEHUNGEN im UML sind korrekt?',
   options:['<<include>> modelliert eine optionale Erweiterung unter bestimmten Bedingungen.','<<include>> drückt eine obligatorische Einbindung aus: der Basis-UC ist ohne den eingebundenen UC nicht vollständig.','<<extend>> modelliert eine bedingte, optionale Erweiterung eines Basis-Use-Case.','<<extend>> und <<include>> sind austauschbar und haben dieselbe Semantik.'],
   answer:[1,2],explanation:'<<include>> ist obligatorisch: Der eingebundene UC wird immer ausgeführt (B). <<extend>> ist optional und bedingt: Der erweiternde UC greift nur bei bestimmten Bedingungen (C). <<include>> ist nicht optional (A falsch). Beide Beziehungen haben unterschiedliche Semantik (D falsch).',lz:'LZ 5-2',k:'K2'},

  {type:'multiple',chapter:'Kap. 3 · RE-Prozess',errorType:'method',
   text:'Welche ZWEI Aussagen zur ANFORDERUNGSVERHANDLUNG sind korrekt?',
   options:['Anforderungsverhandlung zielt auf einen für alle Seiten akzeptablen Konsens oder Kompromiss.','Bei der Anforderungsverhandlung setzt sich immer der einflussreichste Stakeholder durch.','Anforderungsverhandlung kann durch strukturierten Dialog, Moderation oder Eskalation unterstützt werden.','Anforderungsverhandlung ist nur in klassischen (Wasserfall-)Projekten relevant.'],
   answer:[0,2],explanation:'Das Ziel der Anforderungsverhandlung ist ein gemeinsam getragener Konsens oder Kompromiss (A). Sie kann durch Moderation, strukturierte Diskussion oder Eskalation an eine höhere Instanz unterstützt werden (C). Einseitige Durchsetzung (B) ist kein professionelles Verhandlungsergebnis. Verhandlungen finden in allen Projektmodellen statt (D falsch).',lz:'LZ 3-4',k:'K2'},

  {type:'multiple',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'trap',
   text:'Welche ZWEI Aussagen zu SOLL/MUSS-Formulierungen (shall/should/may) in Anforderungsspezifikationen sind korrekt?',
   options:['\'Shall\' / \'muss\' kennzeichnet obligatorische Anforderungen, die zwingend erfüllt werden müssen.','\'Should\' / \'sollte\' kennzeichnet ebenso verpflichtende Anforderungen wie \'shall\'.','Die konsistente Verwendung dieser Modalverben ist wichtig für die klare Abgrenzung von Pflicht und Empfehlung.','\'May\' / \'darf\' kennzeichnet obligatorische Anforderungen mit niedrigerer Priorität.'],
   answer:[0,2],explanation:'\'Shall\' / \'muss\' = obligatorisch; \'should\' = empfohlen, aber nicht zwingend; \'may\' = optional. Die konsistente Verwendung dieser Modalverben verhindert Missverständnisse über verbindliche vs. optionale Anforderungen (C). \'Should\' ist nicht gleichwertig mit \'shall\' (B falsch). \'May\' ist optional, nicht obligatorisch (D falsch).',lz:'LZ 5-1',k:'K2'},

  {type:'multiple',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'terminology',
   text:'Welche ZWEI Funktionen sind für ein REQUIREMENTS-MANAGEMENT-TOOL (RM-Tool) TYPISCH?',
   options:['Automatische Code-Generierung aus Anforderungen','Versionierung von Anforderungen mit Änderungshistorie','Erstellung von Traceability-Links zwischen Anforderungen, Testfällen und Design-Artefakten','Automatisches Testen, ob das System alle Anforderungen erfüllt'],
   answer:[1,2],explanation:'RM-Tools (DOORS, Jira, Polarion, Azure DevOps) bieten Versionierung/Änderungshistorie (B) und Traceability-Links (C) als Kernfunktionen. Code-Generierung (A) gehört zu Model-Driven Engineering-Werkzeugen. Automatisches Anforderungstesting (D) ist Domäne von Testmanagement-Werkzeugen.',lz:'LZ 9-2',k:'K2'},

  {type:'multiple',chapter:'Kap. 6 · Anforderungsqualität',errorType:'scenario',
   text:'Welche ZWEI Konsequenzen entstehen typischerweise, wenn WIDERSPRÜCHLICHE Anforderungen nicht aufgelöst werden?',
   options:['Entwickler müssen willkürliche Entscheidungen treffen, welche Anforderung gilt.','Das System wird automatisch mit der priorisierten Anforderung gebaut.','Inkonsistentes Systemverhalten kann entstehen, da verschiedene Komponenten unterschiedliche Anforderungen umsetzen.','Der Auftraggeber wird automatisch über den Widerspruch informiert und trifft die Entscheidung.'],
   answer:[0,2],explanation:'Ungelöste Widersprüche zwingen Entwickler, selbst zu entscheiden (A) — eine Entscheidung, die den Stakeholdern obliegt. Bei verteilten Teams können verschiedene Entwickler unterschiedliche Lösungen wählen, was inkonsistentes Systemverhalten erzeugt (C). Automatische Auflösung (B) und automatische Stakeholder-Information (D) finden nicht statt.',lz:'LZ 6-3',k:'K2'},

  {type:'multiple',chapter:'Kap. 4 · Anforderungserhebung',errorType:'scenario',
   text:'Ein Team ersetzt ein 20 Jahre altes Legacy-System. Sachbearbeiter kennen das Altsystem auswendig. Welche ZWEI Erhebungsrisiken sind in diesem Kontext besonders hoch?',
   options:['Stakeholder kennen ihre Anforderungen zu gut — es gibt keine unbekannten Anforderungen.','Stakeholder formulieren Anforderungen als Merkmale des Altsystems (\'so wie bisher\') statt als echte Bedürfnisse.','Implizites Wissen über Workarounds und Sonderregeln im Altsystem wird nicht explizit verbalisiert.','Es gibt zu viele Stakeholder — die Erhebung kann nicht abgeschlossen werden.'],
   answer:[1,2],explanation:'Bei Legacy-Ablösungen beschreiben Stakeholder häufig das Altsystem statt echte Geschäftsbedürfnisse (B) — \'system-biased requirements\'. Workarounds und implizite Sonderregeln, die über Jahre gewachsen sind, werden nicht spontan erwähnt (C). Beide Risiken erfordern gezielte Techniken: Kontextinterviews, Feldbeobachtung, Prozessanalyse.',lz:'LZ 4-3',k:'K2'},

  {type:'multiple',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'method',
   text:'Welche ZWEI Aussagen zu den verschiedenen REVIEW-TYPEN sind korrekt?',
   options:['Ein Walkthrough ist formaler als eine Inspektion und erfordert mehr Vorbereitung.','Ein informelles Review ist die am wenigsten formale Prüfform und erfordert keine definierten Rollen.','Ein technisches Review liegt in Bezug auf Formalität zwischen Walkthrough und formaler Inspektion.','Alle Review-Typen erzielen dieselbe Fehlererkennungsrate, wenn Experten beteiligt sind.'],
   answer:[1,2],explanation:'Das informelle Review ist die flexibelste Form ohne strikte Prozesse oder Rollen (B). Das technische Review hat mehr Fachfokus als ein Walkthrough, aber weniger Formalismus als eine Inspektion (C). Der Walkthrough ist weniger formal als eine Inspektion (A falsch). Formale Inspektionen erzielen systematisch höhere Fehlererkennungsraten (D falsch).',lz:'LZ 7-1',k:'K2'},

  {type:'multiple',chapter:'Kap. 2 · Systemkontext',errorType:'method',
   text:'Welche ZWEI Zwecke verfolgt eine STAKEHOLDER-KARTE (z. B. Zwiebeldiagramm)?',
   options:['Sie zeigt, welcher Stakeholder die höchste Entscheidungskompetenz im Projekt hat.','Sie visualisiert die Nähe von Stakeholdern zum System und hilft, alle relevanten Stakeholder zu identifizieren.','Sie dient als Kommunikationsmittel, um Stakeholder über ihren Einfluss auf das Projekt zu informieren.','Sie ersetzt die Anforderungsspezifikation in frühen Projektphasen.'],
   answer:[1,2],explanation:'Die Stakeholder-Karte visualisiert Stakeholder nach Systemähe und hilft, vergessene Gruppen zu identifizieren (B). Sie ist ein Kommunikations- und Analyseunterstützungswerkzeug (C). Sie zeigt nicht automatisch Entscheidungskompetenz (A falsch) und ersetzt keine Spezifikation (D falsch).',lz:'LZ 2-5',k:'K2'},

  {type:'multiple',chapter:'Kap. 3 · RE-Prozess',errorType:'terminology',
   text:'Welche ZWEI der folgenden Elemente sind typische ANFORDERUNGSARTEFAKTE?',
   options:['Ein Sprint-Burndown-Chart des Entwicklungsteams','Eine Traceability-Matrix, die Anforderungen mit Testfällen verknüpft','Ein Use-Case-Diagramm, das die Systemgrenzen und Akteure zeigt','Ein Deployment-Diagramm der Produktionsinfrastruktur'],
   answer:[1,2],explanation:'Eine Traceability-Matrix ist ein RE-Artefakt, das Anforderungen mit anderen Artefakten verknüpft (B). Ein Use-Case-Diagramm ist ein RE-Artefakt zur Anforderungsmodellierung (C). Burndown-Charts gehören zum agilen Projektmanagement (A). Deployment-Diagramme beschreiben die Architektur/Infrastruktur (D).',lz:'LZ 3-5',k:'K2'},

  // ── NEW LE2: Stakeholder-Analyse & Kontextdiagramm ──
  {type:'multiple',chapter:'Kap. 2 · Systemkontext',errorType:'method',
   text:'Welche ZWEI Aktivitäten sind typische Bestandteile einer STAKEHOLDER-ANALYSE?',
   options:['Identifikation aller relevanten Stakeholder-Gruppen und ihrer Interessen am System','Festlegung der technischen Architektur des Systems','Bewertung des Einflusses und der Betroffenheit jeder Stakeholder-Gruppe','Erstellung des Projektstrukturplans (PSP) für die Entwicklungsphase'],
   answer:[0,2],explanation:'Eine Stakeholder-Analyse umfasst: (1) Identifikation der relevanten Stakeholder und ihrer Interessen (A) und (2) Bewertung von Einfluss und Betroffenheit — häufig in einer Einfluss-Interesse-Matrix (C). Architekturentscheidungen (B) und Projektstrukturpläne (D) gehören nicht zur Stakeholder-Analyse.',lz:'LZ 2-4',k:'K2'},

  {type:'multiple',chapter:'Kap. 2 · Systemkontext',errorType:'terminology',
   text:'Welche ZWEI Elemente werden in einem KONTEXTDIAGRAMM (DFD Level 0) typischerweise dargestellt?',
   options:['Die internen Datenbankstrukturen des Systems','Das zu entwickelnde System als Black Box (undifferenzierte Einheit)','Externe Entitäten (Akteure, Systeme), die Daten mit dem System austauschen','Die internen Prozessschritte der Systemfunktionen'],
   answer:[1,2],explanation:'Ein Kontextdiagramm (DFD Level 0) zeigt: (1) das System als undifferenzierte Black Box — keine internen Details (B) — und (2) alle externen Entitäten und Datenflüsse über die Systemgrenze (C). Interne Datenbankstrukturen und Prozessschritte erscheinen erst in verfeinerten DFD-Ebenen.',lz:'LZ 2-3',k:'K2'},

  // ── NEW LE7: Inspektionsrollen & Metriken ──
  {type:'multiple',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'method',
   text:'Welche ZWEI Aussagen zu den ROLLEN in einer formalen INSPEKTION sind korrekt?',
   options:['Der Autor darf gleichzeitig als Moderator fungieren, um die Besprechungszeit zu verkürzen','Der Moderator steuert den Inspektionsprozess und ist für die Einhaltung aller Phasen verantwortlich','Der Schriftführer protokolliert gefundene Fehler und Anmerkungen während der Inspektionsbesprechung','Gutachter (Inspektoren) erstellen das zu prüfende Dokument gemeinsam mit dem Autor'],
   answer:[1,2],explanation:'Der Moderator leitet den Prozess und sorgt für Rollentrennung und Phaseneinhaltung (B). Der Schriftführer dokumentiert alle Befunde der Besprechung (C). Autor und Moderator müssen getrennte Personen sein (A falsch) — ein Kernprinzip zur Vermeidung von Betriebsblindheit. Gutachter prüfen das Dokument, erstellen es aber nicht (D falsch).',lz:'LZ 7-3',k:'K2'},

  {type:'multiple',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'method',
   text:'Welche ZWEI Metriken werden typischerweise bei formalen INSPEKTIONEN erhoben, um deren Effektivität zu messen?',
   options:['Anzahl der Anforderungen, die nach der Inspektion unverändert geblieben sind','Fehlerdichte (Anzahl Fehler pro Seite oder pro Anforderung)','Vorbereitungsrate (Vorbereitungszeit pro Seite/Anforderung je Gutachter)','Anzahl der Entwickler, die an der Implementierung beteiligt sind'],
   answer:[1,2],explanation:'Fehlerdichte (B) zeigt, wie fehleranfällig bestimmte Dokumentbereiche sind. Vorbereitungsrate (C) misst, ob Gutachter ausreichend vorbereitet sind — ein Proxy für Inspektionseffizienz. Unveränderte Anforderungen (A) sind kein Qualitätsmaß. Entwickleranzahl (D) ist irrelevant für Inspektionsmetriken.',lz:'LZ 7-1',k:'K2'},

  // ── NEW LE8: Priorisierung, Versionierung, Attribute ──
  {type:'multiple',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'method',
   text:'Welche ZWEI Aussagen vergleichen MoSCoW und das KANO-MODELL als Priorisierungsmethoden korrekt?',
   options:['MoSCoW kategorisiert Anforderungen nach Dringlichkeit in Must/Should/Could/Won\'t — es ist ein Scope-Management-Werkzeug','Das Kano-Modell unterscheidet Basis-, Leistungs- und Begeisterungsanforderungen nach ihrer Wirkung auf Kundenzufriedenheit','Sowohl MoSCoW als auch Kano liefern direkt eine numerische Rangliste aller Anforderungen','Das Kano-Modell ersetzt MoSCoW vollständig, wenn die Benutzerzufriedenheit im Fokus steht'],
   answer:[0,1],explanation:'MoSCoW ist ein Scope-Instrument: Must/Should/Could/Won\'t definieren, was ins aktuelle Release gehört (A). Das Kano-Modell analysiert Anforderungen nach ihrem Zufriedenheitseffekt — Basisfaktoren (erwartet), Leistungsfaktoren (linear), Begeisterungsfaktoren (überraschend positiv) (B). Beide liefern Kategorien, keine Rangliste (C falsch). Sie sind komplementär, nicht ersetzend (D falsch).',lz:'LZ 8-6',k:'K2'},

  {type:'multiple',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'terminology',
   text:'Welche ZWEI Angaben sind typische ANFORDERUNGSATTRIBUTE, die den Lebenszyklus einer Anforderung beschreiben?',
   options:['Status der Anforderung (z. B. vorgeschlagen, freigegeben, umgesetzt, veraltet)','Der Name des Entwicklers, der die Anforderung implementiert hat','Quelle der Anforderung (welcher Stakeholder oder welches Dokument sie eingebracht hat)','Anzahl der Commit-Messages, die sich auf die Anforderung beziehen'],
   answer:[0,2],explanation:'Status (A) ist ein essenzielles Attribut im Anforderungslebenszyklus: Es zeigt, in welcher Phase sich eine Anforderung befindet. Quelle (C) ermöglicht Rückverfolgung zum ursprünglichen Stakeholder und ist Teil der Traceability. Entwicklername (B) und Commit-Messages (D) sind Implementierungs- und Versionierungsmetadaten, keine RE-Attribute.',lz:'LZ 8-2',k:'K2'},

  // ── NEW: Modellvergleich statisch vs. dynamisch ──
  {type:'multiple',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'method',
   text:'Welche ZWEI Notationen beschreiben die STATISCHE STRUKTUR eines Systems (nicht sein dynamisches Verhalten)?',
   options:['Klassendiagramm (UML Class Diagram)','Sequenzdiagramm','Entity-Relationship-Diagramm (ERD)','Aktivitätsdiagramm'],
   answer:[0,2],explanation:'Klassendiagramme modellieren Klassen, Attribute und Beziehungen — eine statische Struktursicht (A). ERDs modellieren Entitäten, Attribute und deren Beziehungen — ebenfalls statisch (C). Sequenzdiagramme zeigen die zeitliche Abfolge von Nachrichten (dynamisch, B falsch). Aktivitätsdiagramme beschreiben Prozess- und Kontrollflüsse (dynamisch, D falsch).',lz:'LZ 5-3',k:'K2'},

  // ── NEW: Qualitätskriterien — Einzelanforderung vs. Spezifikation (weniger Trick) ──
  {type:'multiple',chapter:'Kap. 6 · Anforderungsqualität',errorType:'method',
   text:'Welche ZWEI Qualitätskriterien gelten primär für eine EINZELNE Anforderung (nicht für die Gesamtspezifikation)?',
   options:['Vollständigkeit der Anforderung — alle für Umsetzung und Test notwendigen Informationen sind enthalten','Vollständigkeit der Spezifikation — alle notwendigen Anforderungen sind im Dokument vorhanden','Prüfbarkeit — die Anforderung enthält einen messbaren Schwellenwert oder ein verifizierbares Akzeptanzkriterium','Konsistenz der Spezifikation — Anforderungen widersprechen sich nicht gegenseitig'],
   answer:[0,2],explanation:'Vollständigkeit einer einzelnen Anforderung (A) bedeutet, alle für Umsetzung und Prüfung notwendigen Informationen sind in der Anforderung selbst vorhanden. Prüfbarkeit (C) ist ebenfalls ein Merkmal der einzelnen Anforderung. Vollständigkeit der Spezifikation (B) und Konsistenz der Spezifikation (D) sind Merkmale des Gesamtdokuments.',lz:'LZ 6-1',k:'K2'},

  // ══ K1 LAYER — reine Wissensabfrage, kurze Stems ══════════════════

  {type:'multiple',chapter:'Kap. 3 · RE-Prozess',errorType:'terminology',
   text:'Welche ZWEI der folgenden Aktivitäten gehören zu den VIER RE-KERNAKTIVITÄTEN nach IREB?',
   options:['Anforderungserhebung (Elicitation)','Systemdesign und Architekturplanung','Anforderungsdokumentation','Deployment und Betrieb des Systems'],
   answer:[0,2],explanation:'Die vier IREB-Kernaktivitäten sind: Erhebung, Dokumentation, Prüfung/Validierung und Verwaltung. Systemdesign ist Systems-Engineering; Deployment gehört zum IT-Betrieb — beide liegen außerhalb des RE.',lz:'LZ 3-1',k:'K1'},

  {type:'multiple',chapter:'Kap. 6 · Anforderungsqualität',errorType:'terminology',
   text:'Welche ZWEI der folgenden Kriterien sind Qualitätsmerkmale einer EINZELNEN Anforderung?',
   options:['Atomarität — die Anforderung beschreibt genau eine Eigenschaft','Vollständigkeit der Spezifikation — das Dokument enthält alle notwendigen Anforderungen','Prüfbarkeit — die Anforderung kann objektiv getestet werden','Traceability — die Anforderung ist mit Testfällen verknüpft'],
   answer:[0,2],explanation:'Atomarität (A) und Prüfbarkeit (C) sind Qualitätskriterien der einzelnen Anforderung. Vollständigkeit der Spezifikation (B) ist ein Dokumentmerkmal. Traceability (D) ist ein Verwaltungskonzept, kein intrinsisches Qualitätsmerkmal.',lz:'LZ 6-1',k:'K1'},

  {type:'multiple',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'terminology',
   text:'Welche ZWEI der folgenden Rollen sind definierte ROLLEN in einer formalen Inspektion?',
   options:['Moderator','Product Owner','Schriftführer (Scribe)','Release Manager'],
   answer:[0,2],explanation:'Formale Inspektionsrollen: Moderator, Autor, Schriftführer und Gutachter (Reviewer). Product Owner und Release Manager sind agile bzw. Projektmanagement-Rollen — sie haben keinen definierten Platz in der formalen Inspektion.',lz:'LZ 7-3',k:'K1'},

  {type:'multiple',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'terminology',
   text:'Welche ZWEI Aussagen beschreiben VERFOLGBARKEIT (Traceability) korrekt?',
   options:['Traceability verbindet Anforderungen mit Testfällen und zeigt, welche Anforderungen wie geprüft werden.','Traceability aktualisiert verknüpfte Artefakte automatisch, wenn eine Anforderung geändert wird.','Traceability unterstützt die Auswirkungsanalyse: Welche Artefakte sind von einer Änderung betroffen?','Traceability garantiert, dass alle Anforderungen korrekt implementiert wurden.'],
   answer:[0,2],explanation:'Traceability verbindet Anforderungen bidirektional mit anderen Artefakten (A) und ermöglicht Auswirkungsanalysen bei Änderungen (C). Automatische Aktualisierung (B) ist eine Werkzeugfunktion, kein inhärentes Konzept. Korrekte Implementierung (D) prüft die Verifikation, nicht die Traceability.',lz:'LZ 8-3',k:'K1'},

  {type:'multiple',chapter:'Kap. 3 · RE-Prozess',errorType:'trap',
   text:'Welche ZWEI der folgenden Elemente sind KEINE RE-ARTEFAKTE?',
   options:['Ein Glossar mit definierten Fachbegriffen des Projekts','Ein Sprint-Burndown-Chart des Entwicklungsteams','Eine Stakeholder-Karte','Ein Continuous-Integration-Pipeline-Skript'],
   answer:[1,3],explanation:'Burndown-Charts (B) gehören zum agilen Projektmanagement. CI-Pipeline-Skripte (D) gehören zur DevOps-Infrastruktur. RE-Artefakte entstehen im Rahmen von RE-Aktivitäten: Glossare (A) und Stakeholder-Karten (C) sind typische RE-Artefakte.',lz:'LZ 3-5',k:'K1'},

  {type:'multiple',chapter:'Kap. 4 · Anforderungserhebung',errorType:'terminology',
   text:'Welche ZWEI der folgenden Techniken sind ERHEBUNGSTECHNIKEN (Elicitation Techniques) nach IREB?',
   options:['Fagan-Inspektion','Feldbeobachtung','Perspektivenbasiertes Lesen','Anforderungsworkshop'],
   answer:[1,3],explanation:'Feldbeobachtung (B) und Anforderungsworkshop (D) sind Erhebungstechniken — sie dienen der Ermittlung von Anforderungen. Fagan-Inspektion (A) ist eine Prüftechnik. Perspektivenbasiertes Lesen (C) ist eine Review-Technik.',lz:'LZ 4-2',k:'K1'},

  // ══ LZ-GAP FILL: K2 MEHRFACHAUSWAHL ════════════════════════════════════════

  {type:'multiple',chapter:'Kap. 3 · RE-Prozess',errorType:'method',
   text:'Welche ZWEI Aussagen beschreiben VERHANDLUNG (Negotiation) im RE-Prozess korrekt?',
   options:['Verhandlung zielt darauf ab, widersprüchliche Stakeholder-Anforderungen aufzulösen.','Verhandlung ist ein formaler Review-Prozess mit definierten Rollen und Protokoll.','Das Ergebnis einer Verhandlung ist eine für alle Stakeholder akzeptable Lösung oder Priorisierung.','Verhandlung ist nur in agilen Projekten relevant.'],
   answer:[0,2],explanation:'Verhandlung löst Konflikte zwischen Stakeholdern mit widersprüchlichen Anforderungen (A). Das Ergebnis ist eine akzeptierte Lösung — nicht die "beste", sondern eine, mit der alle Beteiligten leben können (C). Option B beschreibt eine formale Inspektion. Option D ist falsch — Verhandlung ist in allen Projektformen notwendig.',lz:'LZ 3-4',k:'K2'},

  {type:'multiple',chapter:'Kap. 4 · Anforderungserhebung',errorType:'method',
   text:'Welche ZWEI Aussagen beschreiben das PERSPEKTIVENBASIERTE LESEN (PBR) als Inspektionstechnik korrekt?',
   options:['Jeder Reviewer nimmt eine definierte Perspektive ein (z. B. Tester, Architekt, Endnutzer).','Der Autor moderiert das Review-Meeting aus der Autorenperspektive.','Verschiedene Perspektiven decken unterschiedliche Fehlerklassen auf.','Alle Reviewer prüfen dasselbe Dokument ohne spezifische Rollenzuweisung.'],
   answer:[0,2],explanation:'PBR weist jedem Reviewer eine fachliche Perspektive zu — z. B. Tester prüft Testbarkeit, Architekt prüft Machbarkeit (A). Kernprinzip: verschiedene Brillen decken verschiedene Fehlertypen auf (C). Option B ist falsch — der Autor moderiert nie sein eigenes Review. Option D beschreibt normales Lesen, nicht PBR.',lz:'LZ 4-4',k:'K2'},

  {type:'multiple',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'method',
   text:'Welche ZWEI Elemente gehören zur TEXTLICHEN USE-CASE-BESCHREIBUNG (nicht zum Use-Case-Diagramm)?',
   options:['Der Normalablauf (Happy Path) — Schritt-für-Schritt-Beschreibung des Standardszenarios','Die Beziehungen zwischen Use Cases (include/extend)','Vorbedingungen — Zustände, die vor dem Start des Use Case erfüllt sein müssen','Die Akteure und ihre Systemgrenzen'],
   answer:[0,2],explanation:'Normalablauf (A) und Vorbedingungen (C) sind Bestandteile der textuellen Use-Case-Beschreibung. Das Use-Case-Diagramm zeigt diese Details NICHT — es zeigt Akteure, Use Cases und strukturelle Beziehungen. Include/extend-Beziehungen (B) und Akteure/Systemgrenzen (D) gehören ins Diagramm.',lz:'LZ 5-6',k:'K2'},

  {type:'multiple',chapter:'Kap. 3 · RE-Prozess',errorType:'method',
   text:'Welche ZWEI Aussagen beschreiben den ITERATIVEN Charakter des RE-Prozesses nach IREB korrekt?',
   options:['RE-Aktivitäten wie Erhebung, Dokumentation und Validierung werden in Zyklen wiederholt.','Der RE-Prozess ist streng sequenziell — jede Phase wird genau einmal durchlaufen.','Ergebnisse der Validierung können zur erneuten Erhebung weiterer Anforderungen führen.','Ein iterativer RE-Prozess ist nur bei agiler Softwareentwicklung möglich.'],
   answer:[0,2],explanation:'Der RE-Prozess ist iterativ: Erhebung, Dokumentation und Validierung werden wiederholend durchgeführt (A). Validierungsergebnisse führen regelmäßig zur erneuten Erhebung (C) — das ist kein Fehler, sondern der normale Ablauf. Option B beschreibt ein Wasserfallmodell, das dem IREB-Prozessverständnis widerspricht.',lz:'LZ 3-2',k:'K2'},

  // ══ K3 MEHRFACH-SZENARIEN ════════════════════════════════════════════════════

  {type:'multiple',chapter:'Kap. 4 · Anforderungserhebung',errorType:'scenario',
   text:'Domänenexperten können ihr Wissen kaum verbalisieren. Welche ZWEI Erhebungstechniken sind in dieser Situation besonders geeignet?',
   options:['Strukturiertes Interview mit Fragebogen','Feldbeobachtung (Ethnografie) — Experten bei der Arbeit beobachten','Brainstorming — Experten generieren Ideen in Gruppenformat','Prototyping — ein früher Prototyp hilft Experten, konkret zu reagieren'],
   answer:[1,3],explanation:'Wenn Experten ihr Wissen nicht verbalisieren können (tacit knowledge), hilft Feldbeobachtung (B): Der RE sieht selbst, was gemacht wird. Prototyping (D) umgeht das Verbalisierungsproblem durch Reaktion auf Konkretes — Experten zeigen "das ist falsch, ich würde es so machen". Strukturierte Interviews (A) setzen Verbalisierungsfähigkeit voraus.',lz:'LZ 4-3',k:'K2'},

  {type:'multiple',chapter:'Kap. 6 · Anforderungsqualität',errorType:'scenario',
   text:'Welche ZWEI Maßnahmen verbessern die Qualität von Anforderungen direkt und konkret?',
   options:['Vage Begriffe durch messbare Schwellenwerte ersetzen (z. B. "schnell" → "≤ 2 Sekunden")','Alle Anforderungen in einem einzigen langen Satz zusammenfassen, um Redundanz zu vermeiden','Mehrteilige Anforderungen in einzelne atomare Anforderungen aufteilen','Anforderungen ausschließlich durch Diagramme dokumentieren'],
   answer:[0,2],explanation:'Option A behebt Nicht-Verifizierbarkeit durch Quantifizierung — aus einem subjektiven Begriff wird ein testbares Kriterium. Option C behebt fehlende Atomarität — eine mehrteilige Anforderung wird in unabhängig prüfbare Einheiten aufgeteilt. Option B würde Atomarität zerstören. Option D ist kein IREB-Prinzip.',lz:'LZ 6-4',k:'K2'},

  {type:'multiple',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'scenario',
   text:'Nach einem informellen Walkthrough soll eine gründlichere Prüfung folgen. Welche ZWEI Aussagen sind für die Auswahl des zweiten Review-Typs korrekt?',
   options:['Die formale Inspektion (Fagan) liefert die höchste Fehlerentdeckungsrate, erfordert aber strukturierte Vor- und Nachbereitung.','Das technische Review ist nur für Quellcode geeignet, nicht für Anforderungsdokumente.','Das technische Review lässt sich einsetzen, wenn Experten technische Korrektheit von Anforderungen prüfen sollen.','Die formale Inspektion ist aufwendiger als andere Review-Formen.'],
   answer:[0,2],explanation:'Die formale Inspektion (Fagan) hat die höchste Fehlerentdeckungsrate — zahlt sich durch strukturierte Vorbereitung, Rollen und Protokollierung aus (A). Das technische Review eignet sich für Anforderungsdokumente, wenn Experten technische Machbarkeit oder Korrektheit prüfen (C). Option B ist falsch — technisches Review kann für alle technischen Dokumente eingesetzt werden.',lz:'LZ 7-2',k:'K2'},

  {type:'multiple',chapter:'Kap. 3 · RE-Prozess',errorType:'scenario',
   text:'Bei einer Verhandlung zwischen zwei Stakeholdergruppen mit widersprüchlichen Anforderungen gelten welche ZWEI Prinzipien als zielführend?',
   options:['Der Requirements Engineer entscheidet einseitig, welche Anforderung übernommen wird.','Beide Seiten legen ihre zugrundeliegenden Interessen offen — nicht nur ihre Positionen.','Ein Kompromiss oder eine Priorisierungsentscheidung wird transparent dokumentiert.','Der Stakeholder mit dem größten Budget erhält automatisch Vorrang.'],
   answer:[1,2],explanation:'Interessen statt Positionen (B): Wenn Stakeholder ihre tieferliegenden Ziele offenlegen, entstehen oft kreative Lösungen, die beide Seiten befriedigen. Dokumentation des Ergebnisses (C) sichert Verbindlichkeit und Rückverfolgbarkeit — andernfalls ist der Konflikt beim nächsten Sprint wieder offen.',lz:'LZ 3-4',k:'K2'},

  {type:'multiple',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'scenario',
   text:'Ein Stakeholder beantragt mitten im Projekt eine Änderung an einer freigegebenen Anforderung. Welche ZWEI Schritte des Änderungsmanagements sind unverzichtbar?',
   options:['Die Änderung sofort in die Spezifikation eintragen, um Zeit zu sparen.','Die Auswirkungen der Änderung auf Anforderungen, Tests und Architektur analysieren (Impact Analysis).','Die Änderung durch einen definierten Genehmigungsprozess (Change Control Board) freigeben.','Den Stakeholder bitten, die Änderung schriftlich zurückzunehmen.'],
   answer:[1,2],explanation:'Eine Impact Analysis (B) deckt Abhängigkeiten auf — eine Anforderungsänderung kann Kaskadenwirkungen auf andere Anforderungen, Testfälle und Architektur haben. Der Genehmigungsprozess (C) stellt sicher, dass Änderungen bewusst entschieden werden. Option A (sofortiges Eintragen) umgeht das Änderungsmanagement — genau das, was der RE-Prozess verhindern soll.',lz:'LZ 8-4',k:'K2'}
];

// ─────────────── K-TYP (30) ───────────────
