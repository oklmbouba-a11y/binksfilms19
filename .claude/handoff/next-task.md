# Prochaine étape — BINKSFILMS

**Mise à jour :** 2026-09-18 · **Proposé par :** Claude Code
**Mode en vigueur :** autonomie déléguée par le propriétaire

---

## Fait aujourd'hui

- **B-009** — format d'affiche mobile, en 3/4.
- **`binksfilms-dna` V1.1** — trois niveaux de vérité, double filtre, ambition.
- **`experience-direction`** — livré, avec sa porte d'ambition.
- **Brief de la fiche film** — trois directions, C retenue.
- **La signature** — direction C implémentée et vérifiée. Première direction
  créative du projet arrivée jusqu'au site.

---

## Immédiat — regarder la signature

C'est une **question d'œil**, au sens d'`experience-direction` §5, et elle
appartient au propriétaire :

1. **L'effet se produit-il ?** Il faut parcourir trois fiches d'affilée par les
   liens précédent/suivant. Si au troisième film on n'a pas compris qu'une seule
   personne a tout fait, la direction a échoué.
2. **La retenue tient-elle ?** C'était le risque annoncé au brief : une idée
   fondée sur la répétition devient pénible dès qu'elle se souligne. Trop
   discrète et elle ne se voit pas ; trop présente et elle insiste.
3. **La position et l'échelle** — bas de page, 10 px, gris. À juger, pas à
   argumenter.

Si la retenue ne tient pas, le repli est la direction **A** du brief, qui reste
disponible.

---

## Leçon à reporter dans `experience-direction`

Les trois écarts survenus à l'implémentation venaient tous du même angle mort :
**un brief qui pose un élément persistant doit dire ce qu'il recouvre.** Le point
12 (« les états à écrire ») couvre les états de média, pas les collisions d'un
élément fixe avec le contenu. Une ligne à ajouter.

---

## Ensuite

- **Affinage d'`innovation-critic`** — trois relectures, trois fois des défauts
  réels vérifiés contre le code. Lui donner `binksfilms-dna` §7 et
  `experience-direction` §3 comme standards.
- **Un deuxième jeu de directions**, une fois la signature jugée. La fiche film
  a d'autres angles ; la section Contact n'a jamais été pensée comme une
  expérience.

---

## Dette

- **B-011** — preview à 10,4 Mo, le propriétaire la recompressera (3–4 Mo, même
  nom, même dossier).
- **B-012** — cinq doublons média (~16 Mo).
- **B-010** — déséquilibre de masse des skills.
- **B-006** — `GUIDE-DEPLOIEMENT.md` désynchronisé.
- **Date erronée** — le clip Skinny Bastard est daté 2000-09-02 et l'affiche en
  ligne. Tous les autres films sont entre 2018 et 2026. À corriger dans
  `admin.html`.

---

## Contenu, quand le propriétaire aura la matière

Bannières et contre-champs sur 3 ou 4 films. 8 cartes sur 10 restent des
miniatures YouTube, et le format d'affiche ne donnera sa pleine mesure qu'avec
des images cadrées pour lui.


---

## Décision propriétaire — augmenter nettement le niveau de risque créatif

Le propriétaire valide l'intelligence et la retenue de la première direction, mais considère qu'elle reste **trop prudente pour définir le niveau créatif final du site**.

À partir du prochain jeu de directions :

- au moins une proposition doit prendre un **vrai risque visuel, spatial, temporel ou interactif** ;
- ne pas réduire l'ambition à une idée conceptuelle discrète ;
- une direction peut être techniquement ambitieuse si le concept le justifie ;
- WebGL, shaders, 3D, compositing, distorsion, transitions fortes, détournement de scroll, ruptures de mise en page, interactions inhabituelles ou autres techniques avancées sont pleinement ouvertes ;
- ne pas choisir une proposition simplement parce qu'elle est plus sûre, plus légère ou plus facile à maintenir ;
- préserver toutefois les exigences de qualité : mobile, performance, lisibilité, accessibilité, repli propre.

L'objectif n'est pas d'ajouter des effets. L'objectif est de **tester jusqu'où BINKSFILMS peut aller sans perdre sa maîtrise**.

Le prochain jeu de directions doit donc contenir une proposition dont l'ambition serait réellement perceptible par un visiteur, même sans lire le brief.

