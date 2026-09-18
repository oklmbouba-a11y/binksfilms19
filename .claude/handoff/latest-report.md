# Rapport — LAB / expérience : la structure complète

**Date :** 2026-09-18 · **Agent :** Claude Code (Opus 5)
**Mission :** structurer complètement le langage créatif
**Périmètre :** prototype isolé. Aucun fichier du site modifié.

---

## Le livrable n'est pas l'effet, ce sont les trois règles

`lab-experience.html` — entrée, flux, ouverture d'un film, retour. Une
expérience entière, pas une démonstration.

**1. La grammaire vit dans le flux, et nulle part ailleurs.**
La fiche film est une **zone de silence** : aucun effet n'y entre, jamais, et
l'intensité y est forcée à zéro — pas atténuée, à zéro. C'est la règle la plus
importante du système : *un langage qui n'a pas d'endroit interdit devient un
thème.* Sans elle, chaque section finit par avoir son gimmick, ce que la
direction DA voulait précisément éviter.

**2. Rien ne passe par du noir.**
Ouvrir un film ne coupe pas. Le plan qu'on regardait reste là et devient le fond
de sa propre fiche, qui monte par-dessus. Réponse directe au reproche du
propriétaire sur le trou entre les images.

**3. Le texte et la navigation ne subissent jamais l'effet.**
L'image se tord ; l'information reste lisible. C'est la limite entre une
expérience et un gadget.

**Conséquence pour la suite :** un futur effet devra déclarer dans quelle zone il
vit, ou il n'entre pas dans le système.

---

## La courbe d'intensité

Une seule, exprimée en **plans par seconde** — donc indépendante de la machine et
de la fréquence d'affichage.

| Geste | Vitesse | Ce qui se voit |
|---|---|---|
| Repos | 0 | image nette, rien d'ajouté |
| Lent | < 1,1 | fusion par les hautes lumières |
| Franc | 1,1 → 3,2 | la matière se déchire |
| Arrachage | > 3,2 | bandes fines, filé, écart chromatique |

---

## Budget média tenu

- deux vidéos décodées au maximum dans le flux ;
- **zéro vidéo décodée quand la fiche est ouverte** — rien ne tourne derrière une
  zone de silence ;
- repli complet sans WebGL : mêmes plans, même fiche, même structure ;
- mouvement réduit : inertie neutralisée, intensité forcée à zéro.

---

## Deux défauts trouvés en test, et corrigés

**La retombée était calculée par image, pas par seconde.** Sur un appareil lent
l'effet serait resté collé à l'image au lieu de s'effacer. Passée en temps réel.

**La reprise de lecture pouvait être perdue.** Posée dans la boucle, elle
arrivait parfois après l'expiration de l'autorisation de lecture accordée par le
clic. Elle est maintenant appelée dans le geste, la boucle ne servant plus que de
filet.

Ce second défaut n'est visible que sur une machine lente ou une boucle bridée —
il l'a été ici parce que le panneau du navigateur bride l'animation à environ une
image par seconde. L'environnement de test a rendu service.

---

## Ce que je ne peux pas juger d'ici

**Les performances réelles** — toute mesure d'images par seconde prise depuis ce
panneau est fausse.

**La calibration des seuils** — 1,1 et 3,2 plans par seconde sont des valeurs de
départ défendables, pas des vérités. La déchirure se déclenche-t-elle trop tôt ?
L'arrachage est-il trop violent ? Question d'œil et de main.

**Si la fiche doit vraiment être muette.** C'est ma règle, pas celle de ChatGPT.
Elle est peut-être trop stricte — mais je préfère un système qui interdit
quelque part et qu'on assouplit, à un système qui autorise partout et qu'on ne
rattrape plus.

---

## À décider

1. Les seuils.
2. La violence de l'arrachage.
3. La règle de silence : trop stricte ou juste ?
4. Le son — les clips sont de la musique et tout est muet. Territoire ouvert par
   l'ADN, jamais rempli, et probablement le prochain vrai gain.

Rien n'est intégré au site tant que la sensation n'est pas jugée.
