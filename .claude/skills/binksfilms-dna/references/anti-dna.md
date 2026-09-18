# Anti-DNA — refus par défaut

Chaque entrée est un **refus par défaut**, pas une interdiction absolue. Chacune
porte sa condition de levée.

Règle de procédure : la charge de la preuve est inversée. Il ne suffit pas qu'il
n'y ait pas d'objection — il faut une raison BINKSFILMS écrite, qui tienne en une
phrase, et qui passe le filtre de décision de `SKILL.md` §5.

Un argument qui ne lève jamais un refus : « ça rendrait bien », « c'est dans l'air
du temps », « les autres portfolios le font », « ça montre qu'on maîtrise la
technique ».

---

## Réflexes du web créatif

| Refus | Pourquoi ici | Condition de levée |
|---|---|---|
| **Bento grid** | Une grille de blocs égaux détruit la hiérarchie à trois niveaux et met tout au même poids | Jamais pour présenter des films. Envisageable pour des données réellement parallèles, ce que le site n'a pas |
| **Glassmorphism** | Flou et transparence ajoutent une matière qui n'existe pas dans un langage de montage | Aucune connue |
| **Cartes SaaS arrondies** | Le rayon appartient au cadre d'image (11px) ; les contrôles de saisie et les CTA sont carrés | Le rond est réservé à la commande de lecture — voir `visual-language.md` |
| **Blobs WebGL, shader liquide décoratif** | Une forme organique sans sujet, devant des films | Seulement si la forme *est* le sujet et vient de la matière filmée |
| **Grosse serif « studio créatif » seule** | La serif italique n'a de sens qu'en contre-voix de la grotesque. Isolée, elle devient le cliché du studio | Levée si la contre-voix est présente dans le même bloc |
| **Smooth scroll détourné** | Le défilement est un contrôle du visiteur, pas une surface d'expression | Seulement pour un dispositif où le défilement *est* le sujet, et jamais sur la navigation courante |
| **Micro-interaction sur chaque élément** | Un site qui réagit partout n'a plus de moment fort. Le site en compte très peu, toutes minuscules | Levée élément par élément, jamais en système |
| **Curseur personnalisé** | Absent du site. Sans fonction, c'est une signature d'agence | Seulement s'il *fait* quelque chose — révéler, mesurer, cadrer — et jamais sur mobile, où il n'existe pas |
| **Transition Awwwards recopiée** | Sans concept, c'est une citation | Levée seulement si le geste porte une idée propre au film qu'il sert. **Le renommer ne suffit pas** — un shader de distorsion rebaptisé « le volet » reste un shader de distorsion |
| **Fond dégradé animé, particules, aurores** | Mouvement permanent sans sujet, derrière l'image | Aucune connue |
| **Dark mode / light mode** | `color-scheme:dark` est déclaré : le sombre est l'état unique, pas la moitié d'une bascule | Aucune. Un thème clair serait une autre marque |
| **Design system homogénéisant** | Un système qui rend toutes les sections interchangeables efface la différence entre QUIET, SIGNATURE et LAB | Les jetons partagés sont bons ; la composition doit rester libre |

## Réflexes « premium »

| Refus | Pourquoi ici |
|---|---|
| **Doré, cuivre, champagne** | Le luxe BINKSFILMS est du vide et du refus, pas de la matière précieuse |
| **Serif fine sur noir + immense vide = « luxe »** | Recette de marque de parfum. Contredit *les beaux arts du **ghetto*** |
| **Marbre, textures nobles, réflexions, halos** | Aucun matériau simulé dans le site |
| **Vocabulaire de maison** | « atelier », « maison », « savoir-faire », « univers » : la voix du site est en première personne et parle sans protocole |
| **Compteur animé, bloc de statistiques, badges** | « Le chiffre porte par l'échelle, pas par un bloc de statistiques » |
| **Témoignages, logos clients, récompenses** | Absents, et leur absence est une position |

## Réflexes rétro-numériques

Voir `editorial-and-system.md` pour les quatre conditions d'entrée.

| Refus | Pourquoi ici |
|---|---|
| **Grain global** | Explicitement écarté dans le code : la vidéo « porte déjà toute la direction artistique » |
| **Glitch permanent** | Un effet sans idée, répété. Classé anti-DNA par le blueprint |
| **Filtre CRT / scanlines sur tout** | Dégrade l'image alors que l'image est le sujet |
| **Timecode décoratif qui défile** | Cosplay de console. Un timecode est recevable s'il est vrai et local |
| **Interface générale déguisée en système d'enregistrement** | La technologie devient plus bruyante que les films |
| **Patine, poussière, rayures ajoutées** | Simule un vécu que le travail n'a pas besoin de mimer |

## Anti-patterns propres à ce projet

Découverts dans le code. Ce sont les erreurs les plus probables sur **ce** site,
parce qu'elles paraissent inoffensives.

**Le bouton d'application.** Arrondir un contrôle de saisie, ou trop arrondir une
image. La règle réelle : 11px sur les cadres d'image (13px mobile), 0 sur les
contrôles et les CTA, et le rond réservé à la seule commande de lecture.
L'inverser est le tell le plus rapide d'un site générique.

**La plaque au lieu de la voix.** Composer en capitales espacées une phrase que
quelqu'un dit. Le code l'écrit : « Les capitales et l'interlettrage font une
déclaration ; ici on veut une voix. » Les capitales sont le registre de
l'étiquette système.

**Le rouge en surface.** Un bouton, un bandeau, un lien ou un état en rouge. Le
rouge apparaît trois fois dans tout le site et il *désigne* — il ne remplit
jamais.

**Le zoom au survol sur une bannière.** Explicitement écarté au profit du
glissement piloté par le défilement. Le remettre serait revenir en arrière.

**Le rebond.** Toute courbe élastique ou avec dépassement. « Rien ne clignote,
rien ne rebondit. »

**Le fondu à la place du volet.** Une image BINKSFILMS s'ouvre par un rideau,
elle n'apparaît pas en transparence. Le fondu est le comportement par défaut du
navigateur, pas une décision.

**L'effet posé sur un plan qui se suffit.** Si le plan est bon, on s'écarte.

**Le texte sous l'image.** « Le texte vit dans la bannière, pas sous elle. »
Sortir le cartel du cadre casse le rapport image/interface.

**Le mobile-en-plus-petit.** Toute proposition dont l'expression tactile est
« la même chose, réduite ». Le site remplace le survol par le centre de l'écran
et efface le texte pour laisser l'image : c'est un autre dessin, pas une
adaptation.

**L'ajout qui n'enlève rien.** Une proposition qui ajoute un élément sans en
retirer aucun a rarement passé le troisième invariant.

---

## Cas limite : quand un refus se lève vraiment

Le **mot-vidéo** est l'exemple à garder en tête. Trois passes de fusion
chromatique, une vidéo désaturée et contrastée, un plancher rouge : sur le
papier, c'est exactement le genre d'effet que cette liste refuse.

Il tient parce qu'il satisfait tout le filtre : c'est une **idée** nommable en
une phrase — un mot taillé dans le film ; il est **local** — un seul mot, une
seule fois ; il **sert l'image** au lieu de la recouvrir — l'image passe à
travers les lettres ; il a un **repli complet** via `@supports` ; et il est
**irremplaçable** — aucune couche plus simple ne produit ce résultat.

C'est le standard. Un effet qui ne coche pas ces cinq cases n'est pas un
mot-vidéo, c'est une décoration.
