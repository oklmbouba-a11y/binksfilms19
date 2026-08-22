# BINKSFILMS — mettre en ligne et gérer le site

## Ce qu'il y a dans ce dossier

| Fichier | À quoi ça sert |
|---|---|
| `index.html` | Le site |
| `films.js` | **Tes films.** C'est le seul fichier à remplacer quand tu ajoutes ou modifies un clip |
| `admin.html` | La page pour gérer tes films sans toucher au code |
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

1. Ouvre `admin.html` (double-clic, ou depuis ton adresse Vercel `/admin.html`)
2. Fais tes changements :
   - **+ Ajouter un film** — colle le lien YouTube, mets l'artiste, le titre, la date
   - **Modifier** — bannière personnalisée, description, lieu, crédits, contre-champ, images de tournage
   - **Archiver** — retire le film du site sans le perdre. Tu peux le remettre quand tu veux
   - **Supprimer** — définitif, à utiliser seulement si tu es sûr
   - **↑ ↓** — change l'ordre d'affichage
3. Clique sur **Télécharger films.js**
4. Sur GitHub : page du dépôt → clique sur `films.js` → l'icône **crayon** →
   sélectionne tout, colle le contenu du nouveau fichier → **Commit changes**

   *(ou : **Add file → Upload files** et glisse le nouveau `films.js`)*
5. Vercel remet le site à jour tout seul en ~30 secondes. Même adresse.

### La bannière d'un film
Par défaut c'est l'image YouTube. Pour mettre la tienne :
1. Mets ton image dans le dépôt (Add file → Upload files)
2. Dans `admin.html`, champ **Image personnalisée** : écris son nom, ex. `ma-photo.jpg`

Format conseillé : 1920 × 1080, en `.webp` ou `.jpg`, sous 400 Ko.

---

## Le formulaire de devis

Aujourd'hui, le bouton final ouvre l'application mail du visiteur avec la
demande déjà écrite — il doit encore appuyer sur « envoyer ». Beaucoup de
gens abandonnent à ce moment-là.

**Pour recevoir les demandes directement :**
1. Crée un compte gratuit sur [formspree.io](https://formspree.io)
2. Crée un formulaire, récupère son adresse (`https://formspree.io/f/xxxxxxx`)
3. Dans `index.html`, cherche la ligne `var ENVOI_URL = "";`
4. Colle l'adresse entre les guillemets
5. Renvoie `index.html` sur GitHub

Tu recevras alors chaque demande par mail, et le visiteur verra « Bien reçu. »

---

## À vérifier avant de communiquer l'adresse

- [ ] Les liens Instagram et YouTube dans le contact et le générique de fin
      (aujourd'hui : `instagram.com/binksfilms` et `youtube.com/@binksfilms` —
      **à confirmer**, ils viennent d'un ancien fichier de configuration)
- [ ] L'adresse mail affichée : `binksfilms@gmail.com`
- [ ] Les réponses des questions fréquentes (déplacements, montage seul)
