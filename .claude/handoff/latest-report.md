# Dernier rapport — la gemme, et les marques de classification

**Mission :** deux demandes du propriétaire, sur maquettes.
1. Ajouter les marques **Parental Advisory** et **−16** sous le portrait.
2. Donner au volume de la section Réalisateur **une forme de diamant brut**.

**Mode :** RADICAL / BINKSFILMS LAB pour la gemme, SURGICAL pour les marques.
**Périmètre :** `index.html` seul. Hero, intro, cartes film, `films.js`,
`admin.html`, `vercel.json` : aucun changement.

---

## 1. Les marques de classification

Dessinées en texte, pas importées en image : nettes à toute taille, **0 Ko**.
Le sigle est en version inversée — lettres et cadre clairs sur le noir de la
page — conformément à la maquette. Le disque −16 est plein, son tiret est
dessiné parce qu'aucun tiret de la fonte n'a l'épaisseur voulue.

Elles apparaissent **après** le portrait, jamais en même temps : c'est l'image
qu'on doit voir en premier.

*Mesuré à 375 px :* sigle 174 px de large calé à 24 px du bord gauche, disque
52 px calé à 24 px du bord droit, les deux entièrement dans l'écran.

---

## 2. La gemme

### Pourquoi WebGL, et pas plus simple
La règle du projet impose la couche la moins complexe qui exprime vraiment le
concept. Des facettes qui **réfractent** l'image demandent un calcul par pixel.
Ni le DOM ni le CSS 3D ne le font : ils ne savent qu'incliner des images
entières. Le cube à six faces en était la preuve — il inclinait, il ne
réfractait pas. C'est la seule raison d'aller jusqu'au shader ici.

### Ce qui a été construit
- **Géométrie** : sept anneaux, d'une **table avant plate et large** à la
  pointe arrière, anneaux décalés d'un demi-pas pour produire des facettes
  triangulaires et non des bandeaux. Désordre tiré d'une suite déterministe :
  la pierre est irrégulière, mais c'est toujours la même pierre. Le cadre est
  carré et la pierre en occupe 92 %.
- **Réfraction** : le rayon réfracté est prolongé jusqu'au plan où se tient la
  photo, derrière la pierre. Chaque facette montre donc un autre morceau de
  l'image — d'où les répétitions du sujet sur les flancs.
- **Dispersion** : trois indices très légèrement différents pour R, G et B.
  C'est ce qui met de la couleur sur les arêtes sans qu'on en peigne.
- **Fresnel et deux éclats** : les facettes vues de biais renvoient la lumière
  au lieu de laisser passer l'image. C'est ce qui dessine le contour sans
  qu'aucun trait ne soit tracé.
- **Interaction** : identique à celle du cube — glissement prioritaire,
  inertie en degrés par seconde, arbitrage d'axe à 8 px au doigt, quart de
  tour au clavier, respiration au repos, boucle bornée par
  `IntersectionObserver` + `document.hidden`.
- **Coût** : une seule photo, déjà chargée pour le repli. **0 Ko de réseau en
  plus.** ~110 triangles, une texture.

### Défauts trouvés et corrigés en route
- **Matrice de projection fausse.** La distance caméra était retranchée sur les
  trois colonnes de base au lieu de la seule colonne de translation : la pierre
  sortait du cadre d'un côté et se rétractait de l'autre. Mesuré par la
  silhouette — rayons à 100 % sur la moitié des directions, 32 % sur l'autre.
- **Garde réseau mal raisonnée.** Je coupais le rendu sur `effectiveType`.
  Contresens : la gemme ne télécharge rien de plus, elle ne coûte que du calcul.
  Seul `Save-Data` est retenu, parce que c'est une préférence exprimée et non
  une mesure de tuyau.
- **Trou à la place du portrait.** La classe `.gemme` masque la photo plate ; si
  la boucle n'avait pas encore dessiné, la figure était vide. Une première
  image est maintenant dessinée **avant** la bascule.
- **Activation impossible en onglet masqué.** Cette première image était
  repoussée par `requestAnimationFrame`, qui ne se déclenche pas dans un onglet
  masqué : la pierre n'était alors jamais montée. Remplacé par une minuterie.
