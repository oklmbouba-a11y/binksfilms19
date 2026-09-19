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

---

## D-019 — Le cube est une surcouche, jamais un prérequis

**Décidé le 19/09/2026, en appliquant l'audit `e6333ee`.**

`.bl` n'avait aucune dimension dans la feuille de style : elles étaient posées
par le script. Sans JavaScript le cube faisait 0 × 0 et la photo du réalisateur
**disparaissait**. Le repli annoncé dans le rapport précédent n'existait pas.

**Règle retenue :** l'état par défaut de la feuille de style est la photo plate,
identique à ce qu'elle était avant le cube. Le script pose `.cube` sur la figure
**seulement après** avoir calculé une géométrie valable. Toute règle 3D est
portée par `#binks figure.cube …`.

**Conséquence générale :** aucune expérience future ne doit poser en CSS un état
que seul le script rend visible. L'amélioration s'ajoute, elle ne conditionne pas.

---

## D-020 — Les faces du cube ne montrent que ce que le projet possède

Les quatre faces secondaires portaient des plans de films (6,26 Mo) : hors-sujet
pour une section Réalisateur, et sans rapport entre eux.

Le projet ne contient **qu'une seule** photo de réalisateur, `real-web.webp`.
Les six faces en sont six recadrages. Un seul fichier, une seule requête, 0 Ko
ajouté — et un objet cohérent : un sujet vu sous six cadrages, pas six images
étrangères.

**À reprendre** dès que de vraies photos de réalisateur existeront : le CSS est
déjà écrit face par face, le remplacement est unitaire.

---

## D-021 — Toute boucle d'animation est bornée

`IntersectionObserver` + `document.hidden` : la boucle du cube s'arrête
réellement hors écran et en arrière-plan d'onglet, elle ne se contente pas de
calculer sans rien afficher. Aucune mesure de position n'est refaite par image —
le biais de défilement est relevé dans un écouteur `scroll` passif et gardé.

Cela vaut pour toute animation continue ajoutée par la suite.

---

## D-022 — Les vitesses s'expriment en unités par seconde

`vy = dx * 13` exprimait des pixels par évènement : le même geste partait deux
fois plus fort sur un écran à 120 Hz. Toute vitesse est désormais dérivée d'un
écart de temps réel (`e.timeStamp`) et exprimée en degrés par seconde.

Même famille de défaut que la décroissance par image corrigée plus tôt sur les
prototypes : **rien ne doit dépendre du rythme d'affichage.**

---

## D-023 — La pierre remplace le cube, et WebGL se justifie par la réfraction

**Décidé le 19/09/2026, sur maquette du propriétaire.**

Le cube CSS 3D inclinait six images ; il ne réfractait rien. Une forme de
diamant brut suppose que l'image traverse la matière et se brise par facette —
c'est un calcul par pixel, qu'aucune couche DOM ou CSS ne sait faire.

**C'est la seule raison de monter jusqu'au shader ici.** Le critère reste
celui de `CLAUDE.md` : la couche la moins complexe qui exprime *vraiment* le
concept, pas la plus impressionnante.

Le coût est vérifié et faible : une seule photo, déjà chargée pour le repli,
donc **0 Ko de réseau supplémentaire** ; ~110 triangles ; une texture.

---

## D-024 — Un garde réseau ne s'applique pas à un coût de calcul

J'avais coupé la gemme sur `effectiveType` (2g/3g). Contresens : elle ne
télécharge rien de plus que le repli. Juger un effet purement GPU sur le débit
du réseau est une erreur de catégorie.

**Règle :** `Save-Data` est retenu — c'est une préférence exprimée par
l'utilisateur. `effectiveType` ne l'est que pour ce qui pèse réellement en
octets.

---

## D-025 — Une amélioration ne masque jamais ce qu'elle remplace avant d'être prête

`.gemme` masque la photo plate. Tant que la première image n'était pas
dessinée, la figure était **vide**. Même famille de faute que D-019 : la
surcouche ne doit pas retirer l'état de base avant de pouvoir le remplacer.

**Règle :** dessiner d'abord, basculer ensuite — dans cet ordre, toujours.

Corollaire découvert au passage : `requestAnimationFrame` ne se déclenche pas
dans un onglet masqué. Il ne peut donc pas servir à *monter* quelque chose,
seulement à l'animer.

---

## D-026 — Les marques de classification sont dessinées, pas importées

Parental Advisory et le disque −16 sont du texte mis en forme : nets à toute
taille, aucun fichier, aucune requête. Le sigle est en version inversée, celle
qui tient sur un fond noir.

