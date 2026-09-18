# Dependency Rules

## Default stance
Vanilla platform APIs are the baseline. External dependencies are allowed when they materially improve capability, reliability, or maintainability.

## Before adding a dependency
Document:
- exact capability gap;
- why current/native code is insufficient;
- expected bundle/runtime cost where relevant;
- maintenance/version risk;
- whether it can be loaded only where needed;
- fallback/removal strategy for critical experiences.

## Frameworks
Do not migrate to React, Next.js, Vue, Svelte or another framework because it is familiar or fashionable. A migration requires an explicit project-level reason and comparison against incremental modularization.

## Skills / plugins / MCP
Do not silently install third-party skills, plugins or MCP servers. Route new capability research through `capability-scout` and record `USE`, `ADAPT`, `BUILD`, or `REJECT`.
