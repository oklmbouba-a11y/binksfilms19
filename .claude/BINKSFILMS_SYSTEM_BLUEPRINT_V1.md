# BINKSFILMS — CLAUDE SYSTEM BLUEPRINT V1

**Status:** Architecture approved for implementation planning  
**Scope:** Claude Code operating system for the existing BinksFilms website  
**Principle:** Improve and transform the existing project; do not rebuild by default.  
**Current project baseline:** static HTML/CSS/JavaScript, `index.html`, `films.js`, `admin.html`, Vercel.

---

# 0. NORTH STAR

The system must help Claude create web experiences that feel specifically **BINKSFILMS**, not merely “premium”, “creative”, “Awwwards”, “cinematic”, or “brutalist”.

BINKSFILMS core tension:

> **STREET × CINEMA × DIGITAL SYSTEM × ARCHIVE × CONTROLLED ACCIDENT × DARK LUXURY**

The operating objective is not maximum visual complexity.

The objective is:

> **Make deliberate experiences that could plausibly exist only for BINKSFILMS.**

Every significant idea should answer at least one of these:
- Why does this interaction belong to BinksFilms?
- Why is this medium appropriate here?
- What does it add to the image, rhythm, story or identity?
- Would the experience still feel BinksFilms without the logo?
- Is the technology serving the concept, or showing itself off?

---

# 1. CURRENT PROJECT BASELINE

## Current architecture
- No React / Next.js framework.
- No build step.
- Main experience in `index.html`.
- Content/data in `films.js`.
- Local content/admin workflow in `admin.html`.
- Hash-based routing.
- Native JavaScript animation and interaction.
- HTML5 video + YouTube integration.
- Vercel deployment.
- Existing `.claude/launch.json`.
- No project `CLAUDE.md` yet.
- No custom skills.
- No custom subagents.
- No automated browser test suite.

## Existing behaviors that count as contracts

The current code already contains useful product decisions:
- `prefers-reduced-motion` support.
- Network-aware behavior using `Save-Data` / slow connection detection.
- Deferred video previews.
- Lazy-loaded imagery.
- `IntersectionObserver` usage.
- `requestAnimationFrame` scroll work.
- session-based intro memory.
- `inert` handling during intro.
- YouTube/image fallback behavior.
- Offline/local-file fallbacks.
- YouTube iframe creation only when needed.
- Media lifecycle management such as pausing content when appropriate.
- Long-lived Vercel caching for media assets.
- Admin validation and project export behavior.

**Rule:** these are not sacred implementations, but they are sacred *intentions*.  
A replacement must preserve the intention or provide a demonstrably better solution.

---

# 2. OPERATING MODES

Every task must be classified before implementation.

## MODE A — SURGICAL

Use for:
- text correction;
- URL replacement;
- spacing adjustment;
- small bug;
- one local interaction;
- asset replacement.

Behavior:
- minimal blast radius;
- no architecture redesign;
- no new dependency unless strictly required;
- no full creative loop unless visuals meaningfully change.

Typical agents:
`Frontend Integrator` → optional `Visual QA Director`.

---

## MODE B — EXPERIMENTAL

Use for:
- new transition;
- new film-card behavior;
- redesign of one section;
- new motion language;
- cinematic media interaction;
- Canvas/WebGL experiment;
- unusual mobile interaction.

Behavior:
- baseline first;
- concept before implementation;
- prototype may be isolated;
- visual QA mandatory;
- performance check when animation/media/rendering is non-trivial;
- innovation critique mandatory for major creative work.

Typical loop:
`Baseline Auditor → Art Director → Frontend Integrator / Creative Coder → Visual QA → Performance Guardian → Innovation Critic`.

---

## MODE C — RADICAL / BINKSFILMS LAB

Use when the user explicitly wants to push an experience hard.

Allowed:
- restructure a major section;
- replace interaction architecture;
- modularize legacy code;
- introduce GSAP / Canvas / Three.js / shaders;
- create experimental parallel prototypes;
- change visual hierarchy;
- remove existing patterns if the new direction is materially stronger.

Still forbidden:
- framework migration by reflex;
- uncontrolled dependency growth;
- replacing functioning behavior without comparison;
- visual spectacle without conceptual justification.

