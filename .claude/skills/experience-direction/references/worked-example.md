# Exemple travaillé — la grille sur mobile

Cas réel, mené du début à la fin le 2026-09-18. C'est le seul dont le projet
dispose ; il est ici parce qu'il illustre les quatre choses qui comptent : la
mesure qui redéfinit la question, la divergence réelle entre directions, la
recommandation assumée, et la question d'œil laissée ouverte.

Rien ici n'est à recopier. C'est la **méthode** qui se transporte.

---

## L'objectif

Un commentaire du code annonçait depuis toujours, sur la grille mobile :
*« Format d'affiche plutôt que vignette 16/9 »*. Le CSS ne l'appliquait pas.
Fallait-il tenir cette intention ou corriger le commentaire ?

Formulé ainsi, le débat était esthétique. Il ne l'était pas.

## La baseline, chiffrée

Mesuré sur 375 × 812, pas estimé :

| | |
|---|---|
| Image de la carte | 304 × 166 px — **20 % de la hauteur d'écran** |
| Cartes visibles simultanément | **3,66** |
| Cartel | 87 px **dans** une image de 166 px, soit **53 %** |
| Luminosité de la carte centrée | 0,99 |
| Luminosité de ses voisines | **0,81 et 0,83** |

Et le calcul qui a tout tranché : **en 16/9 pleine largeur, une carte plafonne à
211 px de haut sur un téléphone.**

### Ce que la mesure a révélé

Le site possédait un dispositif soigné — la carte au centre de l'écran grandit et
s'éclaircit, l'échelle fait la hiérarchie — qui **n'avait pas la place de
fonctionner**. 3,66 cartes à l'écran, éclairées à 82 % les unes des autres :
aucune ne se détache. Et plus de la moitié de l'image était couverte de texte.

La question n'était donc pas « quel format est plus beau » mais « une carte par
écran est-elle possible en 16/9 ». Réponse : non, arithmétiquement. Le
commentaire d'origine n'était pas une préférence, c'était un constat.

**C'est le point à retenir : la mesure a dissous le débat de goût.**

## Les trois directions

Elles divergeaient sur ce qu'elles sacrifiaient — c'est ce qui en faisait un vrai
choix.

**A — Tenir l'intention.** Carte en format d'affiche, ~1,8 par écran, l'échelle
et la luminosité retrouvent leur sens.
*Sacrifie :* la longueur de page, et la maîtrise du cadrage tant que les
bannières ne sont pas choisies pour ce format.

**B — Le format d'affiche comme récompense.** Seuls les films ayant une vraie
bannière passent en affiche ; ceux encore en repli automatique restent petits.
La logique de repli du site étendue à la mise en page.
*Sacrifie :* la régularité de la grille, au risque de se lire comme un accident.

**C — Renoncer à « une carte à la fois ».** Garder le 16/9 — qui est le format du
travail — et retirer le dispositif d'échelle qui ne marche pas. La grille assume
d'être un registre dense.
*Sacrifie :* l'intention d'origine, et le seul geste mobile distinctif du site.

### Pourquoi ces trois-là divergeaient vraiment

A tient l'intention, C la renie, B la rend conditionnelle. Elles ne se
distinguaient pas par un réglage mais par **ce qu'elles acceptaient de perdre**.
Trois variantes de A — 4/5, 3/4, 5/6 — n'auraient pas été un choix.

## La recommandation

**A**, clairement, avec la raison : l'intention était géométriquement fondée, et
elle devenait tenable dès que le propriétaire fournissait les bannières.

Et l'inquiétude, dite : **B** était intellectuellement séduisante mais
impossible à garantir contre l'effet « bug ». C'est le genre de réserve qui doit
figurer dans la recommandation, pas rester dans la tête.

## Le choix, puis l'implémentation

Le propriétaire a retenu A.

Deux modifications, toutes deux confinées au mobile :

- le ratio de la carte ;
- le plancher de luminosité des cartes hors centre, relevé de 0,72 à 0,82.

