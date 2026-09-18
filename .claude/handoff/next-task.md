# Prochaine étape — BINKSFILMS

**Mise à jour :** 2026-09-18 · **Proposé par :** Claude Code
**Intègre :** la décision propriétaire d'accélérer vers le travail créatif (`4dc5449`)

---

## Consigne propriétaire en vigueur

Sortir de la préparation. Priorité : `experience-direction`, puis des
propositions créatives réelles, puis un premier prototype visible. Le mobile ne
doit pas servir de prétexte à retarder ça — il est fait, on avance.

**Et un point de goût qui change la lecture du système :** le propriétaire adore
les effets ambitieux, bien exécutés. WebGL, shaders, 3D, compositing, motion
avancée, transitions fortes sont **pleinement ouverts**. Anti-cliché n'est pas
anti-effet. Voir D-014.

---

## Fait

**B-009 — le format d'affiche mobile.** Livré. `.film .thumb` en 3/4 sur mobile,
plancher de luminosité relevé de 0,72 à 0,82 en conséquence. On passe de 3,66 à
1,73 carte par écran, le cartel de 53 % à 21 % de l'image. Desktop strictement
inchangé. Détail dans `latest-report.md`, décision en D-015.

Ratio tranché par le propriétaire après comparaison à l'œil : **3/4**.

---

## Mission suivante — `experience-direction`

Blueprint §13, Phase 2, point 8. Traduire l'ADN en directions créatives
concurrentes et argumentées, puis en retenir une avant implémentation.

`binksfilms-dna` dit ce qui est BINKSFILMS et ce qui mérite d'exister. Rien ne
dit encore comment passer d'un objectif à deux ou trois propositions
défendables. La mission B-009 vient d'en faire la démonstration à la main —
baseline chiffrée, trois directions, choix du propriétaire, implémentation, QA.
C'est exactement ce que ce skill doit outiller, et ce cas peut lui servir
d'exemple travaillé.

**Contrainte issue de D-014 :** le skill doit savoir produire des directions
**ambitieuses**, pas seulement prudentes. Si ses trois propositions types sont
toujours sages, il est raté.

---

## Puis — premier prototype visible

Objectif du propriétaire. Terrain à choisir au moment venu ; `binksfilms-dna`
§6 (registre LAB) et `open-territories.md` donnent les critères.

---

## Ajustement à faire dans `binksfilms-dna`

1. **Refléter D-014.** Le skill dit déjà que LAB est « autorisé, attendu même »
   et que rien n'interdit le rendu temps réel — mais son volume penche vers le
   refus. Une section courte sur l'ambition comme exigence, pas comme risque.
2. **`built-expression.md` §2 bis** décrit le format d'affiche mobile comme une
   intention non réalisée. C'est faux depuis aujourd'hui.

---

## Dette

- **B-011** — preview du clip Skinny Bastard à 10,4 Mo pour 6,4 s. Bloqué : pas
  de `ffmpeg` sur la machine.
- **B-012** — cinq doublons média (~16 Mo) à supprimer une fois les copies
  validées.
- **B-010** — déséquilibre de masse dans `binksfilms-dna`.
- **B-006** — `GUIDE-DEPLOIEMENT.md` désynchronisé.

---

## Contenu, quand le propriétaire aura la matière

Bannières et contre-champs sur 3 ou 4 films, en une passe courte — le
propriétaire a validé qu'elle reste rapide et ne devienne pas une phase. Il s'en
occupe manuellement. C'est ce qui donnera sa pleine valeur au format d'affiche :
aujourd'hui 8 cartes sur 10 restent des miniatures YouTube recadrées.
