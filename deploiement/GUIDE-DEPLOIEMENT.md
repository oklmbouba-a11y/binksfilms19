# BINKSFILMS — mettre en ligne et gérer le site

## Ce qu'il y a dans ce dossier

| Fichier | À quoi ça sert |
|---|---|
| `index.html` | Le site |
| `films.js` | **Tes films.** C'est le seul fichier à remplacer quand tu ajoutes ou modifies un clip |
| `admin.html` | La page pour gérer tes films sans toucher au code |
| `images/` | Les bannières, contre-champs et photos de tournage |
| `videos/previews/` | Les petites boucles jouées sur les cartes du portfolio |
| `hero-loop.mp4` | La vidéo de fond de l'accueil |
| `real-web.webp` | Ta photo, section Réalisateur |
| `vercel.json` | Réglages techniques — n'y touche pas |

---

## Première mise en ligne (5 minutes)

### 1 — Créer le dépôt GitHub
1. github.com/new
2. Repository name : `binksfilms`
3. Laisse en **Public** → **Create repository**

### 2 — Envoyer les fichiers
1. Sur la page du dépôt : lien **"uploading an existing file"**
2. Glisse **tout le contenu** de ce dossier
3. Bouton vert **Commit changes**

### 3 — Brancher Vercel
1. vercel.com → **Sign Up** → **Continue with GitHub**
2. **Add New… → Project** → ton dépôt `binksfilms` → **Import**
3. Framework Preset : laisse **Other**
4. **Deploy**

Vercel te donne une adresse du type `https://binksfilms.vercel.app`.

> **Important :** les vidéos YouTube ne se lisent **que** sur une vraie adresse
> web. Si tu ouvres `index.html` en double-cliquant dessus depuis ton
> ordinateur, YouTube refuse de s'afficher et le lecteur reste vide —
> ce n'est pas un bug du site. Une fois sur Vercel, tout fonctionne.

---

## Ajouter, modifier ou archiver un film

**Tu n'as jamais besoin de toucher au code.**
`admin.html` marche sur ordinateur comme sur téléphone.

1. Ouvre `admin.html` (depuis ton adresse en ligne, `/admin.html`)
2. Fais tes changements :
   - **+ Nouveau film** — colle le lien YouTube, mets l'artiste, le titre, la date.
     L'adresse de la page est créée toute seule
   - **Modifier** — bannière, description, preview, lieu, crédits, contre-champ,
     images de tournage
   - **État** — *Publié* (en ligne), *Brouillon* (pas encore montré),
     *Archivé* (retiré du site, conservé ici)
   - **↑ ↓** — change l'ordre d'affichage (glisser-déposer aussi, sur ordinateur)
   - **•••** — dupliquer, archiver, supprimer
3. **Prévisualiser** te montre le vrai site avec tes modifications, en desktop
   et en mobile, avant que quoi que ce soit ne soit publié
4. Exporte :
   - **Exporter films.js** s'il n'y a pas de nouveau média
   - **Exporter le dossier (.zip)** s'il y a de nouvelles images ou previews.
     Le ZIP contient `films.js` *et* les fichiers, déjà rangés dans `images/`
     et `videos/previews/`. Tu le décompresses à la racine du site
5. Envoie le tout sur GitHub → Vercel republie en ~30 secondes

En haut à droite, l'état dit **À jour** ou **Modifications non exportées**.
Ton travail est sauvegardé automatiquement dans le navigateur : sauvegarder
n'est pas publier, seul l'export met le site à jour.

### La bannière d'un film
Par défaut c'est l'image YouTube. Pour mettre la tienne :
**Modifier → Présentation → Choisir une image.**

L'admin affiche le format, les dimensions et le poids, puis te laisse
choisir : **garder l'original** (aucune retouche, aucune perte) ou
**optimiser** (compression et redimensionnement, réglés séparément).
Rien n'est jamais recompressé sans que tu l'aies demandé.

Format conseillé : 1920 × 1080, en `.webp` ou `.jpg`, sous 400 Ko.

> Si une bannière manque ou ne charge pas, le site retombe sur l'image
> YouTube, puis sur un visuel BINKSFILMS neutre. Une carte n'est jamais vide.

### La preview d'un film
C'est la petite boucle muette jouée sur la carte du portfolio : au survol
sur ordinateur, et quand la carte arrive au centre de l'écran sur téléphone.

