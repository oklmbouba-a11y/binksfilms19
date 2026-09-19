# Blockers & dette — BINKSFILMS

Sévérités définies dans `.claude/skills/quality-contract/SKILL.md` :
`BLOCKER` · `MAJOR` · `MINOR` · `POLISH`.

**État au 2026-09-18 : 0 BLOCKER ouvert. Dépôt synchronisé avec GitHub.**
La Phase 2 (`binksfilms-dna`) n'est bloquée par aucun point technique.

---

## B-001 — Stratégie d'historique GitHub
**Sévérité :** BLOCKER · **Propriétaire :** utilisateur · **Statut :** RÉSOLU 2026-09-18

Le dépôt distant `oklmbouba-a11y/binksfilms19` contenait 17 commits et une
arborescence dupliquée : les fichiers du site à la racine ET dans un sous-dossier
`deploiement/`, plus un dossier `previews/`. Aucun `.claude/`. L'historique local
était indépendant — push simple impossible.

**Décision utilisateur :** fusionner en préservant les 17 commits, adopter
l'arborescence locale (strictement plus récente), écarter les doublons.

**Réalisé :** merge `-s ours --allow-unrelated-histories` (commit `8c0b00f`).
L'arbre retenu est celui du local, bit pour bit — intégrité des quatre fichiers
du site vérifiée par hash contre le tag `core-phase1`. Les 17 commits distants
restent atteignables dans l'historique.

Écartés de l'arborescence : `deploiement/` (10 fichiers), `previews/` (2),
`hero-loop.mp4` racine. Voir B-008 pour le seul fichier non dupliqué.

---

## B-002 — Authentification GitHub
**Sévérité :** BLOCKER · **Propriétaire :** utilisateur · **Statut :** RÉSOLU 2026-09-18

GitHub CLI n'est pas installé, mais le **Git Credential Manager était déjà
configuré au niveau système** (`C:/Program Files/Git/etc/gitconfig` →
`credential.helper = manager`). Le diagnostic initial était faux : seule la
portée `--global` avait été vérifiée.

Le push a ouvert la fenêtre GCM « Connect to GitHub », l'utilisateur a validé,
et la synchronisation a abouti : `d18b018..3a66000  main -> main`, plus le tag
`core-phase1`. Aucun identifiant n'a transité par Claude.

**Pour les prochaines missions :** le push fonctionne désormais sans
intervention, les identifiants étant mémorisés par GCM. GitHub CLI reste
optionnel — utile seulement si le travail sur les pull requests devient
nécessaire.

---

## B-003 — Cinq médias manquants sur le film `fulltrap-…`
**Sévérité :** MAJOR · **Propriétaire :** contenu · **Statut :** RÉSOLU 2026-09-18

Film `fulltrap-skinny-bastard-skinny-bastard-s-flow-type-shit`, statut
`published`. Manquent : `…-bann.jpg` (poster), `…-plan.jpg` + `…-derr.jpg`
(contre-champ), `…-tour.jpg` (BTS), `…-prev.mp4` (preview).

**Effet mesuré en navigateur :** la carte du portfolio est correcte (repli sur
la miniature YouTube), mais sur la fiche film le bloc **Contre-champ affiche
deux fois le placeholder SVG** et la section **Tournage s'affiche vide, avec son
seul intertitre**.

**Piste :** `images/skinny.jpg` et `videos/skinny.mp4` sont probablement les
originaux non renommés. À confirmer visuellement par l'utilisateur.

**Résolu autrement :** les cinq fichiers existaient sur le disque sous leurs
noms d'export bruts. Identifiés par lecture des images, puis copiés sous les noms
que `films.js` déclare déjà — donc sans toucher au fichier généré. Le contre-champ
retenu oppose le plan étalonné au rush vert où le cadreur est visible.
Vérifié au navigateur : maintien fonctionnel, section Tournage pourvue.

---

## B-004 — Chemin `videos/previews/` erroné
**Sévérité :** MAJOR · **Propriétaire :** contenu · **Statut :** RÉSOLU 2026-09-18

`films.js` attend `videos/previews/saisai-…-preview.mp4`.
Le fichier existe à `videos/saisai-…-preview.mp4`. Le dossier `videos/previews/`
n'existe pas.