Principle:

> **High freedom, high verification.**

Radical work must prove what it gains and identify what it removes.

---

# 3. THE 8 CORE SKILLS

Skills contain reusable expertise and decision frameworks.  
They are not job titles. Agents combine them.

---

## SKILL 01 — `binksfilms-dna`

### Mission
Define the stable artistic identity and non-negotiable conceptual language of BinksFilms.

### Trigger
Any task that materially changes:
- visual identity;
- layout language;
- interaction personality;
- motion;
- media presentation;
- immersive experience;
- tone of the website.

### Do NOT trigger for
- typo fixes;
- broken URL;
- small data edits;
- purely technical maintenance with no visible result.

### Inputs
- current experience;
- requested objective;
- BinksFilms brand history;
- visual references when supplied.

### Outputs
- relevant BinksFilms principles;
- tensions to preserve;
- anti-pattern warnings;
- concept-fit criteria.

### Must define
- street / cinema relationship;
- digital-spiritual system language;
- archive / MiniDV / VHS / SD-card references;
- black as material, not default background;
- controlled imperfection;
- dark luxury;
- image priority;
- hidden details;
- restrained use of retro vocabulary;
- relationship between stillness and movement.

### Anti-DNA
Explicitly reject default creative-web clichés when unjustified:
- generic bento grid;
- random blobs;
- gratuitous liquid shader;
- generic oversized serif portfolio;
- glassmorphism;
- rounded SaaS cards;
- permanent glitch;
- universal smooth-scroll gimmicks;
- decorative CRT filters over everything;
- cursor effects with no meaning;
- Awwwards imitation without BinksFilms rationale.

### Forbidden
- implementation details tied to one library version;
- hardcoded trendy technology recommendations.

### Handoff
To `Experience Direction`, `Motion Language`, `Interaction Language`, `Creative Rendering Lab`, or `Cinematic Media System`.

### Done when
The next agent can explain *why* a proposed direction belongs specifically to BinksFilms.

---

## SKILL 02 — `experience-direction`

### Mission
Turn artistic intent into spatial, editorial and experiential structure.

### Trigger
New section, major redesign, layout re-composition, page rhythm, navigation logic, information hierarchy.

### Inputs
- BinksFilms DNA;
- current baseline;
- content hierarchy;
- viewport constraints;
- project objective.

### Outputs
A concise experience brief:
- primary visual idea;
- emotional target;
- hierarchy;
- composition logic;
- rhythm;
- deliberate moments of density/emptiness;
- mobile expression;
- one memorable mechanic;
- what must remain quiet.

### Rules
- concept before decoration;
- one strong organizing principle beats five visual tricks;
- mobile is designed simultaneously, never as a later adaptation;
- typography serves image and rhythm;
- every unusual composition must remain navigable.

### Forbidden
- implementation code;
- framework selection;
- stacking effects to compensate for weak concept.

### Handoff
To `Frontend Integrator` and/or `Creative Coder`.

---

## SKILL 03 — `motion-language`

### Mission
Define how BinksFilms behaves through time.

### Trigger
Transitions, scroll choreography, reveals, hover/touch response, cinematic sequencing, loaders, film transitions.

### Outputs
- temporal intention;
- motion hierarchy;
- entrance/exit rules;
- cadence;
- easing character;
- interruption behavior;
- reduced-motion counterpart;
- mobile equivalent.

### BinksFilms motion vocabulary
Possible ingredients, never defaults:
- cuts;
- holds;
- latency;
- frame skips;
- magnetic drift;
- mechanical snapping;
- analog instability;
- short bursts;
- sudden silence/stillness;
- imperfect synchronization;
- directional transitions linked to content.

### Key rule
> Not everything moves.

### External technical reference
Official GSAP skills may be used for implementation technique when GSAP is relevant.

### Forbidden
- “animate all elements on scroll”;
- same easing and reveal everywhere;
- perpetual effects consuming attention.

### Handoff
`Frontend Integrator` / `Creative Coder`.

---

## SKILL 04 — `creative-rendering-lab`

### Mission
Choose and design advanced rendering only when it materially improves the concept.

