const ktypePool=[
  {type:'ktype',chapter:'Kap. 6 · Anforderungsqualität',errorType:'terminology',
   assertion:'Eine Anforderung, die das Wort \'und\' enthält, ist möglicherweise nicht atomar.',
   reason:'Atomare Anforderungen beschreiben genau eine Eigenschaft oder Fähigkeit — das Wort \'und\' deutet auf gebündelte Bedingungen hin.',
   answer:0,explanation:'Beide Aussagen sind korrekt. Die Begründung erklärt die Behauptung: \'und\' verknüpft typischerweise zwei verschiedene Eigenschaften in einer Aussage, was das Atomaritätsprinzip verletzt. Die Begründung gibt genau den Mechanismus an, der die Behauptung erklärt.',lz:'LZ 6-1',k:'K2'},

  {type:'ktype',chapter:'Kap. 3 · RE-Prozess',errorType:'trap',
   assertion:'Validierung und Verifikation im Requirements Engineering sind synonyme Begriffe für dieselbe Prüfaktivität.',
   reason:'Beide Aktivitäten dienen dazu, die Qualität von Anforderungen und Implementierungen sicherzustellen.',
   answer:3,explanation:'Die Behauptung ist falsch: Validierung fragt \'Bauen wir das RICHTIGE System?\' (Anforderungen ≡ Stakeholder-Bedürfnisse); Verifikation fragt \'Bauen wir das System RICHTIG?\' (Implementierung ≡ Anforderungen). Sie sind komplementäre, aber verschiedene Aktivitäten. Die Begründung ist zwar allgemein wahr, beschreibt aber nicht den wesentlichen Unterschied.',lz:'LZ 3-3',k:'K2'},

  {type:'ktype',chapter:'Kap. 4 · Anforderungserhebung',errorType:'method',
   assertion:'Prototyping hilft dabei, implizites Wissen von Stakeholdern zu externalisieren.',
   reason:'Beim Prototyping generieren Stakeholder spontan vollständige und endgültige Anforderungen, ohne weiterer Verfeinerung zu bedürfen.',
   answer:2,explanation:'Die Behauptung ist korrekt: Prototyping externalisiert tacit knowledge durch die Reaktion auf ein konkretes Modell. Die Begründung ist falsch: Prototypen liefern Rohmaterial — die generierten Rückmeldungen müssen weiter analysiert, strukturiert und in Anforderungen übersetzt werden. Prototyping ist iterativ, nicht einmalig abschließend.',lz:'LZ 4-3',k:'K2'},

  {type:'ktype',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'trap',
   assertion:'Ein Sequenzdiagramm eignet sich zur Modellierung der verschiedenen ZUSTÄNDE eines Objekts und der Ereignisse, die Zustandsübergänge auslösen.',
   reason:'Sequenzdiagramme zeigen die zeitliche Abfolge von Nachrichten zwischen Objekten oder Komponenten.',
   answer:3,explanation:'Die Behauptung ist falsch: Zustände und Übergänge werden durch Zustandsautomaten (State Machine Diagrams) modelliert. Sequenzdiagramme zeigen die zeitliche Abfolge von Nachrichten (Reason korrekt), aber diese Eigenschaft macht sie für Zustandsmodellierung ungeeignet. Der Reason beschreibt eine wahre Eigenschaft von Sequenzdiagrammen, erklärt aber gerade, warum sie für Zustände nicht geeignet sind.',lz:'LZ 5-3',k:'K2'},

  {type:'ktype',chapter:'Kap. 6 · Anforderungsqualität',errorType:'trap',
   assertion:'Eine Anforderung ist vollständig, sobald sie einen messbaren Schwellenwert enthält.',
   reason:'Vollständigkeit erfordert, dass alle notwendigen Informationen vorhanden sind, ohne die die Anforderung nicht umgesetzt werden kann.',
   answer:3,explanation:'Die Behauptung ist falsch: Ein Schwellenwert macht eine Anforderung prüfbarer, aber nicht vollständig. Vollständigkeit bedeutet, dass alle für Umsetzung und Test notwendigen Informationen vorhanden sind (z. B. Vorbedingungen, Ausnahmen, betroffene Akteure). Der Reason ist korrekt und beschreibt tatsächlich Vollständigkeit — er widerlegt damit die vereinfachende Behauptung.',lz:'LZ 6-2',k:'K2'},

  {type:'ktype',chapter:'Kap. 4 · Anforderungserhebung',errorType:'terminology',
   assertion:'Anforderungsworkshops eignen sich zur direkten Konfliktlösung zwischen Stakeholdern.',
   reason:'In einem Workshop können Stakeholder ihre unterschiedlichen Anforderungen direkt miteinander diskutieren und gemeinsam Einigkeit erzielen.',
   answer:0,explanation:'Beide Aussagen sind korrekt. Der Reason erklärt den Mechanism: Workshops bringen Stakeholder mit Interessenkonflikten in denselben Raum, sodass Konflikte direkt ausgehandelt werden können — das ist genau der Grund für die Eignung zur Konfliktlösung.',lz:'LZ 4-2',k:'K2'},

  {type:'ktype',chapter:'Kap. 2 · Systemkontext',errorType:'trap',
   assertion:'Der Systemkontext enthält externe Akteure, Systeme und Regularien, die für das zu entwickelnde System relevant sind.',
   reason:'Systemkontext und das System selbst sind in der IREB-Definition identisch, da beide zur Projektdomäne gehören.',
   answer:2,explanation:'Die Behauptung ist korrekt: Der Systemkontext umfasst alle relevanten externen Einflussfaktoren. Der Reason ist falsch: Systemkontext und System sind durch die Systemgrenze explizit getrennt. Der Systemkontext liegt außerhalb der Systemgrenze und steht nicht unter Kontrolle des Entwicklungsteams.',lz:'LZ 2-1',k:'K2'},

  {type:'ktype',chapter:'Kap. 4 · Anforderungserhebung',errorType:'method',
   assertion:'Anforderungsworkshops sind eine effektive Methode, um gemeinsames Verständnis und Konsens zu erzielen.',
   reason:'Anforderungsworkshops können sowohl in Präsenz als auch online durchgeführt werden.',
   answer:1,explanation:'Beide Aussagen sind korrekt: Workshops erzeugen gemeinsames Verständnis (B), und sie sind in Präsenz und online durchführbar. Das Format (Präsenz vs. Online) erklärt jedoch NICHT die Wirksamkeit für Konsensbildung — der Grund liegt im direkten Austausch der Stakeholder, nicht im Medium.',lz:'LZ 4-2',k:'K2'},

  {type:'ktype',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   assertion:'Ein Zustandsautomat eignet sich zur Modellierung des Verhaltens eines Systems durch Zustände und Übergänge.',
   reason:'Zustandsautomaten zeigen explizit, welche Ereignisse oder Bedingungen einen Wechsel des Systemzustands auslösen.',
   answer:0,explanation:'Beide Aussagen sind korrekt. Der Reason erklärt die Eignung: Verhaltensmodellierung erfordert die Darstellung von Zuständen (was das System \'ist\') und der Triggers für Übergänge (was das System dazu bringt, den Zustand zu wechseln) — genau das leisten Zustandsautomaten.',lz:'LZ 5-3',k:'K2'},

  {type:'ktype',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'trap',
   assertion:'Die Priorisierung von Anforderungen unterstützt Teams dabei, bei begrenzten Ressourcen die wichtigsten Anforderungen zuerst umzusetzen.',
   reason:'Priorisierung ersetzt die Anforderungsvalidierung, da nur die wichtigsten Anforderungen geprüft werden müssen.',
   answer:2,explanation:'Die Behauptung ist korrekt: Priorisierung hilft, Ressourcen gezielt einzusetzen. Der Reason ist falsch: Priorisierung ersetzt niemals die Validierung. Auch niedrig priorisierte Anforderungen, wenn sie umgesetzt werden, müssen validiert sein. Validierung ist eine unabhängige RE-Kernaktivität.',lz:'LZ 8-6',k:'K2'},

  {type:'ktype',chapter:'Kap. 2 · Systemkontext',errorType:'terminology',
   assertion:'Die Systemgrenze trennt das zu entwickelnde System von seinem Kontext, sodass Kontextelemente nicht unter direkter Kontrolle des Entwicklungsteams stehen.',
   reason:'Alles außerhalb der Systemgrenze gehört zum Systemkontext und muss als gegebene Rahmenbedingung akzeptiert werden.',
   answer:0,explanation:'Beide Aussagen sind korrekt. Der Reason erklärt die Behauptung: Die Systemgrenze definiert, was \'innen\' (kontrollierbar) und was \'außen\' (Kontext, nicht kontrollierbar) ist. Da Kontextelemente außerhalb liegen, muss das Team sie als Rahmenbedingungen akzeptieren.',lz:'LZ 2-2',k:'K2'},

  {type:'ktype',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'trap',
   assertion:'Die Priorisierung von Anforderungen kann mit verschiedenen Methoden durchgeführt werden, z. B. MoSCoW, Kano-Modell oder Wertanalyse.',
   reason:'Priorisierung ist eine Aufgabe, die ausschließlich der Requirements Engineer ohne Stakeholder-Einbeziehung vornehmen sollte.',
   answer:2,explanation:'Die Behauptung ist korrekt: Es gibt diverse Priorisierungsmethoden. Der Reason ist falsch: Priorisierung erfordert zwingend Stakeholder-Einbeziehung, da nur sie den geschäftlichen Wert und die Dringlichkeit beurteilen können. Ein RE kann methodisch unterstützen, aber nicht allein entscheiden.',lz:'LZ 8-6',k:'K2'},

  {type:'ktype',chapter:'Kap. 1 · Was ist eine Anforderung?',errorType:'terminology',
   assertion:'Funktionale Anforderungen und Randbedingungen (Constraints) beschreiben beide das nach außen sichtbare Verhalten des Systems aus Nutzersicht.',
   reason:'Beide Anforderungstypen beeinflussen, was das System letztlich für den Nutzer leisten kann.',
   answer:3,explanation:'Die Behauptung ist falsch: Funktionale Anforderungen beschreiben, was das System tun soll (Verhalten aus Nutzersicht). Randbedingungen schränken den Lösungsraum ein (z. B. Technologievorgaben, Normen) — sie beschreiben nicht das nach außen sichtbare Systemverhalten. Der Reason ist allgemein wahr, widerlegt aber nicht die falsche Behauptung.',lz:'LZ 1-2',k:'K2'},

  {type:'ktype',chapter:'Kap. 6 · Anforderungsqualität',errorType:'method',
   assertion:'Widersprüche zwischen Anforderungen sollten aufgelöst werden, bevor die Anforderungsspezifikation zur Basislinie vereinbart wird.',
   reason:'Ungelöste Widersprüche zwingen Entwickler zu willkürlichen Entscheidungen, was zu inkonsistentem Systemverhalten führen kann.',
   answer:0,explanation:'Beide Aussagen sind korrekt. Der Reason erklärt die Dringlichkeit: Wenn Widersprüche in der Baseline stecken, werden sie zur Implementierungszeit sichtbar — dann entscheiden Entwickler ad hoc, was erhebliche Qualitätsprobleme erzeugt. Das Auflösen vor Baseline-Vereinbarung verhindert genau dieses Risiko.',lz:'LZ 6-3',k:'K2'},

  {type:'ktype',chapter:'Kap. 4 · Anforderungserhebung',errorType:'method',
   assertion:'Anforderungsworkshops eignen sich gut zur Erarbeitung eines gemeinsamen Problemverständnisses.',
   reason:'Anforderungsworkshops können zwischen zwei Stunden und mehreren Tagen dauern.',
   answer:1,explanation:'Beide Aussagen sind korrekt: Workshops fördern gemeinsames Verständnis (A), und ihre Dauer variiert erheblich (B). Die Dauer erklärt aber NICHT die Wirksamkeit für gemeinsames Verständnis — der Grund liegt im direkten, simultanen Austausch mehrerer Stakeholder, nicht in der zeitlichen Dimension.',lz:'LZ 4-2',k:'K2'},

  {type:'ktype',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'trap',
   assertion:'Use Cases können sowohl grafisch (Use-Case-Diagramm) als auch textuell (Szenario-Beschreibung) dokumentiert werden.',
   reason:'Ein Use-Case-Diagramm zeigt alle detaillierten Schritte der Interaktion zwischen Akteur und System.',
   answer:2,explanation:'Die Behauptung ist korrekt: Use Cases haben grafische und textuelle Darstellungen. Der Reason ist falsch: Das Use-Case-Diagramm zeigt nur den Überblick — Akteure, Systemgrenze, Use-Case-Namen und Beziehungen. Die detaillierten Interaktionsschritte stehen im textuellen Szenario, nicht im Diagramm.',lz:'LZ 5-6',k:'K2'},

  {type:'ktype',chapter:'Kap. 3 · RE-Prozess',errorType:'method',
   assertion:'Im Requirements Engineering prüft die Verifikation, ob dokumentierte Anforderungen den tatsächlichen Stakeholder-Bedürfnissen entsprechen.',
   reason:'Verifikation stellt sicher, dass das System gemäß den vereinbarten Spezifikationen entwickelt wurde.',
   answer:3,explanation:'Die Behauptung ist falsch: Das Prüfen, ob Anforderungen Stakeholder-Bedürfnisse widerspiegeln, ist Aufgabe der Validierung. Verifikation prüft die Konformität der Implementierung mit der Spezifikation (Reason korrekt). Die Behauptung vertauscht Validierung und Verifikation — ein häufiger Fehler.',lz:'LZ 3-3',k:'K2'},

  {type:'ktype',chapter:'Kap. 4 · Anforderungserhebung',errorType:'terminology',
   assertion:'Feldbeobachtung ist besonders geeignet, um implizites Wissen (tacit knowledge) von Stakeholdern aufzudecken.',
   reason:'Bei der Feldbeobachtung werden Stakeholder in ihrer realen Arbeitsumgebung beobachtet, sodass tatsächliche Abläufe und unausgesprochene Praktiken sichtbar werden.',
   answer:0,explanation:'Beide Aussagen sind korrekt. Der Reason erklärt den Mechanism: Beobachtung in der realen Umgebung macht sichtbar, was Stakeholder nicht verbalisieren können — Routinen, Workarounds, implizite Regeln. Das ist genau der Mechanismus der tacit knowledge Externalisierung.',lz:'LZ 4-1',k:'K2'},

  {type:'ktype',chapter:'Kap. 3 · RE-Prozess',errorType:'method',
   assertion:'Eine Anforderungsspezifikation sollte vor Beginn der Implementierung validiert werden.',
   reason:'Zur Validierung von Anforderungen stehen Techniken wie Prototyping, Reviews und formale Methoden zur Verfügung.',
   answer:1,explanation:'Beide Aussagen sind korrekt: Spezifikationen sollen vor der Implementierung validiert werden, und es gibt viele Validierungstechniken. Die Verfügbarkeit von Techniken erklärt jedoch NICHT, warum vor der Implementierung validiert werden soll — der Grund ist Risikominimierung: Fehler in Anforderungen sind vor der Implementierung günstiger zu korrigieren.',lz:'LZ 3-3',k:'K2'},

  {type:'ktype',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'trap',
   assertion:'Ein Walkthrough ist weniger formal als eine Inspektion.',
   reason:'Beim Walkthrough übernimmt ein externer, unabhängiger Moderator die Leitung, um maximale Objektivität zu gewährleisten.',
   answer:2,explanation:'Die Behauptung ist korrekt: Der Walkthrough ist weniger formal — keine strukturierte Vorbereitung, keine Fehlermetriken. Der Reason ist falsch: Beim Walkthrough präsentiert der AUTOR das Dokument; es gibt keinen vorgeschriebenen externen Moderator. Ein externer Moderator ist ein Merkmal formaler Inspektionen.',lz:'LZ 7-2',k:'K2'},

  {type:'ktype',chapter:'Kap. 1 · Was ist eine Anforderung?',errorType:'terminology',
   assertion:'Qualitätsanforderungen beschreiben ausschließlich Performance- und Leistungsmerkmale eines Systems.',
   reason:'Performance ist stets das wichtigste Qualitätsmerkmal in allen Systemtypen.',
   answer:3,explanation:'Die Behauptung ist falsch: Qualitätsanforderungen umfassen ein breites Spektrum — Leistung, Zuverlässigkeit, Sicherheit (Security & Safety), Benutzerfreundlichkeit, Wartbarkeit, Verfügbarkeit, Portierbarkeit u. v. m. Der Reason ist ebenfalls falsch: Die wichtigsten Qualitätsmerkmale variieren stark je nach Systemtyp (z. B. Safety bei medizinischen Systemen, Security bei Finanzanwendungen).',lz:'LZ 1-2',k:'K2'},

  {type:'ktype',chapter:'Kap. 4 · Anforderungserhebung',errorType:'terminology',
   assertion:'Ein strukturiertes Interview mit vorbereiteten Fragen eignet sich besonders, um vergleichbare Antworten von mehreren Stakeholdern zu erheben.',
   reason:'Der standardisierte Fragenkatalog ermöglicht die direkte Vergleichbarkeit der Antworten verschiedener Stakeholder.',
   answer:0,explanation:'Beide Aussagen sind korrekt. Der Reason erklärt direkt den Mechanismus: Standardisierung → Vergleichbarkeit. Wer allen Befragten dieselben Fragen stellt, kann die Antworten unmittelbar gegenüberstellen — das ist der Kernvorteil strukturierter Interviews.',lz:'LZ 4-2',k:'K2'},

  {type:'ktype',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'method',
   assertion:'Traceability von Anforderungen unterstützt das Änderungsmanagement im Projekt.',
   reason:'Zur Herstellung von Traceability werden Anforderungs-IDs und Traceability-Matrizen als Werkzeuge eingesetzt.',
   answer:1,explanation:'Beide Aussagen sind korrekt: Traceability hilft beim Änderungsmanagement, und IDs/Matrizen sind ihre Werkzeuge. Die Werkzeuge erklären aber NICHT, warum Traceability das Änderungsmanagement unterstützt — der Grund ist, dass man mit Traceability-Links erkennen kann, welche Artefakte von einer Änderung betroffen sind (Auswirkungsanalyse).',lz:'LZ 8-3',k:'K2'},

  {type:'ktype',chapter:'Kap. 3 · RE-Prozess',errorType:'trap',
   assertion:'Die Kernaktivitäten des RE-Prozesses — Erhebung, Dokumentation, Prüfung und Verwaltung — können iterativ und überlappend ausgeführt werden.',
   reason:'In agilen Projekten werden Anforderungen ausschließlich in Form von User Stories dokumentiert, weshalb andere Dokumentationsformen nicht zulässig sind.',
   answer:2,explanation:'Die Behauptung ist korrekt: RE ist ein iterativer Prozess mit sich überlappenden Aktivitäten. Der Reason ist falsch: In agilen Projekten können Anforderungen auf vielfältige Weise dokumentiert werden — als User Stories, Akzeptanzkriterien, Use Cases, Modelle, Spezifikationsabschnitte. User Stories sind eine häufige Form, aber keine exklusive.',lz:'LZ 3-2',k:'K2'},

  {type:'ktype',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'method',
   assertion:'Eine Review-Technik, bei der der Autor sein Dokument selbst vorliest, erzielt dieselbe Fehlererkennungsrate wie eine formale Inspektion.',
   reason:'Formale Inspektionen erzielen systematisch höhere Fehlererkennungsraten als Walkthroughs und informelle Reviews.',
   answer:3,explanation:'Die Behauptung ist falsch: Autorgeführte Präsentationen (Walkthroughs) erzielen geringere Fehlererkennungsraten als formale Inspektionen, da der Autor \'blind\' für eigene Fehler sein kann. Der Reason ist korrekt und beschreibt genau den Unterschied, der die Behauptung widerlegt.',lz:'LZ 7-2',k:'K2'},

  {type:'ktype',chapter:'Kap. 1 · Was ist eine Anforderung?',errorType:'terminology',
   assertion:'Anforderungen, die aus rechtlichen oder regulatorischen Vorgaben stammen, sind häufig als Randbedingungen einzuordnen, die den Lösungsraum einschränken.',
   reason:'Rechtliche Vorgaben schreiben vor, was ein System tun oder unterlassen muss, und entziehen sich damit der freien Gestaltung durch das Entwicklungsteam.',
   answer:0,explanation:'Beide Aussagen sind korrekt. Der Reason erklärt die Klassifikation: Rechtliche Vorgaben sind externe Zwänge, die nicht verhandelbar sind — genau das ist das Wesen einer Randbedingung. Das Entwicklungsteam muss die Lösung an diese Vorgaben anpassen, nicht umgekehrt.',lz:'LZ 1-2',k:'K2'},

  {type:'ktype',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'trap',
   assertion:'In einem Use-Case-Diagramm können externe Systeme als Akteure auftreten.',
   reason:'Externe Systeme sind Akteure, weil sie sich innerhalb der Systemgrenze befinden und mit internen Modulen kommunizieren.',
   answer:2,explanation:'Die Behauptung ist korrekt: Externe Systeme können Akteure sein, wenn sie außerhalb der Systemgrenze liegen und mit dem System interagieren. Der Reason ist falsch: Akteure befinden sich definitionsgemäß AUßERHALB der Systemgrenze. Externe Systeme, die innerhalb der Systemgrenze liegen, sind keine Akteure, sondern Teil des Systems.',lz:'LZ 5-2',k:'K2'},

  {type:'ktype',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'terminology',
   assertion:'Akzeptanzkriterien machen User Stories testbar und klären die Erwartungen zwischen Product Owner und Entwicklungsteam.',
   reason:'Akzeptanzkriterien definieren konkrete Bedingungen, die erfüllt sein müssen, damit die User Story als \'done\' gilt.',
   answer:0,explanation:'Beide Aussagen sind korrekt. Der Reason erklärt direkt, wie die Testbarkeit entsteht: Konkrete \'done\'-Bedingungen ermöglichen objektive Prüfung. Und klare Kriterien verhindern Interpretationsspielräume zwischen Product Owner und Team.',lz:'LZ 9-1',k:'K2'},

  {type:'ktype',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'method',
   assertion:'Eine Auswirkungsanalyse ist ein wichtiger Bestandteil des Änderungsmanagements.',
   reason:'Für die Durchführung einer Auswirkungsanalyse werden Traceability-Links zwischen Anforderungen und anderen Artefakten benötigt.',
   answer:1,explanation:'Beide Aussagen sind korrekt: Auswirkungsanalysen sind zentral im Änderungsmanagement, und Traceability-Links sind ihr wichtigstes Werkzeug. Die Werkzeugaussage erklärt aber NICHT, warum Auswirkungsanalysen wichtig sind — der Grund ist, dass ohne sie Änderungen unkontrolliert Folgeprobleme erzeugen (versteckte Abhängigkeiten, inkonsistente Artefakte).',lz:'LZ 8-4',k:'K2'},

  {type:'ktype',chapter:'Kap. 6 · Anforderungsqualität',errorType:'trap',
   assertion:'Eine Anforderung ist prüfbar, wenn sie in einem formalen Template dokumentiert wurde.',
   reason:'Prüfbarkeit bedeutet, dass die Erfüllung einer Anforderung objektiv und nachweisbar festgestellt werden kann.',
   answer:3,explanation:'Die Behauptung ist falsch: Ein formales Template verbessert Struktur und Konsistenz, macht eine Anforderung aber nicht prüfbar. Prüfbarkeit erfordert messbare Kriterien (Schwellenwerte, Testbedingungen), unabhängig vom Dokumentationsformat. Der Reason ist korrekt — er beschreibt, was Prüfbarkeit wirklich bedeutet, und zeigt damit, dass ein Template allein nicht ausreicht.',lz:'LZ 6-1',k:'K2'},

  {type:'ktype',chapter:'Kap. 3 · RE-Prozess',errorType:'terminology',
   assertion:'Eine Traceability-Matrix ist ein typisches RE-Artefakt.',
   reason:'Eine Traceability-Matrix wird im Rahmen des Requirements Engineering erstellt, um Anforderungen mit anderen Artefakten (Design, Tests, Quellen) zu verknüpfen.',
   answer:0,explanation:'Beide Aussagen sind korrekt. Der Reason erklärt die Klassifikation: Ein RE-Artefakt ist jedes im RE-Prozess erstellte Arbeitsergebnis. Eine Traceability-Matrix erfüllt genau diese Definition — sie wird im RE erstellt und unterstützt Verwaltung und Verfolgbarkeit.',lz:'LZ 3-5',k:'K2'},

  {type:'ktype',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'trap',
   assertion:'Eine Basislinie stellt einen vereinbarten, geprüften Anforderungsstand dar, gegen den Änderungen formal verwaltet werden.',
   reason:'Nach Vereinbarung einer Basislinie sind Anforderungsänderungen dauerhaft unzulässig und werden abgelehnt.',
   answer:2,explanation:'Die Behauptung ist korrekt: Eine Basislinie ist ein Referenzstand für kontrolliertes Änderungsmanagement. Der Reason ist falsch: Änderungen nach einer Basislinie sind möglich und sogar erwartet — sie müssen jedoch über den formalen Änderungsprozess beantragt und genehmigt werden. Eine Basislinie friert nicht dauerhaft ein.',lz:'LZ 8-5',k:'K2'},

  {type:'ktype',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   assertion:'Die konsistente Verwendung von Modalverben (\'muss\', \'sollte\', \'darf\') in einer Anforderungsspezifikation ist wichtig für Klarheit und Verbindlichkeit.',
   reason:'\'Muss\'/\'shall\' kennzeichnet obligatorische Anforderungen, \'sollte\'/\'should\' empfohlene und \'darf\'/\'may\' optionale Anforderungen — diese Unterscheidung hat rechtliche und projektbezogene Konsequenzen.',
   answer:0,explanation:'Beide Aussagen sind korrekt. Der Reason erklärt direkt, warum Konsistenz wichtig ist: Unterschiedliche Modalverben haben unterschiedliche Verbindlichkeit. Wenn \'sollte\' und \'muss\' willkürlich verwendet werden, entsteht Unklarheit darüber, welche Anforderungen zwingend sind — mit rechtlichen und qualitätsbezogenen Folgen.',lz:'LZ 5-1',k:'K2'},

  {type:'ktype',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'terminology',
   assertion:'Requirements-Management-Tools unterstützen Versionierung, Statusverfolgung und Traceability von Anforderungen.',
   reason:'Requirements-Management-Tools generieren automatisch Testfälle aus Anforderungstexten.',
   answer:2,explanation:'Die Behauptung ist korrekt: RM-Tools (DOORS, Polarion, Jira) fokussieren auf Verwaltung, Versionierung, Statusverfolgung und Traceability. Der Reason ist falsch: Automatische Testfallgenerierung ist keine Standardfunktion von RM-Tools — sie gehört zu Testmanagement- und MBT-Werkzeugen (Model-Based Testing).',lz:'LZ 9-2',k:'K2'},

  {type:'ktype',chapter:'Kap. 2 · Systemkontext',errorType:'method',
   assertion:'Eine Stakeholder-Karte (z. B. Zwiebeldiagramm) hilft, alle relevanten Stakeholder zu identifizieren.',
   reason:'Eine Stakeholder-Karte ordnet Stakeholder in konzentrischen Ringen um das System nach ihrer Nähe an.',
   answer:1,explanation:'Beide Aussagen sind korrekt: Stakeholder-Karten unterstützen die vollständige Stakeholder-Identifikation, und das Zwiebeldiagramm visualisiert konzentrische Ringe. Die Visualisierungsform (konzentrische Ringe) erklärt aber NICHT, warum Stakeholder-Karten bei der Identifikation helfen — der Grund ist, dass die systematische Visualisierung auf Gruppen aufmerksam macht, die man sonst übersehen würde.',lz:'LZ 2-5',k:'K2'},

  {type:'ktype',chapter:'Kap. 4 · Anforderungserhebung',errorType:'terminology',
   assertion:'Perspektivenbasiertes Lesen erhöht die Fehlererkennungsrate bei Requirements-Reviews.',
   reason:'Verschiedene Perspektiven (Tester, Designer, Betreiber) decken unterschiedliche Fehlertypen auf, die aus einer einzigen Perspektive unsichtbar bleiben würden.',
   answer:0,explanation:'Beide Aussagen sind korrekt. Der Reason erklärt den Mechanismus: Jede Rolle sucht gezielt nach für sie relevanten Fehlern — fehlende Testbarkeit, Architekturkonflikte, fehlende Betriebsanforderungen. Die Summe aller Perspektiven ergibt eine höhere Gesamtabdeckung als unspezifisches Lesen.',lz:'LZ 4-4',k:'K2'},

  {type:'ktype',chapter:'Kap. 6 · Anforderungsqualität',errorType:'trap',
   assertion:'Nicht prüfbare Anforderungen erschweren die Ableitung von Testfällen erheblich.',
   reason:'Nicht prüfbare Anforderungen sind immer kürzer als prüfbare und können daher nicht als Grundlage für Testfälle verwendet werden.',
   answer:2,explanation:'Die Behauptung ist korrekt: Ohne objektive Prüfbedingungen können keine aussagekräftigen Testfälle abgeleitet werden. Der Reason ist falsch: Die Länge einer Anforderung hat keinen direkten Zusammenhang mit ihrer Prüfbarkeit. Eine kurze Anforderung (\'max. 2 s Antwortzeit\') kann hervorragend prüfbar sein; eine lange Anforderung kann trotzdem vage bleiben.',lz:'LZ 6-2',k:'K2'},

  {type:'ktype',chapter:'Kap. 1 · Was ist eine Anforderung?',errorType:'terminology',
   assertion:'Eine Anforderung beschreibt eine Bedingung oder Fähigkeit, die ein System besitzen muss, um einen Vertrag, eine Norm oder eine Spezifikation zu erfüllen.',
   reason:'Anforderungen können von unterschiedlichen Stakeholdern mit verschiedenen Interessen und Prioritäten stammen.',
   answer:1,explanation:'Beide Aussagen sind korrekt: Die IREB-Definition beschreibt Anforderungen als Bedingungen für Systeme (A), und verschiedene Stakeholder haben unterschiedliche Interessen (B). Die Aussage über Stakeholder-Vielfalt erklärt aber NICHT die Definition einer Anforderung — sie ist eine separate, wahre Aussage ohne Kausalbeziehung zur ersten.',lz:'LZ 1-1',k:'K2'},

  {type:'ktype',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'method',
   assertion:'Bei einer formalen Inspektion darf der Autor nicht gleichzeitig die Moderation übernehmen.',
   reason:'Die Trennung von Autor und Moderator verhindert, dass der Autor unbewusst von seiner eigenen Perspektive geleitet wird und Fehler übersieht.',
   answer:0,explanation:'Beide Aussagen sind korrekt. Der Reason erklärt das Gebot: Der Autor ist kognitiv \'blind\' für eigene Fehler. Ein unabhängiger Moderator sorgt dafür, dass alle Befunde objektiv erfasst werden und der Autor nicht defensiv reagiert oder Fehler kleinredet.',lz:'LZ 7-3',k:'K2'},

  {type:'ktype',chapter:'Kap. 3 · RE-Prozess',errorType:'terminology',
   assertion:'Design ist laut IREB-Syllabus v3.0 eine der vier Kernaktivitäten des RE-Prozesses.',
   reason:'Gutes Systemdesign basiert auf klar dokumentierten Anforderungen.',
   answer:3,explanation:'Die Behauptung ist falsch: Die vier IREB-Kernaktivitäten sind Erhebung, Dokumentation, Prüfung/Validierung und Verwaltung. Design ist eine Aktivität des Systems Engineering, nicht des RE. Der Reason ist zwar wahr — Anforderungen sind Grundlage guten Designs — aber das macht Design nicht zur RE-Kernaktivität.',lz:'LZ 3-1',k:'K2'},

  {type:'ktype',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'trap',
   assertion:'Eine <<include>>-Beziehung in einem Use-Case-Diagramm beschreibt eine obligatorische Einbindung.',
   reason:'<<include>> wird verwendet, wenn zwei Use Cases denselben Akteur teilen und daher zusammengeführt werden müssen.',
   answer:2,explanation:'Die Behauptung ist korrekt: <<include>> ist obligatorisch — der Basis-UC schließt den eingebundenen UC immer und vollständig ein. Der Reason ist falsch: <<include>> hat nichts mit gemeinsamen Akteuren zu tun. Kriterium ist, ob der Basis-UC den eingebundenen UC zwingend braucht, um sein Ziel zu erreichen.',lz:'LZ 5-2',k:'K2'},

  {type:'ktype',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'method',
   assertion:'In agilen Projekten werden Anforderungen iterativ erhoben und verfeinert, nicht vorab vollständig spezifiziert.',
   reason:'Das agile Manifest priorisiert funktionierende Software über umfassende Dokumentation.',
   answer:1,explanation:'Beide Aussagen sind korrekt: Agile RE ist iterativ (A), und das agile Manifest priorisiert Software über Dokumentation (B). Das agile Manifest ist aber NICHT die primäre Erklärung für iterative Erhebung — der Grund liegt darin, dass Anforderungen zu Projektbeginn oft unbekannt oder unvollständig sind und erst durch Feedback und Lernzyklen klar werden.',lz:'LZ 9-3',k:'K2'},

  {type:'ktype',chapter:'Kap. 2 · Systemkontext',errorType:'scenario',
   assertion:'Die DSGVO ist ein typisches Element des Systemkontexts für Software-Systeme, die personenbezogene Daten verarbeiten.',
   reason:'Die DSGVO liegt außerhalb der Systemgrenze und stellt externe Anforderungen an das System, die das Entwicklungsteam nicht gestalten, sondern nur erfüllen kann.',
   answer:0,explanation:'Beide Aussagen sind korrekt. Der Reason erklärt, warum die DSGVO Systemkontext ist: Sie liegt außerhalb der Systemgrenze (das Entwicklungsteam kann die DSGVO nicht ändern), stellt aber externe Anforderungen (Datenschutzpflichten), die das System erfüllen muss. Das ist die Definition von Systemkontext.',lz:'LZ 2-3',k:'K2'},

  {type:'ktype',chapter:'Kap. 6 · Anforderungsqualität',errorType:'trap',
   assertion:'Eindeutigkeit einer Anforderung bedeutet, dass nur eine einzige Interpretation zulässig ist.',
   reason:'Eindeutigkeit wird durch die Verwendung formaler mathematischer Notation automatisch erreicht.',
   answer:2,explanation:'Die Behauptung ist korrekt: Eindeutigkeit bedeutet genau eine Interpretation. Der Reason ist falsch: Formale Notation reduziert Mehrdeutigkeit erheblich, garantiert sie aber nicht automatisch. Selbst formale Notationen können mehrdeutig sein, wenn die verwendeten Symbole oder Prädikate unklar definiert sind. Zudem schließt formale Notation Lesbarkeit für nicht-technische Stakeholder aus.',lz:'LZ 6-1',k:'K2'},

  {type:'ktype',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'method',
   assertion:'Bidirektionale Traceability (vorwärts und rückwärts) ist wertvoller als unidirektionale Traceability.',
   reason:'Bidirektionale Traceability erfordert mehr Aufwand bei der Pflege der Links.',
   answer:1,explanation:'Beide Aussagen sind korrekt: Bidirektionale Traceability ist umfassender und wertvoller, und sie ist aufwändiger zu pflegen. Der Mehraufwand erklärt aber NICHT den Mehrwert — bidirektionale Traceability ist wertvoller, weil sie sowohl Auswirkungsanalysen (vorwärts) als auch Legitimation und Quellenprüfung (rückwärts) unterstützt.',lz:'LZ 8-3',k:'K2'},

  {type:'ktype',chapter:'Kap. 3 · RE-Prozess',errorType:'method',
   assertion:'Anforderungsverhandlungen sollten von einem neutralen Moderator begleitet werden.',
   reason:'Ein neutraler Moderator verhindert, dass einzelne Stakeholder die Verhandlung dominieren und sorgt dafür, dass alle Perspektiven gehört werden.',
   answer:0,explanation:'Beide Aussagen sind korrekt. Der Reason erklärt den Nutzen des neutralen Moderators direkt: Machtungleichgewichte zwischen Stakeholdern können Verhandlungen verzerren. Ein neutraler Moderator schafft einen geschützten Raum, in dem auch weniger einflussreiche Stakeholder ihre Anforderungen einbringen können.',lz:'LZ 3-4',k:'K2'},

  {type:'ktype',chapter:'Kap. 1 · Was ist eine Anforderung?',errorType:'trap',
   assertion:'Stakeholder-Anforderungen beschreiben Bedürfnisse auf einer abstrakteren Ebene als Systemanforderungen.',
   reason:'Stakeholder-Anforderungen sind immer unvollständig und müssen deshalb durch Systemanforderungen ersetzt werden.',
   answer:2,explanation:'Die Behauptung ist korrekt: Stakeholder-Anforderungen sind auf Bedürfnisebene formuliert (\'Ich möchte jederzeit auf meine Daten zugreifen\'); Systemanforderungen sind konkreter (\'Das System muss eine Verfügbarkeit von 99,5 % gewährleisten\'). Der Reason ist falsch: Stakeholder-Anforderungen sind nicht \'unvollständig\', sondern bewusst auf einer anderen Abstraktionsebene — sie werden durch Systemanforderungen konkretisiert, nicht \'ersetzt\'.',lz:'LZ 1-4',k:'K2'},

  {type:'ktype',chapter:'Kap. 9 · Agile RE & Werkzeuge',errorType:'trap',
   assertion:'Eine User Story ist vollständig, sobald sie das Format \'Als [Rolle] möchte ich [Ziel], damit [Nutzen]\' einhält.',
   reason:'Das User-Story-Format stellt sicher, dass die Geschichte testbar und umsetzbar ist.',
   answer:3,explanation:'Die Behauptung ist falsch: Das Format allein macht eine User Story nicht vollständig. Eine vollständige, nutzbare User Story benötigt auch Akzeptanzkriterien, ausreichende Klarheit und angemessene Granularität (INVEST-Kriterien: Independent, Negotiable, Valuable, Estimable, Small, Testable). Der Reason ist falsch: Das Format allein garantiert keine Testbarkeit — dafür sind explizite Akzeptanzkriterien notwendig.',lz:'LZ 9-1',k:'K2'},

  {type:'ktype',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'method',
   assertion:'Prototyping kann als Technik zur Anforderungsvalidierung eingesetzt werden.',
   reason:'Prototypen können mit wenig Aufwand als Papierprototypen (Low-Fidelity) erstellt werden.',
   answer:1,explanation:'Beide Aussagen sind korrekt: Prototypen sind anerkannte Validierungstechniken, und Papierprototypen sind eine kostengünstige Form. Der geringe Erstellungsaufwand erklärt aber NICHT, warum Prototypen zur Validierung geeignet sind — der Grund ist, dass Stakeholder durch die Interaktion mit dem Prototyp erkennen, ob das Modell ihren Erwartungen entspricht.',lz:'LZ 7-4',k:'K2'},

  {type:'ktype',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'terminology',
   assertion:'Jede Anforderung sollte eine eindeutige Identifikationsnummer (ID) erhalten.',
   reason:'Ohne eindeutige IDs können Anforderungen in Traceability-Matrizen, Testplänen und Änderungsanträgen nicht präzise referenziert werden.',
   answer:0,explanation:'Beide Aussagen sind korrekt. Der Reason erklärt direkt den Zweck von IDs: Referenzierbarkeit. Ohne eindeutige IDs muss man auf Textsuche oder Beschreibungen zurückgreifen, was bei Änderungen (REQ-042 muss angepasst werden) und Traceability (REQ-042 → TC-017) fehleranfällig ist.',lz:'LZ 8-1',k:'K2'},

  // ── NEW LE2: Stakeholder-Karte & Kontextdiagramm ──
  {type:'ktype',chapter:'Kap. 2 · Systemkontext',errorType:'method',
   assertion:'Eine Stakeholder-Karte sollte auch indirekte Stakeholder wie Regulierungsbehörden und Systembetreiber einschließen.',
   reason:'Indirekte Stakeholder haben häufig verbindliche Anforderungen, die erst spät entdeckt werden und nachträgliche Spezifikationsänderungen verursachen können.',
   answer:0,explanation:'Behauptung und Begründung sind korrekt, und die Begründung erklärt die Behauptung: Der Hauptschaden durch fehlende indirekte Stakeholder ist die späte Entdeckung verbindlicher Anforderungen — DSGVO-Auflagen, Betriebsanforderungen, Schnittstellenstandards. Frühzeitige Erfassung in der Stakeholder-Karte verhindert kostspielige Nachbesserungen.',lz:'LZ 2-5',k:'K2'},

  {type:'ktype',chapter:'Kap. 2 · Systemkontext',errorType:'terminology',
   assertion:'Ein Kontextdiagramm zeigt das zu entwickelnde System als Black Box und alle externen Schnittstellen zur Systemumgebung.',
   reason:'Kontextdiagramme beschreiben die interne Struktur des Systems, um Entwicklern eine schnelle Orientierung zu geben.',
   answer:2,explanation:'Die Behauptung ist korrekt: Ein Kontextdiagramm stellt das System als undifferenzierte Einheit dar und zeigt alle externen Entitäten und Datenflüsse über die Systemgrenze. Die Begründung ist falsch: Ein Kontextdiagramm beschreibt explizit KEINE internen Details — genau das unterscheidet es von verfeinerten DFD-Ebenen. Interne Struktur wird in späteren Modellierungsschritten dargestellt.',lz:'LZ 2-1',k:'K2'},

  // ── NEW LE7: Inspektionsrollen & Metriken ──
  {type:'ktype',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'method',
   assertion:'Bei einer formalen Inspektion ist es zulässig, dass der Autor als Moderator fungiert, um inhaltliche Rückfragen direkt zu beantworten.',
   reason:'Der Autor kennt das Dokument am besten und kann Missverständnisse der Gutachter sofort klären.',
   answer:3,explanation:'Die Behauptung ist falsch: Die Rollentrennung zwischen Autor und Moderator ist ein Kernprinzip der formalen Inspektion. Der Autor darf NICHT moderieren, um Betriebsblindheit und soziale Einflussnahme zu vermeiden. Obwohl der Autor das Dokument kennt (Reason inhaltlich wahr), widerspricht genau diese Nähe einer unparteiischen Moderation.',lz:'LZ 7-3',k:'K2'},

  {type:'ktype',chapter:'Kap. 7 · Anforderungsprüfung',errorType:'method',
   assertion:'Formale Inspektionen erheben Fehlermetriken, um den Prüfprozess zu optimieren und Dokumentqualität messbar zu machen.',
   reason:'Durch die Messung von Fehlerdichte und Schweregrad können Qualitätstrends über mehrere Inspektionen verfolgt und Verbesserungen gezielt eingeleitet werden.',
   answer:0,explanation:'Behauptung und Begründung sind korrekt. Die Begründung erklärt den Mechanismus: Ohne Metriken bleibt Inspektionsqualität nicht vergleichbar und nicht verbesserbar. Längsschnittvergleiche über mehrere Inspektionen machen systematische Schwachstellen sichtbar — das ist der Kern des Optimierungsarguments.',lz:'LZ 7-1',k:'K2'},

  // ── NEW LE8: Versionierung, Baseline, Attribute ──
  {type:'ktype',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'terminology',
   assertion:'Eine Basislinie (Baseline) und die Versionierung von Anforderungen sind im IREB-Kontext dasselbe Konzept.',
   reason:'Beide dienen dazu, den historischen Zustand von Anforderungen zu dokumentieren.',
   answer:3,explanation:'Die Behauptung ist falsch: Basislinie und Versionierung sind verwandte, aber verschiedene Konzepte. Versionierung ist kontinuierlich und verfolgt jede Änderung an jeder Anforderung. Eine Baseline ist ein formell vereinbarter Referenzpunkt — ein freigegebener Schnappschuss, der als Grundlage für Änderungsmanagement dient. Obwohl beide mit historischen Zuständen arbeiten (Reason teilweise wahr), beschreiben sie unterschiedliche Mechanismen.',lz:'LZ 8-5',k:'K2'},

  {type:'ktype',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'method',
   assertion:'Das Attribut \'Quelle\' einer Anforderung gibt an, von welchem Stakeholder oder Dokument die Anforderung stammt.',
   reason:'Die Kenntnis der Quelle ermöglicht es, bei Rückfragen oder Konflikten den richtigen Ansprechpartner zu kontaktieren.',
   answer:0,explanation:'Behauptung und Begründung sind korrekt. Die Begründung erklärt den praktischen Nutzen: Das Quell-Attribut ist nicht nur historische Dokumentation, sondern aktives Kommunikationswerkzeug — ohne Quellenangabe ist unklar, wer bei Änderungen oder Konflikten kontaktiert werden muss.',lz:'LZ 8-2',k:'K2'},

  // ── NEW: Statische Strukturnotation (K1, weniger Trick) ──
  {type:'ktype',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'terminology',
   assertion:'Ein Entity-Relationship-Diagramm (ERD) modelliert die statischen Datenstrukturen eines Systems, einschließlich Entitäten, Attribute und Beziehungen.',
   reason:'Das ERD zeigt, wie Daten zu einem Zeitpunkt strukturiert sind — nicht wie sich Daten über die Zeit verändern.',
   answer:0,explanation:'Behauptung und Begründung sind korrekt. Die Begründung erklärt das Wesen des ERD: Es ist eine statische Sicht auf Datenstrukturen ohne Zeit- oder Prozessdimension. Genau deshalb ergänzt es dynamische Modelle: Das ERD beschreibt das \'Was\' (Struktur), dynamische Notationen das \'Wie\' (Verhalten über Zeit).',lz:'LZ 5-4',k:'K1'},

  // ── NEW: Reines K1 — Stakeholder- vs. Systemanforderungen ──
  {type:'ktype',chapter:'Kap. 1 · Was ist eine Anforderung?',errorType:'terminology',
   assertion:'Stakeholder-Anforderungen beschreiben, was ein Stakeholder vom System benötigt, während Systemanforderungen beschreiben, was das System leisten muss, um diese Bedürfnisse zu erfüllen.',
   reason:'Systemanforderungen werden aus Stakeholder-Anforderungen abgeleitet und sind in der Regel detaillierter und präziser formuliert.',
   answer:0,explanation:'Behauptung und Begründung sind korrekt. Die Begründung erklärt die Abstraktionshierarchie: Stakeholder-Anforderungen sind oft zielorientiert (\'schneller Zugriff auf Kundendaten\'), Systemanforderungen konkretisieren diese messbar (\'Kundendatensätze innerhalb von 500 ms\') — ein Grundprinzip des IREB-Anforderungsmodells.',lz:'LZ 1-4',k:'K1'},

  // ══ K1 LAYER — kurze, klare Behauptung/Begründung ohne Szenario-Komplexität ══

  {type:'ktype',chapter:'Kap. 3 · RE-Prozess',errorType:'terminology',
   assertion:'Validierung im Requirements Engineering prüft, ob die Anforderungen die tatsächlichen Bedürfnisse der Stakeholder korrekt widerspiegeln.',
   reason:'Ohne Validierung kann ein System gemäß Spezifikation korrekt entwickelt werden und dennoch das eigentliche Nutzerproblem nicht lösen.',
   answer:0,explanation:'Behauptung und Begründung sind korrekt. Die Begründung erklärt den praktischen Konsequenz-Mechanismus: Wenn die Spezifikation die Bedürfnisse nicht abbildet (Validierungsversagen), führt selbst eine korrekte Implementierung zum falschen Ergebnis.',lz:'LZ 3-3',k:'K1'},

  {type:'ktype',chapter:'Kap. 2 · Systemkontext',errorType:'terminology',
   assertion:'Regulierungsbehörden können Stakeholder eines Systems sein, auch wenn sie das System nie direkt nutzen.',
   reason:'Stakeholder sind alle Personen, Gruppen oder Organisationen, die ein Interesse an den Anforderungen haben oder von den Systemauswirkungen betroffen sind.',
   answer:0,explanation:'Behauptung und Begründung sind korrekt. Die Begründung erklärt die Behauptung: Weil die Stakeholder-Definition über direkte Nutzung hinausgeht — Betroffenheit genügt — fallen Regulierungsbehörden mit verbindlichen Vorgaben darunter.',lz:'LZ 2-4',k:'K1'},

  {type:'ktype',chapter:'Kap. 6 · Anforderungsqualität',errorType:'terminology',
   assertion:'Anforderungen, die mehrere Bedingungen mit "und" verknüpfen, sollten in separate Einzelanforderungen aufgeteilt werden.',
   reason:'Atomare Anforderungen lassen sich unabhängig voneinander prüfen, priorisieren und verwalten.',
   answer:0,explanation:'Behauptung und Begründung sind korrekt. Die Begründung erklärt den praktischen Nutzen der Atomarität: Getrennte Anforderungen können unabhängig getestet, unterschiedlich priorisiert und einzeln geändert werden — das ist unmöglich, wenn sie gebündelt sind.',lz:'LZ 6-1',k:'K1'},

  {type:'ktype',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'trap',
   assertion:'Eine Basislinie (Baseline) verhindert, dass Anforderungen nach ihrer Freigabe geändert werden.',
   reason:'Basislinien schaffen einen vereinbarten Referenzpunkt, von dem aus Änderungen über einen kontrollierten Prozess nachvollzogen werden.',
   answer:3,explanation:'Die Behauptung ist falsch: Eine Baseline verhindert Änderungen nicht — sie strukturiert sie. Änderungen sind weiterhin möglich, werden aber über einen formalen Prozess (Einreichung → Analyse → Genehmigung) gesteuert. Der Reason beschreibt korrekt, was eine Baseline tatsächlich leistet.',lz:'LZ 8-5',k:'K1'},

  {type:'ktype',chapter:'Kap. 8 · Anforderungsverwaltung',errorType:'trap',
   assertion:'"W" in MoSCoW steht dafür, dass eine Anforderung dauerhaft aus dem Projekt ausgeschlossen wird.',
   reason:'MoSCoW ist ein Scope-Management-Werkzeug, das Anforderungen nach ihrer Dringlichkeit für das aktuelle Release kategorisiert.',
   answer:3,explanation:'Die Behauptung ist falsch: "W" bedeutet "Won\'t have THIS TIME" — ein explizites Zurückstellen für einen späteren Release, kein dauerhafter Ausschluss. Das "this time" ist entscheidend für transparente Erwartungssteuerung. Der Reason beschreibt korrekt, dass MoSCoW auf das aktuelle Release fokussiert.',lz:'LZ 8-6',k:'K1'},

  {type:'ktype',chapter:'Kap. 1 · Was ist eine Anforderung?',errorType:'terminology',
   assertion:'Funktionale Anforderungen beschreiben, WAS ein System tun soll — seine Dienste, Funktionen und Verhaltensweisen.',
   reason:'Qualitätsanforderungen (nicht-funktionale Anforderungen) beschreiben, WIE GUT das System seine Funktionen erbringt.',
   answer:1,explanation:'Beide Aussagen sind korrekt: Funktionale Anforderungen = WAS, Qualitätsanforderungen = WIE GUT. Die Begründung erklärt jedoch nicht die Behauptung — sie beschreibt eine parallele, ergänzende Kategorie. Der korrekte Mechanismus für die Behauptung wäre: Funktionale Anforderungen folgen aus den Zielen und Aufgaben der Stakeholder.',lz:'LZ 1-2',k:'K1'},

  // ══ LZ-GAP FILL: KTYPE ══════════════════════════════════════════════════════

  {type:'ktype',chapter:'Kap. 3 · RE-Prozess',errorType:'method',
   assertion:'Verhandlung ist notwendig, wenn zwei Stakeholder widersprüchliche Anforderungen an dasselbe System stellen.',
   reason:'Das Ziel der Verhandlung ist eine Lösung, die von allen beteiligten Stakeholdern akzeptiert wird — nicht die Durchsetzung der Anforderungen eines Stakeholders gegen die des anderen.',
   answer:0,explanation:'Behauptung: Korrekt — Verhandlung wird ausgelöst durch Konflikte zwischen Stakeholdern. Begründung: Korrekt — und sie erklärt, WARUM Verhandlung notwendig ist: Das Ziel ist Konsens, nicht Sieg einer Partei. Die Begründung liefert die Definition des Verhandlungsziels, die unmittelbar erklärt, weshalb Verhandlung der richtige Schritt bei widersprüchlichen Anforderungen ist.',lz:'LZ 3-4',k:'K2'},

  {type:'ktype',chapter:'Kap. 5 · Anforderungsdokumentation',errorType:'trap',
   assertion:'Ein Use-Case-Diagramm zeigt den detaillierten Ablauf aller Szenarien eines Anwendungsfalls.',
   reason:'Die textliche Use-Case-Beschreibung enthält Normalablauf, Alternativpfade, Vor- und Nachbedingungen.',
   answer:3,explanation:'Behauptung: FALSCH — Das Use-Case-Diagramm zeigt NUR die strukturelle Übersicht: Akteure, Use Cases und ihre Beziehungen (include, extend). Ablaufdetails gehören in die textliche Beschreibung. Begründung: KORREKT — die textliche Use-Case-Beschreibung enthält tatsächlich Ablaufdetails. Da die Behauptung falsch ist, ist die Antwort D (Behauptung falsch).',lz:'LZ 5-6',k:'K1'},

  {type:'ktype',chapter:'Kap. 6 · Anforderungsqualität',errorType:'method',
   assertion:'Eine nicht verifizierbare Anforderung wie "Das System soll benutzerfreundlich sein" muss überarbeitet werden, bevor sie als Basis für Entwicklung und Test dienen kann.',
   reason:'Verifizierbarkeit erfordert, dass für jede Anforderung ein konkreter, objektiver Test definiert werden kann — z. B. durch messbare Schwellenwerte oder Akzeptanzkriterien.',
   answer:0,explanation:'Behauptung: Korrekt — eine nicht messbare Anforderung kann weder implementiert noch geprüft werden. Begründung: Korrekt — und sie erklärt direkt, warum: Verifizierbarkeit bedeutet Testbarkeit durch objektive Kriterien. Die Begründung liefert die Definition des Qualitätsmerkmals, das in der Behauptung verletzt wird.',lz:'LZ 6-4',k:'K2'},
];

// ═══════════════════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════════════════