Conséquence : la preview au survol de la carte SaiSai ne démarre jamais — le
code retire silencieusement la balise `<video>` et laisse la bannière. Invisible
pour le visiteur, mais une intention de design est perdue.

**Résolu :** le fichier a été déplacé vers le chemin que `films.js` déclare,
sans duplication et sans édition du fichier généré. À noter : `admin.html` génère
aujourd'hui des previews à plat dans `videos/`, donc un futur export normalisera
ce chemin — le déplacement est une réparation, pas une convention à suivre.

---

## B-005 — Quatre assets orphelins, 5,0 Mo
**Sévérité :** MINOR · **Propriétaire :** contenu · **Statut :** OUVERT

`images/00079.MTS.00_01_37_00.Still001.jpg`,
`images/Adjustment Layer.00_00_56_18.Still013.jpg`,
`images/Adjustment Layer.00_01_57_23.Still018.jpg`,
`images/contre champs.jpg`.

Exports bruts Premiere/After Effects, jamais référencés. Déployés pour rien,
mais jamais requêtés par un visiteur : aucun coût côté client. Ne pas supprimer
sans confirmation — `contre champs.jpg` pourrait être un visuel destiné au
contre-champ de B-003.

---

## B-006 — `GUIDE-DEPLOIEMENT.md` désynchronisé
**Sévérité :** MINOR · **Propriétaire :** documentation · **Statut :** OUVERT

Le guide annonce un dossier `videos/previews/` et un `hero-loop.mp4` à la
racine. Sur disque : pas de `previews/`, et `hero-loop.mp4` est dans `videos/`.
Même cause racine que B-004. À corriger dans la même passe.

---

## B-007 — Port 4173 partagé entre sessions
**Sévérité :** MINOR · **Propriétaire :** environnement · **Statut :** CONTOURNÉ

Une autre session Claude occupe le port 4173. La vérification a été faite sur
ce serveur après avoir confirmé qu'il sert bien ce répertoire (17 films,
`FILMS_SCHEMA = 2`). Sans conséquence, mais à savoir si deux sessions
travaillent en parallèle.

---

## B-008 — Un fichier distant sans équivalent local, écarté de l'arborescence
**Sévérité :** MINOR · **Propriétaire :** contenu · **Statut :** OUVERT

`previews/saisai boro 700 fin des temps.mp4` — 4,57 Mo, blob `d20c35aa37`.

Lors de la fusion (B-001), les fichiers écartés ont été vérifiés un à un.
Deux étaient des doublons bit-à-bit d'un fichier local :

| Écarté | Identique à | Blob |
|---|---|---|
| `previews/fin des temps.mp4` | `videos/saisai-…-preview.mp4` | `d5e9d9ec` |
| `hero-loop.mp4` (racine) | `videos/hero-loop.mp4` | `9ffca058` |

Celui-ci n'a **aucun équivalent local**. Il est référencé par aucun code —
ni `index.html`, ni `films.js`. Probablement un montage antérieur ou plus long
de la preview SaiSai (4,57 Mo contre 3,33 Mo pour celle en service).

**Rien n'est perdu :** la fusion ayant préservé l'historique distant, le fichier
reste extractible à tout moment :

```
git show d20c35aa37 > "videos/le-nom-choisi.mp4"
```

**À décider :** le réintégrer sous un nom conforme à la convention
d'`admin.html`, ou le laisser dormir dans l'historique. À traiter avec B-003
et B-004, dans la même passe de correction contenu.

---

## B-009 — Le format d'affiche mobile est commenté mais pas implémenté
**Sévérité :** MINOR · **Propriétaire :** site · **Statut :** RÉSOLU 2026-09-18

Relevé lors de l'extraction ADN, confirmé par `innovation-critic`.

Le commentaire de la grille mobile annonce : « Format d'affiche plutôt que
vignette 16/9, espacement resserré. » Le bloc `@media(max-width:760px)` ne
change en réalité que le `gap`, le rayon, le padding du cartel et les corps de
texte. `.film .thumb` conserve `aspect-ratio:16/9`, qu'aucune règle ne
surcharge.

Ce qui *est* réellement authored sur mobile reste substantiel : l'effacement
flouté du cartel quand la carte est au centre de l'écran, la preview déclenchée
par le centrage plutôt que par le survol, l'espacement resserré.