Claude garde carte blanche sur la forme et sur le terrain.


---

## Gouvernance créative — pouvoir DA élargi à ChatGPT

Décision propriétaire : ChatGPT prend désormais un rôle plus actif sur la direction artistique globale.

Répartition :
- Claude Code reste le moteur de proposition, d'exécution, de prototypage et de vérification.
- ChatGPT n'est plus seulement critique après coup : il peut désormais **orienter, recadrer ou écarter une direction macro** lorsqu'elle paraît trop prudente, trop déjà-vue ou insuffisamment ambitieuse.
- ChatGPT peut pousser un territoire visuel, une tension, un niveau de risque ou une logique d'expérience, sans dicter chaque détail d'implémentation.
- Claude reste libre de contester une direction s'il peut démontrer qu'elle nuit au concept, à la performance, au mobile ou à la cohérence BINKSFILMS.
- Le propriétaire conserve le dernier mot.

Conséquence immédiate :
- les prochains LAB ne doivent pas seulement être techniquement intéressants ;
- ils doivent aussi viser une **DA identifiable, surprenante et mémorable** ;
- la barre de référence n'est plus « amélioration du site existant », mais « expérience visuelle qui pourrait devenir une signature de BINKSFILMS ».


---

## Cap DA — structurer maintenant l'ambition

Retour propriétaire : **ça commence à être bien**. Les LAB Flux et Bande ont enfin atteint un niveau d'ambition intéressant.

Le prochain enjeu n'est pas d'empiler encore des effets. Il faut maintenant **structurer** ce langage créatif pour qu'il puisse devenir une expérience de site cohérente.

Attendu :
- distinguer ce qui relève du **langage permanent** du site, des **moments forts**, et des **expériences LAB ponctuelles** ;
- décider où un effet doit vivre, quand il doit apparaître, et surtout quand il doit se taire ;
- éviter que chaque section utilise son propre gimmick ;
- préserver une navigation fluide et immédiate ;
- organiser les niveaux d'intensité : repos / interaction / transition / moment signature ;
- penser mobile dès le départ, pas comme adaptation secondaire ;
- prévoir les modes de repli et budgets de performance avant intégration au site principal ;
- faire émerger un système assez clair pour que de futurs effets puissent s'y intégrer sans casser l'identité.

Important : **ne pas retomber dans une longue phase documentaire**. La structuration doit servir rapidement à choisir ce qu'on garde de Flux, de Bande, ce qu'on rejette, et comment ces idées peuvent s'inscrire dans l'expérience globale.

ChatGPT peut intervenir activement sur cette structuration DA. Claude garde la main sur l'exécution et peut contester tout choix avec des arguments visuels, techniques ou de performance.


---

## Mission immédiate — passer du LAB à une expérience structurée

Le propriétaire veut maintenant **avancer concrètement**. Plus de phase d'attente ni de documentation longue.

### Direction DA proposée par ChatGPT

Prendre les deux LAB actuels comme matière, mais ne pas les traiter comme deux effets concurrents :

- **Flux** devient le langage de transition fluide / continu quand le geste est normal ou lent ;
- **Bande** devient le niveau d'intensité supérieur, déclenché par la vitesse / l'engagement du geste ;
- **au repos**, l'image doit redevenir nette, calme et premium ;
- **aucun trou noir**, aucune coupure de navigation ;
- l'effet doit monter et redescendre avec le geste, jamais rester collé à l'image.

L'objectif est de construire une **grammaire d'intensité** plutôt qu'une collection d'effets :

1. repos = image propre ;
2. interaction légère = flux / fusion ;
3. interaction forte = bande / déchirure ;
4. moment signature = rupture plus rare, à décider après test visuel.

### Livrable immédiat

Créer un prototype isolé de synthèse, utilisable et visible, qui démontre cette hiérarchie dans une vraie navigation de catalogue. Il doit permettre de juger en quelques secondes :

- fluidité ;
- sensation au doigt et à la molette ;
- montée d'intensité ;
- lisibilité des titres / artistes ;
- caractère BINKSFILMS ;
- performance mobile raisonnable.

Ne pas intégrer au site principal tant que ce prototype n'est pas convaincant.

### Liberté Claude

