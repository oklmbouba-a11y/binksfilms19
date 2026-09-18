# Expression construite — niveau B

Relevé de ce que le site **implémente réellement**, avant toute interprétation.

## Statut de ce document

C'est le **niveau B** du modèle à trois niveaux (`SKILL.md` §2) : une preuve et
une école de précision, **pas une loi**.

Le site est exceptionnellement réglé, et c'est ce qui rend ce relevé précieux :
on y voit des problèmes réels résolus avec exactitude. Mais une valeur présente
ici — un rayon, une courbe, un couple de polices, une grille — n'est **pas un
invariant du seul fait qu'elle existe**. Elle documente une solution, dans un
contexte, à un moment.

Règle d'usage : quand le site a résolu un problème avec précision, la charge de
la preuve est sur celui qui veut faire autrement. **Cette charge est levable.**
Ne jamais citer ce document pour refuser une idée sur un territoire qu'il ne
couvre pas — voir `open-territories.md`.

Ce rapport distingue par ailleurs l'**invariant** (l'identité ne survit pas à sa
disparition), l'**actuel** (vrai aujourd'hui, remplaçable sans perte), et le
**projeté** (nommé dans les documents, absent du site).

## Règle de preuve

`index.html` est abondamment commenté, et ses commentaires sont de la doctrine
de design — c'est une source précieuse. Mais **un commentaire n'est pas une
preuve de comportement**. Le site contient au moins un cas où le commentaire
décrit une intention que le CSS ne réalise pas.

Toute affirmation de ce rapport porte donc une marque :

- **[vérifié]** — le comportement est dans le code exécuté, pas seulement décrit ;
- **[intention]** — le code l'énonce en commentaire ; l'implémentation ne le
  confirme pas, ou pas entièrement.

Une affirmation **[intention]** reste utile — elle dit où visait l'auteur — mais
elle ne peut pas servir seule à refuser une proposition.

---

## 1. Invariants — évidence dans le code

### Palette

```
--noir   #0A0A0A      fond, partout
--ivoire #EDEBE6      texte
--gris   #8E8A84      métadonnées, labels
--gris-2 #5C5955      troisième niveau, légendes
--rouge  #B11226      accent
--ligne    rgba(237,235,230,.12)
--ligne-2  rgba(237,235,230,.06)
```

Deux teintes de titre s'ajoutent localement sur la fiche film : `#9A958F` pour
l'artiste, `#F2EFE8` pour le titre de l'œuvre — une hiérarchie de valeur à
l'intérieur d'un même titre.

Trois faits comptent plus que les valeurs :

1. **Le noir n'est pas `#000`.** [vérifié] `#0A0A0A` est la page. Le noir absolu
   est réservé à trois usages techniques : fond du lecteur, voile de coupe
   `#cut`, première frame de l'intro. Le vrai noir est une matière de montage,
   pas un fond.
2. **Le blanc n'est pas `#fff`.** [vérifié] `#EDEBE6` est un ivoire chaud. Le
   blanc pur n'apparaît que dans `::selection` et dans le masque `multiply` du
   mot-vidéo.
3. **Le rouge n'est jamais une surface.** [vérifié] Trois occurrences dans tout
   le site : la sélection de texte, l'anneau de focus (1px, offset 3px), le
   triangle de lecture. Plus un `#8C1020` comme plancher du mot-vidéo. Le rouge
   ponctue, il ne remplit pas. Aucun bouton rouge, aucun bloc rouge, aucun lien
   rouge.

`color-scheme:dark` est déclaré : le sombre est assumé comme seul état, pas
comme la moitié d'une bascule. [vérifié]

### Typographie — trois registres, un seul par élément

| Registre | Réglage | Rôle |
|---|---|---|
| **Le nom porte** | Archivo 800, `font-stretch` 110–125 % (112 et 125 dominants), capitales, `letter-spacing` −.01em | noms, titres de section, chiffres, CTA |
| **Le titre chante** | Instrument Serif / Newsreader, italique, 300–400 | titres d'œuvres, la voix, les apartés |
| **La fiche se tait** | 9.5–12px, poids 600, `letter-spacing` .14–.26em, capitales, gris | labels, métadonnées, navigation |

La ligne du code qui résume tout : « Le nom porte, le titre chante, la fiche se
tait. »

Le bloc de marque applique la règle à lui-même : `BINKSFILMS` en grotesque,
`les beaux arts du ghetto` en italique serif juste dessous. Les deux moitiés du
nom sont dans les deux polices. Le code le dit : « On ne l'explique jamais, on
le répète — header, accueil, générique de fin. »

**Nuance décisive, et contre-intuitive.** Le bloc « voix » du réalisateur
**refuse** les capitales et l'interlettrage :

> « Quelqu'un qui parle, pas une plaque : minuscules, corps modeste, graisse
> normale, aucun interlettrage. Les capitales et l'interlettrage font une
> déclaration ; ici on veut une voix. »

