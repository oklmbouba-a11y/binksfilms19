# Journal des décisions — BINKSFILMS

Append-only. Nouvelle entrée **en haut**. Une décision annulée n'est pas
réécrite : elle est marquée `SUPERSEDED` avec un renvoi vers l'entrée qui la
remplace.

Format : ID · date · décision · raison · conséquence · statut.

---

## D-006 — Passerelle de handoff par GitHub
**Date :** 2026-09-18 · **Statut :** ACTIVE

Les échanges Claude Code ↔ ChatGPT passent exclusivement par le dépôt
`oklmbouba-a11y/binksfilms19`, via `.claude/handoff/`. Aucune connexion directe
entre assistants.

**Raison :** un dépôt Git est un état vérifiable et horodaté ; un canal direct
ne laisserait aucune trace auditable.

**Conséquence :** toute mission importante se termine par la mise à jour des
quatre fichiers de handoff, un commit et un push.

---

## D-005 — `binksfilms-dna` non créé à ce stade
**Date :** 2026-09-18 · **Statut :** ACTIVE

Le skill d'identité n'est pas écrit tant que le CORE n'est pas stable et
versionné.

**Raison :** l'ordre d'implémentation du blueprint (§13) place l'identité en
Phase 2, après l'operating core. Écrire la DA sur un socle non versionné aurait
rendu tout retour en arrière impossible.

**Conséquence :** le système sait aujourd'hui *vérifier* la DA BINKSFILMS via
`quality-contract`, mais n'a aucun skill pour la *produire*. C'est la lacune
principale, et l'objet de la Phase 2.

---

## D-004 — Anomalies média documentées, non corrigées
**Date :** 2026-09-18 · **Statut :** ACTIVE

Les 5 médias manquants et le chemin `videos/previews/` erroné sont signalés
dans `latest-report.md` et `blockers.md`, sans aucune modification de `films.js`
ni suppression de fichier.

**Raison :** deux motifs. D'abord, l'en-tête de `films.js` interdit l'édition
manuelle — le fichier est généré par `admin.html`, et une retouche à la main
serait écrasée au prochain export. Ensuite, le site gère déjà ces absences par
sa chaîne de secours : rien n'est cassé, donc rien n'est urgent.

**Conséquence :** la correction passera par `admin.html` (ré-import des visuels,
ré-export de `films.js`), pas par une édition de code.

---

## D-003 — Nettoyage de `.claude/launch.json`
**Date :** 2026-09-18 · **Statut :** ACTIVE

Configuration `da-intro` supprimée ; configuration `site` (port 4173) conservée
telle quelle.

**Raison :** `da-intro` pointait vers le scratchpad d'une session disparue,
sous un chemin projet différent. Dossier vérifié inexistant avant suppression.

**Conséquence :** `launch.json` ne contient plus qu'une entrée, valide et
testée. Le port 4173 est actuellement partagé avec une autre session Claude.

---

## D-002 — `.gitignore` minimal, médias versionnés
**Date :** 2026-09-18 · **Statut :** ACTIVE

Ignorés : `.DS_Store`, `Thumbs.db`, `desktop.ini`, `.vercel/`, `*.log`.
`images/` et `videos/` sont **suivis par Git**.

**Raison :** le déploiement Vercel se fait depuis le dépôt ; exclure les médias
casserait le site en production. Le volume total reste modeste (~25 Mo).

**Conséquence :** à surveiller si la bibliothèque vidéo grossit — Git LFS ou un
CDN externe deviendront le bon choix bien avant d'atteindre la limite GitHub.

---

## D-001 — Initialisation de Git et checkpoint
**Date :** 2026-09-18 · **Statut :** ACTIVE

Dépôt Git créé à la racine du projet, branche `main`, état initial figé en
commit `2471d91`, taggé `core-phase1`.

**Raison :** le protocole d'expérimentation (`.claude/rules/experimentation.md`)
exige un checkpoint connu-bon avant tout travail RADICAL. Sans contrôle de
version, aucun retour arrière n'était possible.

**Conséquence :** `git reset --hard core-phase1` ramène à l'état d'avant toute
expérimentation. `core.autocrlf` étant actif sous Windows, Git normalise les
fins de ligne dans l'index seulement — les fichiers du disque sont intacts.
