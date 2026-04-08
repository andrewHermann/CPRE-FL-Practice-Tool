# IREB CPRE Foundation Level — Practice Exam

A self-contained, browser-based practice exam for the **IREB Certified Professional for Requirements Engineering (CPRE) Foundation Level** certification.

No installation. No server. No account. Download, unzip, open `index.html`.

---

## How to use

1. Download the latest release zip from the [Releases](../../releases) page
2. Unzip it
3. Open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge)
4. Choose a mode and start

No internet connection required after download.

---

## What this is

377 exam-style questions organized across three practice modes:

| Mode | Questions | Time | Purpose |
|------|-----------|------|---------|
| Quick Run | 20 | 30 min | Fast revision pass |
| Full Exam | 46 | 75 min | Realistic simulation |
| Survival Mode | 28 | 32 min | Targeted failure drilling |

Questions are selected by a **blueprint algorithm** that mirrors the official exam structure: LE chapter coverage, K-level balance (K1/K2/K3), and Lernziel diversity.

Results include per-chapter coverage analysis, cognitive level breakdown, error-type classification, and a full question review with explanations.

---

## Based on

> **IREB CPRE Foundation Level Syllabus Version 3.2.0 — 26 February 2024**
>
> Questions are mapped to Lerneinheiten (LE1–LE9) and individual Lernziele (LZ X-Y) as defined in the official syllabus.

---

## Question types

- **Single-choice** — select one correct answer from four options
- **Multiple-choice** — select all correct answers (partial credit not awarded)
- **K-type (assertion-reason)** — evaluate a claim and its stated justification independently

Five questions include **inline SVG diagrams** testing context diagram reading, use case modelling, state machines, BPMN gateways, and include/extend relationships.

---

## Survival Mode

Survival Mode is deliberately unfair. It front-loads trap questions and terminology pitfalls, applies time pressure, clusters hard questions, and shows you which cognitive trap you fell into on each wrong answer. Use it after you are comfortable passing the full exam — not as an introduction.

---

## For developers

The project is split into clean source files — no build tool required.

```
index.html              entry point
src/
  style.css
  state.js              mutable exam state
  utils.js              DOM helpers, shuffle, formatTime
  data/
    terms.js            KTYPE_OPTIONS, TERM_MAP_RAW, injectTerms
    questions-single.js single-choice question pool
    questions-multi.js  multiple-choice question pool
    questions-ktype.js  K-type question pool
    constants.js        MODES, LE_TITLES, LZ_TITLES
    glossary.js         English glossary
  engine/
    enrich.js           question enrichment, inferLE/K/LZ, allQuestions
    blueprint.js        selectQuestions — blueprint-constrained selection
    survival.js         selectSurvivalQuestions
    logic.js            isCorrectAnswer, getTrapLabel, inferErrorType
  ui/
    render.js           renderQuestion, answer handlers
    exam.js             startExam, timer, nextQuestion
    results.js          finishExam, coverage report, error buckets, review
    glossary.js         filterGlossary, renderGlossary
    modal.js            mode start modal
    demo.js             showDemo, printResults
```

To build a release zip:

```bash
./build.sh
# output: dist/cpre-fl-practice-tool.zip
```

---

## Legal notice

This tool is an **independent study aid** created by Andrew Hermann. It is not affiliated with, endorsed by, or produced in cooperation with IREB e.V. or any official certification body.

"IREB" and "CPRE" are registered trademarks of IREB e.V. Use of these terms here is purely descriptive.

Questions are original and written by the author based on the published syllabus. No official exam questions have been reproduced.

---

## License

MIT License — see [LICENSE](LICENSE).

---

## Author

Andrew Hermann · Bern, Switzerland
