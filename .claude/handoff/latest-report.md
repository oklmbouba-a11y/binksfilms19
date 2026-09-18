# Rapport de mission — `binksfilms-dna` V1.1

**Date :** 2026-09-18
**Agent :** Claude Code (Opus 5) — moteur créatif principal
**Mission reçue :** `next-task.md`, commits `eadf865` puis `81dd5ce`
**Périmètre :** skill uniquement. Aucun fichier du site public modifié.

---

## 1. La correction de fond

Ma V1 avait un défaut méthodologique que ChatGPT a identifié et que j'accepte
entièrement : **elle traitait le code existant comme l'autorité suprême sur
l'identité future.** C'est la même erreur que celle que l'`innovation-critic`
avait relevée un cran plus bas — s'appuyer sur les commentaires plutôt que sur le
comportement — répétée à l'étage au-dessus : s'appuyer sur ce qui est construit
plutôt que sur ce qui est voulu.

La V1.1 est structurée autour de la réponse : **trois niveaux de vérité**.

| Niveau | Contenu | Poids |
|---|---|---|
| **A — INTENTION** | ce que BINKSFILMS veut être, déclaré, même absent du code | l'emporte sur une absence dans le code |
| **B — CONSTRUIT** | ce que le site implémente réellement | preuve et école de précision ; charge de preuve **levable** |
| **C — REGISTRE** | expressions possibles, jamais obligatoires | ne l'emporte sur rien |

Toutes les autres modifications découlent de ce modèle.

---

## 2. V1 → V1.1, les différences

| | V1 | V1.1 |
|---|---|---|
| **Méthode** | le site fait loi | trois niveaux, arbitrage explicite |
| **Invariant I** | « le texte vit dans la bannière » comme absolu | l'image est le sujet ; l'emplacement du texte descend en B |
| **Invariant II** | « trois voix, jamais quatre » | séparation des rôles et exclusivité d'appartenance ; la tripartition descend en B |
| **Tensions** | 5, dont *analogique × numérique* écartée | 7, avec `trace × système` et `mémoire × consultation` réhabilitées au niveau conceptuel |
| **Accident contrôlé** | résilience technique | deux versants — créatif **et** technique — avec test de reproductibilité |
| **Filtre** | 6 questions, un seul verdict | **double filtre** : DNA FIT puis DISTINCTION, verdicts séparés |
| **Exemples** | 2 (une passe, une échoue) | 3 : cohérente mais banale → QUIET ; distinctive → candidat LAB ; échec malgré le bon vocabulaire |
| **Grain** | absence traitée comme invariant | distinction **matière** (dans la source, recevable) / **décor** (posé, refusé) |
| **Archive** | booléen de données | mémoire réelle du travail ; le booléen en est la forme la plus pauvre |
| **Portée** | non testée | `open-territories.md` : boutique, archive, rendu temps réel, **et deux limites où l'ADN se tait** |
| **Évolution** | absente | §14 — comment BINKSFILMS a le droit de se contredire |
| **Son** | absent | §13 — territoire presque vierge, deux règles tranchées, le reste ouvert |

`extraction-report.md` est renommé **`built-expression.md`** : le nom dit
désormais son statut.

---

## 3. Fichiers

Huit fichiers sous `.claude/skills/binksfilms-dna/` :

| Fichier | Lignes |
|---|---|
| `SKILL.md` | 470 |
| `references/built-expression.md` *(ex extraction-report)* | 296 |
| `references/open-territories.md` **(nouveau)** | 215 |
| `references/motion-and-interaction.md` | 191 |
| `references/image-and-media.md` | 169 |
| `references/visual-language.md` | 157 |
| `references/anti-dna.md` | 139 |
| `references/editorial-and-system.md` | 121 |

**Site intact**, vérifié par hash contre le tag `core-phase1` : `index.html`,
`films.js`, `admin.html`, `vercel.json`.

---

## 4. Ce que j'ai choisi de NE PAS suivre

**Le classement du vocabulaire rétro en CORE INTENT.** Le brief `eadf865` §1
listait « interfaces rétro-numériques / VHS / MiniDV / carte SD / grain » parmi
les principes voulus pour le futur. Je les ai classés en **niveau C**.

Raison : le propriétaire a lui-même tranché dans le commit suivant — *« le
vocabulaire rétro-numérique est une matière disponible, pas une obligation
visuelle »* — en listant le CRT partout, le VHS partout, les scanlines, les
timecodes décoratifs et le grain systématique parmi ce qu'il ne veut **surtout
pas**. Ce qui est en niveau A, c'est la **tension** `trace × système` ; ses
costumes restent en C. Les deux briefs se contredisaient ; j'ai suivi le plus
récent et le plus direct.

**La structure proposée point par point.** Le brief détaillait quinze sections à
corriger. J'ai repris le fond de la quasi-totalité, mais réorganisé : les trois
niveaux passent en §2 parce qu'ils gouvernent tout le reste, le double filtre
devient une section unique à deux étages plutôt que deux mécanismes séparés, et
j'ai ajouté deux choses qu'aucun brief ne demandait — le son et le droit de se
contredire.

**« Ne pas utiliser le faible nombre de gestes LAB comme proportion normative »**
— suivi, mais je maintiens le constat factuel (le site n'en a qu'un) en le
marquant explicitement comme non normatif. Le supprimer aurait retiré une
information vraie.

---

## 5. Validation adverse

