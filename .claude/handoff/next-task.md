# Prochaine étape — BINKSFILMS

**Mise à jour :** 2026-09-18 · **Proposé par :** Claude Code
**Phase 2 :** `binksfilms-dna` livré, en attente de revue.

---

## Immédiat — revue ChatGPT

Le skill `binksfilms-dna` est écrit, critiqué par `innovation-critic`, corrigé,
et poussé. Rapport complet dans `latest-report.md`.

Points sur lesquels une revue est réellement utile, par ordre d'intérêt :

1. **§5 bis de `SKILL.md`** — les deux passages au filtre. C'est la partie qui
   décide si le document sait dire *oui* et pas seulement *non*. L'exemple
   retenu (la planche contact) est inventé : à contester s'il ne sonne pas
   BINKSFILMS.
2. **§8 et D-008** — le vocabulaire rétro traité comme registre conditionnel et
   non comme identité. C'est une contradiction assumée avec la liste de sources
   de la mission reçue. Si ChatGPT maintient sa lecture, il faut trancher, pas
   moyenner.
3. **Les cinq tensions fondatrices retenues, les deux écartées** (§3 de
   `SKILL.md`). L'analyse est défendable mais discutable.
4. **`extraction-report.md` §2 bis** — les intentions écrites que le code ne
   réalise pas.

---

## Mission suivante proposée — `experience-direction`

Blueprint §13, Phase 2, point 8. C'est la suite logique.

`binksfilms-dna` dit **ce qui est BINKSFILMS**. Rien ne dit encore **comment en
tirer une direction** pour une section donnée : comment passer d'un objectif
(« refaire la section Contact », « donner une place à l'archive ») à deux ou
trois directions concurrentes, argumentées, dont une est retenue.

Matière disponible : le skill `binksfilms-dna`, le prompt de l'agent
`art-director` (qui fait déjà ce travail sans support écrit), et le blueprint
§ SKILL 02.

Périmètre : écrire le skill. Aucune modification du site.

---

## Puis — affinage d'`innovation-critic`

L'agent vient de démontrer sa valeur en trouvant un BLOCKER et six MAJOR dans un
document qu'il n'avait pas écrit, et en vérifiant ses affirmations contre le
code. Son prompt lui demande encore de juger à l'intuition ; il peut désormais
juger contre `binksfilms-dna`. Modification courte, gain réel.

---

## Dette, non prioritaire

- **B-003 + B-004 + B-006** — passe de correction contenu via `admin.html` :
  visuels manquants du film `fulltrap-…`, chemin `videos/previews/`,
  resynchronisation de `GUIDE-DEPLOIEMENT.md`.
- **B-008** — sort du fichier `previews/saisai boro 700 fin des temps.mp4`.
- **B-009** — l'écart entre le commentaire mobile et le CSS réel. À trancher :
  tenir l'intention (mission EXPERIMENTAL) ou corriger le commentaire.

---

## Hors périmètre

- Phases 3 à 5 du blueprint tant que la Phase 2 n'est pas close.
- Toute modification de la DA du site. `binksfilms-dna` existe pour préparer ce
  travail, pas pour le déclencher.
- Toute migration de framework, toute installation de skill ou MCP tiers sans
  passer par `capability-scout`.
