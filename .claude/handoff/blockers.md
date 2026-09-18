# Blockers & dette — BINKSFILMS

Sévérités définies dans `.claude/skills/quality-contract/SKILL.md` :
`BLOCKER` · `MAJOR` · `MINOR` · `POLISH`.

**État au 2026-09-18 : 1 BLOCKER ouvert (décision utilisateur), 0 blocage technique.**
La Phase 2 (`binksfilms-dna`) n'est bloquée par aucun point technique.

---

## B-001 — Stratégie d'historique GitHub non tranchée
**Sévérité :** BLOCKER · **Propriétaire :** utilisateur · **Statut :** OUVERT

Le dépôt distant `oklmbouba-a11y/binksfilms19` contient déjà 17 commits et une
arborescence différente : les fichiers du site existent **en double**, à la
racine ET dans un sous-dossier `deploiement/`, plus un dossier `previews/`
orphelin. Il ne contient aucun `.claude/`.

L'historique local est **indépendant** du distant (dépôt initialisé ici même) :
Git refusera un push simple.

Comparaison des contenus — le local est strictement plus récent :

| Fichier | Local | Distant |
|---|---|---|
| `index.html` | 116 457 o | 111 466 o |
| `films.js` | généré le 18/09/2026 | généré le 24/08/2026 |
| `admin.html` | identique | identique |
| `vercel.json` | identique | identique |

**Ce qu'il faut décider :** préserver les 17 commits distants en les fusionnant
sous l'historique local, ou repartir d'un historique propre par force-push.
Et, dans les deux cas, garder ou supprimer les doublons `deploiement/` et
`previews/`.

**Tant que ce n'est pas tranché :** aucun push. Rien ne sera écrasé sans accord
explicite.

---

## B-002 — Authentification GitHub absente sur cette machine
**Sévérité :** BLOCKER · **Propriétaire :** utilisateur · **Statut :** OUVERT

`gh` (GitHub CLI) n'est pas installé et aucun `credential.helper` n'est
configuré. Le dépôt est lisible en anonyme, mais le push échouera faute
d'identifiants.

Claude ne manipule ni mot de passe ni token — cette étape revient à
l'utilisateur. Deux voies : installer GitHub CLI puis `gh auth login`, ou
configurer le Git Credential Manager de Windows.

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