Claude garde carte blanche sur l'implémentation exacte, le shader, le rythme, les seuils et la composition. Il peut contester la synthèse Flux/Bande s'il démontre qu'une autre structure est visuellement ou techniquement supérieure.

Mais la mission doit produire **un résultat visible maintenant**, pas un nouveau long brief.


---

## Règle de gouvernance — le repo est la source de vérité

Décision propriétaire : ChatGPT ne doit plus se baser principalement sur les rapports de Claude Code pour juger l'avancement.

À partir de maintenant :
- **le dépôt GitHub complet est la source de vérité** ;
- avant toute critique ou nouvelle direction, ChatGPT vérifie les commits récents et, quand c'est pertinent, les fichiers réellement modifiés ;
- `latest-report.md`, `next-task.md` et les messages de Claude sont des explications secondaires, jamais une preuve suffisante ;
- si le rapport dit une chose mais que le code montre autre chose, **le code gagne** ;
- ChatGPT doit pouvoir relever les erreurs, oublis, incohérences ou surévaluations de Claude à partir du projet réel ;
- l'évaluation doit couvrir autant que nécessaire : DA, comportement, architecture, données, performance, accessibilité, mobile, fallbacks et cohérence entre prototypes ;
- les nouveaux LAB doivent être comparés non seulement à leur brief, mais aussi au site principal et aux autres LAB déjà présents dans le repo ;
- Claude doit considérer les critiques basées sur le repo comme des revues indépendantes, et non comme une reformulation de ses propres rapports.

But : faire fonctionner Claude Code + ChatGPT comme deux lectures indépendantes du même projet, avec le propriétaire comme arbitre final.


---

## Revue indépendante du repo — ChatGPT (source de vérité = code)

Cette revue ne part pas du rapport de Claude Code. Elle compare directement `index.html`, `films.js`, `lab-flux.html`, `lab-bande.html`, `lab-catalogue.html` et `lab-experience.html`.

### Ce qui est bon — à conserver

- `lab-experience.html` est actuellement la meilleure base conceptuelle des LAB : une seule courbe d'intensité, aucun trou noir, texte/navigation hors shader, et une zone de silence pour la fiche.
- La hiérarchie repos → fusion → déchirure est plus cohérente qu'une collection d'effets indépendants.
- Le budget de décodage (deux vidéos max dans le flux, zéro fiche ouverte) va dans la bonne direction.
- Le choix de ne pas toucher encore à `index.html` est correct : le LAB n'a pas encore la parité fonctionnelle du site principal.

### Problèmes réels trouvés dans le repo

**1. DONNÉES — le LAB ne lit pas `films.js`.**
`lab-experience.html` possède son propre tableau `PLANS` codé en dur. Il contient des informations qui divergent déjà de la source réelle. Exemple : SaiSai affiche `Produced by —` dans le LAB alors que `films.js` contient `Produced by — Tyrexotb`.

=> Une version candidate à l'intégration doit dériver ses projets de `window.FILMS_DATA`. Aucun duplicata manuel de titre, crédits, date ou artiste.

**2. SÉMANTIQUE — le LAB mélange films et fragments de films.**
Le flux compte comme entrées distinctes : hero, bannière, preview, plan, rush, fisheye, intro, etc. Ce n'est donc pas encore le catalogue public actuel, où une carte = un film.

=> Décider explicitement : soit le flux remplace le catalogue et une entrée = un film publié ; soit cette navigation par plans devient une expérience distincte. Ne pas mélanger les deux sans règle.

**3. PARITÉ — « Ouvrir le film » n'ouvre pas encore une vraie fiche film.**
Le LAB ouvre une fiche simulée. Il ne reprend pas encore le lecteur YouTube différé, contre-champ, BTS, navigation précédent/suivant, route/hash, chaîne de secours des images, ni les comportements déjà solides de `index.html`.

=> Ne pas intégrer le LAB au site principal avant d'avoir défini comment ces fonctions sont conservées, pas réécrites au rabais.

**4. ACCESSIBILITÉ — reduced motion incomplet.**
Le JS neutralise l'intensité WebGL sous `prefers-reduced-motion`, mais la fiche conserve sa transition CSS de 620 ms. Il n'y a pas de `@media(prefers-reduced-motion: reduce)` dans `lab-experience.html`.

=> Le mode réduit doit aussi neutraliser les translations/transitions de structure.

