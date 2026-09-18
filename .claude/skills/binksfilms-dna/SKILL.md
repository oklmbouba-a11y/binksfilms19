---
name: binksfilms-dna
description: Identité artistique stable de BINKSFILMS — invariants, tensions fondatrices, registres d'intensité, anti-patterns et filtres de décision. Utiliser avant toute décision créative qui touche l'identité visuelle, le langage de mise en page, le mouvement, la présentation des médias, le ton ou la personnalité des interactions. Ne pas déclencher pour une correction typographique, un lien cassé, une édition de données ou une maintenance sans résultat visible.
---

# BINKSFILMS DNA

Ce skill sert à **trancher**, pas à décrire. Il répond à une seule question :
*est-ce que cette proposition appartient réellement à BINKSFILMS, ou est-ce
seulement « créatif » ?*

Il encode autant d'interdits que de possibilités. Les interdits sont la partie
qui travaille le plus.

---

## 1. Identité

**BINKSFILMS — Les beaux arts du ghetto.**

Un réalisateur qui filme la rue et la musique depuis plus de dix ans, et qui
montre ce travail comme on montre une collection : du noir, un cadre, du
silence autour, et rien qui commente l'image.

La posture tient en une phrase :

> **Le site ne parle pas de BINKSFILMS. Il projette BINKSFILMS.**

Le nom lui-même porte la marque : `BINKSFILMS` en grotesque lourde, *les beaux
arts du ghetto* en italique serif juste dessous. Deux mondes, deux polices, un
seul bloc. On ne l'explique jamais — on le répète.

## 2. Les trois invariants

Si l'un des trois tombe, ce n'est plus BINKSFILMS, quel que soit le reste.

1. **L'image est le sujet, l'interface est le projectionniste.**
   Tout ce qui s'ajoute à l'image doit se justifier contre elle. Le texte vit
   *dans* la bannière, pas sous elle. L'interface a le droit d'être belle, pas
   d'être le spectacle.

2. **Trois voix, et chaque élément n'en a qu'une.** Le nom porte — grotesque
   large, capitales. Le titre chante — serif italique. La fiche se tait —
   petites capitales espacées, grises. L'invariant n'est pas le chiffre trois,
   c'est qu'**aucun élément ne parle dans deux voix à la fois** et qu'aucune
   voix n'empiète sur le rôle d'une autre. Une quatrième voix est concevable
   — une voix machine, par exemple — si elle a un rôle propre que les trois
   autres ne remplissent pas, et si elle ne dilue aucune des trois.

3. **On retire avant d'ajouter.** Le luxe de ce site est une quantité de choses
   refusées : pas de grain, pas de curseur custom, pas de zoom au survol, pas de
   bloc de statistiques, pas de halo autour du mot ENTER. Chaque refus est
   inscrit dans le code comme une décision.

## 3. Tensions fondatrices

La marque est identifiable par ses contradictions tenues — pas par une liste
d'adjectifs. Après analyse du site réel, **cinq** tensions sont fondatrices.
Deux souvent citées ne le sont pas.

| Tension | Ce qu'elle veut dire ici |
|---|---|
| **rue × précision** | La voix est directe et sans protocole — « les codes, je les regarde après ». L'exécution, elle, est réglée à la lettre : `font-stretch` à 112 %, `letter-spacing` à trois décimales. Le fond est brut, la main est exacte. Jamais l'inverse. |
| **cinéma × interface** | Le vocabulaire est celui du plateau, pas du web : le contre-champ, le volet, le cut, la numérotation en bobine `01 / 17`. Une interaction se nomme comme un geste de tournage, ou elle ne mérite pas d'exister. |
| **silence × impact** | Trois registres typographiques dont un se tait. Un accent rouge, employé trois fois dans tout le site. L'impact vient de la rareté, jamais de l'accumulation. |
| **brut × luxe** | Le luxe est de l'espace et du refus, pas de la matière ajoutée. Gap de 72px entre les rangées, un seul CTA plein, des boutons carrés. Voir §7. |
| **accident × contrôle** | L'accident est structurel et absorbé, pas décoratif. La grille se corrige seule, les images manquantes tombent sur une chaîne de secours dessinée, une vidéo qui échoue s'efface. On encaisse le désordre sans le montrer. |