### Trigger
Canvas, Three.js, WebGL, GLSL, post-processing, image displacement, particle fields, feedback, procedural visuals.

### Complexity ladder
Use the lowest layer capable of expressing the idea:

`DOM → CSS → SVG → Video → Canvas 2D → WebGL → Custom Shader`

This is not a quality ranking. It is a complexity/risk ladder.

### Required reasoning
Before WebGL:
1. What cannot be achieved convincingly with lower complexity?
2. What is the mobile strategy?
3. What is the fallback?
4. What GPU/memory cost is expected?
5. How will resources be disposed?
6. What happens under reduced motion / data constraints?

### Documentation rule
Never rely on frozen technical assumptions in the skill.  
Inspect installed library versions and fetch current documentation.

### Forbidden
- Three.js because “creative sites use Three.js”;
- shader as decoration only;
- no-fallback GPU experiences for essential navigation.

### Handoff
`Creative Coder → Performance Guardian`.

---

## SKILL 05 — `cinematic-media-system`

### Mission
Treat image and video as interface material rather than passive background decoration.

### Trigger
Film previews, hero loops, scrubbing, posters, project transitions, image/video compositing, media loading strategy.

### Concerns
- autoplay policy;
- muted/playsinline behavior;
- poster strategy;
- adaptive loading;
- preview lifecycle;
- decoding;
- network constraints;
- mobile crop;
- source quality;
- fallback;
- scrub strategy;
- still-frame fallback;
- memory and concurrent playback;
- relation between typography and footage.

### Creative opportunities
- held frames;
- film-strip logic;
- clip-to-interface transformations;
- scan/read behavior;
- archive browsing;
- SD-card / recording-system metaphors;
- media-led transitions.

### Forbidden
- loading multiple heavy videos “just in case”;
- 4K playback where visual benefit is negligible;
- cinematic media choices that destroy mobile responsiveness.

### Handoff
`Frontend Integrator`, `Creative Coder`, then `Performance Guardian`.

---

## SKILL 06 — `interaction-language`

### Mission
Create distinctive, usable interaction behaviors.

### Trigger
Hover, tap, swipe, drag, hold, keyboard, cursor, scroll mechanics, state transitions.

### Required rule
Every desktop-only interaction must answer:
> What is the touch/mobile equivalent?

### Principles
- interactions may be hidden or discovered gradually;
- important actions cannot depend on discovery;
- tactile behavior should feel intentional;
- unusual input should provide feedback;
- no interaction should exist only because it is technically possible.

### Forbidden
- hover-only essential controls;
- blocking scroll unnecessarily;
- inaccessible custom controls with no semantic equivalent.

### Handoff
`Frontend Integrator`, `Visual QA Director`.

---

## SKILL 07 — `quality-contract`

### Mission
Define what “finished” means.

### Quality dimensions

#### Visual
- hierarchy;
- composition;
- typography;
- image treatment;
- state consistency;
- no accidental overflow;
- no broken crops.

#### Mobile
- no “desktop squeezed smaller”;
- touch-safe behavior;
- viewport sanity;
- media load strategy;
- interaction equivalence.

#### Interaction
- pointer;
- touch;
- keyboard where relevant;
- state reset;
- interruption;
- navigation integrity.

#### Media
- no unnecessary concurrent playback;
- fallbacks;
- loading strategy;
- correct poster behavior.

#### Performance
- no obvious main-thread stalls;
- no runaway rAF loops;
- no undisposed GPU resources;
- sensible asset loading;
- acceptable network behavior.

#### Accessibility
- reduced motion;
- semantic controls;
- focus visibility;
- keyboard escape/exit when necessary;
- reasonable contrast/readability;
- non-essential visual effects do not block usage.

#### Regression
- existing working behavior identified at baseline still works, unless deliberately superseded.

#### BinksFilms DNA
- result does not look interchangeable with another creative portfolio.

### Done when
Relevant gates pass, not when code merely compiles.

---

## SKILL 08 — `binks-experience-loop`

### Mission
Orchestrate the workflow and select the minimum necessary specialist chain.

### Core loop

`BASELINE → VISION → DESIGN → CODE → VISUAL QA → PERFORMANCE → CRITIQUE → CORRECTION`

### Routing rule
Do not invoke the entire loop for trivial changes.

