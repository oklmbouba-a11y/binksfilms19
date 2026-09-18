# Rapport de mission — Format d'affiche sur mobile (B-009)

**Date :** 2026-09-18
**Agent :** Claude Code (Opus 5)
**Mode :** EXPERIMENTAL — première modification de `index.html`
**Direction retenue par le propriétaire :** A — tenir l'intention du format d'affiche

---

## 1. Le diagnostic

Le commentaire de la grille mobile annonçait « format d'affiche plutôt que
vignette 16/9 » sans que le CSS ne l'applique : `.film .thumb` gardait
`aspect-ratio:16/9`, et le bloc `@media(max-width:760px)` ne changeait que le
rayon, l'espacement et les corps de texte.

La baseline a montré que ce n'était pas une lubie esthétique mais une contrainte
géométrique. **En 16/9 pleine largeur sur un téléphone, une carte plafonne à
211 px de haut.** Une carte par écran est arithmétiquement impossible dans ce
format.

| Sur 375 × 812 | Avant | Après |
|---|---|---|
| Image de la carte | 304 × 166 px | **327 × 409 px** |
| Part de la hauteur d'écran | 20 % | 50 % |
| Cartes visibles simultanément | 3,66 | **1,83** |
| Cartel dans l'image | 53 % | **22 %** |
| Luminosité — carte centrée | 0,99 | 1,00 |
| Luminosité — voisines | 0,81 / 0,83 | **0,82** |
| Hauteur de page (10 films) | 5 355 px | 7 603 px |

Le dispositif d'échelle et de luminosité — du bon travail — n'avait simplement
pas la place de fonctionner : quatre cartes à l'écran, toutes éclairées à 82 %
les unes des autres.

---

## 2. Ce qui a changé

**Deux modifications, toutes deux confinées au mobile.**

`.film .thumb` passe en `aspect-ratio:4/5` dans la requête `max-width:760px`.
L'image garde toute sa largeur et se recadre en hauteur : on perd le haut et le
bas du plan, jamais les côtés — le recadrage le moins destructeur pour une image
de clip, où le sujet est centré.

Le plancher de luminosité des cartes hors centre passe de **0,72 à 0,82**, dans
la branche `etroit` du parallaxe. C'est une conséquence directe de la première :
à 0,72, une carte occupant la moitié de l'écran sur un plan déjà sombre se
réduisait à une dalle noire. L'écart avec la carte centrée reste parfaitement
lisible.

---

## 3. Fichiers

`index.html` — deux blocs touchés, commentés sur place.
Aucun autre fichier modifié. `films.js`, `admin.html`, `vercel.json` intacts.
Sauvegarde de l'état antérieur conservée hors dépôt le temps de la mission.

---

## 4. Tests

| Test | Résultat |
|---|---|
| Ratio appliqué en mobile | 4/5 confirmé (0,80) |
| Débordement horizontal | aucun |
| Dévoilement par volet | intact — cartes `vu`, `clip-path: inset(0)` |
| Preview sur carte centrée | joue (`prev-on`, `paused: false`) |
| Cartel au centre | s'efface comme prévu |
| **Desktop — ratio** | **`16 / 9` inchangé** |
| **Desktop — rayon** | **11 px inchangé** |
| **Desktop — parallaxe** | luminosité toujours sur le cadre, image à `none` — comportement d'origine |
| Mouvement réduit | couvert par `if(reduced) return` ; le CSS dédié n'entre pas en conflit avec le 4/5 |

---

## 5. Coût assumé

**La page s'allonge de 42 %** — 7 603 px contre 5 355 pour dix films, et ça
croîtra linéairement avec le catalogue. C'est le prix d'une carte par écran, et
c'est le choix de la direction A.

Si le catalogue double, il faudra sans doute une pagination ou un chargement
progressif. Pas aujourd'hui.

---

## 6. Question restée ouverte

**Le ratio exact : 4/5 ou 3/4.** J'ai posé 4/5, qui est le plus conservateur
(1,83 carte par écran contre 1,73 en 3/4). L'écart mesuré est mince ; la
différence se juge à l'œil, sur un vrai téléphone, pas sur un tableau. Une ligne
à changer si le propriétaire préfère 3/4.

---

## 7. Ce que ça implique pour la suite

Le format d'affiche **suppose des bannières cadrées pour lui**. Aujourd'hui 8
cartes sur 10 affichent une miniature YouTube 16/9 recadrée au centre : ça tient,
mais ce n'est pas choisi. Le propriétaire a indiqué qu'il mettrait les bannières
à jour manuellement — c'est ce qui donnera sa pleine valeur à ce changement.

Prochaine mission selon `next-task.md` : `experience-direction`.