**Ne sont pas fondatrices, malgré leur présence dans les briefs :**

- *analogique × numérique* — aucune trace dans le site construit. Peut devenir
  une direction, mais elle serait **nouvelle**, pas une restitution.
- *archive × futur* comme **texture**. L'archive est fondatrice comme **logique
  de données** : `archive: true` sort un film de la grille sans le supprimer.
  Conservation et hiérarchie, pas patine.

## 4. Registres d'intensité

Une section BINKSFILMS n'a pas à être expérimentale en permanence. Choisir le
registre **avant** de concevoir.

**QUIET** — l'état par défaut, et la majorité du site.
Typographie, noir, espace, image. Aucun effet. Les métadonnées d'un film, la
section Contact, le générique de fin sont QUIET et doivent le rester. Une
section QUIET réussie ne se remarque pas ; elle se lit.

**SIGNATURE** — le vocabulaire reconnaissable, réutilisable.
Le volet qui ouvre une image. Le cartel posé dans la bannière. Le contre-champ
maintenu. La porte ENTER. Le mot découpé dans la vidéo. Ce sont des gestes
déjà écrits : les réemployer est un acte d'identité, pas un manque d'idée.
*Règle de dosage : un geste SIGNATURE par section, pas deux.*

**LAB** — l'invention.
Un geste qui n'existe pas encore dans le site. Autorisé, attendu même — ce skill
doit permettre d'inventer, pas seulement de reproduire. Un geste LAB doit :
porter une idée nommable en une phrase, avoir une expression mobile **authored**,
un repli défini, et survivre à `innovation-critic`.

Le site actuel ne contient qu'un seul vrai geste LAB — le mot découpé dans la
vidéo. C'est la bonne proportion : rare, et exécuté jusqu'au bout.

**Dosage.** Pas de quota chiffré — le site est un document unique où « page » ne
veut pas dire grand-chose. La règle est perceptuelle : **deux gestes forts qui
se voient en même temps s'annulent.** Si le visiteur, sur un écran donné, ne
sait pas où regarder, il y a un geste de trop. Une composition entièrement
SIGNATURE est déjà un portfolio générique — simplement avec un autre
vocabulaire.

## 5. Le filtre de décision

Avant de valider une idée, six questions.

1. **Si on retire le logo, est-ce encore BINKSFILMS ?** Si la réponse tient au
   logo ou à la palette seule, l'idée n'est pas portée.
2. **Est-ce une idée ou un effet ?** Une idée se raconte sans décrire sa
   technique. « On maintient pour voir derrière la caméra » est une idée.
   « Un shader de distorsion au survol » est un effet. **Renommer un effet ne le
   transforme pas en idée** — un shader rebaptisé « le volet » reste un shader.
   Le nom juste est le symptôme d'un concept, jamais sa justification.
3. **La technologie sert-elle l'image, ou la recouvre-t-elle ?** Si l'effet est
   plus mémorable que le plan qu'il habille, il est à retirer.
4. **Qu'est-ce que cette idée retire ou remplace ?** Une proposition qui
   n'ajoute que du nouveau, sans rien simplifier ni remplacer, est presque
   toujours une décoration. Pouvoir nommer ce qu'elle rend inutile est le
   meilleur signe qu'elle porte réellement quelque chose.
5. **Le mobile est-il conçu, ou réduit ?** Une expression tactile authored est
   exigée, pas une dégradation. Voir `references/motion-and-interaction.md`.
6. **Ai-je déjà vu exactement cette mécanique sur cent portfolios ?** Si oui,
   la charge de la preuve est inversée : il faut une raison BINKSFILMS
   explicite, pas une absence d'objection.

**Comment lire les réponses.** Les questions 1, 2 et 3 sont éliminatoires : une
réponse fausse renvoie l'idée au concept. Les questions 4, 5 et 6 sont
correctives : une réponse faible ne tue pas l'idée, elle désigne le travail qui
reste à faire. En cas de désaccord entre elles, la question 3 tranche — c'est
celle qui protège l'invariant n° 1.

