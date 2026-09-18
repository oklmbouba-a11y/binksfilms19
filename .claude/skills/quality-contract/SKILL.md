---
name: quality-contract
description: Acceptance criteria for significant BINKSFILMS visual, interaction, media, mobile, performance, accessibility and regression work. Use when reviewing or finishing non-trivial frontend changes.
---

# BINKSFILMS Quality Contract

Use only the gates relevant to the task. Do not manufacture busywork for trivial edits.

## Visual
Verify hierarchy, typography, composition, image treatment, crop, overflow, layering and state consistency. The result must not look interchangeable with a generic creative portfolio.

## Mobile
Mobile is an authored experience. Verify touch targets, viewport behavior, crop, interaction equivalents, readable hierarchy and media strategy. Never accept “desktop squeezed smaller”.

## Interaction
Verify the relevant input modes: pointer, touch, keyboard, scroll, drag/hold/swipe, escape/close and interruption. Important controls cannot depend on hidden discovery.

## Media
Verify poster/fallback behavior, loading strategy, concurrent playback, autoplay constraints, cleanup, source choice and degraded-network behavior.

## Performance
For risky work, inspect actual bottlenecks. Watch for runaway animation loops, long main-thread tasks, excessive observers/listeners, wasteful media decoding, unnecessary reflows and undisposed GPU resources.

## Accessibility
Preserve or improve reduced-motion behavior, semantic controls, keyboard access where relevant, focus visibility, readable contrast and non-blocking alternatives to decorative effects.

## Regression
Compare against baseline. Existing working behavior must remain unless the new implementation intentionally supersedes it and the replacement is verified.

## BINKSFILMS DNA
Ask:
- Would the experience still feel BINKSFILMS with the logo hidden?
- Is the technology serving film/image/rhythm/identity?
- Is there a specific reason for each unusual effect?
- Has generic Awwwards/SaaS language crept in?

## Severity vocabulary
- `BLOCKER`: broken navigation/core behavior, unusable state, major regression.
- `MAJOR`: visible or interaction problem that materially weakens the experience.
- `MINOR`: localized issue with limited impact.
- `POLISH`: refinement that does not block completion.

A significant task is complete when relevant gates pass and unresolved limitations are stated explicitly.
