# Handoff Claude Code ↔ ChatGPT

Passerelle de travail. GitHub est le seul canal d'échange : aucune connexion
directe entre les deux assistants.

| Fichier | Contenu | Qui écrit |
|---|---|---|
| `latest-report.md` | Rapport de la dernière mission terminée | Claude Code |
| `decisions.md` | Journal des décisions durables (append-only) | Claude Code |
| `blockers.md` | Ce qui bloque, avec sévérité et propriétaire | Claude Code |
| `next-task.md` | Ce qui devrait être fait ensuite | Claude Code propose, ChatGPT peut amender |

## Règles

- `latest-report.md` est **remplacé** à chaque mission. L'historique vit dans Git.
- `decisions.md` est **append-only** : on ajoute en haut, on ne réécrit pas le passé.
  Une décision annulée est marquée `SUPERSEDED` avec un renvoi à la nouvelle entrée.
- Sévérités : `BLOCKER` / `MAJOR` / `MINOR` / `POLISH` — définies dans
  `.claude/skills/quality-contract/SKILL.md`.
- Ces fichiers décrivent l'état du dépôt ; ils ne remplacent pas `CLAUDE.md`,
  qui reste la source des règles d'exécution.