## 5 bis. Deux passages au filtre

Le filtre sert autant à **valider** qu'à refuser. Voici une idée inventée pour
cette démonstration, qui n'existe pas dans le site, et qui passe — puis une
voisine qui échoue.

### Passe : la planche contact

*Sur une fiche film, la section Tournage devient une planche contact — une bande
de photogrammes du film, alignés, numérotés. Maintenir sur un photogramme lance
le film à cet instant précis.*

1. **Sans le logo ?** Oui. Une planche contact numérotée, en noir, où l'on
   appuie pour entrer dans le plan : c'est un objet de monteur, pas de portfolio.
2. **Idée ou effet ?** Idée. Elle se raconte sans technique : *on choisit son
   plan dans la pellicule.*
3. **La technologie sert-elle l'image ?** Oui — elle ne fait que montrer des
   images du film, plus densément. Rien ne recouvre rien.
4. **Qu'est-ce qu'elle retire ?** La grille de photos de tournage, qui est
   aujourd'hui la partie la plus générique de la fiche, et qui dépend d'images
   à fournir séparément. La planche contact vient du film lui-même.
5. **Mobile ?** Authored, et déjà cohérent avec le site : le photogramme au
   centre de l'écran s'anime, comme la carte centrée déclenche sa preview.
   Défilement horizontal au doigt, maintien pour entrer.
6. **Déjà vu cent fois ?** La bande de vignettes, oui. La planche contact
   numérotée où l'on maintient pour entrer dans le plan, non — et elle prolonge
   le contre-champ au lieu de le répéter.

Verdict : **LAB recevable.** Reste à définir le repli (si les photogrammes ne
peuvent être extraits), le comportement en mouvement réduit, et le coût réseau.

### Échoue : le timecode qui défile

*Un timecode en bas de l'accueil, qui avance pendant que la vidéo de fond joue.*

Elle sonne parfaitement BINKSFILMS — vocabulaire d'archive, registre système,
petites capitales. Elle échoue quand même :

- **Q2 :** c'est un effet. On ne peut pas la raconter autrement qu'en la
  décrivant. Elle ne dit rien d'un film en particulier.
- **Q4 :** elle ne retire rien et ne remplace rien. Pur ajout.
- Et elle est **permanente**, ce qui la fait tomber sous le §8.

C'est le cas le plus instructif : **le bon vocabulaire ne fait pas une idée.**
La plupart des propositions qui échoueront ici auront l'air justes.

## 6. Anti-DNA — refus immédiats

À refuser **par défaut**. Chacun peut être levé, mais seulement par une raison
BINKSFILMS écrite, pas par « ça rendrait bien ».

- bento grid générique · glassmorphism · cartes SaaS arrondies
- blobs WebGL · shader liquide décoratif · fond dégradé animé
- énorme serif « studio créatif » employée seule, sans sa contre-voix
- smooth scroll gratuit · défilement détourné sans raison
- glitch permanent · CRT/VHS appliqué partout · grain global
- micro-interaction sur chaque élément · curseur custom sans fonction
- transition Awwwards recopiée sans concept
- « premium » traduit par doré + serif + beaucoup de vide
- design system qui homogénéise le site jusqu'à l'effacer

**Anti-patterns propres à ce projet, découverts dans le code :**

- **Le bouton d'application.** La forme suit la nature de l'objet : 11px sur les
  cadres d'image, 0 sur les contrôles et les CTA, et le rond **réservé** à la
  commande de lecture. Arrondir un bouton de formulaire ou carrer une bannière
  est un tell immédiat.
- **La plaque au lieu de la voix.** Mettre en capitales espacées une phrase que
  quelqu'un dit. Les capitales sont le registre de l'étiquette système ; la
  parole humaine est en minuscules, corps modeste, sans interlettrage.
- **Le bloc de statistiques.** « 100+ projets » dans une grille de KPI avec
  compteur animé. Le chiffre porte par l'échelle typographique, seul.