**5. RÉSEAU / PERFORMANCE — protections du site principal absentes.**
`index.html` respecte Save-Data / effectiveType lent et charge les previews avec parcimonie. `lab-experience.html` n'a ni `navigator.connection`, ni Save-Data, ni gestion de visibilité. Il envoie aussi des frames vidéo vers WebGL via `texImage2D` pendant la boucle de rendu.

=> Avant intégration : benchmark téléphone réel + stratégie qualité adaptative + pause sur page cachée + repli réseau lent/Save-Data. Deux vidéos max ne suffit pas à prouver que le shader est léger.

**6. RENDU DE DONNÉES — attention à `innerHTML`.**
La fiche LAB injecte artiste, titre et crédits via `innerHTML`. Avec des données codées en dur le risque est limité ; branchée à `films.js`, cette méthode devient fragile.

=> Construire ces champs avec `textContent` / nœuds DOM, ou échapper systématiquement les valeurs.

**7. QA VISUELLE — angle mort démontré.**
Les quatre LAB ont été livrés avec les textures WebGL retournées verticalement jusqu'au retour du propriétaire. Les tests d'état n'ont rien détecté.

=> Ajouter au minimum une vérification visuelle obligatoire : orientation, cadrage, couleurs, correspondance source/rendu, puis mobile. Un test qui ne regarde pas l'image ne valide pas un effet d'image.

### Direction proposée

- **Garder `lab-experience.html` comme branche LAB principale.**
- `flux`, `bande` et `catalogue` deviennent des références de recherche, pas trois produits à maintenir en parallèle.
- Prochaine vraie étape : faire évoluer `lab-experience` avec les **vraies données `films.js`**, une sémantique claire « un film = une entrée » pour le catalogue, puis connecter une vraie fiche sans perdre les fonctions existantes.
- Rester isolé de `index.html` tant que cette version n'est pas visuellement convaincante ET fonctionnellement crédible.
- Ne pas produire un cinquième LAB de shader avant d'avoir résolu ces points.

La priorité n'est plus d'inventer un nouvel effet. La priorité est de rendre la meilleure idée actuelle **vraie, structurée et compatible avec le projet réel**.


---

## État après intervention ChatGPT — expérience v3

ChatGPT a directement fait avancer le repo.

### Corrigé
- films.js : Skinny Bastard passe de 2000-09-02 à **2026-09-02**.
- lab-experience.html devient **v3** :
  - toujours alimenté par window.FILMS_DATA ;
  - lecteur YouTube réel chargé seulement au clic ;
  - contre-champ réel depuis les données ;
  - BTS réels depuis les données ;
  - lieu / tournage / date longue quand présents ;
  - navigation précédent / suivant dans la zone de silence ;
  - aucun de ces éléments ne passe dans le shader ;
  - fermeture de la fiche détruit le lecteur actif.
- Syntaxe JS vérifiée après modification.

### Règle immédiate
Ne pas créer de nouveau LAB. Continuer sur lab-experience.html.

### Prochaine étape
1. QA visuelle réelle de v3 sur téléphone + desktop.
2. Vérifier le comportement tactile du contre-champ et précédent/suivant.
3. Ajouter le routage/hash seulement si la navigation visuelle est validée.
4. Comparer la fiche v3 à index.html pour repérer les dernières fonctions utiles manquantes avant toute intégration.
5. Ne toucher à index.html qu'après validation visuelle et fonctionnelle du LAB.


---

## Décision propriétaire — Motion prioritaire

Le propriétaire précise que le **Motion est très important** pour le site.

Ce n'est plus un enrichissement secondaire : il devient un pilier DA au même niveau que l'image, la typographie et l'interaction.

Référence désormais disponible :
- `.claude/skills/motion-language/SKILL.md`

Conséquences immédiates :
- toute évolution de `lab-experience.html` doit être pensée comme une chorégraphie, pas une suite de blocs statiques ;
- le mouvement doit avoir une cause, une inertie et une retombée ;
- exploiter réellement vitesse, direction et engagement du scroll/swipe ;
- utiliser le contraste calme / tension / rupture ;
- autoriser des moments Motion très ambitieux, y compris WebGL, shader, compositing, 3D et transitions spatiales, s'ils sont justifiés ;
- ne pas transformer la fiche film en fête foraine : créer des zones de silence ;
- mobile est une surface Motion principale, pas un fallback ;
- QA visuelle et performance sur vrai téléphone obligatoires avant intégration.