**Rien n'est cassé** — le site est correct sur mobile, simplement pas dans le
format annoncé.

**Tranché :** l'intention est tenue. `.film .thumb` passe en `aspect-ratio:3/4`
sur mobile, et le plancher de luminosité des cartes hors centre monte de 0,72 à
0,82 en conséquence.

La baseline a montré que le commentaire décrivait une contrainte géométrique et
non une préférence : en 16/9 pleine largeur, une carte plafonne à 211 px de haut
sur un téléphone, donc « une carte à la fois » y est impossible. On passe de 3,66
à 1,73 carte par écran, et le cartel de 53 % à 21 % de l'image.

Ratio retenu : **3/4**, tranché par le propriétaire après comparaison à l'œil avec 4/5.

`binksfilms-dna` et `built-expression.md` doivent être mis à jour : cet écart
intention/implémentation n'existe plus.

---

## B-010 — Déséquilibre de masse dans `binksfilms-dna`
**Sévérité :** MINOR · **Propriétaire :** skill · **Statut :** OUVERT

Relevé par `innovation-critic` lors de la validation V1.1, et non résolu.

Le skill déclare en vingt lignes que les valeurs du site ne sont pas des lois,
puis fournit plusieurs centaines de lignes de valeurs précises — hex, rayons,
fourchettes de durée, interlettrages. Le concret est mémorisable et générateur ;
l'abstrait ne l'est pas. À la génération, le concret risque de l'emporter sur le
principe, quels que soient les avertissements.

Correctifs appliqués : marquage de niveau sur chaque référence, en-têtes de
lecture, `built-expression.md` renommé et préfacé. Le déséquilibre de volume
demeure.

**Pistes non tranchées :** déplacer toutes les valeurs dans le seul
`built-expression.md` et n'en garder aucune ailleurs ; ou accepter le
déséquilibre, en considérant que la précision du relevé vaut le risque. La
seconde est retenue par défaut, faute de démonstration contraire.

**À réévaluer** après la première mission créative réelle : si les propositions
produites ressemblent au site actuel plutôt que de le prolonger, le déséquilibre
est confirmé et il faudra trancher.

---

## B-011 — La preview du clip Skinny Bastard est trois fois trop lourde
**Sévérité :** MAJOR · **Propriétaire :** contenu · **Statut :** OUVERT

`videos/fulltrap-…-prev.mp4` : **10,4 Mo pour 6,4 s**, soit 1,63 Mo/s.
Les deux autres vidéos du site tiennent une densité trois fois moindre :

| Fichier | Durée | Poids | Densité |
|---|---|---|---|
| preview Skinny Bastard | 6,4 s | 10,4 Mo | **1,63 Mo/s** |
| preview SaiSai | 5,9 s | 3,2 Mo | 0,54 Mo/s |
| `hero-loop.mp4` | 6,0 s | 2,6 Mo | 0,43 Mo/s |

Conséquence : au survol d'une carte, le visiteur télécharge 10 Mo pour une boucle
muette de six secondes. C'est contraire à la discipline média du projet
(`.claude/rules/media.md` : « défer media until useful », « account for slow
networks ») — la garde `saveData` / 2G protège les connexions lentes, pas une
connexion normale.

**Pas corrigé** : `ffmpeg` n'est pas installé sur cette machine, et recompresser
n'est pas une décision technique neutre — le débit choisi touche à la qualité de
l'image, donc au travail.

**À faire :** recompresser autour de 0,5 Mo/s (viser 3 à 4 Mo), puis remplacer le
fichier. Le nom et le chemin sont déjà bons, rien d'autre à changer.

---

## B-012 — Doublons média après la réparation
**Sévérité :** MINOR · **Propriétaire :** contenu · **Statut :** OUVERT

La réparation de B-003 a procédé par **copie**, conformément à ce qui avait été
validé : les originaux restent en place. Cinq fichiers existent donc en double,
pour environ 16 Mo :

| Original (orphelin) | Copie en service |
|---|---|
| `images/skinny.jpg` | `…-bann.jpg` |
| `images/Adjustment Layer.00_00_56_18.Still013.jpg` | `…-plan.jpg` |
| `images/contre champs.jpg` | `…-derr.jpg` |
| `images/00079.MTS.00_01_37_00.Still001.jpg` | `…-tour.jpg` |
| `videos/skinny.mp4` | `…-prev.mp4` |

