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
**Sévérité :** MAJOR · **Propriétaire :** contenu (`admin.html`) · **Statut :** OUVERT

Film `fulltrap-skinny-bastard-skinny-bastard-s-flow-type-shit`, statut
`published`. Manquent : `…-bann.jpg` (poster), `…-plan.jpg` + `…-derr.jpg`
(contre-champ), `…-tour.jpg` (BTS), `…-prev.mp4` (preview).

**Effet mesuré en navigateur :** la carte du portfolio est correcte (repli sur
la miniature YouTube), mais sur la fiche film le bloc **Contre-champ affiche
deux fois le placeholder SVG** et la section **Tournage s'affiche vide, avec son
seul intertitre**.

**Piste :** `images/skinny.jpg` et `videos/skinny.mp4` sont probablement les
originaux non renommés. À confirmer visuellement par l'utilisateur.

**Correction :** via `admin.html` — ré-importer les visuels, ré-exporter
`films.js`. Ne pas éditer `films.js` à la main.

---

## B-004 — Chemin `videos/previews/` erroné
**Sévérité :** MAJOR · **Propriétaire :** contenu (`admin.html`) · **Statut :** OUVERT

`films.js` attend `videos/previews/saisai-…-preview.mp4`.
Le fichier existe à `videos/saisai-…-preview.mp4`. Le dossier `videos/previews/`
n'existe pas.

Conséquence : la preview au survol de la carte SaiSai ne démarre jamais — le
code retire silencieusement la balise `<video>` et laisse la bannière. Invisible
pour le visiteur, mais une intention de design est perdue.

Même correction que B-003, même passage par `admin.html`.

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
**Sévérité :** MINOR · **Propriétaire :** site · **Statut :** OUVERT

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

**À trancher :** tenir l'intention (passer réellement au format d'affiche, ce
qui est un vrai changement de DA mobile et relève d'une mission EXPERIMENTAL),
ou corriger le commentaire pour qu'il décrive ce que le code fait. La première
option est un travail de direction artistique, pas une correction.

`binksfilms-dna` documente l'écart et interdit de citer cette intention comme un
acquis.

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