Prochaine étape créative : faire de la v3 une expérience dont le **mouvement lui-même est reconnaissable comme BINKSFILMS**, sans repartir vers un nouveau LAB.


---

## CORRECTION DE CAP PROPRIÉTAIRE — conserver la structure du site existant

Le propriétaire clarifie un point majeur : **la structure actuelle de `index.html` est déjà la bonne structure du site**.

Ce qu'il veut conserver :
- l'intro actuelle ;
- l'arrivée sur l'accueil ;
- la vidéo d'accueil plein écran ;
- l'ordre et la logique générale des sections ;
- la façon dont les films, la partie réalisateur et le contact sont organisés ;
- la logique actuelle des fiches films et du contenu ;
- l'architecture légère existante.

Le problème initial n'était pas une mauvaise architecture. Il manquait surtout une **couche de Motion plus ambitieuse et mieux chorégraphiée**.

### Conséquence

`lab-experience.html` n'est plus candidat à remplacer la structure du site.
Il devient une **réserve R&D** : shaders, logique d'intensité, réactions à la vitesse, matière, transitions — à réinjecter ponctuellement dans le site existant quand cela sert l'expérience.

### Nouvelle mission prioritaire : MOTION RETROFIT

Prendre `index.html` comme squelette de référence et proposer une version augmentée par le mouvement, sans casser sa structure.

Le Motion doit surtout vivre dans :
- les transitions entre les grandes sections ;
- les changements d'échelle / profondeur au scroll ;
- les entrées/sorties de médias ;
- les mouvements de masques et de cadres ;
- la relation texte / image / vidéo ;
- les passages accueil → films → réalisateur → contact ;
- la navigation dans les films ;
- quelques moments signature plus forts, rares.

### Ce que le propriétaire cherche

Le niveau de sensation des sites contemporains très travaillés en scroll animation :
- sticky sequences ;
- scroll-driven transforms ;
- scale / depth / perspective ;
- pinning ponctuel ;
- reveal par masque ;
- layers qui se croisent ;
- éléments qui continuent leur mouvement d'une section à l'autre ;
- accélérations / ralentissements ;
- parallax sophistiqué ;
- transitions spatiales ;
- 3D/WebGL ponctuels si cela renforce une scène.

Mais : **ne pas transformer le site en démonstration 3D**.
Le Motion doit amplifier le montage et la DA existants.

### Chorégraphie de départ proposée

1. **Intro : conserver.** Ne pas la réinventer.
2. **Hero vidéo plein écran : conserver.** En faire le premier grand plan du site.
3. **Premier scroll :** le hero ne disparaît pas simplement ; il se transforme / recule / se cadre / cède la place au catalogue avec une vraie transition spatiale.
4. **Films :** la structure de contenu reste la même, mais le scroll doit produire profondeur, rythme, échelle et changements de focalisation plus ambitieux.
5. **Réalisateur :** utiliser une séquence plus éditoriale / cinématique, avec image + texte qui se recomposent au scroll, sans casser la lecture.
6. **Contact :** arrivée plus simple mais forte, comme une retombée après la montée d'intensité.
7. **Fiches film :** garder une zone relativement calme ; réserver les motions forts à l'ouverture/fermeture et à précédent/suivant.

### Important

Le propriétaire ne demande pas « encore un shader » ni « encore une expérience complètement différente ».
Il demande maintenant : **prendre le bon site qu'il avait déjà et le rendre exceptionnel par le mouvement.**

Claude peut proposer plus puissant que cette direction, mais toute proposition doit préserver la structure existante sauf démonstration très claire qu'un changement améliore réellement l'expérience.

### Méthode

Avant toute grosse réécriture :
- auditer les animations déjà présentes dans `index.html` ;
- identifier ce qui est déjà bon et ne doit pas être touché ;
- proposer 5 à 8 interventions Motion à fort impact maximum ;
- prioriser les 2 ou 3 qui changent immédiatement la sensation du site ;
- prototyper sur la structure réelle, pas dans un univers parallèle.

Critère de réussite : le propriétaire doit reconnaître immédiatement **son site**, mais avoir la sensation qu'il est passé d'un bon portfolio à une expérience de direction artistique beaucoup plus haut niveau.


