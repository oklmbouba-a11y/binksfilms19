# Rapport de mission — Réparation média, clip Skinny Bastard

**Date :** 2026-09-18
**Agent :** Claude Code (Opus 5)
**Mode :** SURGICAL — médias uniquement, aucun code modifié
**Contexte :** premier changement **visible sur le site** depuis l'installation du core

---

## 1. Pourquoi cette mission avant le travail créatif

Un relevé sur les 10 films publiés a motivé l'ordre des priorités :

| | Films publiés concernés |
|---|---|
| Bannière personnalisée | 2 / 10 — les 8 autres affichent la miniature YouTube |
| Preview au survol | 2 / 10 |
| Contre-champ | 1 / 10 |
| Photos de tournage | 1 / 10 |
| Texte de présentation | 1 / 10 |

Et le seul film portant un contre-champ était précisément celui dont les médias
manquaient. **Le geste le plus spécifique du site n'était donc visible nulle
part.** Ajouter une section ou un effet avant de régler ça n'aurait fait
qu'agrandir le vide.

---

## 2. Ce que j'ai fait

### Identification des fichiers
`films.js` déclarait cinq chemins absents du disque. Cinq fichiers orphelins
existaient par ailleurs sous leurs noms d'export bruts. J'ai **lu les images**
pour établir la correspondance plutôt que de la deviner : l'homme à la capuche
fourrure et aux lunettes de `skinny.jpg` est le même que sur le plan fisheye
étalonné, et la camionnette blanche revient sur quatre des cinq images. Tout
vient du même clip.

### Correspondance appliquée

| Emplacement | Fichier retenu | Pourquoi |
|---|---|---|
| Bannière | `skinny.jpg` | 16/9 plein cadre, plan de groupe étalonné |
| Contre-champ — le plan | `Adjustment Layer.00_00_56_18.Still013.jpg` | la camionnette de nuit, étalonnée, bandeau -16 |
| Contre-champ — derrière | `contre champs.jpg` | même lieu en brut vert, le cadreur au premier plan |
| Tournage | `00079.MTS.00_01_37_00.Still001.jpg` | rush de la même nuit, caméra de making-of |
| Preview | `skinny.mp4` | boucle de 6,4 s |

Le choix du contre-champ est le tien : opposer le **plan de cinéma** au **rush
brut où l'on voit l'équipe**, plutôt que deux rushes entre eux. Les cadrages
diffèrent donc le maintien produit une coupe franche, pas un dévoilement — le
contraste de sens l'emporte sur la douceur du raccord.

### Méthode
**Copie sous les noms que `films.js` déclare déjà**, sans toucher au fichier.
`films.js` est généré par `admin.html` et son en-tête interdit l'édition
manuelle ; une retouche aurait été écrasée au prochain export. Le fichier
déclarait des chemins corrects, il manquait seulement les fichiers.

Les noms courts (`-bann`, `-derr`, `-tour`, `-prev`) viennent d'une **ancienne
version d'`admin.html`** dont le `slugifier` coupait à 60 caractères — vérifié :
le slug du film fait 55 caractères, donc `-plan` (5) tient pile et les autres
suffixes sont rognés. La version actuelle produit `-banner`, `-derriere`,
`-tournage`, `-preview` et normalisera d'elle-même au prochain export.

### Chemin des previews
`films.js` déclarait `videos/previews/saisai-…-preview.mp4` ; le fichier était à
`videos/`. Déplacé vers le chemin déclaré, sans duplication.

---

## 3. Fichiers

**Ajoutés** — 5 copies : `images/…-bann.jpg`, `…-plan.jpg`, `…-derr.jpg`,
`…-tour.jpg`, `videos/…-prev.mp4`.
**Déplacé** — la preview SaiSai vers `videos/previews/`.
**Modifiés** — aucun. `index.html`, `films.js`, `admin.html`, `vercel.json`
vérifiés par hash contre le tag `core-phase1`.

---

## 4. Tests

| Test | Résultat |
|---|---|
| Chemins média de `films.js` | **7 / 7 résolvent**, 0 manquant |
| Contre-champ — maintien | OK — `hold` posé, image B opacité 0 → 1, retour à 0 au relâchement |
| Contre-champ — chargement | les deux images en 200, 3840px et 1920px de large |
| Section Tournage | l'image charge (1920px) — plus d'intertitre orphelin |
| Grille d'accueil | 10 cartes, 2 bannières locales, 8 replis YouTube, 2 previews |
| Images cassées | **0** |
| Erreurs JS | **0** |
| Mobile 375×812 | aucun débordement, BTS en 2 colonnes, 0 image cassée |

Captures faites des deux états du contre-champ : le plan étalonné, puis le vert
brut avec le cadreur.

---

## 5. Problèmes restants

**B-011 — MAJOR.** La preview pèse **10,4 Mo pour 6,4 s**, soit 1,63 Mo/s contre
0,54 pour celle de SaiSai et 0,43 pour `hero-loop.mp4`. Au survol d'une carte,
c'est 10 Mo pour une boucle muette de six secondes — contraire à la discipline
média du projet. Non corrigé : `ffmpeg` n'est pas installé ici, et le débit
choisi touche à la qualité de l'image, donc au travail. À recompresser vers
3–4 Mo ; le nom et le chemin sont déjà bons.

**B-012 — MINOR.** La réparation a procédé par copie, comme validé : cinq
fichiers existent en double, environ 16 Mo. Rien n'est cassé — ces fichiers ne
sont jamais requêtés. `images/Adjustment Layer.00_01_57_23.Still018.jpg` (1,8 Mo)
reste inutilisé et ferait une bannière alternative crédible.

**B-006 — MINOR.** `GUIDE-DEPLOIEMENT.md` reste désynchronisé. Il annonçait
`videos/previews/`, ce qui est désormais vrai pour SaiSai mais faux pour les
previews à venir, qu'`admin.html` pose à plat dans `videos/`. À resynchroniser
avec la passe de contenu suivante.

---

## 6. Ce que je recommande ensuite

Point 2 du plan convenu : **une passe de contenu sur trois ou quatre films**, pas
les huit. Bannière choisie plutôt que vignette YouTube, preview, et contre-champ
là où tu as la paire.

Cette partie t'appartient — choisir un photogramme, retrouver un plan de
tournage, décider de ce qui mérite d'être montré. Je peux préparer le terrain :
vérifier qu'`admin.html` ne rend pas la tâche pénible, et resynchroniser le
guide de déploiement.

Le contre-champ existe maintenant sur un film. Il en faudrait deux ou trois pour
qu'un visiteur comprenne que c'est un dispositif du site et non un accident.

**Après seulement** : le mobile (B-009), puis le son.