### Mandatory full loop when
- major visual redesign;
- WebGL/Canvas;
- complex media behavior;
- navigation redesign;
- new experimental interaction;
- radical section reconstruction.

### Correction loop
Failures return to the most relevant stage:
- wrong concept → Art Director;
- weak layout → Experience Direction;
- implementation bug → Frontend Integrator;
- GPU issue → Creative Coder;
- regression → responsible implementer;
- generic result → Innovation Critic → Art Director.

---

# 4. THE 8 SUBAGENTS

Agents are roles.  
They can preload appropriate skills and use tools.

---

## AGENT 01 — `baseline-auditor`

### Mission
Understand the current state before significant work.

### Trigger
Experimental or Radical mode; unfamiliar section; regression investigation.

### Reads
- project files;
- current route/section;
- related data;
- existing interactions;
- visible browser behavior.

### Produces
A short baseline record:
- files involved;
- current behavior;
- responsive behavior;
- media lifecycle;
- accessibility behavior;
- known fallbacks;
- performance-sensitive areas;
- regression checklist.

### Tools
Read/search filesystem, browser inspection, Playwright when configured.

### Forbidden
No implementation.

### Handoff
`Art Director` or directly `Frontend Integrator` for non-creative technical tasks.

---

## AGENT 02 — `art-director`

### Mission
Create the strongest BinksFilms-specific concept before code.

### Preloaded skills
- `binksfilms-dna`
- `experience-direction`

### Produces
1–3 concepts maximum, not 20 ideas.

For chosen direction:
- concept sentence;
- why it belongs to BinksFilms;
- visual mechanics;
- motion role;
- mobile interpretation;
- what NOT to do.

### Forbidden
- code;
- choosing technology before concept.

### Handoff
`Frontend Integrator` / `Creative Coder`.

---

## AGENT 03 — `frontend-integrator`

### Mission
Integrate improvements into the existing website cleanly.

### Preloaded skills
As needed:
- `experience-direction`
- `interaction-language`
- `cinematic-media-system`
- `quality-contract`
- Anthropic `frontend-design` when available.

### Prime directive
> **Integrate before rebuilding.**

### Refactor policy
Refactor only if one of these is true:
- repeated code blocks block future work;
- current architecture prevents the requested interaction;
- maintainability risk is measurable;
- testing becomes impossible without separation.

### Dependency policy
Every new dependency must answer:
- what capability it provides;
- why native code is insufficient;
- approximate long-term cost;
- whether it can be loaded selectively.

### Forbidden
- spontaneous framework migration;
- installing a design system that overwrites BinksFilms;
- “clean architecture” rewrites unrelated to the mission.

### Handoff
`Visual QA Director`.

---

## AGENT 04 — `creative-coder`

### Mission
Build technically ambitious prototypes and advanced rendering.

### Preloaded skills
- `motion-language`
- `creative-rendering-lab`
- `cinematic-media-system`
- official GSAP skills when relevant.

### Allowed
- GSAP;
- Canvas;
- WebGL;
- Three.js;
- GLSL;
- workers;
- experimental browser APIs when support/fallback is addressed.

### Prototype policy
For risky Radical work:
- isolate prototype;
- compare to baseline;
- integrate only after review.

### Forbidden
- introducing heavy rendering into essential navigation without fallback;
- technical flex with no creative rationale.

### Handoff
`Visual QA Director` + `Performance Guardian`.

---

## AGENT 05 — `visual-qa-director`

### Mission
Judge the result independently from the implementer.

### Preloaded skills
- `binksfilms-dna`
- `quality-contract`

### Tests
- target desktop viewports;
- target mobile viewports;
- routes/states;
- hover/touch equivalents;
- overlays/modals;
- transitions;
- long content;
- unusual aspect ratios where relevant.

### Uses
Playwright/browser screenshots when configured.

### Output format
- `BLOCKER`
- `MAJOR`
- `MINOR`
- `POLISH`

Each issue includes:
- viewport/state;
- observed result;
- expected behavior;
- probable owner agent.

### Forbidden
No “looks good” approval without inspected states.

### Handoff
Relevant implementer or `Performance Guardian`.

---

## AGENT 06 — `performance-guardian`

