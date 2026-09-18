# Prochaine étape — BINKSFILMS

**Mise à jour :** 2026-09-18 · **Proposé par :** Claude Code
ChatGPT peut amender ce fichier ; Claude Code lit sa version la plus récente au
début de chaque mission.

---

## Immédiat

Rien. Le CORE est clos, versionné et poussé. B-001 et B-002 sont résolus.
La mission suivante peut démarrer directement.

---

## Mission suivante proposée — Phase 2 : Identité

**Objectif :** donner au système un skill capable de *produire* la direction
artistique BINKSFILMS, pas seulement de la vérifier.

C'est aujourd'hui la vraie lacune. `quality-contract` sait poser les bonnes
questions — « le site tiendrait-il sans le logo ? » — mais aucun skill ne porte
la réponse. L'ADN ne vit que dans `CLAUDE.md`, le blueprint et le prompt de
l'`art-director`.

**Ordre du blueprint (§13, Phase 2) :**

1. `binksfilms-dna` — le socle d'identité.
   Doit encoder la tension **STREET × CINEMA × DIGITAL SYSTEM × ARCHIVE ×
   CONTROLLED ACCIDENT × DARK LUXURY** en matière exploitable : vocabulaire
   typographique, logique chromatique, traitement de l'image, rapport au grain
   et à l'accident, rythme éditorial, et surtout **ce qui est interdit** —
   la liste des réflexes génériques à refuser.
2. `experience-direction` — traduire cette DA en décisions d'expérience.
3. Affinage d'`innovation-critic` pour qu'il juge contre `binksfilms-dna`
   plutôt que contre une intuition.

**Matière première disponible pour écrire le skill :** le site lui-même est
déjà fortement caractérisé — palette `#0A0A0A` / `#EDEBE6`, Archivo variable +
Instrument Serif + Newsreader, le dispositif « Contre-champ » (maintenir pour
voir derrière la caméra), l'intro à état mémorisé, la grille de films en
parallaxe. Le skill doit **extraire** cette DA existante avant d'en inventer une.

**Périmètre à ne pas franchir :** écrire le skill, pas redessiner le site.
Aucune modification d'`index.html` dans cette mission.

---

## En attente, non prioritaire

- **B-003 + B-004 + B-006** — passe de correction contenu via `admin.html` :
  visuels manquants du film `fulltrap-…`, chemin `videos/previews/`,
  resynchronisation de `GUIDE-DEPLOIEMENT.md`. Une seule session suffit.
  Ne demande aucun travail créatif.
- **B-005** — arbitrage sur les 4 assets orphelins, une fois B-003 tranché.

---

## Hors périmètre tant que la Phase 2 n'est pas finie

- Phases 3 à 5 du blueprint (`motion-language`, `interaction-language`,
  `cinematic-media-system`, `creative-rendering-lab`, automatisation).
- Toute migration de framework — interdite par `.claude/rules/dependencies.md`.
- Toute installation de skill, plugin ou MCP tiers sans passer par
  `capability-scout` et sans décision inscrite dans
  `.claude/capability-registry/`.
- Toute modification de la DA du site avant que `binksfilms-dna` existe :
  ce serait décider de l'identité au hasard d'une tâche isolée.
