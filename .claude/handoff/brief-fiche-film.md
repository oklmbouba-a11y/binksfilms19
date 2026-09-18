# Brief d'expérience — la fiche film

**Date :** 2026-09-18 · **Skill :** `experience-direction` · **Premier usage réel**
**Statut :** en attente du choix du propriétaire

---

## Baseline

Observation de nature éditoriale et comportementale. Vérifiée dans `films.js` et
`index.html`, pas estimée.

| | |
|---|---|
| Films publiés | 10 |
| Fiches réduites à **lecteur + titre + crédits + navigation** | **9 / 10** |
| Fiches complètes (note, contre-champ, tournage) | 1 |
| Films portant une seule ligne de crédit | 8 / 10 |
| Ligne de crédit présente sur **les 10** | *Réalisation, image & montage — BINKSFILMS* |
| Types distincts dans tout le catalogue | **1** — « Clip » |
| Champs support / caméra / format / durée / lieu | **absents du schéma** |

### Ce que l'observation révèle

Neuf fiches sur dix sont la même page avec un titre différent. Le site possède un
vocabulaire riche — note, contre-champ, tournage — qui ne s'exerce que sur un
seul film.

Et la répétition qu'on prendrait pour une donnée manquante est en fait **le
fait le plus vrai du catalogue** : les dix films portent la même ligne de crédit.
Une seule personne a réalisé, filmé et monté l'intégralité. Sur un portfolio
ordinaire, cette colonne identique serait un défaut de remplissage. Ici c'est la
démonstration de ce que la section Réalisateur se contente d'affirmer — *plus de
100 projets, j'ai arrêté de compter.*

**Contrainte dure, apprise sur l'archive :** aucune direction ne peut reposer sur
des métadonnées à créer. La matière disponible est le film lui-même, son titre,
sa date, et cette ligne de crédit.

---

## A — La salle de projection

**Registre :** QUIET

1. **L'idée.** Si une fiche n'est qu'un film et un nom, alors que ce soit un film
   et un nom — composés, pas laissés en plan.
2. **Cible émotionnelle.** Concentration, noir, respect.
3. **Hiérarchie.** Le film porte. Le titre nomme. Le reste se tait, vraiment.
4. **Composition.** Le lecteur prend la page. Tout ce qui l'entoure s'écarte :
   marges élargies, crédits reportés sous la ligne de flottaison, navigation
   réduite à un filet.
5. **Rythme.** Un seul bloc plein, puis du vide, puis une sortie. Aucune
   alternance : la page ne cherche pas à remplir.
6. **Moment mémorable.** L'entrée dans le film — la page s'efface au lancement,
   il ne reste que l'image.
7. **Tactile.** Même chose, en plus radical : le lecteur occupe l'écran, le reste
   se découvre en descendant.
8. **Ce qui reste silencieux.** Tout. C'est le propos.
9. **Sacrifie.** Toute découverte, tout lien entre les films. Le catalogue reste
   une collection de pages isolées, et le contre-champ devient une curiosité au
   lieu d'une signature.
10. **Observable de réussite.** Une fiche sans note ni contre-champ ne doit plus
    *paraître* incomplète — test : la montrer à quelqu'un sans lui dire qu'il
    manque quelque chose.
11. **Périmètre.** `#film-view` uniquement. Intangibles : le lecteur différé, la
    chaîne de secours des images, la navigation précédent/suivant.
12. **États.** Aucun média nouveau. Comportement inchangé.
13. **Exigence de rendu.** Mise en page et transitions suffisent. Rien de plus.
14. **Questions ouvertes.** L'ampleur exacte des marges et le point de bascule du
    lecteur — *œil*.

---

## B — Le film fournit la page

**Registre :** SIGNATURE

1. **L'idée.** La page ne parle pas du film : elle est faite avec. Ses images
   viennent du film lui-même, et de nulle part ailleurs.