### Mission
Measure the cost of the experience and diagnose problems.

### Trigger
- WebGL;
- Canvas;
- heavy motion;
- multiple videos;
- scroll systems;
- major redesign;
- QA reports jank/loading problems.

### Tools
Chrome DevTools MCP when configured.

### Examines
- network;
- asset sizes;
- loading order;
- console;
- long tasks;
- CPU;
- rendering;
- media;
- memory/GPU lifecycle where observable;
- Core Web Vitals when meaningful.

### Rule
Do not destroy the artistic idea to chase arbitrary scores.

Optimize the actual bottleneck.

### Handoff
`Frontend Integrator` or `Creative Coder`.

---

## AGENT 07 — `innovation-critic`

### Mission
Challenge generic creative-web thinking.

### Trigger
After significant creative implementation, before final approval.

### Questions
- Would this be recognizable without the BinksFilms logo?
- Is this an idea or merely an effect?
- Is this a known portfolio trope with a new texture?
- What part feels predictable?
- What can be removed?
- Is the technology visible more than the content?
- Does the interaction reinforce film / street / archive / system?
- Is the mobile experience equally authored?

### Output
No numerical score.

Returns:
- `KEEP`
- `REFINE`
- `RETHINK`

With precise reasons.

### Forbidden
- trend-chasing;
- “make it more premium” without concrete meaning;
- redesigning everything after every critique.

### Handoff
`Art Director` or implementer.

---

## AGENT 08 — `capability-scout`

### Mission
Detect missing capabilities and research the smallest reliable addition.

### Trigger
Only when an active agent identifies a genuine capability gap.

### Do NOT trigger
- because a task is hard;
- because a library looks fashionable;
- to browse skills for entertainment;
- when current capabilities are sufficient.

### Research priority
1. Anthropic official docs / official skills / official plugin ecosystem.
2. Official maintainer of the relevant technology.
3. Established open-source project.
4. Community skills, audited carefully.

### Protocol

`DISCOVER → AUDIT → DECIDE`

### Audit fields
- source;
- maintainer;
- update recency;
- license;
- supported versions;
- permissions/tools;
- dependencies;
- overlap with existing skills;
- new useful knowledge;
- outdated assumptions;
- framework bias;
- security/maintenance risk.

### Decisions

#### USE
Reliable, maintained, minimal overlap.

#### ADAPT
Useful methods but needs stripping/reframing.

#### BUILD
No suitable skill exists; build a BinksFilms-specific capability using official skill-authoring guidance.

#### REJECT
Low quality, stale, redundant, generic, unsafe or design-opinionated in the wrong way.

### Persistence
Record decisions in:
- `approved.md`
- `adapted.md`
- `rejected.md`
- `watchlist.md`

### Core rule
> Claude may research skills. Claude may not silently import unreviewed skills into the project.

---

# 5. TOOL POLICY

## Approved strategic tools

### Anthropic frontend-design skill
Use as general design intelligence, always filtered through `binksfilms-dna`.

### Official GSAP skills
Use for GSAP implementation knowledge, not BinksFilms art direction.

### Playwright MCP
Primary browser interaction / state testing tool.

### Chrome DevTools MCP
Primary performance/debugging measurement tool.

### Context7
Current library/API documentation.  
Prefer when using fast-changing APIs or new dependencies.

## Three.js policy
Do not preload a frozen community Three.js skill globally.

If Three.js is introduced:
- inspect installed version;
- fetch current docs;
- add only BinksFilms-specific rendering guidance to our own skill;
- use Capability Scout if a specialist method is missing.

---

# 6. AUTOMATION / HOOK POLICY

Hooks are deterministic guards, not creative thinkers.

## PRE-CHANGE protections
Warn or block when appropriate:
- framework migration;
- mass deletion;
- unexpected modification of deployment configuration;
- installation of heavy dependency without documented reason;
- destructive asset cleanup;
- touching generated/exported data through the wrong workflow.

## POST-CHANGE checks
Depending on touched files:
- JS syntax;
- broken local asset references;
- duplicate/invalid film data;
- missing required fields;
- dead routes;
- console errors;
- basic HTML validity where practical.

