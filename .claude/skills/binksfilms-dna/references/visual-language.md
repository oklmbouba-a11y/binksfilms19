# Langage visuel

Principes de décision. Les valeurs citées sont celles du site actuel — elles
servent de preuve et de point de départ, pas de gabarit à recopier.

---

## Noir et lumière

Le noir n'est pas un fond par défaut, c'est le matériau de la page. Trois noirs
coexistent et ne sont pas interchangeables :

| Noir | Usage | Pourquoi |
|---|---|---|
| `#0A0A0A` | la page, partout | assez profond pour disparaître, assez clair pour ne pas écraser les noirs de l'image |
| `#000` | lecteur, voile de coupe, première frame | le vrai noir est une **matière de montage** : une coupe, un fondu, un début |
| `#111` | fond de cadre en attente d'image | évite le trou noir pendant le chargement |

L'ivoire `#EDEBE6` remplace le blanc. Le blanc pur brûle sur du noir profond et
donne un contraste d'écran, pas de tirage. Le blanc pur n'existe que dans la
sélection de texte et dans un masque de fusion.

**Règle :** une nouvelle surface sombre se justifie par rapport à `#0A0A0A`.
Descendre vers `#000` doit vouloir dire quelque chose — une coupe, un seuil, un
plein écran.

## Contraste et accent

Un seul accent : le rouge `#B11226`. Il apparaît trois fois dans tout le site —
sélection de texte, anneau de focus, triangle de lecture — et une fois comme
plancher chromatique sous le mot-vidéo (`#8C1020`).

**Le rouge ponctue, il ne remplit jamais.** Pas de bouton rouge, pas de bandeau
rouge, pas de lien rouge, pas d'état rouge. Cette rareté est ce qui lui donne sa
force : quand il apparaît, il désigne.

Le contraste principal du site n'est pas chromatique, il est **typographique et
spatial** : grotesque contre serif, capitale contre minuscule, dense contre
vide. Chercher un contraste de couleur pour créer de la hiérarchie est une
erreur de langage — la hiérarchie se fait ailleurs.

## Typographie

Trois registres, décrits dans `SKILL.md` §2. Ce qui compte dans l'application :

