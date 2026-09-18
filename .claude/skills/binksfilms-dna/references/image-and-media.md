# Philosophie de l'image

L'image est le sujet. Tout le reste est un dispositif de présentation. Ce
document dit comment la traiter pour que le dispositif ne prenne jamais le
dessus.

---

## L'image porte, l'interface tient

Le texte vit **dans** la bannière, pas sous elle. Même information, simplement
posée sur l'image avec un voile qui assure la lisibilité. Ce choix a une
conséquence : chaque plan doit pouvoir accueillir du texte, donc le cadrage se
pense avec sa zone basse.

Corollaire : aucun élément décoratif ne s'ajoute à une image qui se suffit. La
vidéo d'intro ne reçoit aucun filtre, aucun grain, aucun overlay coloré — parce
qu'elle *porte déjà la direction artistique*. C'est la règle générale : si le
plan est bon, on s'écarte.

### Quand les deux invariants s'opposent

« L'image est le sujet » et « le texte vit dans la bannière » entrent en conflit
dès qu'un plan n'a pas de zone basse calme — un visage bas dans le cadre, un
fond clair, un élément important là où le cartel se pose.

Ordre de résolution, du meilleur au moins bon :

1. **Changer de plan.** L'image est choisie, pas subie. Un autre photogramme du
   même film règle le problème sans concession.
2. **Recadrer.** La réserve de 116 % autorise un décalage vertical qui dégage le
   bas du cadre.
3. **Renforcer le voile localement**, en gardant son principe : il monte du bas
   et s'éteint avant le milieu. Jamais un voile uniforme sur toute l'image.
4. **Sortir le texte du cadre.** En dernier recours seulement, et sur cette
   carte uniquement — jamais en changeant la règle pour toute la grille.

Ce qui n'est pas une option : assombrir l'image entière, ajouter un caisson
derrière le texte, ou réduire le texte jusqu'à l'illisible. Les trois sacrifient
un invariant pour sauver l'autre.

## Crop et format

- **Bureau :** 16/9. C'est le format du travail, pas un choix graphique.
- **Mobile :** aujourd'hui 16/9 également, avec un espacement resserré. Le code
  annonce en commentaire un « format d'affiche » qu'il n'applique pas — l'écart
  est documenté dans `extraction-report.md` §2 bis. L'intention est bonne et
  reste ouverte ; la citer comme un acquis serait faux.
- **Contre-champ et lecteur :** 16/9 strict, aucune exception.
- **Tournage / BTS :** 4/3 en grille de trois (deux sur petit écran). Le
  changement de format dit que ces images ont un autre statut — des documents,
  pas des œuvres.

Le format porte donc du sens : changer un ratio revient à changer la nature de
l'image. À décider consciemment.

## La réserve — profondeur sans zoom

Les images sont plus hautes que leur cadre (116 % de hauteur, calées à `-8%`) et
glissent au défilement. Cette **réserve** est ce qui permet le mouvement sans
jamais découvrir de vide.

Il n'y a **aucun zoom au survol**, et c'est une décision inscrite dans le code.
Le zoom au survol est le réflexe le plus répandu des grilles de portfolio ; le
site l'a explicitement écarté au profit d'un glissement piloté par le
défilement. Le reproduire serait revenir en arrière.

**Règle :** la profondeur vient du déplacement dans un cadre, jamais d'un
agrandissement au pointeur.

## Temporalité — la vidéo se mérite

L'ordre de dévoilement est toujours le même : **poster d'abord, mouvement
ensuite, son jamais sans geste.**

- Aucune vidéo ne se télécharge avant d'être utile (`preload="none"`, source
  posée au moment de jouer).
- Une seule preview joue à la fois. Sur bureau au survol, sur mobile quand la
  carte est au centre de l'écran.
- Aucune iframe YouTube n'existe avant le clic : ni habillage, ni cookie, ni
  requête.
- Le lecteur passe par un aperçu muet en boucle avant la lecture réelle.

Cette discipline n'est pas qu'une optimisation : elle fait partie de la
dramaturgie. L'image fixe est un plan d'attente, le mouvement est une
récompense.

## Compression et texture

Aucune texture n'est ajoutée. Pas de grain, pas de bruit, pas de dégradation
simulée, pas de filtre de compression esthétisé.

La seule manipulation d'image du site est le **mot-vidéo** : la vidéo est
désaturée, contrastée et fusionnée pour que les lettres du mot RÉALISATEUR
laissent passer l'image. Trois passes de fusion, un plancher rouge pour garantir
la lisibilité, et un repli complet si le navigateur ne suit pas.

Ce que cet exemple enseigne : une manipulation lourde est autorisée **quand elle
produit une idée** — ici, un mot taillé dans le film. Elle n'est pas autorisée
pour produire une ambiance.

## Repli — la dégradation fait partie du dessin

Une image absente ne laisse jamais un trou. La chaîne est écrite : image
personnalisée → miniature YouTube haute définition → miniature standard →
placeholder BINKSFILMS. Les vignettes grises de YouTube sont détectées par leur
taille et rejetées.

Une preview vidéo qui échoue retire sa balise et laisse la bannière. « Aucun
carré vide, aucune icône cassée. »

**Exigence pour tout nouveau système média** — reprise de `.claude/rules/media.md` :
stratégie de préchargement, source et crop mobile, politique d'autoplay,
poster/repli, état d'échec, nettoyage et cycle de vie, comportement en
mouvement réduit, comportement réseau (`Save-Data`, 2G).

Un dispositif média sans ces huit réponses n'est pas fini, quelle que soit sa
beauté.

## L'archive comme statut, pas comme texture

Dans `films.js`, `archive: true` (ou `status: "archived"`) retire un film du site
**sans le supprimer de la source**. Précision qui compte : le film est filtré
avant tout rendu et tout routage — il n'est donc **pas consultable** sur le site
public, même par URL directe. Il reste en revanche dans `films.js`, daté,
crédité, éditable dans `admin.html`.

C'est cela, l'archive BINKSFILMS — une logique de conservation dans la source de
données, et une hiérarchie entre ce qui est montré et ce qui est gardé. Un film
ne disparaît pas, il sort de la vitrine. La numérotation en bobine (`01 / 17`),
les dates de sortie, les crédits ligne par ligne participent du même geste :
**tenir un registre**.

Ce que cela autorise, si une direction future le demande : rendre l'archive
consultable est une extension **cohérente** avec l'ADN, pas une trahison — la
donnée est déjà là. Ce serait un geste LAB à part entière.

Chercher l'archive dans une texture VHS, c'est confondre le classement avec sa
patine. Voir `editorial-and-system.md` pour les conditions d'usage du
vocabulaire rétro.
