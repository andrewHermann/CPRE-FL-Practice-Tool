# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Branch rules

- **Never work directly on `main`.** Always create a new branch or check if an appropriate open branch already exists before making any changes.
- Branch naming: `feature/<topic>`, `fix/<topic>`, `refactor/<topic>`.
- Before opening a PR, run the build (see below) and verify it succeeds.

---

## How to run

Open `index.html` directly in any modern browser — no server, no install:

```bash
open index.html
```

No build step is needed for development. Edit source files in `src/`, reload the browser.

---

## Build (required before PR)

Run `build.sh` to produce the distribution zip before creating any pull request:

```bash
./build.sh
# Output: dist/cpre-fl-practice-tool.zip
```

The script:
1. Cleans `dist/`
2. Copies `index.html` + `src/` into `dist/`
3. Strips `.DS_Store` files
4. Zips the result as `dist/cpre-fl-practice-tool.zip`

`dist/` is gitignored — the zip is attached to GitHub Releases manually, not committed.

---

## Project structure

```
index.html              thin shell — HTML + <script src> tags in load order
src/
  style.css             all CSS (variables, layout, components, print)
  state.js              mutable exam globals (examQuestions, currentQ, etc.)
  utils.js              $(), showScreen, formatTime, shuffle, qPoints
  data/
    terms.js            KTYPE_OPTIONS, TERM_MAP_RAW, injectTerms()
    questions-single.js singlePool — 30+ single-choice question objects
    questions-multi.js  multiPool  — 30+ multiple-choice question objects
    questions-ktype.js  ktypePool  — 30+ K-type question objects
    constants.js        MODES, LE_TITLES, LZ_TITLES
    glossary.js         GLOSSARY array + _glossaryFiltered state
  engine/
    enrich.js           normalizeChapterLabel, inferLE/K/LZ, lzToLE,
                        enrichQuestion, allQuestions, ALL_LES, ALL_LZ
    blueprint.js        selectQuestions() — blueprint-constrained selection
    survival.js         selectSurvivalQuestions()
    logic.js            isCorrectAnswer, getTrapLabel, inferErrorType,
                        ERROR_BUCKETS
  ui/
    render.js           renderQuestion, selectSingle, toggleMulti,
                        confirmMulti, showFeedback
    exam.js             startExam, startTimer, retryExam, goToMenu,
                        nextQuestion
    results.js          finishExam, buildCoverageReport, buildWeakChapters,
                        buildErrorBuckets, scrollToReview, buildReview
    glossary.js         buildGlossary, filterGlossary, renderGlossary
    modal.js            MODAL_CFG, showModeModal, closeModeModal,
                        confirmModeModal
    demo.js             showDemo, printResults
build.sh                packages index.html + src/ into dist/ zip
```

No module system (no `import`/`export`). All variables are global. Script load order in `index.html` is the dependency order: data → engine → ui.

---

## Architecture

### Data layer (`src/data/`)

Each question pool (`singlePool`, `multiPool`, `ktypePool`) is a plain array of objects:

```js
// Single-choice
{ chapter:'LE3', text:'...', options:['A','B','C','D'], answer:0, explanation:'...', lz:'LZ 3-1', k:'K1' }

// Multiple-choice — answer is an array of indices
{ chapter:'LE5', text:'...', options:[...], answer:[0,2], explanation:'...', lz:'LZ 5-2', k:'K3' }

// K-type (assertion-reason) — answer is index into KTYPE_OPTIONS
{ chapter:'LE2', assertion:'...', reason:'...', answer:0, explanation:'...', lz:'LZ 2-1', k:'K2' }
```

Optional fields: `errorType` (`'trap'|'terminology'|'conceptual'|'application'|'recall'`), `diagram` (boolean).

### Blueprint engine (`src/engine/`)

`enrichQuestion()` adds `type`, `le`, `kLevel`, `lz` (resolved via `LZ_TITLES`), `chapter` (normalized), and `qid` to each question at startup. The enriched pools (`singlePoolMeta`, `multiPoolMeta`, `ktypePoolMeta`) and `allQuestions` are built immediately.

`selectQuestions(mode)` uses a constrained random sampling algorithm:
1. Guarantees per-LE coverage targets
2. Fills toward K-level targets
3. Enforces LZ diversity (max 1 question per LZ)
4. Optionally injects a diagram question

`selectSurvivalQuestions()` bypasses the blueprint and clusters by `errorType`.

### Exam state

All mutable state lives in `src/state.js` as plain globals: `examQuestions`, `currentQ`, `userAnswers`, `answered`, `timerInterval`, `secondsLeft`, `selectedMulti`, `currentMode`, `lastBlueprint`.

### Scoring

- Single-choice: 1 point
- Multiple-choice / K-type: 2 points
- Pass threshold: 70% of total points

---

## Syllabus basis

IREB CPRE Foundation Level Syllabus Version 3.2.0 (26 February 2024). LE1–LE9 and LZ X-Y taxonomy defined in `src/data/constants.js`.
