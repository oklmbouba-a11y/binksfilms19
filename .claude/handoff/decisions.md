# Journal des décisions — BINKSFILMS

Append-only. Nouvelle entrée **en haut**. Une décision annulée n'est pas
réécrite : elle est marquée `SUPERSEDED` avec un renvoi vers l'entrée qui la
remplace.

Format : ID · date · décision · raison · conséquence · statut.

---

## D-018 — La signature est retirée : l'exécution ne tenait pas
**Date :** 2026-09-18 · **Statut :** ACTIVE · **Remplace :** D-017

L'implémentation de la direction C est retirée du site. `index.html` revient à
son état d'avant, le format d'affiche 3/4 conservé.

**Raison, deux défauts et un seul aveu de méthode.**

*Le propriétaire ne l'a pas vue.* C'était le risque annoncé au brief — une idée
fondée sur la répétition doit être assez présente pour se remarquer et assez
discrète pour ne pas insister. À 10 px en gris, elle était du mauvais côté. Une
direction dont l'observable de réussite est « avoir compris au troisième film »
échoue si on ne la voit pas au premier.

*Elle entrait en collision avec le contenu.* Balayage de 21 positions de
défilement : **9 en collision** — navigation précédent/suivant, bloc de marque du
pied de page, flèches des réseaux, ligne de copyright. Un élément fixe passe
au-dessus de tout ce qui défile ; seule une gouttière permanente l'éviterait, et
le site n'en a pas.

**L'aveu :** mes deux tests de collision initiaux portaient sur deux positions,
toutes deux propres par hasard. Deux points de mesure ne valident pas un
comportement continu. C'est l'erreur de méthode que ce projet reproche aux
autres depuis le début, commise sur mon propre travail.

**Ce qui n'est pas remis en cause :** l'observation qui fonde la direction — dix
films, une seule ligne de crédit commune, et c'est le fait le plus vrai du
catalogue. L'idée reste bonne. C'est son exécution en filigrane fixe qui était
fausse.

**Piste retenue pour une reprise :** faire porter l'idée par la **coupe** plutôt
que par un filigrane. Le site possède déjà `#cut`, son voile de coupe noir. Une
navigation de film à film qui passe par ce cut, où tout s'éteint et revient
changé **sauf cette ligne**, produit un moment ressenti au lieu d'une inscription
qu'on ne remarque pas. C'est du langage de montage, et ça ne dépend d'aucun
élément fixe.

---

## D-017 — La signature : la répétition des crédits devient le sujet
**Date :** 2026-09-18 · **Statut :** SUPERSEDED par D-018 le même jour

Sur la fiche film, le crédit que tous les films portent à l'identique —
« Réalisation, image & montage — BINKSFILMS » — est retiré du tableau et posé en
bas de page, hors du bloc reconstruit par le routeur. D'une fiche à l'autre, tout
change sauf elle.

**Raison :** dix films, une seule ligne de crédit commune. Ailleurs cette colonne
identique serait un défaut de remplissage à masquer ; ici c'est la démonstration
de ce que la section Réalisateur se contente d'affirmer. La direction ne demande
aucune donnée nouvelle, aucun média, et un coût de performance nul — elle
transforme la pauvreté du catalogue en argument.

**La constante est déduite, jamais écrite en dur.** Si un film arrive avec
d'autres crédits, elle n'existe plus, la signature disparaît d'elle-même et les
crédits reprennent leur place ordinaire. Une exception annule la règle
proprement au lieu de la casser.

**Conséquence, et limite assumée :** cette direction fonctionne *parce que* les
crédits sont pauvres. Si le catalogue se remplit de monteurs, de chefs
opérateurs, de producteurs, la constante s'effrite et la direction perd son
sujet — elle se retirera alors toute seule, par construction. Elle est juste
maintenant ; elle n'est pas éternelle.

---

## D-016 — L'ambition se gouverne par une porte, pas par une consigne
**Date :** 2026-09-18 · **Statut :** ACTIVE · **Met en œuvre :** D-014

`experience-direction` §3 impose que, dans tout jeu de directions, au moins une
se **déclare candidate LAB** et réponde par écrit aux questions 1 et 3 du
filtre 2 de `binksfilms-dna` §7 : comment la mécanique s'appelle-t-elle, et
qu'apprend-on du travail après l'avoir vécue. Un jeu où aucune direction ne
franchit cette porte est à refaire.

