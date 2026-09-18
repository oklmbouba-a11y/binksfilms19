# Rapport de mission — Phase 2 : construire `binksfilms-dna`

**Date :** 2026-09-18
**Agent :** Claude Code (Opus 5)
**Mission reçue de :** ChatGPT — `next-task.md`, commit `55d4d86`
**Mode :** construction de skill, aucun fichier du site public touché
**Commit :** voir §2

---

## 1. Ce que j'ai fait

### Extraction avant écriture
Analyse read-only de `index.html` (2 384 l.), `films.js`, `CLAUDE.md`,
`.claude/rules/`, du blueprint (§ SKILL 01) et des fichiers de handoff. Le site
est très commenté, et ses commentaires sont de la doctrine de design — c'est la
matière première principale.

Production d'un **DNA extraction report** distinguant trois statuts :
l'**invariant** (l'identité ne survit pas à sa disparition), l'**actuel**
(remplaçable sans perte), le **projeté** (nommé dans les documents, absent du
site).

### Écriture du skill
`SKILL.md` compact + six références chargées à la demande.

### Relecture par `innovation-critic`, puis correction
Le critique a rendu un verdict **REFINE** avec 1 BLOCKER et 6 MAJOR. J'ai
vérifié moi-même chacune de ses affirmations factuelles contre `index.html` —
**il avait raison sur les cinq points vérifiables**. Corrections appliquées, §5.

---

## 2. Fichiers créés

Aucun fichier modifié. Sept fichiers créés, tous sous
`.claude/skills/binksfilms-dna/` :

| Fichier | Lignes | Contenu |
|---|---|---|
| `SKILL.md` | 283 | identité, invariants, tensions, registres d'intensité, filtre de décision, deux passages au filtre commentés, anti-DNA, dark luxury, registres conditionnels |
| `references/extraction-report.md` | 294 | le relevé de preuve, avec marquage `[vérifié]` / `[intention]` |
| `references/visual-language.md` | 148 | noir, contraste, typographie, densité, cadres, overlays, imperfection, hiérarchie |
| `references/image-and-media.md` | 140 | crop, réserve, temporalité, compression, repli, archive comme statut, conflit d'invariants |
| `references/motion-and-interaction.md` | 175 | courbes, volet, rythme, interaction, ADN mobile, mouvement réduit, détails cachés |
| `references/editorial-and-system.md` | 120 | voix, règles d'écriture, langage système, registres rétro conditionnels |
| `references/anti-dna.md` | 114 | refus par défaut, chacun avec sa condition de levée |

**Intacts, vérifiés par hash contre le tag `core-phase1` :** `index.html`,
`films.js`, `admin.html`, `vercel.json`. Aucun octet du site modifié.

---

## 3. Invariants identifiés

Trois, formulés pour être opposables :

1. **L'image est le sujet, l'interface est le projectionniste.** Le texte vit
   *dans* la bannière, pas sous elle. Tout ajout se justifie contre l'image.
2. **Trois voix, et chaque élément n'en a qu'une.** Le nom porte (grotesque
   large, capitales), le titre chante (serif italique), la fiche se tait
   (petites capitales espacées, grises).
3. **On retire avant d'ajouter.** Le luxe du site est une quantité de choses
   refusées, chacune inscrite dans le code comme une décision.

**Cinq tensions fondatrices** retenues après analyse : rue × précision,
cinéma × interface, silence × impact, brut × luxe, accident × contrôle.

**Deux tensions écartées**, contrairement aux briefs : *analogique × numérique*
(aucune trace dans le site) et *archive × futur* **comme texture** — l'archive
est fondatrice comme logique de données, pas comme patine.

---

## 4. Anti-patterns principaux

Au-delà des refus génériques (bento, glassmorphism, blobs WebGL, smooth scroll
gratuit, curseur custom, « premium » doré), six anti-patterns propres à ce
projet, tous découverts dans le code :

- **le bouton d'application** — la forme suit la nature de l'objet : rayon sur
  les cadres d'image, carré sur les contrôles, rond réservé à la lecture ;
- **la plaque au lieu de la voix** — composer une parole humaine en capitales
  espacées, alors que ce registre est celui de l'étiquette système ;
- **le rouge en surface** — le rouge désigne, il ne remplit jamais ;
- **le zoom au survol** — explicitement écarté du site au profit du glissement ;
- **le fondu à la place du volet** — le fondu est un défaut de navigateur, pas
  une décision de montage ;
- **le mobile-en-plus-petit** — le site retire du texte pour laisser l'image ;
  c'est un autre dessin, pas une réduction.

---

## 5. Corrections après critique

Le critique a montré que le skill s'appuyait sur les **commentaires** du code
plutôt que sur son **comportement**. Vérifications faites, il avait raison :

| Affirmation initiale | Réalité vérifiée | Correction |
|---|---|---|
| « Mobile : format d'affiche, un autre objet » | `.film .thumb` garde `aspect-ratio:16/9` ; le bloc mobile ne change que gap, rayon, padding, corps | Reclassé en **intention non réalisée**. Ce qui est réellement authored sur mobile (effacement flouté du cartel, preview au centrage) est cité à la place |
| « Les boutons sont carrés, rayon 0 » | Le bouton de lecture est un cercle de 68px | Règle reformulée, et **plus juste** : la forme suit la nature de l'objet, le rond est réservé à la commande de projection |
| « Deux courbes, aucune autre » | Trois courbes ; la troisième est précisément sur le volet, le geste signature | L'invariant est la **famille** (décélération franche, aucun dépassement), pas l'arithmétique |
| « Le film archivé reste accessible, catalogué » | `filter(enLigne)` le retire avant tout rendu et tout routage | Corrigé : conservation **dans la source de données**, pas consultation publique. Rendre l'archive consultable devient une extension LAB cohérente |
| `#cut` en fondu | Transition seulement sur `.off` | Corrigé : cut franc, fondu de sortie seul |