**Modifier → Preview du projet → Choisir une vidéo.**
L'admin montre la vidéo, sa durée, son poids, et surtout **l'aperçu de la
carte réelle** en desktop et en mobile — c'est là qu'on voit un mauvais
cadrage ou une tête coupée.

Elle est **facultative** : sans preview, la carte garde sa bannière.
L'admin ne réencode jamais une vidéo (un navigateur ne sait pas le faire
proprement). Si la tienne est lourde, réexporte-la depuis ton montage :
**MP4 H.264, 1080p max, sans piste audio, 2 à 4 Mbit/s, 4 à 8 secondes.**

### Un point important sur les fichiers
Choisir une image ou une vidéo dans l'admin ne la met **pas** en ligne :
un navigateur ne peut pas déposer un fichier sur un serveur tout seul.
L'admin le dit clairement (*« pas encore dans le projet »*) et te donne
la liste dans **Fichiers à déposer**. L'export ZIP règle la question en
une fois.

### Si quelque chose part de travers
- **Vérifier tout** sépare les *erreurs bloquantes* (artiste, titre, vidéo,
  date, adresse en double) des *avertissements* (pas de description, pas de
  bannière…). L'export est bloqué tant qu'il reste une erreur.
- **Historique & restauration** garde les dernières sauvegardes locales.
- **Importer films.js** reconstruit l'admin depuis un fichier existant :
  nouvel ordinateur, autre navigateur, cache effacé.
- **Voir le fichier généré** affiche et copie le contenu de `films.js`
  si le téléchargement échoue.

> Quand tu remplaces une image ou une preview, l'admin propose un nom
> légèrement différent (`…-banner-2.jpg`). C'est voulu : les hébergeurs
> gardent les médias en cache un an, réutiliser le même nom afficherait
> l'ancien fichier pendant des mois.

---

## Mettre à jour le site après une correction

Quand `index.html` change (pas seulement les films) :

1. Sur GitHub, page du dépôt → clique sur `index.html` → icône **crayon**
2. Sélectionne tout (Ctrl+A), colle le nouveau contenu → **Commit changes**

   *(ou : **Add file → Upload files** et glisse le fichier — il écrase l'ancien)*
3. Vercel republie en ~30 secondes
4. Sur ton téléphone, recharge en **tirant la page vers le bas**, sinon tu
   risques de voir l'ancienne version gardée en mémoire

---

## Le formulaire de devis

Le formulaire n'ouvre plus jamais l'application mail du visiteur. Il envoie
la demande depuis le site — mais il faut d'abord lui dire où l'envoyer.
Tant que ce n'est pas fait, le dernier écran affiche la demande complète et
copiable : rien n'est perdu, mais rien ne part tout seul.

**À faire une fois, pour recevoir les demandes directement :**
1. Crée un compte gratuit sur [formspree.io](https://formspree.io)
2. « New form », destinataire `binksfilms@gmail.com`
3. Formspree affiche une adresse du type `https://formspree.io/f/xxxxxxx`
4. Dans `index.html`, cherche la ligne `var ENVOI_URL = "";`
   (ligne 1111, juste après le grand cadre `POUR RECEVOIR LES DEMANDES`)
5. Colle l'adresse entre les guillemets :
   `var ENVOI_URL = "https://formspree.io/f/xxxxxxx";`
6. Renvoie `index.html` sur GitHub
7. Envoie une demande de test depuis le site en ligne, puis valide l'email
   de confirmation que Formspree envoie la première fois

Ensuite, chaque demande arrive dans ta boîte, ligne par ligne
(Projet, Morceau, Date, Budget, Contact…), et le visiteur voit
« Bien reçu. » sans jamais quitter le site.

Un piège à robots invisible est déjà en place : pas de captcha à ajouter.

---

## À vérifier avant de communiquer l'adresse

- [ ] Les liens Instagram et YouTube dans le contact et le générique de fin
      (aujourd'hui : `instagram.com/binksfilms` et `youtube.com/@binksfilms` —
      **à confirmer**, ils viennent d'un ancien fichier de configuration)
- [ ] L'adresse mail affichée : `binksfilms@gmail.com`
- [ ] Les tranches de budget par type de projet (`var BUDGETS` dans `index.html`)
      — ce sont des enveloppes affichées au visiteur, pas une grille tarifaire
