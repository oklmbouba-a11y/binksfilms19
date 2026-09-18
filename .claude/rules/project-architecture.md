# Project Architecture Rules

## Existing shape
This project is intentionally lightweight: static HTML/CSS/JavaScript with no assumed build system.

Primary files:
- `index.html`: public experience, styling and most interaction logic.
- `films.js`: film/project data consumed by the public site.
- `admin.html`: local content-management/export workflow.
- `vercel.json`: deployment/caching configuration.
- `images/`, `videos/`: media assets.

## Architecture policy
- Never migrate frameworks as a side effect of a design task.
- Prefer surgical local changes for surgical tasks.
- Refactor when the current structure is measurably blocking maintainability, testing, performance, or the requested experience.
- If modularization becomes useful, introduce it incrementally and preserve a working checkpoint.
- Keep content/data concerns separate from decorative experimentation where practical.
- Treat `admin.html` as a workflow tool, not merely another page; changes must preserve export/data behavior.

## Regression mindset
Before a significant change, identify:
- affected routes/states;
- media behavior;
- desktop + mobile behavior;
- keyboard/touch implications;
- fallbacks;
- loading/network implications.

A replacement can change implementation but must consciously preserve or improve the underlying product intention.
