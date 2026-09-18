# Prochaine étape — BINKSFILMS

**Mise à jour :** 2026-09-18 · **Émise par :** ChatGPT
**Phase :** 2 — Identité
**Mission :** construire `binksfilms-dna`

---

## Objectif

Créer le skill projet `.claude/skills/binksfilms-dna/` qui encode l’identité BINKSFILMS de manière suffisamment précise pour guider les futures décisions créatives de Claude Code.

Le but n’est PAS de décrire une esthétique avec quelques adjectifs.

Le skill doit permettre à un agent de répondre à ces questions :

- Est-ce que cette idée appartient réellement à BINKSFILMS ?
- Est-ce que cette proposition est seulement "créative", ou réellement spécifique ?
- Qu’est-ce qui doit être brutal, silencieux, luxueux, sale, net ou expérimental ?
- Quand faut-il utiliser l’archive, le rétro-numérique, le grain, le glitch ou la vidéo ?
- Quand faut-il au contraire les éviter ?
- Quelle tension visuelle doit survivre même si on retire le logo ?
- Quels réflexes de design générique doivent être refusés immédiatement ?

---

## Sources à utiliser

Avant d’écrire le skill, analyse et synthétise :

1. Le site actuel :
   - `index.html`
   - `films.js`
   - la structure des sections
   - les comportements déjà présents
   - les choix typographiques, chromatiques et éditoriaux

2. Les documents projet :
   - `CLAUDE.md`
   - `.claude/blueprint/BINKSFILMS_CLAUDE_SYSTEM_BLUEPRINT_V1.md` ou le blueprint réellement présent
   - `.claude/rules/`
   - `.claude/handoff/decisions.md`
   - `.claude/handoff/blockers.md`

3. L’identité déjà définie dans le système :
   - **BINKSFILMS — Les Beaux Arts du Ghetto**
   - réalisateur / musique / image / rue / numérique
   - **STREET × CINEMA × DIGITAL SYSTEM × ARCHIVE × CONTROLLED ACCIDENT × DARK LUXURY**
   - noir profond
   - image cinématographique
   - interfaces rétro-numériques
   - VHS / MiniDV / carte SD / archive
   - grain
   - mouvement
   - expérimentation
   - détails cachés
   - luxe sombre
   - brutalité maîtrisée

Important : commence par **extraire ce qui existe déjà réellement** avant d’inventer de nouveaux principes.

---

## Livrables

Créer :

`.claude/skills/binksfilms-dna/SKILL.md`

et seulement si nécessaire :

`.claude/skills/binksfilms-dna/references/`

Le `SKILL.md` doit rester relativement compact et charger les références détaillées seulement lorsque nécessaire.

---

## Structure attendue du skill

Le skill doit au minimum couvrir :

### 1. Core identity
Une définition courte et forte de BINKSFILMS.

Pas une phrase marketing vague.

### 2. Core tensions
Décrire les contradictions productives qui rendent la marque identifiable, par exemple :

- rue × précision
- brut × luxe
- analogique × numérique
- archive × futur
- cinéma × interface
- accident × contrôle
- silence × impact

Ne pas simplement recopier cette liste : analyse lesquelles sont vraiment fondatrices.

### 3. Visual language
Définir :
- noir / lumière
- contraste
- densité
- vide
- typographie
- image
- grain
- couleur
- matière
- overlays
- cadres
- interface
- hiérarchie

### 4. Image philosophy
Comment traiter les images et vidéos :
- image comme matière principale
- crop
- plein écran
- compression
- texture
- imperfections
- temporalité
- archive
- rapport image/interface

### 5. Digital-system language
Définir comment utiliser :
- carte SD
- MiniDV
- timecode
- recording UI
- interface système
- écrans
- console
- erreurs
- loading
- statut
- données
- métadonnées

Règle : ces références doivent servir le concept, jamais devenir un thème cosplay rétro.

### 6. Motion philosophy
Sans entrer dans la technique GSAP :
- quand bouger
- quand couper
- quand tenir
- rythme
- inertie
- snap
- freeze
- retard
- glitch
- silence

### 7. Interaction philosophy
Quel type d’interaction paraît BINKSFILMS :
- découverte
- maintien
- reveal
- friction légère
- gestes rares mais mémorables
- interaction comme caméra / archive / système

### 8. Editorial tone
Comment le texte doit se comporter :
- peu de mots
- phrases fortes
- informations utiles
- ton direct
- pas de storytelling corporate
- pas de luxe cliché

### 9. Controlled imperfection
Définir la différence entre :
- défaut intentionnel
- effet artificiel
- bug
- bruit décoratif

### 10. Dark luxury
Définir précisément ce que "luxe sombre" veut dire pour BINKSFILMS et surtout ce que ça ne veut pas dire.