Reste par ailleurs `images/Adjustment Layer.00_01_57_23.Still018.jpg` (1,8 Mo),
un plan fisheye étalonné qui n'est utilisé nulle part — ce serait une bannière
alternative crédible.

Rien n'est cassé : ces fichiers ne sont jamais requêtés par un visiteur. Ils
pèsent sur le dépôt, pas sur le site. À supprimer quand le propriétaire aura
confirmé que les copies sont les bonnes.

---

## B-013 — Le comportement tactile du cube reste non prouvé

**Ouvert le 19/09/2026.**

Le bug signalé par le propriétaire — « le cube réagit à côté et le défilement
bug après » — a reçu deux séries de correctifs (`0a6a771`, puis l'application de
l'audit). Aucun des deux n'est **vérifié sur un appareil réel**.

Ce que l'aperçu automatisé ne peut pas reproduire :
- l'arbitrage de défilement d'un navigateur mobile, qui décide lui-même de
  prendre la main et d'émettre `pointercancel` ;
- la différence entre un évènement de synthèse et un vrai contact ;
- le rendu, puisque la page est servie en instantané `data:` et que les chemins
  d'images relatifs n'y résolvent pas.

**Levée du blocage :** le propriétaire ouvre le site déployé sur son téléphone
et confirme les trois comportements listés dans `next-task.md`.

Tant que ce n'est pas fait, **ne pas considérer le bug tactile comme corrigé**,
quelle que soit la qualité du raisonnement sur le code.

---

## B-014 — La traînée floute la pierre, mais ne strie pas le chemin

**Ouvert le 19/09/2026.**

Le brief demande que la traînée « suive la courbe de déplacement ». Ce qui est
livré floute réellement la pierre — rotation, mise à l'échelle, déformation —
par rétroaction d'image, sans aucune copie nette. **Mais elle ne laisse pas de
traînée le long du trajet à l'écran.**

**Cause :** la toile est petite et voyage avec la pierre. Dans son repère, la
translation à travers l'écran n'existe pas — seul ce qui bouge *à l'intérieur*
de la toile laisse une trace.

**Ce qu'il faudrait :** une toile fixe plein écran, la pierre positionnée dans
la projection plutôt que par transformation CSS, et le tampon de rétroaction en
coordonnées d'écran. La déformation devrait alors passer du CSS au shader.

**Pourquoi ce n'est pas fait :** le coût de ce changement est un remplissage
plein écran, deux passes par image. C'est précisément la dépense que contraint
l'exigence des 60 images par seconde — et c'est la seule chose que ce poste ne
peut pas mesurer, le volet d'aperçu étant bridé quand il est masqué. Livrer une
version plus lourde sans pouvoir en vérifier le coût serait le mauvais choix.

**Atténuation prévue si le propriétaire le demande :** tampons de rétroaction à
résolution réduite (la traînée est floue de toute façon), plafond de pixels, et
mesure sur appareil réel avant de garder.

---

## B-015 — Le même titre a deux traitements selon la page

**Ouvert le 19/09/2026.** Sans gravité, mais à trancher.

Le titre d'un morceau est désormais en **serif étroite capitales** sur la carte
de la grille, et reste en **grotesque large** sur la fiche film. Le propriétaire
n'a demandé que les cartes ; le changement a été confiné à ce qu'il a demandé.

Deux lectures défendables : soit la carte et la fiche sont deux objets
différents et méritent deux voix, soit le titre est le titre et doit se
reconnaître partout. C'est une question d'œil, pas d'argument — à regarder
côte à côte.

---

## B-016 — Question tranchée : durée fixe contre réversibilité

**Fermé le 19/09/2026.** Le brief demandait « environ 300–500 ms » pour la
distorsion **et** une animation liée au défilement, réversible. Les deux ne
peuvent pas être vraies ensemble.

Le propriétaire a réaffirmé la contrainte de défilement dans le brief suivant,
puis dans le storyboard. **Le défilement l'emporte** : la durée est celle que
l'utilisateur donne au geste. Voir D-030.
