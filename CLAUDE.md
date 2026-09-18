# BINKSFILMS — Claude Code Operating Rules

## Mission
You are working on the existing BINKSFILMS website, not a blank project.

Your job is to make it more distinctive, cinematic, experimental, technically strong, and recognizably BINKSFILMS without defaulting to generic creative-portfolio patterns.

Core tension: **STREET × CINEMA × DIGITAL SYSTEM × ARCHIVE × CONTROLLED ACCIDENT × DARK LUXURY**.
Signature: **Les Beaux Arts du Ghetto**.

## System status
Phase 1 operating core is installed. At this stage only `quality-contract` and `binks-experience-loop` are full project skills. The deeper creative skills (`binksfilms-dna`, `experience-direction`, `motion-language`, `creative-rendering-lab`, `cinematic-media-system`, `interaction-language`) will be added in later phases. Do not pretend a missing skill exists.

## Current architecture
- Static HTML/CSS/JavaScript.
- Main site: `index.html`.
- Film data/content: `films.js`.
- Local admin/export workflow: `admin.html`.
- Deployment: Vercel via `vercel.json`.
- Do not assume React, Next.js, a bundler, or npm scripts exist.

## Prime directives
1. **Inspect before changing.** Significant work starts from the current behavior and affected files.
2. **Integrate before rebuilding.** A framework migration or major rewrite is never an implicit cleanup step.
3. **Preserve intentions, not necessarily implementations.** Existing reduced-motion, network-aware media loading, fallbacks, lazy loading, lifecycle management, keyboard/touch behavior and intro state are product contracts unless deliberately replaced by a better verified solution.
4. **Concept before effects.** Technology must serve the BINKSFILMS idea.
5. **Mobile is authored, not adapted later.** Every important desktop interaction needs a deliberate mobile/touch expression.
6. **Use the least complex rendering layer that can convincingly express the concept:** DOM → CSS → SVG → Video → Canvas 2D → WebGL → custom shader.
7. **Do not chase scores or trends.** Measure real bottlenecks and reject generic Awwwards/SaaS habits when they do not belong.
8. **Do not silently install community skills, plugins, MCP servers, frameworks, or heavy dependencies.** Research and audit them first.

## Task modes
Classify meaningful work before implementation:
- `SURGICAL`: local correction or small isolated change.
- `EXPERIMENTAL`: new section behavior, motion, interaction, media treatment, or focused redesign.
- `RADICAL / BINKSFILMS LAB`: deep redesign, advanced rendering, architectural experimentation, or parallel prototype.

Do not run the full creative pipeline for trivial edits.

## Significant-experience loop
For substantial visual/interactive work, use the `binks-experience-loop` skill:

`BASELINE → VISION → DESIGN → CODE → VISUAL QA → PERFORMANCE → CRITIQUE → CORRECTION`

Use only the stages relevant to the task. Return failures to the stage that owns them.

## Specialist roles
Specialized subagents live in `.claude/agents/`.
Use them when the task benefits from isolated context or independent review, not for simple one-file edits.

Primary roles:
- `baseline-auditor`
- `art-director`
- `frontend-integrator`
- `creative-coder`
- `visual-qa-director`
- `performance-guardian`
- `innovation-critic`
- `capability-scout`

## External capability rule
When a real capability gap exists, use `capability-scout`.
Research priority:
1. Anthropic official documentation / official ecosystem.
2. Official maintainer of the technology.
3. Established open source.
4. Community skill only after audit.

Decision must be one of: `USE`, `ADAPT`, `BUILD`, `REJECT`.
Record durable decisions in `.claude/capability-registry/`.

## Definition of done
A significant experience is not done merely because code runs. Relevant gates must pass:
- requested behavior works;
- no blocker regression remains;
- mobile/touch behavior is authored;
- reduced-motion/network/fallback intentions remain sound;
- visual QA inspected relevant states;
- performance was measured when risk exists;
- major creative work survived an independent innovation critique;
- result remains maintainable and specifically BINKSFILMS.

## Project-specific references
Read `.claude/rules/` for detailed architecture, dependency, media and experimentation rules.
Use `.claude/skills/quality-contract/` for acceptance criteria.
Use `.claude/capability-registry/` before researching an external capability that may already have been reviewed.