---

## D-027 — Les marques sont les fichiers du propriétaire, préparés pour le noir

Les deux sigles sont désormais ceux qu'il a fournis, plus ceux que j'avais
dessinés. Aucun des deux n'était utilisable tel quel :

- `parental advisory.png` : fond transparent, **dessin noir** — invisible sur la
  page. Inversé.
- `Moins16.svg.png` : **entièrement opaque**, carré noir avec disque blanc. Le
  carré se serait vu sur le noir de la page. Le pourtour a été rendu
  transparent par remplissage depuis les bords, ce qui laisse le « −16 » gravé
  à l'intérieur du disque en noir.

Les originaux restent dans `images/`. Ce qui est servi, ce sont deux dérivées
recadrées sur leur contenu et à la taille d'affichage : 51 Ko et 15 Ko.

**Règle :** on ne redessine pas un sigle dont le propriétaire possède le
fichier. On le prépare.

---

## D-028 — Le format d'affiche sur téléphone est abandonné

Le 3/4 introduit en B-009 est retiré : retour au 16/9 sur téléphone. Le
propriétaire a tranché — le 16/9 est le format du travail, et une carte de film
doit ressembler à un plan, pas à une pochette.

L'argument géométrique qui avait motivé le 3/4 (1,83 carte par écran contre
1,73) reste vrai ; il ne suffisait pas.

---

## D-029 — La pierre quitte le flux pour pouvoir descendre

Elle passe dans une couche fixe dès qu'elle est montée, et sa place à l'écran
est **calculée** entre deux ancres : son cadre d'origine, et le bloc « Parler
d'un projet ». Elle est donc exactement sur son cadre tant qu'on lit la section
Réalisateur, puis descend jusqu'à entrer dans le contact.

Trois garde-fous :
- elle passe **derrière** le texte du contact — une pierre qui couvrirait le
  bouton coûterait un clic, pas seulement de la lisibilité ;
- elle cesse de capter le geste avant de le recouvrir ;
- elle s'efface de moitié en arrivant.

Les positions absolues sont mesurées **une fois**, puis converties en position
d'écran à chaque défilement : aucune lecture de mise en page pendant le
défilement, et le déplacement se fait par transformation seule.

Les ancres sont reprises au chargement, **quand les polices sont prêtes**, à
chaque retour de la section à l'écran, et au redimensionnement. La mesure
faite avant l'arrivée des polices était fausse de douze pixels.

---

## D-030 — L'aspiration est pilotée par la course de défilement, pas par le temps

Le brief demandait « environ 300–500 ms » pour la distorsion, **et** une
animation qui suit le défilement de façon réversible. Les deux ne peuvent pas
être vraies ensemble : une animation liée au défilement a la durée que
l'utilisateur lui donne.

La contrainte explicite l'a emporté. Tout — trajectoire, rotation, taille,
déformation, vortex du bouton — est fonction de `p`, la position dans la course
de défilement, et de rien d'autre. Remonter rembobine exactement.

**Conséquence utile :** la déformation du bouton suit une cloche `sin(p·π)`
plutôt qu'une minuterie. Elle monte, culmine quand la pierre disparaît, et
retombe à zéro. Le bouton retrouve donc un état parfaitement propre **sans
qu'aucun code de remise à zéro n'existe** — il n'y a rien qui puisse rester
coincé.

---

## D-031 — La course se mesure en défilement atteignable, pas en position d'écran

Le contact est la dernière section. Si la page s'arrête avant que le bouton
n'atteigne le milieu de l'écran, une animation définie par « le bouton est
centré » **ne se termine jamais** : la pierre reste suspendue à mi-course.

La fin de course est donc bornée au dernier pixel de défilement réellement
atteignable (`scrollHeight - innerHeight`). L'aspiration s'achève exactement au
bas de la page.

À reprendre au redimensionnement et quand la hauteur du document change.

---

## D-032 — Trois voix typographiques sur une carte de film

- **Nom d'artiste** : Archivo, grotesque compacte, capitales. Inchangé.
- **Titre du morceau** : `Noto Serif Display` à l'axe de largeur **62,5 %**,
  graisse 700, capitales. Serif de titrage très étroite et à fort contraste —
  la lettre de l'affiche et de la pochette, pas celle du livre.
- **Catégorie et année** : petites capitales espacées. Inchangé.

**La largeur vient de l'axe de la fonte, jamais d'un `transform: scaleX`.** Un
caractère étiré est un caractère abîmé : les pleins et les déliés ne se
déforment pas dans le même rapport.

`Instrument Serif` reste en recours si la fonte ne charge pas.

