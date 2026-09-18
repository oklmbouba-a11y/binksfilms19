# Mouvement et interaction

Aucune bibliothèque n'est nommée ici. Ce document décrit un comportement, pas
une implémentation.

---

## Quand bouger, quand tenir, quand couper

Le mouvement a trois emplois, et un seul à la fois :

**Révéler.** Une image ou un titre entre en scène. Mouvement long (0.85 à 1.5 s),
courbe très décélérée, une seule fois. C'est le registre de l'entrée.

**Répondre.** Un élément réagit au pointeur, au doigt ou au clavier. Mouvement
court (0.2 à 0.55 s), déplacement de quelques pixels, jamais plus. C'est le
registre de l'accusé de réception.

**Couper.** Passage d'un état à un autre sans transition, ou par un noir bref.
Le site dispose d'un voile de coupe dédié qui bascule en 120 ms. C'est le
registre du montage — et c'est souvent le bon choix là où l'on met une
transition par réflexe.

**Le reste du temps, rien ne bouge.** Un site où quelque chose est toujours en
mouvement n'a plus de moment fort.

## Les courbes

Le site en emploie trois, plus des `ease` courts sur les transitions de couleur :

| Courbe | Emploi dominant |
|---|---|
| `cubic-bezier(.2,.7,.2,1)` | micro-interactions, et apparitions de texte |
| `cubic-bezier(.16,1,.3,1)` | grandes entrées, 1.2 – 1.5 s |
| `cubic-bezier(.2,.75,.2,1)` | le volet de la bannière, 1.05 s |

**Ce qui est invariant n'est pas le nombre de courbes, c'est leur famille :**
toutes sont des décélérations franches — départ rapide, arrivée qui se pose — et
**aucune ne dépasse sa valeur d'arrivée**. Aucun rebond, aucune élasticité.
« Rien ne clignote, rien ne rebondit. »

Il n'y a pas d'appariement strict courbe/durée : la même courbe sert à 0.25 s sur
un survol et à 0.85 s sur une apparition. Choisir la durée selon le rôle. Les fourchettes actuelles — 0.2 à 0.55 s pour
répondre, 0.85 à 1.5 s pour révéler — sont un repère de niveau B, pas une
échelle obligatoire.

Ce qui est exclu : `ease-in-out` symétrique, qui donne un mouvement mou ; et
toute courbe à dépassement, qui donne un mouvement joueur. Ni l'un ni l'autre
n'appartient à ce site.

## Le volet — le geste signature

Les images ne se révèlent pas en fondu, elles s'ouvrent par un **volet** : un
`clip-path` qui se rétracte, comme un rideau qui monte. Les bannières montent du
bas, le titre d'accueil s'ouvre latéralement — le nom depuis la gauche, la phrase
depuis la droite.

La photo du réalisateur combine deux volets opposés : le cadre arrive de la
droite pendant que l'image glisse à l'intérieur en sens inverse. « Deux
mouvements opposés : c'est ce qui rend le glissement franc. »

**Principe réutilisable :** une révélation BINKSFILMS découvre une image, elle
ne la fait pas apparaître. Le fondu est un défaut de navigateur ; le volet est
une décision de montage.

## Décalage et cascade

Les entrées s'échelonnent par petits décalages (50 à 650 ms), toujours dans
l'ordre de lecture : le nom, puis la phrase, puis le rôle. La cascade raconte une
hiérarchie ; elle n'est pas un effet de liste.

Le bloc de la voix va plus loin : chaque **mot** s'allume au défilement, « les
mots arrivent comme on les dirait ». C'est du rythme de parole, pas une
animation de texte. En mouvement réduit, tous les mots sont visibles d'emblée.

## Rythme et silence

Le site alterne délibérément : une page film enchaîne lecteur, titre, crédits,
note, contre-champ, tournage, navigation — avec 44 à 84px entre chaque bloc et
**un seul** moment interactif, le contre-champ.

**Règle de dosage :** un geste marquant par écran. Deux gestes marquants
s'annulent mutuellement.

## Interaction — ce qui paraît BINKSFILMS

**Le maintien.** Le contre-champ se tient appuyé pour voir derrière la caméra.
C'est le geste le plus spécifique du site : il demande un engagement physique,
il dure ce que le visiteur veut, il révèle un envers. Une interaction qui
demande de *tenir* plutôt que de *cliquer* appartient à ce vocabulaire.

**La porte.** L'intro est un seuil : une vidéo, un mot, un passage. Une fois par
visite. Aucun minuteur n'entre à la place du visiteur — le franchissement est un
acte, jamais une attente.

**Le filet qui s'allonge.** La navigation précédent/suivant trace une ligne qui
court sur toute la largeur au survol. Discret, mécanique, satisfaisant.