Les capitales espacées sont donc le registre de l'**étiquette système**, jamais
celui de la parole humaine. Confondre les deux est l'erreur typographique la
plus facile à commettre sur ce site.

### Mouvement

Trois courbes nommées, dans cette proportion : [vérifié]

| Courbe | Occurrences | Emploi |
|---|---|---|
| `cubic-bezier(.2,.7,.2,1)` | 9 | micro-interactions **et** révélations de texte (0.2 s à 0.85 s) |
| `cubic-bezier(.16,1,.3,1)` | 7 | grandes entrées (1.2 – 1.5 s) |
| `cubic-bezier(.2,.75,.2,1)` | 1 | **le volet de la bannière**, 1.05 s |

S'y ajoutent des `ease` et des durées courtes par défaut (0.25 – 0.3 s) sur les
transitions de couleur et de bordure.

Il serait donc faux de dire « deux courbes et aucune autre ». Ce qui est réel :
**toutes les courbes du site sont des décélérations franches** — départ rapide,
arrivée qui se pose — et **aucune ne dépasse sa valeur d'arrivée**. Aucun
rebond, aucune élasticité. Le code l'énonce : « Rien ne clignote, rien ne
rebondit. » [vérifié]

Le rapport courbe/durée n'est pas une grille stricte : la même courbe sert à
0.25 s sur un survol et à 0.85 s sur une apparition de texte. C'est la famille
de courbe qui est invariante, pas l'appariement.

Le geste signature est **le volet** — une révélation par `clip-path: inset()`,
pas par opacité. Les bannières s'ouvrent par un rideau qui monte
(`inset(100% 0 0 0)` → `inset(0)`). Le titre d'accueil arrive par un volet
latéral, le nom depuis la gauche, la phrase depuis la droite.

La photo du réalisateur pousse le principe plus loin : le cadre arrive de la
droite pendant que l'image glisse à l'intérieur en sens inverse. « Deux
mouvements opposés : c'est ce qui rend le glissement franc. »

La profondeur vient d'une **réserve**, jamais d'un zoom : les images font 116 %
de la hauteur de leur cadre, calées à `top:-8%`, et glissent au défilement.
`#grid` porte une `perspective:1300px`. Il n'y a **aucun zoom au survol** — le
code le note comme une décision, pas comme un oubli.

### Image

« Le texte vit dans la bannière, pas sous elle. » Le cartel est posé sur
l'image, tenu par un voile monté du bas qui « tient le texte sans noircir
l'image ».

Le rayon des cadres est de 11px (13px sur mobile) : « assez pour se voir, assez
peu pour ne pas faire bouton d'application. » [vérifié]

En regard, **les contrôles de formulaire et les appels à l'action sont carrés** —
`.gros-cta`, `.opt`, `.chip` n'ont aucun rayon, et deux règles posent même un
`border-radius:0` explicite pour neutraliser le style natif du navigateur.
[vérifié]

**Une exception, et elle est signifiante :** le bouton de lecture est un cercle
de 68px (`border-radius:50%`). [vérifié] La règle réelle n'est donc pas « tout
est carré » mais : *l'habillage et les contrôles de saisie sont carrés ; la
commande de projection emprunte la forme ronde d'une tête de lecture.* Le rond
est réservé au geste de lancer un film.

Le **mot-vidéo** est le seul véritable effet du site : le mot RÉALISATEUR est
découpé dans une vidéo par trois passes de fusion (`multiply` sur le masque,
`screen` sur la vidéo désaturée, `lighten` pour remonter le noir). Il porte un
`@supports not (mix-blend-mode:multiply)` qui rend le mot en ivoire plein. Un
effet complexe, avec un repli complet, au service d'un seul mot.

### Interaction

**Le contre-champ** est le geste signature : maintenir pour voir derrière la
caméra. Deux images superposées, `.cc.hold` bascule l'opacité. Il porte un nom
de langage cinéma, pas un nom d'interface.

**L'intro** est une porte : une vidéo plein écran, le mot `Enter`, une fois par
visite (`sessionStorage` `bf.intro2`). « Aucun minuteur ne fait entrer à la
place du visiteur. » Et sur la vidéo d'intro : « la vidéo porte déjà toute la
direction artistique — on n'y ajoute aucun filtre, aucun grain, aucun overlay
coloré. » Pour ENTER : « Pas de cadre, pas de néon, pas de halo. »

Les états de survol sont enfermés dans `@media(hover:hover)`, avec un
équivalent `:active` / `:focus-visible` pour le doigt et le clavier — « au
doigt : au contact, sans état qui reste collé ».

Aucun curseur personnalisé nulle part.

### Éditorial

Voix directe, première personne, phrases courtes, aucune narration corporate :

> « Plus de 100 projets. J'ai arrêté de compter. »
> « Quand j'ai envie de faire un truc, je le fais. Les codes, je les regarde après. »

Le chiffre porte par l'échelle typographique, et le code précise pourquoi : « le
chiffre porte par l'échelle, pas par un bloc de statistiques. » Aucun compteur
animé, aucune grille de KPI.

