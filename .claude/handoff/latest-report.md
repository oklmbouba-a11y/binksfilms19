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
- **Géométrie** : un profil de pierre en sept anneaux, de la table avant à la
  pointe arrière, anneaux décalés d'un demi-pas pour produire des facettes
  triangulaires et non des bandeaux. Désordre tiré d'une suite déterministe :
  la pierre est irrégulière, mais c'est toujours la même pierre.
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

**Bureau, fenêtre 1280 —** boîte 397 × 397 carrée, gemme de 776 à 1173 px,
107 px de marge à droite, 43 px de marge dans sa colonne, aucun débordement de
page. Silhouette : polygone fermé irrégulier, rayons de 65 à 90 % du
demi-cadre, donc centrée et jamais rognée. Couverture 53 % de la toile.

**Mobile 375 × 812 —** boîte 249 × 249, 76 % de la colonne, toile 498 × 498
à deux pixels physiques par pixel CSS, entièrement dans l'écran, aucun
débordement, `pan-y` actif.

**Repli —** avant activation : photo visible, toile masquée. Après : photo
masquée, toile visible. Sans WebGL, sans `Save-Data`, en mouvement réduit ou
si l'image échoue, rien ne se pose et la photo reste.

**Réseau —** aucune requête en échec ; `real-web.webp`, `films.js`, bannières
et vidéos en 200/206.

---

## Ce qui n'est PAS prouvé

**Le rendu lui-même n'a pas été vu.** Le volet d'aperçu a refusé toutes les
captures d'écran — fenêtre de l'application masquée — et gèle à la fois
`requestAnimationFrame`, les transitions CSS et `IntersectionObserver`. J'ai pu
mesurer la géométrie, la silhouette, la facettisation et les tons dans les
pixels lus, mais **pas juger l'aspect**.

Les réglages de lumière posés sont donc **défendables, pas validés** :

| Réglage | Valeur | Ce qu'il commande |
|---|---|---|
| `uFen` | 3,4 | grossissement de la photo dans la pierre |
| `uCentre.y` | 0,24 | on vise le visage, pas le torse |
| `uPlan` | −1,15 | distance de la photo derrière la pierre |
| gain | 1,5 | éclairement général |
| bord hors image | 0,30 | noirceur des facettes qui sortent de la photo |
| éclats | 40 / 22 | dureté des reflets |
| indice | 1,62 | force de la réfraction |

Ces sept valeurs sont des **questions d'œil** au sens de `experience-direction`
§5. Elles se règlent en regardant, pas en raisonnant.

**Le comportement au doigt reste non vérifié** (B-013, inchangé).

---

## État

`index.html` seul modifié. Repères : `core-phase1`, `avant-bloc`.