**Gestes en refus par défaut :** curseur personnalisé, défilement détourné,
magnétisme au pointeur, révélation au survol sur chaque élément, particules.
Ce sont des refus **avec conditions de levée**, listés dans `anti-dna.md` — pas
des exclusions. Leur absence du site actuel ne les disqualifie pas ; `SKILL.md`
§2C classe d'ailleurs le curseur signifiant parmi les registres disponibles.

**Le vocabulaire du plateau est une aide à penser, pas un péage.** Chercher
comment un geste se nommerait en langage de tournage, de montage ou d'archive —
maintenir, couper, révéler, cadrer, classer, dérouler — est un bon réflexe : si
un nom vient facilement, le geste a probablement une logique.

Mais **l'absence de nom ne disqualifie pas**. Une interaction peut être
BINKSFILMS sans nom cinématographique, si sa logique sert l'image, la durée, la
découverte ou la mémoire du travail. Et l'inverse est plus dangereux encore : un
nom bien choisi posé sur un effet ne crée pas d'idée.

## Friction

Une friction légère est autorisée quand elle **produit du sens** : le maintien du
contre-champ, la porte d'entrée, le parcours de devis en étapes.

Elle n'est jamais autorisée pour ralentir l'accès à l'information : les crédits,
les liens, le lecteur et le contact restent immédiats. La friction est une figure
de style, pas un péage.

## ADN mobile

Le mobile est **conçu**, pas réduit. Ce que fait le site, et qui doit servir de
modèle :

| Desktop | Équivalent mobile authored |
|---|---|
| Preview au survol | Preview quand la carte est **au centre de l'écran** |
| Cartel toujours lisible | Le cartel se **floute et s'efface** quand la carte est au centre : l'image reste seule |
| Grille en deux colonnes | Une colonne, espacement resserré, corps de texte remontés |
| Profondeur par bascule du cadre | **La bannière grandit et s'éclaircit en approchant du centre** (échelle 0.93 → 1, luminosité 0.72 → 1) — l'échelle fait la hiérarchie |
| Survol du contre-champ | Maintien tactile, avec `user-select` neutralisé |
| Navigation gauche/droite | Deux zones empilées, très aérées, séparées d'un filet infime |

Les deux lignes les plus instructives : sur mobile, **le site retire du texte
pour laisser l'image**, et il **fait porter la hiérarchie par l'échelle et la
luminosité** plutôt que par la bascule en profondeur du bureau. L'assombrissement
est d'ailleurs appliqué à l'image et non au cadre, pour ne pas éteindre le texte
des bannières en attente — ce niveau de soin est le vrai standard du projet.

C'est l'inverse du réflexe habituel, qui conserve tout en plus petit. Ce sont les
meilleurs modèles de « mobile authored » dont on dispose — à transposer, pas à
recopier.

À noter : le code annonce aussi un passage au format d'affiche sur mobile, qu'il
n'applique pas — voir `built-expression.md` §2 bis. Ne pas le citer comme
acquis.

Principes qui en découlent :

1. **Chaque état de survol a un équivalent tactile**, enfermé dans
   `@media(hover:hover)` d'un côté, `:active` / `:focus-visible` de l'autre. « Au
   doigt : au contact, sans état qui reste collé. »
2. **Le centre de l'écran remplace le pointeur.** C'est l'attention du visiteur
   sur mobile. La carte centrée est la carte regardée.
3. **Le mobile a le droit de montrer moins.** Effacer le texte pour laisser
   l'image est une décision mobile plus forte que de tout conserver en plus petit.
4. **Les zones système comptent.** `env(safe-area-inset-bottom)`, barres de
   navigateur, encoche : aucun élément important ne finit caché.
5. **Cibles tactiles confortables**, `touch-action: manipulation`, pas de flash
   bleu, pas de délai de 300 ms.

Une proposition sans son paragraphe mobile n'est pas une proposition finie.

## Mouvement réduit

`prefers-reduced-motion` coupe transitions et animations, mais **ne retire
jamais le contenu** : les images sont visibles, les cartels aussi, l'intro reste
avec ENTER fonctionnel, la photo du réalisateur reprend son flux normal. Les
previews sont désactivées.

**Règle :** en mouvement réduit, on perd le mouvement, jamais l'information ni
l'accès. Tout geste nouveau doit dire ce qu'il devient dans ce mode.

## Détails cachés

Le site n'a aucun easter egg, et c'est cohérent : ses détails sont **discrets et
fonctionnels**, pas ludiques.

Le contre-champ ne s'annonce que par une ligne minuscule. La numérotation en
bobine se lit si on la cherche. La flèche pivotée à 45° est un caractère choisi
pour ne pas devenir un carré bleu sur certains téléphones — un détail invisible
qui ne se remarque que s'il manque.

**Doctrine :** un détail caché récompense l'attention sans jamais conditionner
l'usage. Il ne demande pas de découvrir un secret pour accéder à une fonction, il
n'interrompt pas, il ne se signale pas. S'il faut une infobulle pour l'expliquer,
ce n'est plus un détail — c'est une fonction mal exposée.