## STOP gate
If a significant visual task is being marked complete, confirm:
- relevant Visual QA ran;
- mobile was inspected;
- performance check ran if required;
- unresolved blockers are listed;
- Innovation Critic ran for major creative work.

Do not trigger heavyweight checks for trivial edits.

---

# 7. CAPABILITY REGISTRY

Proposed structure:

```text
.claude/
├── agents/
├── skills/
├── rules/
├── hooks/
├── capability-registry/
│   ├── approved.md
│   ├── adapted.md
│   ├── rejected.md
│   └── watchlist.md
├── research/
│   └── skill-reviews/
└── baselines/
```

Purpose:
- prevent repeated research;
- record why a dependency/skill was accepted;
- preserve institutional knowledge;
- detect stale technical knowledge.

---

# 8. PROPOSED PROJECT STRUCTURE

```text
BINKSFILMS/
├── CLAUDE.md
├── index.html
├── films.js
├── admin.html
├── vercel.json
├── images/
├── videos/
└── .claude/
    ├── agents/
    │   ├── baseline-auditor.md
    │   ├── art-director.md
    │   ├── frontend-integrator.md
    │   ├── creative-coder.md
    │   ├── visual-qa-director.md
    │   ├── performance-guardian.md
    │   ├── innovation-critic.md
    │   └── capability-scout.md
    │
    ├── skills/
    │   ├── binksfilms-dna/
    │   ├── experience-direction/
    │   ├── motion-language/
    │   ├── creative-rendering-lab/
    │   ├── cinematic-media-system/
    │   ├── interaction-language/
    │   ├── quality-contract/
    │   └── binks-experience-loop/
    │
    ├── rules/
    │   ├── project-architecture.md
    │   ├── dependencies.md
    │   ├── media.md
    │   └── experimentation.md
    │
    ├── hooks/
    ├── capability-registry/
    ├── research/
    └── baselines/
```

---

# 9. ROUTING MATRIX

| User request | Mode | Minimum chain |
|---|---|---|
| Fix text/link | Surgical | Frontend Integrator |
| Fix visual bug | Surgical | Baseline Auditor → Frontend Integrator → Visual QA |
| Improve one section | Experimental | Baseline → Art Director → Integrator → Visual QA → Innovation Critic |
| New motion system | Experimental | Baseline → Art Director → Creative Coder → QA → Performance → Critic |
| WebGL experiment | Radical/Lab | Baseline → Art Director → Capability Scout if needed → Creative Coder → QA → Performance → Critic |
| Site-wide redesign | Radical/Lab | Full loop |
| Update library/API usage | Technical | Capability Scout/Context7 → Integrator → tests |
| Find a new skill | Capability | Capability Scout only, then recommendation |

---

# 10. ESCALATION RULES

## The system should escalate from Integrator to Creative Coder when:
- DOM/CSS is insufficient;
- timing requires complex orchestration;
- media and scroll must be tightly synchronized;
- Canvas/WebGL is conceptually justified.

## Escalate to Capability Scout when:
- no current skill has reliable technical knowledge;
- library version behavior is unclear;
- a new external capability is likely necessary.

## Escalate to Art Director again when:
- QA passes technically but result feels generic;
- Innovation Critic returns `RETHINK`;
- the feature has accumulated effects without a clear concept.

---

# 11. DEFINITION OF DONE

A significant experience is done only when:

1. The requested outcome works.
2. No blocker regression remains.
3. Mobile has an authored experience.
4. Existing accessibility/network intentions are preserved or consciously replaced.
5. Heavy media/rendering has a fallback.
6. Visual QA has inspected relevant states.
7. Performance has been measured when risk exists.
8. Innovation Critic does not require a rethink.
9. The result remains understandable and maintainable.
10. The experience still feels like BinksFilms rather than a technology demo.

---

# 12. INITIAL EXTERNAL CAPABILITY ALLOWLIST

Approved to evaluate/install during implementation phase:

- Anthropic official `frontend-design` skill.
- Anthropic official `skill-creator` guidance.
- Official GSAP skills when motion work begins.
- Microsoft Playwright MCP.
- Chrome DevTools MCP / plugin.
- Context7 MCP or Claude Code plugin.

