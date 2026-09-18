# Ton éditorial et langage système

**Comment lire ce document.** La **voix** — constater plutôt que vendre, la
première personne, le refus du superlatif — est de l'identité : elle se
transporte partout. Les **conventions d'écriture** (chiffres tabulaires,
zéro-padding, langue du site, formulations exactes) sont du niveau B : elles
documentent comment le site a résolu ses cas, et n'ont pas force de loi sur un
territoire qu'il ne couvre pas. Une boutique internationale ou une archive
peuvent avoir d'autres besoins — elles doivent alors décider, pas hériter.

---

## La voix

Première personne, présent, phrases courtes. Aucune narration corporate, aucun
vocabulaire d'agence.

Ce que le site dit réellement :

> « Plus de 100 projets. J'ai arrêté de compter. »
> « Quand j'ai envie de faire un truc, je le fais. Les codes, je les regarde après. »
> « Ça fait plus de 10 ans que je filme. Projet après projet, j'ai appris en faisant. »
> « Chaque projet est différent. Quelques infos me suffisent pour comprendre le tien. »

Ce qui rend cette voix juste : elle **constate**. Elle ne vend pas, ne promet
pas, ne se positionne pas. Le chiffre le plus impressionnant du site est suivi
d'un haussement d'épaules — « j'ai arrêté de compter » — et c'est exactement ce
qui le rend crédible.

## Règles d'écriture

1. **Peu de mots.** Un label fait un ou deux mots. Une phrase de section fait une
   ligne. Un paragraphe dépasse rarement trois phrases.
2. **Le fait avant l'adjectif.** « 07 films », « Clip · 2024 », « Réalisation,
   image & montage ». L'information nue est plus forte que sa qualification.
3. **Aucun superlatif.** Pas d'« exceptionnel », « unique », « premium »,
   « sur-mesure », « passionné », « univers », « expérience immersive ».
4. **Le titre de l'œuvre n'est jamais retouché.** Ponctuation, casse et
   orthographe de l'artiste sont conservées telles quelles.
5. **Les liens disent où ils mènent.** « YouTube → les films en entier »,
   « Instagram → coulisses & sorties ». Jamais « En savoir plus ».
6. **Le français est la langue du site.** Les mots techniques anglais admis sont
   ceux qui sont réellement dans le métier. `Enter` sur la porte est un seuil,
   pas une traduction manquée.

## Ce qui ne se dit jamais

- une baseline explicative sous le nom — *les beaux arts du ghetto* n'est jamais
  commenté ;
- un texte de mission, un manifeste, un « à propos » qui raconte une philosophie ;
- des témoignages clients, des logos de marques, des badges ;
- des statistiques mises en scène — le chiffre porte par l'échelle, seul ;
- une accroche qui vend l'émotion que le visiteur devrait ressentir.

## Nombres et statuts

Les nombres sont alignés (`tabular-nums`) et zéro-padés : `01 / 17`, `07 films`.
C'est un registre, une numérotation de bobine.

Les statuts viennent des données, pas de la décoration : `published` /
`archived`, une date de sortie, un type (`Clip`, `Documentaire`). Un film archivé
sort de la grille sans être supprimé.

**Principe :** le site tient un catalogue. Les métadonnées sont du contenu, pas
de l'habillage — elles se composent dans le registre qui se tait, jamais dans
celui qui porte.

---

# Langage système et archive — registres conditionnels

## L'état des lieux

Carte SD, MiniDV, VHS, timecode, interface d'enregistrement, console, grain,
glitch : **aucune de ces références n'existe dans le site construit.** Le relevé
et sa vérification sont dans `built-expression.md` §3.

Ce sont donc des **registres disponibles**, pas l'identité.

## Les quatre conditions d'entrée

Énoncées dans `SKILL.md` §11 : réalité plutôt qu'ambiance, locale jamais globale,
une idée et non une texture, non permanente. Cumulatives — les quatre, ou rien.

Ce qui suit en précise l'application.

## Ce qui est déjà juste dans le site

Le langage système BINKSFILMS existe — mais il est **typographique et
structurel**, pas graphique :

- la numérotation en bobine `01 / 17` ;
- les chiffres tabulaires alignés en colonne ;
- `archive: true` comme statut de données ;
- les crédits en lignes label/valeur, comme une fiche technique ;
- la chaîne de secours des images, qui est une procédure de repli documentée ;
- les labels en petites capitales espacées, qui sont littéralement des étiquettes
  système.

**C'est cela, la « carte SD » de BINKSFILMS :** une rigueur de catalogage, pas
une icône de carte mémoire.

## Exemples

**Recevable.** Afficher le support et l'année de tournage d'un film dans sa fiche
technique, dans le registre qui se tait, parce que l'information est vraie et
qu'elle situe l'œuvre. Une idée, locale, factuelle.

**Recevable.** Un état de chargement qui emprunte au vocabulaire de la
numérisation d'une bande — s'il dure le temps réel du chargement et disparaît.
Non permanent, local, et il dit ce qu'il fait.

**Refusé.** Un filtre VHS sur les bannières de la grille. Global, permanent,
décoratif, et il dégrade l'image alors que l'image est le sujet.

**Refusé.** Un glitch au survol des titres. Un effet sans idée, répété sur chaque
élément, et qui ne raconte rien du film.

**Refusé.** Une interface générale déguisée en console d'enregistrement, avec
timecode qui défile en permanence. C'est du cosplay rétro : la technologie y est
plus bruyante que les films.
