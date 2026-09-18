# Rapport de mission — `experience-direction`

**Date :** 2026-09-18
**Agent :** Claude Code (Opus 5)
**Mission :** `next-task.md` — traduire l'ADN en directions concurrentes
**Périmètre :** skill uniquement. Aucun fichier du site modifié.

---

## 1. Ce que fait le skill

`binksfilms-dna` dit ce qui est BINKSFILMS. `experience-direction` dit **comment
passer d'un objectif à une proposition défendable** — et comment en tenir deux ou
trois de front assez longtemps pour que le choix soit réel.

Il produit un brief, jamais du code.

| Section | Ce qu'elle apporte |
|---|---|
| §1 Observer avant de théoriser | La baseline doit être **falsifiable**. Quatre natures d'observation : spatiale, éditoriale, comportementale, temporelle |
| §2 Deux ou trois directions | **Test de divergence** : elles doivent être en désaccord sur *ce qu'elles sacrifient*, pas sur un réglage |
| §3 L'ambition | **Porte d'ambition** — un mécanisme, pas une déclaration. Détail ci-dessous |
| §4 Ce que contient une direction | 14 points, dont 5 ajoutés pour la rendre exécutable |
| §5 Trois natures de question | Observation / argument / œil, avec la règle qui les relie |
| §6 Présenter et laisser choisir | Même soin partout, recommander clairement, dire ce qui inquiète |
| §7 Interdits | Réduits à trois, spécifiques à ce skill |

Référence : `references/worked-example.md` — la mission B-009 de bout en bout,
plus une esquisse de direction candidate LAB.

---

## 2. La porte d'ambition

C'est la pièce centrale, et elle est née d'un défaut que la relecture a trouvé.

**Premier jet :** « au moins une direction doit être ambitieuse », suivi de cinq
questions. Le critique a montré que c'était une déclaration sans mécanisme — un
agent prudent pouvait la satisfaire en habillant une direction sage — alors que
le §2 d'à côté, lui, a un test qu'on peut rater.

**Corrigé :** au moins une direction doit se **déclarer candidate LAB** et
répondre par écrit, dans la direction elle-même, aux questions 1 et 3 du filtre 2
de `binksfilms-dna` §7 :

1. *Comment cette mécanique s'appelle-t-elle ?* Un nom que le métier emploie déjà
   — « galerie plein écran », « sélecteur de qualité » — et la porte n'est pas
   franchie.
2. *Qu'apprend-on du travail après l'avoir vécue ?* Un accès n'est pas une
   compréhension.

**Un jeu où aucune direction ne franchit cette porte est à refaire.**

Le renommage ne la franchit pas : les deux questions portent sur la mécanique et
sur ce qu'elle révèle, pas sur l'intensité technique.

---

## 3. Corrections après relecture par `innovation-critic`

Verdict REFINE, 3 MAJOR, 4 MINOR. J'ai vérifié ses affirmations factuelles — il
avait raison, y compris sur un arrondi que j'avais fait en ma faveur.

| Grief | Action |
|---|---|
| **MAJOR** — §3 déclarait l'ambition sans porte falsifiable, et dupliquait la doctrine de `binksfilms-dna` §8 bis sans en posséder le mécanisme | Porte d'ambition adossée au filtre 2. §3 possède désormais le mécanisme ; la doctrine reste chez `binksfilms-dna` et n'est plus recopiée |
| **MAJOR** — un brief n'était pas exécutable : rien sur le périmètre, les états à écrire, l'observable de réussite, ni ce que l'idée exige du rendu | Points 10 à 13 ajoutés au §4. Le point 13 dit ce que l'idée **réclame** (traitement par pixel ? composition image par image ?) sans nommer de couche — le choix reste à l'exécutant |
| **MAJOR** — le §5 imposait d'étiqueter les questions ouvertes, mais le format du brief n'avait aucun emplacement pour elles | Point 14 ajouté |
| **MINOR** — le §1 généralisait depuis un cas géométrique ; sur « refais la section Contact » un agent aurait fabriqué des chiffres | Réécrit en **observation falsifiable**, avec quatre natures dont la mesure est la forme forte |
| **MINOR** — le §5 était une taxonomie sans règle de frontière | Ajout : *on mesure d'abord ; c'est quand les mesures convergent que la question devient une question d'œil.* La mesure est ce qui **prouve** qu'une question appartient à l'œil |
| **MINOR** — le seul exemple étant une correction défensive, tout le document penchait vers la prudence | Ajout d'une esquisse de direction candidate LAB en fin de référence — « les générations » — présentée **avec ce qui peut la tuer** |
| **POLISH** — « quatre cartes à l'écran » là où la mesure disait 3,66 | Corrigé. Un document dont l'autorité repose sur la mesure n'arrondit pas en sa faveur |
| **POLISH** — §7 répétait l'ouverture du document et des règles déjà portées par `CLAUDE.md` | Réduit de cinq interdits à trois |

---

## 4. Les deux ajustements demandés dans `binksfilms-dna`

Faits, tous deux issus de `next-task.md` :

**§8 bis — L'ambition.** Section courte ajoutée : l'anti-DNA porte sur le cliché,
jamais sur l'intensité. Motion avancée, compositing, 3D, rendu temps réel,
shaders : pleinement ouverts. Ce qui est refusé reste le générique, le gratuit,
le répétitif, le mal intégré. *Effet maximal possible, cliché minimal possible.*

**`built-expression.md` §2 bis.** Le format d'affiche mobile n'est plus une
intention non réalisée — il est implémenté depuis aujourd'hui. Le passage est
réécrit en `[vérifié]`, avec les chiffres et la raison géométrique.

---

## 5. Fichiers

**Créés :** `.claude/skills/experience-direction/SKILL.md` (217 l.) et
`references/worked-example.md` (174 l.).
**Modifiés :** `binksfilms-dna/SKILL.md` (+ §8 bis),
`binksfilms-dna/references/built-expression.md`.
**Site :** aucun fichier touché.

---

## 6. Ce qui reste ouvert

- Le skill n'a **jamais servi**. Sa valeur se prouvera au premier brief réel, et
  c'est à ce moment qu'on saura si la porte d'ambition tient ou se contourne.
- Son unique exemple complet reste une correction. L'esquisse LAB ajoutée n'est
  pas un cas mené jusqu'au bout — le prochain vrai jeu de directions devrait
  compléter ou remplacer cette référence.
- **B-010** — le déséquilibre de masse signalé sur `binksfilms-dna` vaut aussi
  ici, dans une moindre mesure : 217 lignes de méthode pour un skill qui exige
  des briefs courts.

---

## 7. Suite

Selon `next-task.md` : premières propositions créatives réelles, puis un premier
prototype visible. Le terrain reste à choisir — c'est la première occasion
d'exercer ce skill pour de vrai.
