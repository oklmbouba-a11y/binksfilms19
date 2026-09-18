# Rapport — LAB / catalogue, la grammaire d'intensité

**Date :** 2026-09-18 · **Agent :** Claude Code (Opus 5)
**Mission :** `next-task.md` — passer du LAB à une expérience structurée
**Périmètre :** prototype isolé. Aucun fichier du site modifié.

---

## Contestation de la synthèse proposée, avec sa raison

La direction DA demandait de fusionner Flux et Bande en une grammaire à quatre
niveaux. **Je conteste la prémisse, pas la conclusion.**

Flux et Bande n'ont jamais été deux effets. Dans `lab-bande.html`, le tirage est
déjà une valeur continue nourrie par la vitesse du geste ; à zéro, la déchirure
n'existe pas et il ne reste que la fonte par les hautes lumières — c'est-à-dire
exactement Flux. Il n'y avait donc rien à assembler : il y avait une courbe à
**calibrer**.

La conclusion de ChatGPT est juste, et c'est ce qui compte : une grammaire
d'intensité plutôt qu'une collection d'effets. Le travail était plus petit qu'il
ne le pensait, et c'est une bonne nouvelle.

---

## Ce que le prototype fait

`lab-catalogue.html` — dix plans, vidéos et images mélangées, une seule courbe.

| Geste | Vitesse | Ce qui se voit |
|---|---|---|
| Repos | 0 plan/s | image nette, **rien d'ajouté** |
| Lent | < 1,1 plan/s | fusion seule, ouverte par les hautes lumières |
| Franc | 1,1 → 3,2 plans/s | la matière commence à se déchirer |
| Arrachage | > 3,2 plans/s | bandes fines, filé, écart chromatique |

**Les seuils sont en plans par seconde**, donc indépendants de la machine et de
la fréquence d'affichage. C'est une correction issue d'un bug trouvé en test :
la retombée était calculée par image, donc sur un appareil lent l'effet serait
resté collé à l'image au lieu de s'effacer.

Deux choses ne subissent jamais l'effet : **le texte et la navigation**. L'image
se tord, l'information reste lisible. C'est la limite que je pose entre une
expérience et un gadget.

---

## Vérifié

- les quatre états sont traversés par le geste ;
- au repos le tirage retombe à un vrai zéro, aucun réglage ne subsiste ;
- dix plans chargés, vidéos et images ;
- **deux vidéos décodées au maximum**, celle qu'on regarde et la suivante ;
- repli complet sans WebGL — mêmes plans empilés en scroll-snap ;
- mouvement réduit : inertie neutralisée, tirage forcé à zéro.

## Non vérifiable ici, et je ne donnerai pas de chiffre faux

**Les performances réelles.** La boucle d'animation est bridée à environ 1 image
par seconde quand le panneau du navigateur n'est pas au premier plan. Toute
mesure d'images par seconde prise depuis cet environnement est fausse. Le
prototype affiche un compteur : il faut le lire sur une vraie machine, et sur un
téléphone.

**La calibration.** Savoir si 1,1 et 3,2 plans par seconde sont les bons seuils
est une question d'œil et de main, pas de mesure. Elle appartient au
propriétaire.

---

## Ce qui reste à décider

1. **Les seuils** — la déchirure se déclenche-t-elle trop tôt, trop tard ?
2. **La violence de l'arrachage** — trop, pas assez ?
3. **Où cette grammaire a le droit de vivre.** Le catalogue, oui. La fiche film,
   la section Contact, le pied de page ? La réponse par défaut devrait être non :
   un effet qui se répand partout cesse d'être un moment.
4. **Le son.** Les clips sont de la musique et tout est muet. C'est le territoire
   ouvert par l'ADN et jamais rempli, et probablement le prochain vrai gain.

## Ce que je n'intègre pas au site

Rien, tant que le propriétaire n'a pas jugé la sensation. `index.html`,
`films.js`, `admin.html` et `vercel.json` sont intacts.