---

## D-033 — « Les beaux arts du ghetto » devient une signature

`Sacramento` remplace l'italique de labeur : trait fin, monolinéaire, fluide,
signature d'artiste plutôt que note de bas de page.

**Conséquence à ne pas oublier :** une écriture liée a une hauteur d'œil bien
plus basse qu'un romain. À taille égale elle paraît deux fois plus petite. Les
quatre emplacements ont donc été relevés — en-tête 11,5 → 16 px, accueil
21–46 → 30–64 px, pied 15 → 21 px — et l'interlettrage légèrement ouvert pour
que les liaisons respirent. Vérifié : elle reste plus basse que le nom à
l'accueil, et n'entre pas en collision avec la navigation en en-tête.

---

## D-034 — On ne légende pas un objet interactif, on le fait bouger

« Faire glisser pour tourner » est supprimé, sans rien à la place. À sa
première apparition la pierre pivote de onze degrés et revient, une seule fois,
et le premier geste de l'utilisateur annule la démonstration.

Une légende se lit puis s'oublie ; un objet qui bouge tout seul se touche.
C'est aussi une ligne de texte de moins dans une section qui n'en demandait
pas.

---

## D-035 — Le bouton est une surface d'eau, pas un trou noir

**Storyboard du propriétaire, quatre temps : approche, impact, immersion,
retour.** Il remplace la direction « vortex / trou noir » précédente.

Deux conséquences de forme, et ce sont elles qui séparent l'eau de l'effet de
manège :

1. **Le rectangle du bouton ne bouge plus.** Toute mise à l'échelle, tout
   gauchissement et toute rotation de la boîte sont retirés. Ce qui se déforme
   est ce qu'il y a *dedans* : la matière claire et le texte. Un bouton qui
   s'écrase n'est pas un liquide, c'est un ressort. Vérifié : 342 × 67 au
   repos, au pic et à la fin.
2. **La déformation reste locale.** Trois ondes seulement, décalées, qui
   naissent au point d'entrée, s'ouvrent et s'éteignent. Au-delà de trois on
   obtient une cible de tir, pas une surface d'eau.

Le creux reste sombre et doux — une dépression dans une matière claire, pas un
trou percé dedans. La houle du filtre passe en basse fréquence : de longues
ondulations plutôt qu'un grain.

**Ce que le web ne sait pas faire ici, et qu'il faut assumer :** le storyboard
est un rendu photographique, avec caustiques et réfraction réelle de la
surface. Un bouton du DOM ne peut pas produire de caustiques. Ce qui est livré
en tient la *lecture* — creux, anneaux concentriques, matière et texte ondulés
— pas le photoréalisme.

L'ordre reste : dessiner d'abord, basculer ensuite (D-025), et tout est
fonction de la position de défilement (D-030), donc rien ne peut rester coincé.

---

## D-036 — La photographie devient la pierre : ce sont les mêmes triangles

**Nouvelle phase, AVANT tout le reste.** Au début, la photographie est plate,
rectangulaire, entière. Au défilement elle se plie jusqu'à devenir exactement
la pierre, et la séquence existante prend le relais sans rien changer.

**Ce n'est pas un fondu.** Chaque sommet connaît deux positions : la sienne à
plat dans le rectangle, et la sienne dans la pierre. Ce sont les mêmes
triangles qui se déplacent. Le shader ne mélange la photographie et le cristal
que **facette par facette**, selon l'avancement propre de chaque facette —
jamais globalement.

**Trois mécanismes le rendent lisible :**

1. **Le rang.** Chaque facette attend son tour selon son rayon : les bords
   partent les premiers, la table centrale en dernier. La photographie reste
   donc lisible en son centre pendant que ses bords se cassent déjà.
2. **La normale se redresse avec le pli.** À plat elle regarde droit vers nous :
   aucun éclat, aucune réfraction, rien qu'une image.
3. **L'orientation ne se lève qu'avec le pli.** Inclinaison, respiration, suivi
   du pointeur et prise du geste sont tous multipliés par l'avancement. Une
   photographie plate est vraiment plate, et le doigt n'a pas de prise dessus.

**Sept facettes sont devenues huit, et c'est un choix assumé.** À plat, les
anneaux doivent former un vrai rectangle, donc il faut des sommets **aux quatre
coins**. Avec sept points par anneau on n'obtient qu'un heptagone et la
photographie de départ a les coins coupés — c'était visible. Avec huit, et le
rondiste calé sur les angles droits, le rectangle est exact. La pierre y gagne
une facette et reste irrégulière : c'est le désordre des rayons qui fait sa
taille brute, pas leur nombre.

