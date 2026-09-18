---
name: binks-experience-loop
description: Orchestrates substantial BINKSFILMS frontend work through baseline, concept, implementation, visual QA, performance review, critique and correction. Use for meaningful visual or interactive changes; skip the full loop for trivial edits.
---

# BINKSFILMS Experience Loop

First classify the task:
- `SURGICAL`
- `EXPERIMENTAL`
- `RADICAL / BINKSFILMS LAB`

Then use the minimum necessary chain.

## 1. BASELINE
For non-trivial work, inspect the current implementation and behavior before changing it. Record affected files, states, desktop/mobile behavior, media lifecycle, fallbacks and regression risks.

## 2. VISION
For creative work, establish the BINKSFILMS-specific concept before choosing technology. State why the direction belongs to the brand and what should remain quiet.

## 3. DESIGN
Define hierarchy, spatial/editorial logic, motion role, interaction model and mobile expression.

## 4. CODE
Use `frontend-integrator` for normal integration and `creative-coder` when advanced motion/rendering is justified. Choose the lowest complexity layer that convincingly delivers the idea.

## 5. VISUAL QA
Independently inspect relevant routes, states and viewports. Classify findings as BLOCKER / MAJOR / MINOR / POLISH.

## 6. PERFORMANCE
Run when risk exists: WebGL, Canvas, complex scroll/motion, multiple videos, large media or reported jank. Optimize measured bottlenecks rather than arbitrary scores.

## 7. CRITIQUE
For major creative work use `innovation-critic`. Ask whether the result is specifically BINKSFILMS or merely a familiar creative-web trope.

## 8. CORRECTION
Return failures to their owner:
- weak concept → `art-director`;
- layout/experience weakness → design/integrator;
- implementation bug/regression → `frontend-integrator`;
- advanced rendering/perf issue → `creative-coder`;
- capability gap → `capability-scout`.

## Capability gaps
Do not browse/install new skills just because a task is difficult. Invoke `capability-scout` only when current knowledge/tools are genuinely insufficient or version uncertainty is material.

## Stop condition
Do not call a significant task done until the relevant `quality-contract` gates pass.