Le second n'était **pas dans le brief** : il est apparu à l'implémentation. Une
carte occupant désormais la moitié de l'écran, sur un plan sombre, devenait une
dalle noire à 0,72. C'est normal — un brief n'anticipe pas tout, et un
ajustement qui découle directement de la direction retenue n'est pas un écart.

| | Avant | Après |
|---|---|---|
| Carte | 304 × 166 | 327 × 436 |
| Cartes par écran | 3,66 | 1,73 |
| Cartel dans l'image | 53 % | 21 % |
| Centrée / voisines | 0,99 / 0,81 | 1,00 / 0,82 |
| Hauteur de page | 5 355 px | 7 875 px |

**Coût assumé et annoncé :** 47 % de défilement en plus.

## La QA

Ce qui a été vérifié, et qui aurait pu casser : le dévoilement par volet, la
preview sur la carte centrée, l'effacement du cartel, le débordement horizontal,
le mouvement réduit — et surtout **le desktop, resté strictement inchangé**,
contrôlé valeur par valeur plutôt que supposé.

## La question restée ouverte

**4/5 ou 3/4 ?** Écart mesuré : 1,83 contre 1,73 carte par écran. Mince.

Elle n'a pas été tranchée par argument. Une valeur défendable a été posée (4/5),
montrée, l'autre proposée — et le propriétaire a regardé, puis choisi 3/4. Une
ligne de CSS.

**C'est une question d'œil, et l'étiqueter comme telle a évité une discussion
inutile.** Voir `SKILL.md` §5.

---

## Ce que cet exemple enseigne

1. **Mesurer d'abord.** Trois nombres ont transformé un débat de goût en constat.
2. **Faire diverger sur le sacrifice**, pas sur le réglage.
3. **Recommander, et dire ce qui inquiète** dans sa propre recommandation.
4. **Étiqueter les questions ouvertes** par nature — mesure, argument, ou œil.
5. **Vérifier ce qui ne devait pas bouger**, valeur par valeur.

Ce qu'il n'enseigne pas : l'ambition. Ce cas est une correction, pas une
invention — aucune de ses trois directions n'était un geste LAB. Un jeu de
directions pour une section neuve devra faire mieux, conformément à `SKILL.md`
§3.

---

# Contre-exemple : à quoi ressemble une direction candidate LAB

Ce cas-ci était une correction, et aucune de ses trois directions ne franchissait
la porte d'ambition du §3. Voici donc, en quinze lignes, ce qu'une quatrième
direction aurait dû ressembler pour la franchir — esquisse, pas spécification.

**D — Les générations.** *Un film peut être montré dans les états où il a
réellement circulé : le master, la copie compressée qui a tourné en story, celle
réencodée par la plateforme. Les dégradations ne sont pas simulées — ce sont les
fichiers tels qu'ils ont vécu.*

**Porte d'ambition, question 1 — comment ça s'appelle ?** Le geste de bascule,
seul, s'appelle un « sélecteur de qualité », et à ce titre il échoue. Ce qui n'a
pas de nom courant, c'est la **sélection d'états porteurs de provenance** : ce ne
sont pas des définitions, ce sont des vies de la même œuvre. L'interaction reste
donc à inventer — et la direction doit le dire au lieu de le masquer.

**Question 3 — qu'apprend-on ?** Que l'œuvre n'existe pas en un exemplaire, et
que sa vie réelle est faite de copies abîmées. C'est une compréhension, pas un
accès : la porte est franchie de ce côté.

**Ce qu'elle apporte que rien de plus simple n'apporte :** elle réalise la
tension *trace × système* **sans aucun costume rétro** — pas un filtre VHS, pas
une scanline : de la compression authentique.

**Sa condition d'existence, non négociable :** les copies abîmées doivent exister
comme fichiers réellement possédés. À défaut, la direction ne se replie pas en
version simulée — **elle tombe**, parce qu'une dégradation fabriquée serait
exactement le grain décoratif que `binksfilms-dna` §11 refuse.

Ce que cette esquisse montre et que le cas réel ne montrait pas : une direction
ambitieuse se présente **avec ce qui peut la tuer**, et ça ne l'affaiblit pas —
ça la rend choisissable.