**Raison :** D-014 a établi la doctrine — les effets ambitieux sont ouverts,
anti-cliché n'est pas anti-effet. Mais une doctrine sans mécanisme se contourne :
la première version du skill demandait « au moins une direction ambitieuse », ce
qu'un agent prudent pouvait satisfaire en habillant une proposition sage. Le
test de divergence du §2, lui, pouvait être raté — l'ambition méritait le même
traitement.

**Conséquence :** la doctrine reste dans `binksfilms-dna` §8 bis, le mécanisme
appartient à `experience-direction` §3. Aucune duplication entre les deux. Le
renommage ne franchit pas la porte, puisque les deux questions portent sur la
mécanique et sur ce qu'elle révèle, jamais sur l'intensité technique.

---

## D-015 — Le format d'affiche sur mobile, et ce qu'il entraîne
**Date :** 2026-09-18 · **Statut :** ACTIVE

Les cartes de la grille passent en 3/4 sur mobile, et le plancher de luminosité
des cartes hors centre monte de 0,72 à 0,82.

**Raison :** en 16/9 pleine largeur, une carte plafonne à 211 px de haut sur un
téléphone. Le dispositif d'échelle et de luminosité qui désigne la carte centrée
n'avait donc pas la place d'exister — quatre cartes à l'écran, éclairées à 82 %
les unes des autres. Le commentaire du code annonçait le format d'affiche depuis
le début ; c'était une contrainte géométrique, pas une préférence esthétique.

Le relèvement du plancher est une conséquence, pas un choix séparé : une carte
qui occupe désormais la moitié de l'écran devenait une dalle noire à 0,72 sur un
plan sombre.

**Conséquence :** la page s'allonge de 42 % (7 875 px contre 5 355 pour dix
films), et croîtra linéairement avec le catalogue. Le format d'affiche suppose
par ailleurs des bannières **cadrées pour lui** — les 8 cartes encore en repli
YouTube sont recadrées au centre, ce qui tient mais n'est pas choisi.

**Portée :** strictement mobile. Le desktop garde son 16/9, son rayon de 11 px et
sa luminosité portée par le cadre — vérifié après coup.

---

## D-014 — Les effets ambitieux sont pleinement autorisés si leur exécution est excellente
**Date :** 2026-09-18 · **Statut :** ACTIVE

Le propriétaire précise qu'il **adore les effets** et reste ouvert à des traitements très ambitieux — motion avancée, compositing, 3D, shaders, WebGL, distorsions, transitions fortes, traitements vidéo — à condition qu'ils soient **très bien exécutés**.

**Raison :** le système ne doit pas confondre anti-cliché avec anti-effet. Le refus porte sur l'effet générique, gratuit, mal intégré, répétitif ou utilisé comme raccourci créatif — pas sur l'intensité technique ou visuelle elle-même.

**Conséquence :** une proposition forte ne doit jamais être rejetée simplement parce qu'elle est spectaculaire. Elle doit être jugée sur :
- la qualité d'exécution ;
- sa relation à l'image et au concept ;
- sa précision ;
- son intégration au rythme de la page ;
- sa distinctivité ;
- sa capacité à rester maîtrisée sur mobile et en performance.

L'ambition visuelle est encouragée quand ces conditions sont remplies. Le principe reste : **effet maximal possible, cliché minimal possible.**

---

## D-013 — Réparer les médias par le nom de fichier, pas par `films.js`
**Date :** 2026-09-18 · **Statut :** ACTIVE

Les cinq médias manquants du clip Skinny Bastard ont été rétablis en **copiant
les fichiers du disque sous les noms que `films.js` déclare déjà**, plutôt qu'en
réécrivant les chemins du fichier.

**Raison :** `films.js` est généré par `admin.html` et son en-tête interdit
l'édition manuelle — une retouche aurait été écrasée au prochain export. Le
fichier déclarait des chemins corrects ; il manquait seulement les fichiers. La
réparation la moins invasive était donc côté disque.

**Conséquence :** les noms en service sont les noms tronqués hérités (`-bann`,
`-derr`, `-tour`, `-prev`), produits par une ancienne version d'`admin.html` dont
le `slugifier` coupait à 60 caractères. La version actuelle génère `-banner`,
`-derriere`, `-tournage`, `-preview` : un futur export via `admin.html`
normalisera de lui-même, sans conflit. Même logique pour la preview de SaiSai,
déplacée vers le `videos/previews/` que `films.js` déclare.

**Choix de direction associé :** le contre-champ oppose le plan **étalonné** au
rush **brut** où le cadreur est visible — le film contre la réalité — plutôt que
deux rushes entre eux. Les cadrages diffèrent, donc le maintien produit une
coupe franche plutôt qu'un dévoilement ; le contraste de sens l'emporte sur la
douceur du raccord.

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
