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
