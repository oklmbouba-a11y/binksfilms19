# Dernier rapport — corrections issues de l'audit du cube

**Mission :** appliquer l'audit `e6333ee` (revue de code approfondie du cube
Réalisateur) transmis via `next-task.md`.
**Mode :** SURGICAL — un seul fichier touché, `index.html`.
**Périmètre :** section Réalisateur uniquement. Hero, intro, cartes film,
`films.js`, `admin.html`, `vercel.json` : aucun changement.

---

## Vérification préalable de l'audit

L'audit a été mené sur `bd1ea5a`, qui **précède** le correctif tactile
`0a6a771`. Sa remarque P1 « pointermove global » était donc déjà traitée en
partie : l'inclinaison au pointeur avait été replacée sur le cube lui-même et
verrouillée sur `pointerType === "mouse"`. Seul le `pointermove` de glissement
reste au niveau fenêtre, ce qui est nécessaire pour suivre un geste souris qui
sort du cube, et sans effet au doigt puisqu'il est gardé par `tenu`.

Les autres points ont été vérifiés dans le code avant d'agir. Tous exacts.
**Un l'était même en dessous de la réalité** : voir P2-fallback ci-dessous.

---

## Ce qui a été corrigé

### P0 — l'ouverture du cadre effaçait le volet d'entrée
`setTimeout(…, 1700)` partait du chargement de la page, donc bien avant que
l'`IntersectionObserver` ne pose `.vu`. La règle
`#binks figure.ouvert .cadre{clip-path:none}` supprimait alors le découpage
avant que la transition d'entrée ait joué.

Remplacé par un `transitionend` sur `.cadre`, filtré sur `propertyName ===
"clip-path"`, avec un filet de 2 200 ms armé **au moment où la section entre à
l'écran**, pas au chargement.

*Vérifié :* ordre des classes observé `rv → cube → vu → ouvert`.

### P0 — la boucle tournait en permanence
Elle tournait pendant l'intro, hors écran et en arrière-plan d'onglet, et
appelait `getBoundingClientRect()` à chaque image via `biaisScroll()`.

- `IntersectionObserver` sur le cadre (`rootMargin: 120px`) + `document.hidden` :
  la boucle s'arrête réellement, elle ne calcule plus dans le vide. Elle
  redémarre à l'intersection, au `visibilitychange` et à chaque geste.
- Le biais de défilement est mesuré dans un écouteur `scroll` passif et gardé.
  Plus aucun `getBoundingClientRect()` par image.

*Vérifié :* volet en arrière-plan, `document.hidden === true`, `transform`
jamais posé. Onglet au premier plan, section atteinte : `transform` posé.

### P1 — inertie dépendante de la fréquence d'écran
`vy = dx * 13` exprimait des pixels par évènement. Le même geste partait deux
fois plus fort à 120 Hz qu'à 60 Hz. Vitesse désormais dérivée de
`e.timeStamp`, en degrés par seconde, plafonnée à 420 °/s.

### P1 — 6,26 Mo d'images hors-sujet
Mesuré : `skinny.jpg` 2 356 Ko, `Still018` 1 836 Ko, `Still013` 1 204 Ko,
`contre champs.jpg` 868 Ko. Des plans de films, pas des photos de réalisateur —
l'audit avait raison de les juger incohérents avec la section.

Les six faces reprennent maintenant **la seule photo de réalisateur que le
projet contient**, `real-web.webp` (396 Ko, déjà en cache), sous six
recadrages : 26 / 72 / 50 / 10 / 90 / 60 %. Un seul fichier, une seule requête,
**0 Ko ajouté**. Rien n'a été inventé, conformément au brief.

> À reprendre dès que de vraies photos de réalisateur existeront : remplacer
> face par face, le CSS est déjà par-face.

### P1 — deux réactions au défilement superposées
La parallaxe du site et le biais du cube réagissaient tous deux au scroll.
Biais réduit de 11° à 4°, toujours pondéré par le repos. La parallaxe reste
seule maîtresse du mouvement d'ensemble.

### P1 — réglages trop marqués
| | avant | après |
|---|---|---|
| position de départ | rx −14° / ry 24° | **rx −5° / ry 9°** |
| taille, mobile | 82 % | **70 %** |
| taille, bureau | 82 % | **76 %** |
| respiration | 2,6° | **2°** |
| inclinaison au pointeur | 7° | **4,5°** |
| borne verticale | 82° | **70°** |

La face avant redevient l'élément dominant, comme le brief le demandait.

### P2 — le repli n'existait pas (plus grave qu'annoncé)
L'audit disait que le repli sans script était « théorique ». En réalité `.bl`
n'avait **aucune largeur ni hauteur en CSS** — elles étaient posées par le
script. Sans JavaScript le cube faisait 0 × 0 et **la photo disparaissait
entièrement**. C'était une régression franche par rapport à l'état d'avant le
cube.

Cascade inversée : la photo plate est désormais l'état par défaut de la
feuille de style, et le cube une surcouche que le script active en posant
`.cube` sur la figure, **après** avoir calculé la géométrie. La classe `.plat`
et ses règles disparaissent, devenues inutiles.

*Vérifié sans `.cube`, sans `.ouvert` et sans styles inline :* photo
491 × 656 dans un cadre 491 × 656, `object-fit: cover`, une seule face
visible, indication masquée. Exactement la photo d'avant.

### P2 — clavier imprévisible
`vy = 150` lançait une impulsion dont l'arrêt dépendait du frottement.
Remplacé par un quart de tour déterministe : `←` / `→` (et Entrée / Espace)
amènent à `Math.round(ry/90)*90 ± 90`, rejoint sans à-coup et annulé dès qu'on
saisit le cube.

### P2 — compromis tactile
`touch-action: pan-y` conservé, comme l'audit le recommandait : geste
horizontal ou diagonal → rotation, geste vertical → défilement de la page. Le
départ d'axe est tranché à 8 px.

---

## Mesures

**Bureau (800 px utiles)** — cube 373 × 373 parfaitement carré, 76 % de la
largeur de l'enveloppe, six faces posées à 186,5 px de demi-arête, six
recadrages distincts, six paliers de luminosité (1 / 0,92 / 0,84 / 0,84 /
0,68 / 0,62), faces inertes au pointeur, aucun débordement de page, aucune
erreur console.

**Mobile 375 × 812** — cube 229 × 229 carré, 70 % de la largeur, marges
74 | 77 px, entièrement dans l'écran, aucun débordement, `pan-y` actif, faces
inertes.

---

## Ce qui n'est pas prouvé

- **Le comportement tactile réel sur un téléphone.** Le volet d'aperçu n'émet
  que des évènements de synthèse et rend la page en instantané `data:`, ce qui
  empêche à la fois le test au doigt et le chargement des images relatives.
  La correction du bug de défilement (`0a6a771` puis celle-ci) demande une
  vérification sur un vrai appareil.
- **La fluidité en images par seconde.** Le volet est bridé quand il est
  masqué ; aucun chiffre fiable n'a pu être relevé, et aucun n'est inventé ici.

---

## État

`index.html` seul modifié : 179 insertions, 106 suppressions.
`films.js`, `admin.html`, `vercel.json`, `images/` : intacts.
Repères disponibles : `core-phase1`, `avant-bloc`.