Not automatically approved:
- community “ultimate frontend” packs;
- giant skill bundles;
- generic UI/UX mega-skills;
- unversioned Three.js recipe skills;
- skills that assume React/Next.js unless the task actually uses them.

---

# 13. FIRST IMPLEMENTATION ORDER

Do **not** write all eight full skills at once.

## Phase 1 — Operating core
1. `CLAUDE.md`
2. project architecture rules
3. `binks-experience-loop`
4. `quality-contract`
5. agent skeletons
6. Capability Scout registry

## Phase 2 — Identity
7. `binksfilms-dna`
8. `experience-direction`
9. `innovation-critic` refinement

## Phase 3 — Execution
10. `interaction-language`
11. `motion-language`
12. `cinematic-media-system`

## Phase 4 — Advanced rendering
13. `creative-rendering-lab`
14. Creative Coder advanced rules
15. GSAP / rendering capability integration

## Phase 5 — Automation
16. Playwright integration
17. Chrome DevTools integration
18. visual QA workflow
19. hooks
20. eval scenarios

Reason:
The orchestration and definition of quality should exist **before** highly creative skills start producing changes.

---

# 14. SYSTEM EVALS — FIRST TEST SET

The system should be tested against tasks with different complexity.

## TEST A — trivial
> “Change a footer label.”

Expected:
- no Art Director;
- no Capability Scout;
- no performance audit;
- local edit only.

## TEST B — visual improvement
> “Make the Films cards feel more BinksFilms.”

Expected:
- baseline;
- DNA;
- Art Director;
- implementation;
- mobile QA;
- Innovation Critic.

## TEST C — advanced experiment
> “Make film transitions feel like footage being recovered from a corrupted memory card.”

Expected:
- full concept phase;
- Capability Scout only if needed;
- isolated experiment possible;
- performance check;
- fallback;
- QA;
- critique.

## TEST D — capability discovery
> “We need fluid GPU feedback but the current system has no reliable knowledge.”

Expected:
- Capability Scout;
- current official docs;
- USE / ADAPT / BUILD / REJECT;
- no silent installation.

## TEST E — regression protection
> “Refactor the media cards.”

Expected:
Baseline identifies current network-aware preview behavior and fallbacks before implementation.

---

# 15. SOURCE PRINCIPLES USED FOR THIS BLUEPRINT

This blueprint follows current public guidance and tooling patterns from:
- Anthropic Agent Skills / `skill-creator`: progressive disclosure with `SKILL.md`, `references/`, `scripts/`, `assets/`.
- Anthropic `frontend-design`: intentional, subject-specific visual direction and anti-template thinking.
- Microsoft Playwright MCP: browser interaction/testing integration for Claude Code.
- Chrome DevTools MCP: browser debugging and performance inspection.
- Context7: current library/API documentation for Claude Code.
- Official GSAP skills: implementation knowledge for GSAP motion systems.

Technical implementation details must still be checked against the current versions when installed.

---

# 16. FINAL ARCHITECTURE

```text
USER REQUEST
     │
     ▼
BINKS EXPERIENCE LOOP
     │
     ├── classify: SURGICAL / EXPERIMENTAL / RADICAL
     │
     ▼
BASELINE AUDITOR ──────────────┐
     │                         │
     ▼                         │
ART DIRECTOR                   │
     │                         │
     ▼                         │
CAPABILITY KNOWN?              │
  │          │                 │
 YES         NO                │
  │          ▼                 │
  │    CAPABILITY SCOUT        │
  │      USE / ADAPT / BUILD   │
  │          │                 │
  └──────────┴───────┐         │
                     ▼         │
       FRONTEND INTEGRATOR     │
              +                │
        CREATIVE CODER         │
                     │         │
                     ▼         │
            VISUAL QA DIRECTOR │
                     │         │
                     ▼         │
          PERFORMANCE GUARDIAN │
                     │         │
                     ▼         │
           INNOVATION CRITIC   │
              │          │     │
            KEEP       REFINE/ │
              │         RETHINK│
              ▼          │     │
             DONE        └─────┘
```

---

## Governing sentence

> **BinksFilms Claude does not chase novelty. It searches for the most specific, memorable and technically defensible expression of BinksFilms, then proves that it works.**
