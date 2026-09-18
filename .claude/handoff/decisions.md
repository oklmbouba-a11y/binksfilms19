# Journal des décisions — BINKSFILMS

Append-only. Nouvelle entrée **en haut**. Une décision annulée n'est pas
réécrite : elle est marquée `SUPERSEDED` avec un renvoi vers l'entrée qui la
remplace.

Format : ID · date · décision · raison · conséquence · statut.

---

## D-012 — L'identité a le droit de se contredire, sous conditions
**Date :** 2026-09-18 · **Statut :** ACTIVE

`binksfilms-dna` §14 définit comment BINKSFILMS peut changer : le niveau B change
librement avec une raison écrite ; un geste SIGNATURE se retire quand il est
devenu une habitude plutôt qu'une décision, et ce retrait se consigne ici ; les
tensions et les invariants ne se révisent que par décision du propriétaire,
jamais au détour d'une tâche.

**Raison :** un document d'identité capable d'accueillir des territoires neufs
mais incapable de contredire son propre passé reste de la conservation. Sans
cette clause, les quatorze autres sections figent le site de 2026 pour toujours.

**Conséquence :** le test avant tout changement d'ampleur est « est-ce que ce
changement vient du travail, ou d'ailleurs ? ». Un changement issu du travail est
légitime même s'il contredit le passé ; un changement issu d'une tendance ne
l'est pas, même s'il s'y accorde.

---

## D-011 — Trois niveaux de vérité : intention, construit, registre
**Date :** 2026-09-18 · **Statut :** ACTIVE

L'ADN distingue l'**intention** déclarée par le propriétaire, le **construit**
que le site implémente, et les **registres** simplement disponibles. Une
intention l'emporte sur une absence dans le code. Un construit impose une charge
de la preuve, mais elle est levable. Un registre ne l'emporte sur rien.

**Raison :** la V1 traitait le code existant comme l'autorité suprême sur
l'identité future — même erreur que [[D-009]] (commentaire vs comportement), d'un
cran au-dessus. BINKSFILMS est en transformation ; le site est une expression
construite de l'identité à un moment, pas toute l'identité.

**Conséquence :** aucune valeur du site — rayon, courbe, police, grille — n'est
un invariant du seul fait qu'elle existe. `extraction-report.md` est renommé
`built-expression.md` pour que son nom dise son statut.

---

## D-010 — Le vocabulaire rétro reste en registre, contre un brief reçu
**Date :** 2026-09-18 · **Statut :** ACTIVE · **Précise :** D-008

Un brief de ChatGPT (`eadf865`) demandait de classer VHS, MiniDV, carte SD et
grain parmi les principes voulus pour le futur. Je les ai maintenus en registre
conditionnel.

**Raison :** le propriétaire a tranché lui-même dans le commit suivant
(`81dd5ce`) — « matière disponible, pas obligation visuelle » — en listant le CRT
partout, le VHS partout, les scanlines, les timecodes décoratifs et le grain
systématique parmi ce qu'il ne veut surtout pas. Les deux briefs se
contredisaient ; le plus récent et le plus direct l'emporte.

**Conséquence :** ce qui est fondateur, c'est la tension `trace × système` — une
captation laisse une trace, un système contemporain la donne à consulter. Les
costumes restent conditionnels. La distinction **grain de matière** (présent dans
la source, recevable) / **grain décoratif** (posé par-dessus, refusé) en découle.

---

## D-009 — Le rapport d'extraction distingue comportement vérifié et intention commentée
**Date :** 2026-09-18 · **Statut :** ACTIVE

Chaque affirmation de `extraction-report.md` porte une marque `[vérifié]` ou
`[intention]`. Une affirmation `[intention]` ne peut pas servir seule à refuser
une proposition.

**Raison :** `index.html` est abondamment commenté, et ses commentaires sont de
la doctrine de design — c'est une source précieuse, mais ce n'est pas une preuve
de comportement. La relecture par `innovation-critic` a montré au moins un cas
où le commentaire décrit une intention que le CSS ne réalise pas (le format
d'affiche sur mobile), et plusieurs affirmations du skill s'appuyaient dessus.

**Conséquence :** l'ADN repose sur ce que le site fait, pas sur ce qu'il dit
faire. Les écarts sont consignés en `extraction-report.md` §2 bis, et deviennent
des questions ouvertes plutôt que des acquis.

---

## D-008 — Le vocabulaire rétro-numérique est un registre, pas l'identité
**Date :** 2026-09-18 · **Statut :** ACTIVE

VHS, MiniDV, carte SD, timecode, grain, glitch, interfaces rétro : encodés dans
`binksfilms-dna` comme **registres conditionnels** soumis à quatre conditions
cumulatives, et non comme socle de l'identité.

**Raison :** le site n'en contient aucune trace — vérifié, et la seule mention
du mot « grain » est un commentaire disant qu'il a été délibérément écarté. Le
blueprint demande un « restrained use of retro vocabulary » et classe le glitch
permanent et les filtres CRT en anti-DNA. La mission elle-même pose en critère
de réussite de « ne pas réduire la marque à VHS + noir + glitch ».

Ce qui est réellement invariant dans le mot « archive » est ailleurs :
`archive: true` est un statut de données. L'archive est une logique de
conservation et de hiérarchie, pas une texture.

**Conséquence :** une proposition rétro doit satisfaire les quatre conditions du
§8 du skill. À défaut, elle relève du cosplay et se refuse.

---

## D-007 — Fusion de l'historique distant plutôt que force-push
**Date :** 2026-09-18 · **Statut :** ACTIVE

L'historique distant (17 commits) est greffé sous l'historique local par
`git merge -s ours --allow-unrelated-histories`. L'arborescence retenue est
celle du local ; les doublons `deploiement/`, `previews/` et le `hero-loop.mp4`
racine sont écartés de l'arbre de travail.

**Raison :** un force-push aurait détruit 17 commits sans retour possible. La
stratégie `ours` garde l'arbre local intact **bit pour bit** — vérifié par hash
contre le tag `core-phase1` — tout en rendant les commits distants atteignables.
Choisir `-X ours` aurait été un piège : cette option fusionne les hunks non
conflictuels et aurait réinjecté du contenu périmé dans `index.html`.

**Conséquence :** le dépôt part d'une arborescence propre sans rien perdre.
Les fichiers écartés restent extractibles par leur blob — voir B-008 pour le
seul d'entre eux qui n'était pas un doublon.

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
