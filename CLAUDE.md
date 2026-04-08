# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A self-contained, browser-based practice exam tool for the **IREB CPRE Foundation Level** certification. The entire application ships as a single HTML file — no build step, no server, no dependencies. Open in any modern browser and it runs.

The current canonical file is `CPRE_FL_Probepruefung_v3_3.html` (internally versioned as v3.9l). Earlier files (`v3_1`, `v3_2`, `_blueprint`, `CPRE_FL_Mock_Exam.html`) are prior iterations kept for reference.

## How to run / test

Open the HTML file directly in a browser:
```
open CPRE_FL_Probepruefung_v3_3.html
```

No build, no install, no server required. All testing is manual in-browser. When making changes, reload the file and walk through the affected mode(s).

## Architecture of the main HTML file

The file is structured in three logical sections within a single `<script>` block:

### 1. Data layer (lines ~482–2615)
- `KTYPE_OPTIONS` — answer labels for K-type (assertion-reason) questions
- `TERM_MAP_RAW` + `injectTerms()` — bilingual DE/EN terminology tooltips injected into question text at render time
- `singlePool` (30+ questions) — single-choice questions, each with `{chapter, text, options, correct, explanation, errorType?}`
- `multiPool` (30+ questions) — multiple-choice questions with `correct` as an array
- `ktypePool` (30+ questions) — K-type questions with `{assertion, reason, correct}` where correct is one of `KTYPE_OPTIONS`
- Questions are tagged by LE chapter via `chapter` field; LE/K-level/LZ are inferred at enrichment time

### 2. Blueprint engine (lines ~2616–3000)
- `MODES` — defines `quick` (20q/30min), `full` (46q/75min), `survival` (28q/32min) with `leTargets`, `kTargets`, `nSingle/nMulti/nKtype`
- `enrichQuestion()` — adds inferred `le`, `kLevel`, `lz`, `qid` to each question at startup; pools are pre-enriched into `singlePoolMeta`, `multiPoolMeta`, `ktypePoolMeta`
- `selectQuestions(mode)` — blueprint-constrained selection: first fills per-LE quotas, then fills gaps, then enforces LZ diversity, finally optionally injects a diagram question
- `selectSurvivalQuestions()` — survival-specific selection: front-loads traps and terminology pitfalls, then reorders into waves (trap → terminology → other)
- `questionMatchesNeed()` / `takeBestCandidate()` — scoring function for candidate selection based on LE/K deficits and LZ deduplication

### 3. Exam engine + UI (lines ~3001–end)
- `startExam(mode)` — initialises state, calls `selectQuestions`, renders first question
- `renderQuestion()` — renders current question card with type-appropriate UI (radio / checkboxes / K-type buttons)
- `selectSingle()`, `toggleMulti()`, `confirmMulti()` — answer-handling per type
- `finishExam()` — computes score (single = 1pt, multiple/ktype = 2pt), passes/fails at 70%, renders results screen
- `buildCoverageReport()` — per-LE breakdown table
- `buildWeakChapters()` — identifies chapters below threshold
- `buildErrorBuckets()` / `inferErrorType()` — classifies wrong answers into error categories (trap, terminology, conceptual, etc.)
- `buildGlossary()` / `filterGlossary()` — searchable DE/EN glossary tab on results screen
- `buildReview()` — full question-by-question review with explanations and trap labels

## Question data conventions

Each question object follows one of these shapes:

```js
// Single-choice
{ chapter:'LE3', text:'...', options:['A','B','C','D'], correct:0, explanation:'...' }

// Multiple-choice
{ chapter:'LE5', text:'...', options:['A','B','C','D'], correct:[0,2], explanation:'...' }

// K-type (assertion-reason)
{ chapter:'LE2', assertion:'...', reason:'...', correct:'A', explanation:'...' }
// correct is index into KTYPE_OPTIONS ('A'|'B'|'C'|'D'|'E')
```

Optional fields: `errorType` ('trap'|'terminology'|'conceptual'|'application'|'recall'), `diagram` (boolean, marks SVG-diagram questions).

LE chapters: LE1–LE9. K-levels: K1 (recall), K2 (comprehension), K3 (application). Both are inferred from `chapter` field and question text by `inferLE()` / `inferK()` / `inferLZ()` — they are not stored explicitly in the pool arrays.

## Syllabus basis

IREB CPRE Foundation Level Syllabus Version 3.2.0 (26 February 2024). Questions are mapped to Lerneinheiten (LE1–LE9) and Lernziele (LZ X-Y). The `LZ_TITLES` and `LE_TITLES` maps at lines ~2641 and ~2747 define the full taxonomy.
