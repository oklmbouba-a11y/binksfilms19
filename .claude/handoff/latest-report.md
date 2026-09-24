# Dernier rapport — la boutique reçoit son premier produit

**Période couverte :** du premier dépôt du LUT (`color-reference/`, hors
déploiement) à la fusion avec la session parallèle (`7d84591`).
**Périmètre :** `shop.js`, `index.html` (section boutique uniquement),
`images/shop-binks-color-*`, `videos/video-intro.mp4` (renommé),
`.vercelignore`. `films.js`, `admin.html`, `vercel.json` : aucun changement.

**Origine de la mission :** commandée en direct par le propriétaire dans une
session Claude Code interactive, pas via `next-task.md` — ce fichier reste
donc inchangé et ses points en attente restent valables pour la suite.

---

## Ce qui a changé

**Le produit.** `BINKS LOOK` (slug `binks-color`), un LUT `.cube` 3D 16
points fourni par le propriétaire. 49 €. Cinq vraies paires avant/après
(nuit, extérieur, mariage ×2, piscine) remplacent l'entrée de démonstration
`simule`. Fiche contractuelle complète (contenu, format, compatible,
licence, livraison). Voir D-019.

**Le packaging.** Un pavé en CSS 3D pur (`transform-style: preserve-3d`, six
faces, pas de WebGL ni de librairie) qu'on tourne au doigt ou à la souris sur
les deux axes — zone fermée (`touch-action:none`), ne dispute rien au
défilement de la page. Face avant : illustration de corbeau générée par IA
dans l'esprit d'un mockup fourni par le propriétaire. Face arrière : collage
composé à partir des cinq vraies photos du rideau, sans IA. Premier jet
explicitement signalé comme tel — à remplacer dès qu'un vrai packshot existe.

**La page shop.** Trois refontes dans la même journée, la dernière issue
d'une session parallèle et fusionnée sans conflit (voir D-020) : page
d'ensemble `#/shop` devenue une scène plein viewport avec vidéo de fond
fixe partagée, bouton « Voir le produit » vers la fiche dédiée, fiche
nettoyée de la répétition du bandeau.

**Vidéo :** en l'absence de vidéo dédiée au produit, la vidéo d'introduction
du site (`videos/video-intro.mp4`, lune + corbeaux) sert de fond — la
coïncidence avec l'illustration du corbeau sur le packaging est heureuse et
volontairement conservée telle quelle.

**Sécurité/déploiement :** le `.cube` et les `.tif` sources (plusieurs
dizaines de Mo) sont dans `color-reference/`, versionné mais exclu du
déploiement Vercel via `.vercelignore` — jamais téléchargeables publiquement.

## Ce qui a été refusé pendant la mission

Le propriétaire a demandé à plusieurs reprises de publier une image de rush
contenant de la nudité explicite comme visuel produit. Refusé à chaque
demande, y compris reformulée en ordre direct. Résolu en substituant un rush
sans nudité (le plan « nuit »).

## Ce qui attend une décision du propriétaire

1. **Le lien `achat`** — créer la caisse (Gumroad/Lemon Squeezy conseillés
   pour la livraison de fichier) et coller l'adresse dans `shop.js`.
2. **Le paquet de livraison** — zipper `.cube` + rushs d'exemple, l'héberger
   chez ce prestataire. Aucun rush vidéo n'existe encore dans le dépôt pour
   ça, seulement des stills.
3. **Le nom** — `BINKS LOOK` (site) contre `BINKS COLOR.cube` (fichier
   distribué actuel) : à aligner d'un côté ou de l'autre.
4. **Le packaging définitif** — remplacer les trois faces IA/collage par un
   vrai packshot ou modèle 3D si le propriétaire en produit un.

## Note pour la prochaine session (Claude ou ChatGPT)

`git pull` avant de toucher à la zone shop : deux sessions y ont travaillé en
parallèle le même jour sans se lire, la fusion s'est bien passée par chance
(zones non superposées), pas par coordination. Voir D-020.