2. **Cible émotionnelle.** Immersion, continuité, matière.
3. **Hiérarchie.** L'image du film porte partout — en fond, en transition, dans
   les liens vers les voisins. Le texte flotte dessus.
4. **Composition.** Plus de blocs empilés sur du noir : un plan continu dans
   lequel le texte s'inscrit, comme le cartel s'inscrit déjà dans la bannière de
   la grille.
5. **Rythme.** Continu. Le vide n'est plus noir, il est image assombrie.
6. **Moment mémorable.** Le passage au film suivant : l'image en cours ne
   disparaît pas, elle devient le fond du suivant.
7. **Tactile.** Le fond suit le défilement ; les voisins se révèlent par leur
   propre image quand ils arrivent au centre — le principe déjà tenu par la
   grille mobile.
8. **Ce qui reste silencieux.** Les crédits et la navigation : ils ne doivent pas
   gagner en présence sous prétexte que le fond est chargé.
9. **Sacrifie.** Le silence, qui est un invariant de la marque. Et du poids :
   plus d'images chargées par fiche.
10. **Observable de réussite.** Aucun aplat noir décoratif ne subsiste sur la
    fiche — chaque surface est soit du film, soit du texte.
11. **Périmètre.** `#film-view`. Intangibles : lisibilité des crédits, chaîne de
    secours, comportement réseau.
12. **États.** Critiques. Sans bannière, la page n'a pas de matière : il faut un
    repli qui ne soit pas un échec visible — vraisemblablement le retour à la
    composition A. À écrire avant toute autre chose.
13. **Exigence de rendu.** Composition image par image et fondus étendus. Pas de
    traitement par pixel.
14. **Questions ouvertes.** Le niveau d'assombrissement du fond — *œil*. Le coût
    réseau réel — *observation*, à mesurer avant de s'engager.

---

## C — Une seule paire de mains

**Registre :** candidate LAB

1. **L'idée.** Sur les dix fiches, tout change — l'artiste, l'année, la lumière —
   sauf une ligne, qui ne bouge jamais. La fiche film fait de cette constante son
   axe, au lieu de la ranger dans un tableau de crédits.
2. **Cible émotionnelle.** Évidence, accumulation, entêtement.
3. **Hiérarchie.** La constante porte. Le film et le titre changent autour d'elle.
4. **Composition.** La ligne de crédit est fixe dans la page — elle ne défile pas
   avec le reste, elle ne se recompose pas d'une fiche à l'autre. On passe d'un
   film au suivant et elle reste exactement là, au même endroit, identique.
5. **Rythme.** Le rythme vient du contraste entre ce qui change et ce qui refuse
   de changer.
6. **Moment mémorable.** Le passage d'un film à l'autre : tout se remplace, une
   ligne ne bouge pas. Au troisième film, on a compris sans qu'on l'explique.
7. **Tactile.** La constante reste ancrée pendant que le contenu glisse sous elle
   — le geste est plus lisible au doigt qu'au pointeur.
8. **Ce qui reste silencieux.** L'effet lui-même. Rien ne doit signaler « regardez
   cette ligne ». Si elle s'anime, c'est raté.
9. **Sacrifie.** La singularité de chaque film : toutes les fiches se mettent à
   dire la même chose sur leur auteur. Et le risque d'insistance est réel.

### Porte d'ambition — `binksfilms-dna` §7, filtre 2

**Q1 — Comment cette mécanique s'appelle-t-elle ?**
Un élément fixe pendant que le reste défile s'appelle un *sticky*, et à ce titre
la porte n'est pas franchie. Ce qui n'a pas de nom courant, c'est **la persistance
d'une donnée identique à travers des pages différentes, utilisée comme argument**.
Le mécanisme n'est pas de fixer un élément : c'est de faire d'une répétition de
données le sujet. Aucun vocabulaire du métier ne couvre ça, parce qu'ailleurs une
colonne identique est un défaut à masquer.