**Le nom porte.** Grotesque à graisse lourde et chasse élargie (`font-stretch`
112 % ou 125 % selon l'échelle ; la chasse normale 100 % est réservée au bloc de
la voix, qui n'appartient pas à ce registre), capitales, interlettrage
légèrement négatif. C'est une voix qui énonce : noms d'artistes, titres de section, chiffres, appels à l'action. Sur
les grandes tailles, l'interligne descend à 0.92–1.02 : les lignes se serrent
jusqu'à faire bloc.

**Le titre chante.** Serif de titrage à fort contraste, en italique. C'est la
voix de l'œuvre — titres de morceaux, apartés, la phrase de marque. Elle n'est
jamais en capitales et ne porte jamais d'interlettrage.

**La fiche se tait.** 9.5 à 12px, graisse 600, interlettrage large (.14 à .26em),
capitales, gris. Labels, métadonnées, navigation, statuts. Ce registre est une
**étiquette système** : il informe et se retire.

**L'erreur à ne jamais commettre :** mettre une phrase parlée dans le registre
de l'étiquette. Les capitales espacées font une déclaration ; la parole humaine
se compose en minuscules, corps modeste, graisse normale, sans interlettrage.
Le site l'écrit noir sur blanc dans le bloc du réalisateur.

**Les chiffres** sont en `tabular-nums` et zéro-padés : `01 / 17`, `07 films`.
C'est une numérotation de bobine, pas une pagination. Les colonnes de chiffres
s'alignent toujours.

## Densité et vide

Le vide est structurel, pas décoratif. Il sépare des registres ; il ne décore
pas une section.

Ordres de grandeur du site : 72px entre les rangées de la grille (34px sur
mobile), 130 à 160px avant une section, 44 à 84px entre les blocs d'une fiche
film. Les marges latérales passent de 24 à 48px au-delà de 1024px.

**Principe :** l'espace avant une section dit sa place dans la hiérarchie.
Réduire un espace au hasard désaccorde toute la page. Si une page paraît vide,
le problème est presque toujours une hiérarchie molle, pas un manque de contenu.

## Cadres, rayons, matière

- **Cadres d'image :** rayon 11px (13px mobile). « Assez pour se voir, assez peu
  pour ne pas faire bouton d'application. »
- **Contrôles et appels à l'action :** **carrés**, rayon 0. `.gros-cta`, `.opt`,
  `.chip` n'ont aucun arrondi, et deux règles posent un `border-radius:0`
  explicite pour neutraliser le style natif du navigateur.
- **Une exception, signifiante :** le bouton de lecture est un cercle de 68px.
  Le rond n'est pas interdit — il est **réservé** au geste de lancer un film. Il
  emprunte la forme d'une tête de lecture, pas celle d'un bouton d'application.
- **Filets :** `rgba(237,235,230,.12)` pour une séparation qui se voit, `.06`
  pour une séparation qui se devine. Jamais de bordure pleine ivoire, sauf en
  état actif.

La règle utilisable n'est donc pas « tout est carré », mais : **la forme suit la
nature de l'objet.** Un cadre d'image porte un rayon discret ; un contrôle de
saisie est carré ; une commande de projection est ronde. Arrondir un bouton de
formulaire ou carrer une bannière fait basculer le site vers l'application
générique — introduire un rond ailleurs que sur une commande de lecture aussi.

**Aucune ombre portée**, sauf deux `text-shadow` très diffus qui tiennent le
cartel lisible sur l'image. Pas de carte flottante, pas d'élévation, pas de
profondeur simulée par l'ombre : la profondeur vient de la perspective et du
glissement des images.

## Overlays

Le voile est un outil de lisibilité, jamais d'ambiance. Le gradient du cartel
monte du bas et s'éteint à 72 % de hauteur : il *tient le texte sans noircir
l'image*. Le scrim du hero est modulé en quatre arrêts pour foncer seulement là
où le titre se pose.

**Règle :** un overlay se calcule à partir de ce qu'il doit rendre lisible. Un
overlay uniforme sur toute une image est presque toujours un aveu que la
hiérarchie n'a pas été réglée.

## Imperfection contrôlée

Quatre choses différentes, souvent confondues :

| | Définition | Statut |
|---|---|---|
| **Défaut intentionnel** | une irrégularité qui porte du sens : une carte qui casse le rythme, un désalignement qui désigne | **autorisé**, s'il est nommable |
| **Accident absorbé** | une défaillance réelle rattrapée par un repli dessiné : image manquante, vidéo qui échoue, réseau lent | **c'est l'invariant du site** |
| **Effet artificiel** | un grain, un glitch, une poussière ajoutés pour faire « texture » | **refusé** par défaut — voir `anti-dna.md` |
| **Bug** | un comportement non prévu | à corriger, jamais à rebaptiser en parti pris |

Ce que fait réellement le site : la grille corrige elle-même son dernier rang,
les images manquantes descendent une chaîne de secours jusqu'à un placeholder
BINKSFILMS, une preview qui échoue s'efface sans laisser de trou.

**L'accident est encaissé, pas exhibé.** C'est la différence entre un studio qui
maîtrise sa matière et un site qui joue à être cassé.

## Hiérarchie — la règle des trois niveaux

La section Contact est le modèle : un CTA plein ivoire, puis un lien secondaire
souligné, puis les réseaux en petites capitales grises derrière un filet. Trois
niveaux nettement séparés, jamais deux éléments au même poids.

Sur une fiche film : le titre porte, les crédits informent, la navigation se
retire. Sur une carte : l'artiste porte, le titre chante, la méta se tait.

**Test rapide :** plisser les yeux. Il doit rester exactement un élément lisible
par bloc. S'il en reste deux, la hiérarchie n'est pas faite.