---

## Revue visuelle propriétaire — cube Réalisateur

La mécanique du cube est comprise, mais la capture actuelle reste trop proche d'une démo 3D et pas assez d'un objet éditorial intégré au site.

### À garder
- fond = interface noire du site, sans décor ajouté ;
- aucun reflet/sol/studio virtuel ;
- vrai volume manipulable ;
- drag souris/tactile + inertie ;
- respiration autonome lente ;
- cube uniquement dans la section Réalisateur.

### À corriger visuellement
1. **Réduire le cube.** Il est actuellement trop massif sur mobile. Il doit respirer dans la section et laisser du noir autour.
2. **Réduire l'angle de repos.** La face du dessus prend trop de place. Chercher une position de repos plus frontale, seulement légèrement en trois-quarts.
3. **Le portrait principal doit dominer.** La face avant doit rester lisible comme la photo originale du site, pas devenir une facette parmi d'autres.
4. **Faces secondaires cohérentes avec le Réalisateur.** Ne pas utiliser des images aléatoires du catalogue. Utiliser uniquement des portraits / backstage / images réellement liées au réalisateur. S'il n'y en a pas assez, utiliser des recadrages différents de `real-web.webp` plutôt que des images sans rapport.
5. **Perspective plus élégante.** Moins de sensation 'cube géant', plus de sensation 'photo devenue volume'.
6. **Pas de contours lumineux.** Les arêtes doivent se lire par la lumière naturelle des faces et la perspective uniquement.
7. **Respiration verticale douce.** Conserver le pivot haut/bas autonome mais avec faible amplitude ; il doit être presque hypnotique, pas visible comme une boucle d'animation.

### Cible
Quand on arrive dans la section, on doit d'abord reconnaître la photo du réalisateur. Ensuite, en bougeant la souris ou le doigt, on découvre que cette photo est en réalité un objet 3D avec d'autres faces.

Le premier ressenti doit être : **photo premium qui devient objet**, pas **cube 3D qui contient des photos**.

Ne pas modifier le reste de la section ni la structure du site.


---

## Audit profond ChatGPT — cube Réalisateur (code réel)

Audit effectué directement sur `index.html` après le commit `bd1ea5a`.
La syntaxe JS compile, mais plusieurs problèmes structurels doivent être corrigés avant de considérer le cube comme propre.

### P0 — bug de timing sur l'animation d'arrivée

Le code fait :
`setTimeout(function(){ figure.classList.add("ouvert"); poser(); }, 1700);`
à partir du chargement de la page.

Or la section Réalisateur est bien plus bas. Dans la plupart des visites, `ouvert` est donc ajouté longtemps AVANT que l'IntersectionObserver ajoute `.vu` à la figure.
Ensuite la règle `#binks figure.ouvert .cadre{overflow:visible;clip-path:none}` écrase le `clip-path` de l'animation d'arrivée.

=> L'ouverture doit être déclenchée APRES l'entrée réelle de la figure et la fin de sa transition, pas 1,7 s après le chargement global.
Préférer `transitionend` sur `.cadre` une fois `figure.vu`, avec un petit fallback lié à cette entrée.

### P0 — boucle rAF permanente hors écran

Le cube lance `requestAnimationFrame(boucle)` en continu dès le chargement, même :
- pendant l'intro ;
- lorsque la section Réalisateur est plusieurs écrans plus bas ;
- quand le cube est hors viewport.

La boucle appelle en plus `cadre.getBoundingClientRect()` à chaque frame via `biaisScroll()`.

=> Ajouter une conscience de visibilité : IntersectionObserver + `document.hidden`.
Ne calculer / dessiner le cube que quand la section est proche ou visible.
Mettre en pause hors écran et dans un onglet caché.
Cache le biais de scroll au lieu de relire le layout chaque frame.

### P1 — inertie dépendante de la fréquence des pointer events

Actuel :
`vy = dx * 13; vx = -dy * 13;`

Cette vitesse dépend du nombre de pixels PAR EVENT et non de pixels PAR SECONDE.
Sur un écran 120 Hz, un même geste produit souvent des `dx` plus petits qu'à 60 Hz et donc une inertie différente.