### 11. Hidden details
Comment utiliser les easter eggs / détails cachés sans nuire à l’usage principal.

### 12. Mobile DNA
Le mobile ne doit pas être une version réduite du desktop.
Définir comment l’identité BINKSFILMS s’exprime sur touch, petits écrans et interactions sans hover.

### 13. Anti-DNA / forbidden patterns
Cette partie est critique.

Créer une liste explicite de réflexes à refuser lorsqu’ils ne sont pas justifiés :

- bento grid générique
- glassmorphism
- cartes SaaS arrondies
- blobs WebGL
- shader liquide décoratif
- énorme serif "studio créatif"
- smooth scroll gratuit
- glitch permanent
- CRT/VHS appliqué partout
- micro-interactions sur chaque élément
- curseur custom sans fonction
- transitions Awwwards copiées
- surcharge de bruit/grain
- "premium" traduit par doré + serif + beaucoup de vide
- esthétique tech générique
- design system qui homogénéise excessivement le site

Ajoute les anti-patterns réellement pertinents découverts dans le projet.

### 14. Decision filters
Fournir un petit ensemble de questions que les agents peuvent utiliser avant de valider une idée.

Exemples :
- Si on retire le logo, est-ce encore BINKSFILMS ?
- Est-ce une idée ou juste un effet ?
- Qu’est-ce que cette interaction raconte ?
- Est-ce que la technologie sert l’image ?
- Peut-on retirer quelque chose et rendre le concept plus fort ?
- Le mobile est-il réellement conçu ?
- Est-ce que j’ai déjà vu exactement cette mécanique sur 100 portfolios ?

### 15. Degrees of intensity
Le skill doit reconnaître qu’une section BINKSFILMS n’a pas besoin d’être expérimentale en permanence.

Définir au moins :
- **QUIET**
- **SIGNATURE**
- **LAB**

pour doser la présence de l’identité.

---

## Règles de rédaction

- Ne transforme pas le skill en moodboard textuel.
- Ne lie pas l’ADN à une version de Three.js, GSAP ou autre technologie.
- Ne crée pas de règles arbitraires du type "toujours 24 fps" ou "toujours glitcher les titres".
- Ne fige pas la marque dans une seule esthétique rétro.
- N’invente pas de règles contradictoires avec le site ou les documents existants sans les signaler.
- Préfère des principes décisionnels à des recettes.
- Le skill doit aider Claude à **inventer de nouvelles expressions BINKSFILMS**, pas seulement reproduire ce qui existe déjà.

---

## Méthode

1. Fais d’abord une analyse read-only de l’identité existante.
2. Produis un **DNA extraction report** court avant d’écrire.
3. Identifie les invariants vs les éléments simplement actuels.
4. Écris le skill.
5. Relis-le avec `innovation-critic` comme si tu cherchais les clichés et contradictions.
6. Corrige le skill si nécessaire.
7. Vérifie qu’il reste utilisable avec progressive disclosure.
8. Ne touche à aucun fichier du site public.

---

## Interdictions

Pendant cette mission :

- ne modifie pas `index.html`
- ne modifie pas `films.js`
- ne modifie pas `admin.html`
- ne refais aucune section
- n’installe aucune dépendance
- n’installe aucun skill externe
- n’ajoute pas de WebGL / GSAP / Canvas
- ne lance pas de refonte visuelle

Cette mission porte uniquement sur le **cerveau créatif** du système.

---

## Critères de réussite

Le skill est prêt seulement si :

1. il permet d’expliquer pourquoi une idée est ou non BINKSFILMS ;
2. il ne réduit pas la marque à VHS + noir + glitch ;
3. il distingue clairement identité stable et effets optionnels ;
4. il encode autant les interdits que les possibilités ;
5. il peut guider desktop ET mobile ;
6. il peut générer de nouvelles directions sans tomber dans le template créatif ;
7. l’`innovation-critic` peut s’y référer comme standard réel ;
8. aucune modification du site public n’a été nécessaire.

---

## Fin de mission / handoff

À la fin :

1. commit + push ;
2. mets à jour :
   - `.claude/handoff/latest-report.md`
   - `.claude/handoff/decisions.md`
   - `.claude/handoff/blockers.md`
   - `.claude/handoff/next-task.md`

Dans `latest-report.md`, indique :
- le commit ;
- les fichiers créés/modifiés ;
- la structure finale du skill ;
- les invariants identifiés ;
- les anti-patterns principaux ;
- les choix que tu as volontairement laissés ouverts ;
- les éventuelles contradictions détectées.

Si le skill est prêt pour revue ChatGPT, termine le rapport par exactement :

`BINKSFILMS DNA READY FOR REVIEW`