- **Image jamais demandée.** La photo est en chargement paresseux et le cadre
  est découpé à zéro pendant son volet d'entrée : une image paresseuse dans une
  boîte de surface nulle peut n'être jamais réclamée. Le chargement est
  désormais déclenché quand la section approche.

---

## Mesures

**Bureau, fenêtre 1265 —** cadre carré 484 × 484, pierre 445 × 445 soit 92 %
du cadre, de 747 à 1203 px, entièrement dans l'écran, aucun débordement de
page. Marques à 733 et 1217, dans la colonne.

**Mobile 375 × 812 —** cadre 327 × 327, pierre 301 × 301 soit **80 % de la
largeur d'écran**, toile 602 × 602 à deux pixels physiques par pixel CSS,
entièrement dans l'écran, aucun débordement, `pan-y` actif. Sigle à 24 px du
bord gauche, disque à 24 px du bord droit.

**Repli —** sans la classe `.gemme` et sans les styles posés par le script :
photo 327 × 327 dans un cadre 327 × 327, `object-fit: cover`, recadrée sur le
visage, toile masquée, indication masquée. Sans WebGL, sans `Save-Data`, en
mouvement réduit ou si l'image échoue, rien ne se pose et la photo reste.

**Réseau —** aucune requête en échec. Les seuls 404 du journal sont
`/favicon.ico`, requête par défaut du navigateur — la page déclare une icône en
ligne, rien ne manque.

---

## La correction qui a tout changé

Le premier rendu était illisible : la photo éclatée en quartiers, le sujet
noyé. Ce n'était pas un réglage de lumière, c'était une **faute de
construction**.

**La table avant n'était pas plate, c'était une pointe.** Le profil partait
d'un sommet unique en `[0.00, 1.00]`, relié en éventail à l'anneau suivant :
un cône de neuf triangles. Chaque quartier réfractait donc l'image à un angle
différent, et il ne restait rien à lire.

Sur la maquette du propriétaire, la face avant est une **grande table plate**
par laquelle l'image passe presque sans dévier ; les facettes ne sont qu'un
cadre autour d'elle. Le profil a été refait en conséquence : centre et bord de
la table à la même hauteur, aucun désordre vertical sur ces deux anneaux, et
une couronne franchement en retrait.

Trois autres corrections ont suivi, chacune vérifiée à l'image :

1. **Le cadrage.** Fenêtre de photo ramenée de 3,4 à 1,45 unité de pierre : le
   sujet occupe désormais la table au lieu d'un timbre au centre.
2. **La silhouette.** Le rondiste était à peine plus large que ses voisins ;
   leurs sommets décalés d'un demi-pas complétaient le contour et la pierre se
   refermait en boule. Voisins ramenés à 0,79 et 0,76 contre 1,00 : le contour
   est maintenant un polygone à sept côtés franchement anguleux, aux arêtes de
   longueurs inégales.
3. **L'opacité.** Elle était calculée depuis la luminosité, donc les facettes
   sombres disparaissaient et **mangeaient le contour du cristal**. La pierre
   est désormais pleine, avec une trace d'ambiante pour que la facette la plus
   sourde se détache quand même du noir de la page.

---

## Ce qui n'est PAS prouvé

Le rendu **a été vu** cette fois. Le volet d'aperçu refusant toujours les
captures d'écran, un récepteur local a été monté dans le bac à sable : la page
envoie l'image de la pierre, elle est écrite sur le disque et relue. Quatre
itérations ont été jugées à l'image, pas au chiffre. Ce récepteur ne fait
partie ni du site ni du dépôt.

Restent non prouvés :
- **le comportement au doigt sur un vrai téléphone** (B-013, inchangé) ;
- **la fluidité en images par seconde** : le volet est bridé quand il est
  masqué, aucun chiffre fiable n'a pu être relevé et aucun n'est inventé ici.
  Le coût reste faible par construction — environ 110 triangles, une texture,
  une passe.

---

## État

`index.html` seul modifié. Repères : `core-phase1`, `avant-bloc`.