=> Calculer la vitesse avec `e.timeStamp` / delta temps :
rotationDelta / dt * 1000, puis lisser légèrement la vitesse.
La sensation de poids doit être la même sur iPhone 60 et 120 Hz.

### P1 — pointermove global inutile

Le code écoute `pointermove` sur `window` et appelle `bl.getBoundingClientRect()` même quand le pointeur est ailleurs sur la page.
Le seuil `abs(nx) < 2.4` est très large : un pointeur seulement proche du cube appelle `agi()` et peut empêcher la respiration de reprendre.

=> Écouter `pointermove` sur `bl` uniquement. Le pointer capture suffit à continuer le drag hors de l'objet une fois le geste commencé.

### P1 — surcharge de médias / cohérence

Les faces secondaires actuelles chargent environ **6,4 Mo** de JPEG supplémentaires :
- `skinny.jpg` ~2,41 Mo
- `Adjustment Layer...Still018.jpg` ~1,88 Mo
- `Adjustment Layer...Still013.jpg` ~1,23 Mo
- `contre champs.jpg` ~0,89 Mo

Et plusieurs de ces images ne sont pas cohérentes avec la section Réalisateur.

=> Tant qu'il n'existe pas assez de portraits/backstage du réalisateur : utiliser `real-web.webp` (déjà ~0,40 Mo et mis en cache) avec plusieurs recadrages sur les faces secondaires.
Quand de vraies images Réalisateur existent, les charger à la demande (`data-src`) quand la section approche ou à la première interaction. `loading=lazy` seul n'est pas un budget fiable pour six faces superposées dans le viewport.

### P1 — deux réactions au scroll se superposent

Le wrapper `.bl-par` reçoit déjà une translation + scale au scroll dans la boucle de parallaxe existante.
Le cube ajoute en plus `biaisScroll() * 11` degrés de rotation Y.

=> Choisir une hiérarchie claire. Recommandation : garder la parallaxe existante sur `.bl-par` et réduire fortement ou supprimer le `biaisScroll` du cube. Le cube doit surtout respirer doucement et répondre au geste.

### P1 — réglages visuels trop agressifs

Actuel :
- `rx = -14`
- `ry = 24`
- côté = `82%` de la largeur disponible
- biais scroll jusqu'à ±11°

Cela explique la grosse face supérieure et le ressenti « cube d'abord, photo ensuite ».

=> Base recommandée à tester :
- repos `rx ≈ -4 à -6°`
- repos `ry ≈ 7 à 10°`
- cube mobile ≈ 68–72% de la largeur utile
- desktop ≈ 74–78%
- respiration X faible (≈2°)
- suivi pointeur plus discret (≈4–5°)

Le portrait avant doit dominer.

### P2 — le fallback « sans script » annoncé n'existe pas réellement

Le commentaire dit que sans script la photo redevient plate, mais la taille/position 3D de `.bl` est posée par JS. Sans JS, les faces n'ont pas une structure de fallback fiable.

=> Faire de la photo plate l'état CSS par défaut, puis ajouter une classe d'enhancement (`cube-on`) quand le JS a initialisé la géométrie. Tous les styles 3D doivent être progressifs à partir de cette classe.

### P2 — clavier / accessibilité

`role="button"` + Enter/Espace donne actuellement une vitesse `vy=150`, donc une rotation inertielle peu prévisible.

=> Préférer un contrôle déterministe : flèches gauche/droite = face précédente/suivante ; éventuellement haut/bas = inclinaison/face verticale. Enter peut faire un pas de 90° au lieu de lancer une vitesse.

### P2 — mobile : compromis à assumer

`touch-action:pan-y` est le bon choix pour ne pas voler le scroll vertical, mais cela signifie qu'un drag vertical pur ne peut pas servir de contrôle complet du cube sur mobile.

=> Assumer la règle : horizontal/diagonal = rotation manuelle ; vertical = scroll de page ; le pivot haut/bas reste une respiration autonome. Ne pas essayer de capturer le scroll vertical du site.

### Verdict

La base 3D est techniquement correcte et la séparation `.bl-par` / `.bl` est une bonne décision.
Mais avant tout nouveau polish visuel, corriger P0/P1 : timing d'entrée, boucle offscreen, inertie dépendante des events, pointermove global, poids média et double motion scroll.

Objectif : **moins de calcul, moins d'images, moins d'angle — plus de précision.**