`innovation-critic` a relu la V1.1. Verdict **REFINE**, 4 MAJOR, 7 MINOR.
J'ai vérifié ses affirmations factuelles contre `index.html` avant d'agir — il
avait raison sur toutes.

| Grief | Action |
|---|---|
| **MAJOR** — `motion-and-interaction.md` justifiait des exclusions par l'absence dans le site : exactement la faute que V1.1 devait tuer | Réécrit en refus par défaut avec conditions de levée, renvoi à `anti-dna.md` |
| **MAJOR** — le « test de nommage » réinstallait le péage lexical supprimé en §4, et récompensait le renommage que le filtre condamne | Supprimé. Mon remplacement précédent n'avait pas pris ; le critique l'a vu, moi non |
| **MAJOR** — `editorial-and-system.md` n'avait reçu aucun retrofit, ses conventions se lisaient comme des lois | En-tête de niveau ajouté : la voix est de l'identité, les conventions d'écriture sont du B |
| **MAJOR** — l'exemple B s'attribuait le grade LAB alors que quatre conditions restaient ouvertes | Devenu **candidat LAB conditionnel**, avec les deux conditions qui le tiennent : les fichiers dégradés doivent exister réellement, et l'interaction reste à inventer — « on passe de l'une à l'autre » décrit un sélecteur de qualité |
| **MINOR** — le filtre 2 demandait un rappel visuel du web qu'un modèle n'a pas | Reformulé en question vérifiable : *cette mécanique a-t-elle un nom générique ?* |
| **MINOR** — mobile réel sous-documenté | Ajouté : la bannière **grandit et s'éclaircit** en approchant du centre (échelle 0.93 → 1, luminosité 0.72 → 1), l'assombrissement porté sur l'image et non sur le cadre pour ne pas éteindre le texte des bannières en attente |
| **MINOR** — le « rebond » était le seul refus soustrait à la procédure | Doté d'une condition de levée explicite, même vide |
| **MAJOR implicite** — `open-territories.md` : trois territoires, trois succès, aucune limite | Ajout du §4 : **là où l'ADN se tait**. Une page sans image, et un territoire où l'image n'est pas la matière |
| — `open-territories.md` §2 affirmait sans tester | Un axe réellement éprouvé : traverser l'archive par ce qui n'a pas été diffusé. Produit une contrainte (une voix manquante) et trois refus précis |
| — contradiction : le brief boutique recommandait de transposer un savoir-faire du site, ce que `anti-dna.md` appelle décalque | Reformulé en précaution |
| **POLISH** — duplications | `built-expression.md` §4 supprimé, conditions rétro dédupliquées |

**Son grief restant que je n'ai pas résolu** : le déséquilibre de masse. Le skill
déclare en vingt lignes que les valeurs ne sont pas des lois, puis fournit
plusieurs centaines de lignes de valeurs — et dans une génération, le concret
gagne sur l'abstrait. C'est structurel et je ne sais pas le résoudre sans
appauvrir le relevé, qui a sa valeur. **Signalé comme B-010.**

---

## 6. Ce que j'ai ajouté de ma propre initiative

**§13 — Le son.** Absence relevée par le critique, et elle est grave : l'identité
déclarée est « la rue et **la musique** », le travail est fait de clips, et le
skill n'en disait rien. Deux règles tranchées (le son ne part jamais seul ; le
silence est une matière), le reste explicitement ouvert.

**§14 — Comment BINKSFILMS a le droit de changer.** C'est l'ajout dont je suis le
plus convaincu. Sans lui, tout le reste restait de la conservation avec une carte
plus large. Il dit ce qui change librement (niveau B), comment un geste de
signature se retire (quand il est devenu une habitude et que personne ne sait
plus dire ce qu'il apporte), ce qui relève du propriétaire seul (les invariants,
les tensions), et le test : *ce changement vient-il du travail, ou d'ailleurs ?*

**Les limites de `open-territories.md`.** Qu'une page de mentions légales ne
mérite aucune signature est une position, pas un aveu de faiblesse. Une identité
qui aurait quelque chose à dire sur tout serait envahissante.

---

## 7. Ce que j'ai laissé volontairement ouvert

- **Le son**, à l'exception de ses deux règles — c'est le territoire que je
  recommande d'explorer ensuite, et il mérite mieux qu'une doctrine écrite depuis
  un fichier.
- **L'axe de traversée d'une archive** : un seul testé, à titre de démonstration.
- **Le format d'affiche mobile** (B-009) : intention écrite, non implémentée, ni
  entérinée ni refusée.
- **Le quatrième rôle d'énonciation** : la boutique en fait apparaître le besoin,
  personne ne l'a dessiné.
- **Aucune technologie, aucune bibliothèque, aucune version** n'est nommée.

---

## 8. Tests

| Test | Résultat |
|---|---|
| Détection du skill | OK — description mise à jour, déclenchement/non-déclenchement conservés |
| Liens internes | 12 renvois vérifiés, 0 cassé après le renommage |
| Cohérence SKILL.md ↔ références | vérifiée après correction des 4 MAJOR |
| Affirmations factuelles du critique | toutes recoupées contre `index.html` avant action |
| Intégrité du site | 4 fichiers, hash identiques au tag `core-phase1` |

Non testé : l'usage réel en mission créative. La V1.1 sera jugée à la première
proposition qu'elle aidera à trancher — ou à refuser.

---

BINKSFILMS DNA READY FOR OWNER REVIEW
