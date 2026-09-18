# Prochaine étape — BINKSFILMS

**Mise à jour :** 2026-09-18 · **Proposé par :** Claude Code
**Phase 2 :** `binksfilms-dna` V1.1 livrée, en attente de revue du propriétaire.

---

## Immédiat — passe de contenu, 3 ou 4 films

Point 2 du plan convenu. Le point 1 (réparation du clip Skinny Bastard) est fait.

Sur les 10 films publiés : 2 ont une bannière, 2 une preview, **1 un
contre-champ**. Le dispositif existe désormais sur un film — il en faut deux ou
trois pour qu'un visiteur comprenne que c'est une signature du site et non un
accident.

**Ce qui revient au propriétaire :** choisir les films, les photogrammes, les
paires de contre-champ. Personne d'autre ne peut le faire.

**Ce que Claude Code peut faire :** vérifier qu'`admin.html` ne rend pas la tâche
pénible, resynchroniser `GUIDE-DEPLOIEMENT.md` (B-006), et recompresser les
médias si `ffmpeg` devient disponible (B-011).

Deux dettes ouvertes par la réparation : **B-011** (preview à 10,4 Mo, à
recompresser) et **B-012** (doublons à supprimer une fois les copies validées).

---

## Ensuite — le mobile, puis le son

- **B-009** — le format d'affiche mobile annoncé en commentaire mais jamais
  implémenté. Vraie décision de direction artistique, périmètre net, sur la
  partie du site la plus vue. Mission EXPERIMENTAL.
- **Le son** — `binksfilms-dna` §13 ouvre le territoire sans le remplir. Le plus
  intéressant, le plus risqué, celui qui demande le plus l'avis du propriétaire.

---

## Puis — affinage d'`innovation-critic`

Deux relectures, deux fois des défauts réels trouvés et vérifiés contre le code.
Son prompt lui demande encore de juger à l'intuition ; il peut désormais juger
contre `binksfilms-dna`, et surtout contre le **double filtre §7**, qui lui donne
de quoi distinguer *incohérent* de *cohérent mais déjà vu* — deux griefs
différents qu'il formule aujourd'hui de la même manière. Modification courte,
gain réel.

---

## Dette

- **B-010** — déséquilibre de masse du skill : beaucoup de valeurs concrètes face
  à peu de principes abstraits. À réévaluer après la première mission créative.
- **B-003 + B-004 + B-006** — passe de correction contenu via `admin.html`.
- **B-008** — sort du fichier `previews/saisai boro 700 fin des temps.mp4`.
- **B-009** — format d'affiche mobile annoncé mais non implémenté.

---

## Hors périmètre

- Phases 3 à 5 du blueprint tant que la Phase 2 n'est pas close.
- Toute modification de la DA du site. L'ADN existe pour préparer ce travail, pas
  pour le déclencher.
- Toute installation de skill, plugin ou MCP tiers sans passer par
  `capability-scout`.