Les nombres sont en `font-variant-numeric: tabular-nums` et zéro-padés
(`01 / 17`) : une numérotation de bobine, pas une pagination web.

### Accident contrôlé — tel qu'il existe réellement

Il n'est **pas** décoratif. Il est structurel, et il s'autocorrige :

- la grille accroche une grande carte toutes les cinq, le reste par paires, avec
  une règle de sûreté — « jamais une carte seule en fin de rangée » ;
- la chaîne de secours des images (perso → YouTube maxres → hq → placeholder
  BINKSFILMS) est une **dégradation dessinée**, pas un état d'erreur ;
- une preview vidéo qui échoue retire sa balise et laisse la bannière — « aucun
  carré vide, aucune icône cassée ».

L'accident est prévu, absorbé, rendu invisible. Ce n'est pas du bruit qu'on
ajoute : c'est du désordre qu'on encaisse sans le montrer.

---

## 2. Actuel mais remplaçable

À ne pas confondre avec l'identité :

- les trois familles précises (Archivo, Instrument Serif, Newsreader) — c'est le
  **couple grotesque large × serif italique** qui est invariant, pas les noms ;
- la grille 2 colonnes et le rythme « une grande toutes les cinq » ;
- l'intro sur ciel / lune / corbeaux — c'est le **principe de la porte** qui
  tient, pas ce plan ;
- le rouge exact `#B11226` — c'est **rouge unique et ponctuel** qui est
  invariant ;
- YouTube comme lecteur ;
- la hiérarchie à trois niveaux de la section Contact.

---

## 2 bis. Intentions écrites que le code ne réalise pas

Relevé lors de la vérification. Ce ne sont pas des défauts d'identité — ce sont
des écarts entre la doctrine écrite dans les commentaires et le comportement
réel, et ils doivent être connus avant de citer ces commentaires comme standard.

**Le format d'affiche sur mobile. [intention, non réalisée]**
Le commentaire de la grille mobile annonce : « Format d'affiche plutôt que
vignette 16/9, espacement resserré. » Le bloc `@media(max-width:760px)` ne
change en réalité que le `gap`, le rayon, le padding du cartel et les corps de
texte. `.film .thumb` conserve `aspect-ratio:16/9`, qu'aucune règle ne
surcharge.

L'intention est juste et mérite d'être tenue — mais **le site ne l'applique pas
aujourd'hui**. Ce qui *est* réellement authored sur mobile : l'effacement flouté
du cartel quand la carte est au centre de l'écran, la preview déclenchée par le
centrage plutôt que par le survol, et l'espacement resserré. C'est déjà
substantiel, et c'est cela qu'il faut citer en exemple. [vérifié]

**L'accessibilité des films archivés. [intention, non réalisée]**
`archive: true` / `status: "archived"` ne masque pas un film : `filter(enLigne)`
le retire de `FILMS` **avant tout rendu et tout routage**. Un film archivé n'est
accessible nulle part sur le site public — même par URL directe. [vérifié]

Ce qui reste vrai, et qui suffit au principe : le film n'est **pas supprimé**.
Il demeure dans `films.js`, daté, crédité, éditable dans `admin.html`. L'archive
est donc une **logique de conservation dans la source de données**, pas un mode
de consultation publique. Formuler davantage serait sur-lire un booléen.

**Le voile de coupe. [vérifié, nuance]**
`#cut` ne porte de transition que sur sa classe `.off` : la coupe *entre* de
manière instantanée et ne s'efface qu'en 120 ms. C'est un cut franc suivi d'un
fondu de sortie, pas un fondu symétrique.

---

## 3. Projeté — nommé dans les documents, absent du site

C'est le point le plus important de ce rapport.

La mission liste comme identité : *interfaces rétro-numériques, VHS, MiniDV,
carte SD, timecode, grain, glitch*.

**Le site n'en contient rien.** Vérifié par recherche : aucune occurrence de
`vhs`, `minidv`, `glitch`, `crt`, `scanline`, `timecode` dans `index.html`. La
seule occurrence du mot `grain` est un commentaire expliquant que le grain a été
**délibérément écarté**.

Le blueprint est plus prudent que la mission : il demande un « restrained use of
retro vocabulary » et classe le *glitch permanent* et les *filtres CRT
décoratifs* en **anti-DNA** (§ SKILL 01).

**Conclusion retenue pour le skill :** le vocabulaire archive / rétro-numérique
est un **registre disponible sous conditions**, pas le socle de l'identité.
L'encoder comme identité contredirait à la fois le site construit, le blueprint,
et le critère de réussite n° 2 de la mission elle-même (« ne pas réduire la
marque à VHS + noir + glitch »).

Ce qui *est* invariant dans le mot « archive » est ailleurs, et le site le montre
déjà : `archive: true` est un **statut de données** dans `films.js` — un film
archivé sort de la grille sans être supprimé. L'archive est une **logique de
conservation et de hiérarchie**, pas une texture.

---