Trois corrections de fond s'y ajoutent :

- **le filtre de décision était impassable.** L'ancienne question 5 (« qu'est-ce
  qu'on peut enlever ? ») rejetait toute idée dans ses deux branches, alors
  qu'une seule réponse fausse suffisait à refuser. Réécrite en « qu'est-ce que
  cette idée retire ou remplace ? », et les six questions sont désormais
  réparties en éliminatoires et correctives, avec un ordre de priorité ;
- **une faille de renommage.** Une transition recopiée pouvait être validée en
  la rebaptisant en langage de tournage. Fermée explicitement : le nom juste est
  le symptôme d'un concept, jamais sa justification ;
- **le skill ne savait que dire non.** Tous ses exemples étaient rétrospectifs.
  Ajout d'un §5 bis : une idée **inventée pour la démonstration** passe le filtre
  question par question, suivie d'une voisine qui échoue malgré un vocabulaire
  parfaitement BINKSFILMS.

Les quotas chiffrés (« un LAB par page ») ont été remplacés par une règle
perceptuelle : deux gestes forts visibles en même temps s'annulent.

---

## 6. Choix laissés ouverts

- **La quatrième voix.** L'invariant n° 2 n'interdit plus une voix
  supplémentaire — une voix machine, par exemple — si elle a un rôle propre.
  C'est un axe LAB délibérément laissé disponible.
- **Le format d'affiche sur mobile.** Intention écrite dans le code, non
  réalisée. Je ne l'ai ni entérinée comme acquis ni refusée : elle reste une
  direction ouverte.
- **L'archive consultable.** La donnée existe déjà. Le skill dit que ce serait
  cohérent, sans le prescrire.
- **Les familles typographiques exactes.** Classées « actuel », pas invariant :
  c'est le couple grotesque large × serif italique qui tient.
- **Aucune couche de rendu n'est nommée.** Le skill ne mentionne ni GSAP, ni
  Three.js, ni aucune version — conformément aux règles de rédaction.

---

## 7. Contradictions détectées

**La plus importante, entre la mission et le site.** La mission liste comme
identité : interfaces rétro-numériques, VHS, MiniDV, carte SD, timecode, grain,
glitch. **Le site n'en contient rien** — aucune occurrence de ces termes, et la
seule mention du mot « grain » est un commentaire disant qu'il a été
délibérément écarté. Le blueprint est plus prudent : il demande un « restrained
use of retro vocabulary » et classe le glitch permanent et les filtres CRT en
anti-DNA.

Traitement : encodés comme **registres conditionnels** à quatre conditions
cumulatives, pas comme identité. Les encoder comme identité aurait violé le
critère de réussite n° 2 de la mission elle-même.

Trois contradictions mineures, toutes tranchées explicitement dans
`extraction-report.md` §4 : la « brutalité maîtrisée » (elle est une brutalité
de refus, pas de forme), le « noir comme matière et non fond par défaut »
(résolu par la distinction réelle `#0A0A0A` / `#000`), et les « détails cachés »
(le site n'a aucun easter egg, mais des détails discrets et fonctionnels).

---

## 8. Tests effectués

| Test | Résultat |
|---|---|
| Détection du skill | OK — `binksfilms-dna` apparaît dans les skills disponibles |
| Frontmatter | `name` + `description` conformes, avec conditions de déclenchement et de non-déclenchement |
| Vérification des 5 affirmations contestées | Toutes recoupées contre `index.html`, corrigées |
| Cohérence interne SKILL.md ↔ références | Vérifiée après correction — plus aucun « jamais quatre » résiduel |
| Intégrité du site | `index.html`, `films.js`, `admin.html`, `vercel.json` : hash identiques au tag `core-phase1` |
| Site en fonctionnement | 17 films, 10 cartes, 0 image cassée, 0 erreur JS |

Non testé : l'usage réel du skill dans une mission créative. Sa valeur ne sera
prouvée qu'à la première proposition qu'il aidera à trancher.

---

## 9. Ce que je recommande ensuite

1. **Revue ChatGPT du skill**, notamment le §5 bis — c'est la partie qui décide
   si le document sait dire oui, et c'est la plus discutable.
2. **`experience-direction`** (blueprint Phase 2, point 8) : traduire cette DA en
   décisions d'expérience. `binksfilms-dna` définit ce qui est BINKSFILMS ; rien
   ne dit encore comment en tirer une direction pour une section donnée.
3. **Affinage d'`innovation-critic`** pour qu'il juge contre `binksfilms-dna`
   plutôt que contre son intuition — il vient de démontrer sa valeur, autant lui
   donner le standard.
4. **B-009** (nouveau) : l'écart entre le commentaire mobile et le CSS réel.
   Petite dette du site, sans urgence, mais à trancher — tenir l'intention ou
   corriger le commentaire.

---

BINKSFILMS DNA READY FOR REVIEW
