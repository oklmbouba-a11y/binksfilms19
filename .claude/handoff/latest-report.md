# Dernier rapport — la section Réalisateur et la porte du Contact

**Période couverte :** de l'audit du cube (`e6333ee`) à la surface d'eau
(`44650b4`). **Périmètre :** `index.html` et deux images dérivées dans
`images/`. `films.js`, `admin.html`, `vercel.json` : aucun changement.

---

## Où en est la section Réalisateur

La photo du réalisateur est devenue **une pierre taillée en WebGL**. Ce n'est
pas un cube incliné : les facettes réfractent réellement l'image, chacune à son
angle, avec une dispersion chromatique sur les arêtes et deux éclats
spéculaires.

**Pourquoi cette couche.** La règle du projet impose la plus simple qui exprime
vraiment le concept. Des facettes qui réfractent demandent un calcul par pixel ;
ni le DOM ni le CSS 3D ne savent faire autre chose qu'incliner des images
entières. Le cube à six faces en était la preuve — il inclinait, il ne
réfractait pas.

**Coût réseau : zéro.** Une seule photo, `real-web.webp`, déjà chargée pour le
repli. ~110 triangles, une texture, deux passes.

La correction décisive fut géométrique : **la table avant n'était pas plate,
c'était une pointe** — un cône de neuf triangles. Chaque quartier réfractait à
un angle différent et le sujet devenait illisible. Centre et bord de la table
sont désormais à la même hauteur, sans aucun désordre vertical sur ces deux
anneaux.

Sous la pierre, **les deux marques de classification** : fichiers du
propriétaire, préparés pour un fond sombre (D-027, puis D-035 pour leur forme
de référence).

---

## La descente vers le Contact

La pierre quitte le flux dès qu'elle est montée et passe dans une couche fixe.
Sa place à l'écran est **calculée** entre deux ancres : son cadre d'origine, et
le bouton « Parler d'un projet ».

- **Départ** — dès qu'on dépasse le texte de clôture de la section, pas quand
  le bouton pointe. Course : 855 px sur téléphone, 600 sur bureau.
- **Trajectoire** — courbe de Bézier à déviation latérale (jamais verticale :
  une perpendiculaire faisait remonter la pierre), plus une oscillation qui
  s'éteint. Lente d'abord, puis accélérée.
- **Rotation 3D** continue pendant toute la descente.
- **Taille** décroissante jusqu'à zéro.
- **Fin de course** bornée au dernier pixel de défilement atteignable — sans
  quoi, le contact étant la dernière section, l'aspiration ne se terminerait
  jamais.

---

## La porte : une surface d'eau

Quatre temps, selon le storyboard : **approche, impact, immersion, retour.**

Deux invariants de forme portent tout l'effet :

1. **Le rectangle du bouton ne bouge pas.** Mesuré 342 × 67 au repos, au pic et
   à la fin. Ce qui se déforme est ce qu'il y a dedans — la matière claire et
   le texte, par déplacement de pixels piloté par une houle basse fréquence.
2. **La déformation reste locale.** Un creux doux sous le point d'entrée, et
   trois ondes décalées qui naissent, s'ouvrent et s'éteignent.

Tout est fonction de la position de défilement : remonter rembobine exactement.
La déformation suit une cloche, donc **le bouton revient propre sans qu'aucun
code ne l'y ramène** — rien ne peut rester coincé.

---

## Typographie

| Élément | Avant | Après |
|---|---|---|
| Titre de morceau (cartes) | Instrument Serif italique | **Noto Serif Display**, axe de largeur 62,5 %, graisse 700, capitales |
| « Les beaux arts du ghetto » | Newsreader italique | **Sacramento**, tailles relevées aux 4 emplacements |
| Nom d'artiste, catégorie, année | — | inchangés |
| Titre de la **fiche film** | — | inchangé (grotesque Archivo) |

`Instrument Serif` n'est plus téléchargée : elle ne servait qu'aux titres de
cartes. Elle reste dans la chaîne de recours, au cas où le visiteur la possède.

> **Question d'œil restée ouverte :** le même titre de morceau est désormais en
> serif étroite sur la carte et en grotesque large sur la fiche film. Le
> propriétaire n'a demandé que les cartes. À trancher en regardant.

---

## Mesures de cette période

**Bureau 1280** — cadre carré 484, pierre 445, écart nul avec son cadre au
repos ; silhouette en polygone fermé irrégulier ; à l'arrivée, bouton à
342 × 67 inchangé et cliquable au pic ; aucun débordement de page.

**Mobile 375 × 812** — pierre 301 au repos, soit 80 % de la largeur d'écran ;
jamais hors écran sur quinze points échantillonnés ; sigle 100 × 62, disque 58,
marges égales à 24 px ; cartes film à 1,80:1 ; aucun débordement.

**Séquence de la surface** — approche : surface rigoureusement intacte. Impact :
creux 0,41, première onde 0,73 pour 0,46 d'écartement. Immersion : creux 0,84,
trois ondes vivantes, houle 14,3. Retour : tout à zéro, cristal 0,004.

**Repli** — sans WebGL, sans `Save-Data`, en mouvement réduit ou si l'image
échoue : la photo plate reste, dans un cadre carré, recadrée sur le visage.

---

## Ce qui n'est PAS prouvé

- **B-013** — le comportement au doigt sur un vrai téléphone.
- **B-014** — la traînée floute la pierre mais ne strie pas le chemin.
- **Les 60 images par seconde** — le volet d'aperçu est bridé quand il est
  masqué ; aucun chiffre fiable n'a pu être relevé, et aucun n'est inventé ici.
- **La rotation d'accueil de 11°** — demande une boucle d'animation vivante.
- **Le photoréalisme de la surface** — le storyboard est un rendu avec
  caustiques et réfraction réelle. Un bouton du DOM ne sait pas faire de
  caustiques ; ce qui est livré en tient la lecture, pas le photoréalisme.

Le rendu de la pierre, lui, **a été vu**. Les captures d'écran du volet
échouant systématiquement, un récepteur local a été monté dans le bac à sable :
la page lui envoie l'image de la toile, elle est écrite sur le disque et relue.
Huit itérations ont été jugées à l'image, pas au chiffre. Ce récepteur ne fait
partie ni du site ni du dépôt.
