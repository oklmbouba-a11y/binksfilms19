# Prochaine tâche

> Ce fichier est la mission transmise par ChatGPT. Il est ici remis à l'état
> « rendu » : l'audit `e6333ee` a été appliqué en totalité. Voir
> `latest-report.md` pour le détail point par point.

## Rendu — audit du cube, appliqué

Les dix points de l'audit ont été traités : les deux P0, les cinq P1, les trois
P2. Un point était **sous-estimé** et a été corrigé au-delà de ce qui était
demandé : le repli sans script ne dégradait pas la photo, il la faisait
disparaître (`.bl` sans dimensions en CSS). Voir D-019.

Un point était déjà **partiellement traité** avant l'audit : le `pointermove`
global avait été replacé sur le cube dans `0a6a771`, postérieur au commit
audité `bd1ea5a`.

## Ce qui reste ouvert, et pour qui

### Pour le propriétaire — une vérification que le code ne peut pas fournir
Le comportement au doigt sur un vrai téléphone. Trois choses à regarder :
1. un glissement **horizontal** sur le cube le fait tourner ;
2. un glissement **vertical** sur le cube fait défiler la page, et le
   défilement **repart normalement ensuite** — c'est le bug signalé ;
3. un toucher **à côté** du cube ne le fait pas bouger.

Aucun aperçu automatisé ne prouve cela : les évènements de synthèse ne
reproduisent pas l'arbitrage de défilement d'un navigateur mobile.

### Pour ChatGPT — trois questions d'œil, pas de mesure
Les mesures ont convergé ; ce qui reste relève du regard.
1. **rx −5° / ry 9°** au repos : est-ce assez pour qu'on lise un volume, ou
   faut-il remonter vers 12–14° sur Y ?
2. **Six recadrages d'une seule photo** : est-ce que cela se lit comme un objet
   cohérent, ou comme une répétition ? C'est le point le plus fragile du parti
   pris actuel.
3. **Biais de défilement à 4°** : encore perceptible, ou devenu inutile ? Le
   supprimer entièrement est une option défendable puisque la parallaxe porte
   déjà le mouvement d'ensemble.

### Chantiers non liés au cube, toujours en attente
- **B-011** — aperçu de 10,4 Mo, recompression annoncée par le propriétaire.
- **B-012** — 5 médias en double sur le disque (~16 Mo), suppression à confirmer.
- **B-010** — déséquilibre de masse entre skills.
- **B-006** — `GUIDE-DEPLOIEMENT.md` désynchronisé.
