---
name: motion-language
description: Langage de mouvement BINKSFILMS. Utiliser pour toute interaction, transition, scroll, entrée/sortie, navigation, micro-mouvement, WebGL, shader ou changement d'état visible. Le mouvement est un matériau de DA au même niveau que l'image et la typographie. Ne pas utiliser pour une correction sans mouvement visible.
---

# BINKSFILMS — Motion Language

Le Motion n'est pas une décoration ajoutée après la DA.

Il doit donner au site :
- du rythme ;
- de la tension ;
- de la matière ;
- une sensation de montage ;
- une réponse physique au geste ;
- des moments de calme qui rendent les moments forts plus violents.

Principe central :

> **le mouvement doit avoir une cause, une inertie et une conséquence.**

Un élément qui bouge seulement parce qu'il peut bouger est un effet.
Un mouvement qui révèle une relation, une hiérarchie, une matière ou un changement d'état devient du langage.

---

## 1. Quatre niveaux d'intensité

### REPOS
L'image respire. Rien ne réclame l'attention.
Mouvements éventuels : dérive quasi imperceptible, vidéo vivante, profondeur discrète.

### RÉPONSE
Le geste utilisateur provoque une réaction directe.
Scroll, swipe, pression, vitesse ou direction peuvent modifier :
- inertie ;
- profondeur ;
- déformation ;
- cadrage ;
- rythme ;
- vitesse de transition.

### TRANSITION
Le passage entre deux états doit avoir une logique spatiale ou temporelle.
Éviter le simple fade générique comme réponse par défaut.

### SIGNATURE
Moment rare, immédiatement perceptible, pouvant employer des techniques lourdes :
WebGL, shader, distorsion, compositing, 3D, découpage temporel, changement de profondeur.

La signature ne doit pas être permanente.

---

## 2. Le mouvement doit suivre le geste

La vitesse du mouvement utilisateur est une donnée de DA.

Un geste lent et un geste violent ne doivent pas obligatoirement produire la même réponse.

Quand pertinent :
- lent = fusion / précision / contemplation ;
- franc = inertie / déplacement / tension ;
- rapide = accident contrôlé / déchirure / retard / perte temporaire de cohésion ;
- arrêt = retour vers une image propre.

Le mouvement doit pouvoir **retomber**.

Pas de glitch, aberration chromatique, vibration ou déformation qui reste affiché sans cause.

---

## 3. Penser comme un monteur, pas comme une bibliothèque d'animations

Avant d'animer, demander :

- Où est le point d'entrée ?
- Quelle information arrive avant l'autre ?
- Où est l'accélération ?
- Où est la coupe ?
- Où laisse-t-on respirer ?
- Le mouvement raconte-t-il un changement d'état ?
- Est-ce que deux mouvements simultanés se renforcent ou se parasitent ?

Le site peut avoir des accélérations, ralentissements, contre-mouvements et suspensions comme un montage vidéo.

---

## 4. Motion spatial

Le site n'est pas limité à X/Y + opacity.

Territoires ouverts :
- profondeur ;
- parallaxe réelle ;
- perspective ;
- zoom ;
- changement d'échelle ;
- rotation contrôlée ;
- masque ;
- découpage ;
- déplacement de matière ;
- shader ;
- 3D ;
- changement de point de vue ;
- éléments qui traversent plusieurs zones de l'interface.

Ne pas utiliser ces techniques pour impressionner techniquement.
Les utiliser quand elles produisent une sensation impossible avec une transition CSS standard.

---

## 5. Motion typographique

Le texte peut être animé mais ne doit jamais devenir illisible au moment où il porte une information importante.

Ouvert :
- apparition par groupe, ligne, mot ou caractère ;
- changement d'échelle ;
- variation de largeur/graisse pour une police variable ;
- glissement ;
- révélation par masque ;
- mouvement synchronisé à l'image.

Éviter :
- lettres qui tremblent en permanence ;
- faux terminal systématique ;
- texte glitché illisible ;
- timecodes décoratifs sans fonction.

---

## 6. Zones de silence

Certaines zones doivent pouvoir interdire ou fortement réduire le mouvement.

Le silence est nécessaire à l'intensité.

Dans l'expérience actuelle :
- le **flux** peut porter le mouvement fort ;
- la **fiche film** reste majoritairement une zone de lecture et de maîtrise ;
- un futur moment signature peut rompre cette règle seulement s'il apporte quelque chose de plus fort que l'effet lui-même.

---

## 7. Mobile = surface de motion principale

Le doigt n'est pas une version dégradée de la souris.

Sur mobile, exploiter :
- vitesse du swipe ;
- distance ;
- direction ;
- relâchement ;
- inertie ;
- changement de centre visuel.

Ne pas construire une chorégraphie desktop puis la compresser sur téléphone.

---

## 8. Performance fait partie de la DA

Un mouvement qui saccade change son sens.

Donc :
- requestAnimationFrame pour les boucles ;
- limiter les médias décodés ;
- pause quand invisible ;
- densité adaptative ;
- éviter les lectures/layout synchrones répétées ;
- tester sur vrai téléphone ;
- prévoir un repli qui conserve la structure même s'il perd l'effet.

Chercher 60 fps quand possible, mais surtout une sensation stable.

---

## 9. Mouvement réduit

prefers-reduced-motion ne signifie pas « site cassé ».

Le repli doit conserver :
- hiérarchie ;
- compréhension ;
- navigation ;
- changement d'état.

Retirer ou neutraliser :
- inertie forte ;
- distorsion ;
- grands déplacements ;
- répétitions animées inutiles.

---

## 10. Anti-patterns

Rejeter par défaut :
- fade + translate sur chaque bloc ;
- stagger identique partout ;
- smooth scroll utilisé comme seule idée ;
- parallax systématique ;
- glitch constant ;
- transitions qui bloquent la navigation ;
- animation lente parce que « premium » ;
- mouvement qui retarde l'accès au contenu ;
- 3D carousel générique ;
- effets qui ne réagissent ni à l'image ni au geste.

---

## 11. Test de validation

Un mouvement important doit répondre oui à au moins deux questions :

1. Est-il perceptible sans qu'on l'explique ?
2. Réagit-il à quelque chose de réel ?
3. Rend-il la structure plus compréhensible ?
4. Donne-t-il une sensation spécifique à BINKSFILMS ?
5. Serait-il difficile de le remplacer par un preset générique sans perdre quelque chose ?

S'il échoue, simplifier ou supprimer.

---

## 12. Règle pour les prochaines itérations

Chaque évolution visuelle de `lab-experience` doit préciser :
- son état de repos ;
- son déclencheur ;
- sa courbe d'intensité ;
- sa retombée ;
- son comportement mobile ;
- son comportement reduced-motion ;
- son coût performance ;
- l'endroit où le mouvement est volontairement absent.

Le Motion est désormais un **critère obligatoire de revue DA**.