- **Le rouge en surface.** Le rouge est une ponctuation — sélection, focus,
  triangle de lecture. Un bouton rouge, un bandeau rouge, un lien rouge sortent
  de la marque.
- **Le rebond.** Aucune courbe élastique, aucun dépassement, rien qui clignote.
- **L'effet posé sur un plan qui se suffit.** La vidéo d'intro ne reçoit aucun
  filtre — c'est une décision inscrite dans le code, pas un oubli.

Liste complète, avec les conditions de levée : `references/anti-dna.md`.

## 7. Dark luxury — définition stricte

**Ce que c'est :** l'espace, la rareté, la tenue. Du noir qui respire, des
marges qui ne s'excusent pas, un seul accent employé trois fois, des chiffres
alignés, un geste rare exécuté exactement.

**Ce que ce n'est pas :** doré, cuivre, marbre, réflexions, halos, sérif fine
seule sur fond noir, vocabulaire de parfumerie ou de « maison ». Rien de cela
n'existe dans le site. Détail dans `references/anti-dna.md`.

La tension à tenir : le titre du projet revendique le ghetto **et** les beaux
arts. Retirer l'un des deux termes casse la marque. Un site qui ne serait que
luxueux trahit autant qu'un site qui ne serait que brut.

## 8. Registres conditionnels — archive et rétro-numérique

**À lire avant tout usage de VHS, MiniDV, carte SD, timecode, glitch, grain,
scanline ou interface système rétro.**

Ces références sont nommées dans les briefs du projet, mais **le site n'en
contient aucune** — vérifié : la seule mention du mot « grain » dans
`index.html` est un commentaire expliquant qu'il a été délibérément écarté. Le
blueprint les classe d'ailleurs en anti-DNA dès qu'elles deviennent permanentes
ou décoratives.

Ce sont donc des **registres disponibles**, pas l'identité. Conditions d'entrée,
cumulatives :

1. la référence désigne une **réalité du travail** — un support réellement
   utilisé, une date, un statut de conservation — et non une ambiance ;
2. elle apparaît **localement**, sur un élément, jamais comme couche globale ;
3. elle survit au filtre §5 question 2 : c'est une idée, pas une texture ;
4. elle n'est **pas permanente** — elle se déclenche, se maintient ou se révèle.

Si les quatre ne sont pas réunies, l'idée relève du cosplay rétro et doit être
refusée. Détail et exemples : `references/editorial-and-system.md`.

---

## Références

Charger uniquement ce que la tâche exige.

| Fichier | Quand le lire |
|---|---|
| `references/extraction-report.md` | Pour savoir ce qui est **prouvé** dans le code, avec les valeurs exactes, et ce qui est seulement projeté. À lire en cas de doute sur un invariant. |
| `references/visual-language.md` | Palette, typographie, densité, vide, cadres, matière, hiérarchie, imperfection contrôlée. |
| `references/image-and-media.md` | Traitement de l'image et de la vidéo : crop, format, réserve, temporalité, repli, archive comme statut. |
| `references/motion-and-interaction.md` | Mouvement, rythme, courbes, interaction, ADN mobile, détails cachés. |
| `references/editorial-and-system.md` | Ton éditorial, langage système/archive, registres conditionnels détaillés. |
| `references/anti-dna.md` | Liste complète des refus, chacun avec sa condition de levée. |

## Rapport avec les autres skills

`binksfilms-dna` définit **ce qui est BINKSFILMS**. Il ne décide pas de la mise
en œuvre.

- `binks-experience-loop` appelle ce skill à l'étape VISION.
- `innovation-critic` s'y réfère comme standard — les §5 et §6 sont ses griefs
  recevables.
- `quality-contract` vérifie la section BINKSFILMS DNA contre les §2, §5 et §6.

Ce skill ne mentionne aucune bibliothèque ni version. Le choix de la couche de
rendu appartient à `CLAUDE.md` (DOM → CSS → SVG → Video → Canvas → WebGL) et aux
skills d'exécution, pas à l'identité.
