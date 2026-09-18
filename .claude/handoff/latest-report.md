# Rapport de mission — La signature (direction C, fiche film)

**Date :** 2026-09-18 · **Agent :** Claude Code (Opus 5)
**Mode :** autonomie déléguée — direction choisie et implémentée sans arbitrage
**Périmètre :** `index.html` uniquement

---

## 1. Ce qui a été fait

Premier usage réel d'`experience-direction`, mené jusqu'au site.

**Terrain rectifié en cours de route.** L'archive était le terrain recommandé ;
la baseline l'a invalidée — 7 films archivés ne portant qu'un artiste, un titre,
une date, un type et une ligne de crédit, un seul type dans tout le catalogue,
et aucun champ de support, caméra, format ou lieu dans le schéma. Sept titres
rangés par date font une liste, pas une archive. `open-territories.md` a été
corrigé : il promettait une donnée qui n'existe pas.

**Terrain retenu : la fiche film.** Baseline : 9 fiches sur 10 sont identiques —
lecteur, titre, une ligne de crédit, navigation. Et cette ligne est la même sur
les dix.

**Direction retenue : C — Une seule paire de mains.** Le crédit commun quitte le
tableau et devient une signature en bas de page, hors du bloc que le routeur
reconstruit. D'une fiche à l'autre, tout change sauf elle.

---

## 2. Le mécanisme, vérifié

Navigation de « Free Durk » vers « Yeah Yeah » par le lien « suivant » :

| | |
|---|---|
| Titre | change |
| Crédits | changent |
| Signature — nœud DOM | **identique** |
| Signature — contenu | **identique** |
| Signature — position | **identique** |

Rien n'est animé. C'est l'absence de recomposition qui produit l'effet.

**La constante est déduite, pas écrite en dur** : le crédit que tous les films
portent à l'identique, calculé au démarrage. Si un film arrive avec d'autres
crédits, la constante n'existe plus, la signature disparaît et les crédits
reprennent leur place ordinaire. C'était la condition de repli du brief.

---

## 3. Trois corrections pendant l'implémentation

Aucune n'était dans le brief.

1. **La signature recouvrait le lien « Suivant ».** Le calcul de collision ne
   l'avait pas vu, la capture d'écran si. `#film-view` et le pied de page
   réservent désormais la place qu'elle occupe.
2. **`aria-hidden` faisait perdre le crédit d'auteur.** Le crédit étant retiré du
   tableau, le masquer aux lecteurs d'écran l'aurait supprimé au lieu de le
   déplacer. Attribut retiré.
3. **Fragile au-dessus d'un contre-champ clair.** Elle reçoit le même dégradé que
   l'en-tête fixe, retourné — le site résout déjà ce cas ainsi.

---

## 4. Tests

| Test | Résultat |
|---|---|
| Persistance entre fiches | nœud, contenu et position identiques |
| Film à deux crédits | « Produced » reste au tableau, seule la constante migre |
| Accueil | signature absente |
| Mobile 375×812 | aucun débordement |
| Collisions bas de page | 0 |
| Collisions à mi-défilement | 0 |
| Écart au pied de page | 61 px (13 px avant correction) |
| Desktop | grille 16/9, rayon 11 px, parallaxe inchangés |
| Erreurs JS | 0 |
| `films.js` · `admin.html` · `vercel.json` | intacts |

---

## 5. Ce que je n'ai pas tranché

**Si l'idée fonctionne.** C'est une question d'œil, au sens
d'`experience-direction` §5, et elle appartient au propriétaire. Le test :
parcourir trois fiches d'affilée par les liens précédent/suivant. Si au troisième
film on n'a pas compris qu'une seule personne a tout fait, la direction a échoué
et le repli est la direction A du brief.

Le risque annoncé au brief tient toujours : une idée fondée sur la répétition
devient pénible dès qu'elle se souligne. Trop discrète, elle ne se voit pas ;
trop présente, elle insiste. Je ne peux pas juger ça depuis des mesures.

**Je n'ai pas lancé `innovation-critic`** sur ce travail. Il juge bien un
document contre du code — il l'a prouvé trois fois — mais la question ici est de
savoir si un effet se produit à l'œil sur trois pages consécutives. C'est du
ressort du propriétaire, pas d'une relecture de fichiers.

---

## 6. Leçon pour `experience-direction`

Les trois écarts viennent du même angle mort : **un brief qui pose un élément
persistant doit dire ce qu'il recouvre.** Le point 12 couvre les états de média,
pas les collisions d'un élément fixe avec le contenu. À ajouter.

BINKSFILMS — première direction créative livrée.