**Le cadre porte désormais la photo entière**, donc la toile fait toute sa
largeur ; la géométrie de la pierre est réduite d'autant pour garder à l'écran
exactement la taille qu'elle avait.

**Les deux courses ne se chevauchent jamais** : la descente ne peut pas
commencer avant que la pierre soit formée. Mesuré : métamorphose 594 px sur
téléphone, 677 sur bureau ; la descente démarre au pixel où elle finit.

---

## D-037 — La photographie se voit avant de se plier, et le budget est partagé

La métamorphose commençait dès que le cadre entrait par le bas : on n'avait
jamais le temps de regarder la photo. Elle commence maintenant quand le cadre
est **installé dans la vue** — son centre à 55 % de la hauteur d'écran.

**Mesuré :** 529 px de photographie plate et visible sur téléphone (611 sur
bureau), dont 202 px où elle est entière et immobile.

**Le reste du défilement est partagé en deux parts égales** entre se plier et
descendre. Le contact étant la dernière section, ce qui reste est *compté*, pas
souhaité : on le répartit au lieu de réclamer une place qui n'existe pas. La
fin de course passe de « bouton centré » à « bouton au tiers haut », ce qui
rend 180 px au partage. Résultat : 424 px de chaque côté sur téléphone, 506 sur
bureau.

---

## D-038 — Le titre de morceau est signé, pas composé

La serif étroite (D-032) est remplacée par un **brush incliné**, sur maquette
« variante 2 — street-luxe » du propriétaire. La casse d'origine est conservée :
un brush en capitales perd ses liaisons, donc son geste.

`Noto Serif Display` n'est plus téléchargée — elle ne servait qu'ici. Le nombre
de familles chargées reste le même : Archivo, Newsreader, Sacramento, Kaushan
Script.

**Ce n'est pas la fonte de la maquette, et il faut le dire.** Elle nomme
*Satoshi* et *Reckless*, dont aucune n'est sur Google Fonts — Satoshi est
gratuite chez Fontshare, l'autre est sous licence commerciale. `Kaushan Script`
est ce qui s'en approche le plus dans ce qui est chargeable sans licence : même
famille de geste, même inclinaison, même contraste de brosse, mais des
terminaisons plus rondes et pas de matière sèche. Si le propriétaire fournit
les fichiers, le passage se fait en une déclaration `@font-face`.

---

## D-039 — Le cadre passe au 4/5, et la projection apprend le format

Le carré rendait la photographie trop ramassée. Le cadre est en **4/5**.

Ce n'est pas un réglage de feuille de style : le format entre dans **quatre
endroits** liés, et en oublier un déforme l'image.

1. **La projection** — `mvp.x = (F / FMT) · x`. Sans ce terme, une toile plus
   haute que large étire l'image au lieu de la cadrer.
2. **Le rectangle à plat** — deux demi-côtés au lieu d'un : `CARRE_X = CARRE_Y ·
   FMT`. Ce sont les distances qui atteignent exactement le bord de la toile.
3. **Les coordonnées d'image** — `PHO_R = (1920/2566) / FMT`, soit le rapport du
   fichier sur celui du cadre. C'est le calcul de `object-fit: cover`, donc la
   pierre et le repli plat montrent exactement le même cadrage.
4. **La toile et la couche de vol** — hauteur propre, et centrage sur les deux
   dimensions.

### Un défaut trouvé au passage
**La pierre débordait déjà la toile en hauteur**, au format carré. Avec le
désordre des rayons son rayon réel monte à 1,14 et sa hauteur à 1,14 × 1,2 =
1,368, pour une demi-hauteur utile de 1,2325 : elle dépassait de 2 %. C'était la
coupe plate visible en haut et en bas de la pierre.

L'échelle est désormais **calculée depuis la contrainte la plus serrée** —
`GEM = 0,90 · CARRE_X / 1,14` — au lieu d'être devinée. Vérifié : zéro pixel de
contact sur les quatre bords, empreinte à 83 % de large et 73 % de haut, sur
téléphone comme sur bureau.

---

## D-040 — Rythme et respiration, réglages d'œil

- Le pli commence quand le centre du cadre est à **70 %** de la hauteur d'écran
  au lieu de 55 : la photographie plate reste visible 448 px sur téléphone au
  lieu de 529, et le reste du budget passe à 519 px de chaque côté.
- Les marques descendent : marge supérieure de 38 à **64 px** sur téléphone, de
  44 à **66 px** au plus large sur bureau. L'espace sous elles se réduit
  d'autant.