**Q3 — Qu'apprend-on du travail après l'avoir vécue ?**
Qu'une seule personne a réalisé, filmé et monté dix clips sur huit ans. Le site
l'affirme aujourd'hui dans la section Réalisateur — *plus de 100 projets, j'ai
arrêté de compter* — sans jamais le montrer. Cette direction le **démontre** :
on ne lit pas une affirmation, on constate une répétition. C'est une
compréhension, pas un accès.

### Ce que l'ambition coûte et exige

- **Ce qu'elle apporte que rien de plus simple n'apporte :** un tableau de
  crédits énonce un fait ; celle-ci le fait éprouver par l'accumulation. Aucune
  mise en page classique ne produit cet effet, parce qu'il naît du passage d'une
  fiche à l'autre et non de la composition d'une seule.
- **Ce qui doit être excellent :** la retenue. Le moindre soulignement tue l'idée.
- **Tactile :** conçu — voir point 7, le geste y est plus lisible qu'au pointeur.
- **Repli :** si un film porte une ligne de crédit différente — ce qui arrivera —
  la constante doit se rompre **proprement** et sans commentaire. Une exception
  ne doit pas casser la règle, elle doit la confirmer en silence.
- **Coût de performance :** négligeable. C'est l'intérêt de cette direction :
  l'ambition y est conceptuelle, pas technique.

10. **Observable de réussite.** Un visiteur qui a parcouru trois fiches doit
    pouvoir dire qui a fait ces films **sans avoir lu la section Réalisateur**.
11. **Périmètre.** `#film-view` et la transition entre fiches. Intangibles : la
    navigation précédent/suivant, le lecteur différé, l'ordre déduit de `FILMS`.
12. **États.** Crédit absent ou différent : voir repli. Aucun média nouveau.
13. **Exigence de rendu.** Persistance d'un élément à travers un changement de
    vue, et une transition qui ne recompose pas tout. Rien qui demande un
    traitement par pixel ni une composition image par image.
14. **Questions ouvertes.** La position exacte de la constante et son échelle —
    *œil*. Faut-il l'appliquer aussi entre la grille et la fiche, ou seulement de
    fiche à fiche — *argument*.

---

## Divergence

| | A | B | C |
|---|---|---|---|
| **Sacrifie** | la découverte et le lien entre les films | le silence, et du poids | la singularité de chaque film |
| **Qui porte** | le film seul | l'image, partout | la constante |
| **Registre** | QUIET | SIGNATURE | LAB |
| **Coût technique** | nul | réel | négligeable |

Les trois ne sacrifient pas la même chose : le choix est réel.

---

## Recommandation

**C**, et ce n'est pas l'ambition technique qui la porte — c'est qu'elle est la
seule des trois à **dire quelque chose de vrai avec ce qui existe déjà**. Elle ne
demande aucune donnée nouvelle, aucun média, presque aucune performance. Elle
transforme la pauvreté du catalogue en argument.

**A** est le repli honnête, et une bonne fondation : C peut se poser dessus.

**B** est la plus spectaculaire et la moins sûre : elle dépend de bannières qui
n'existent pas encore sur 8 films, et elle met en tension directe le silence, qui
est un invariant.

### Ce qui m'inquiète dans ma propre recommandation

Le risque d'insistance. Une idée fondée sur la répétition devient pénible dès
qu'elle se souligne elle-même, et je ne saurai qu'en la voyant si la retenue
tient. C'est une direction dont la réussite dépend entièrement de l'exécution,
plus que les deux autres.

Et une réserve d'honnêteté : C fonctionne aujourd'hui **parce que** les crédits
sont pauvres. Si le catalogue se remplit de crédits variés — monteurs, chefs
opérateurs, producteurs — la constante s'effrite et la direction perd son sujet.
Elle est juste maintenant ; elle n'est pas éternelle.
