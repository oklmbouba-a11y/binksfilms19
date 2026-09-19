# Prochaine tâche

> Ce fichier est la mission transmise par ChatGPT. Il est ici remis à l'état
> « rendu » : toutes les demandes du propriétaire jusqu'au storyboard de la
> surface d'eau sont appliquées. Voir `latest-report.md`.

## Rendu

- Audit du cube appliqué en totalité (deux P0, cinq P1, trois P2).
- Le cube est devenu une **pierre taillée en WebGL**, puis une pierre à **table
  plate** — la correction qui a rendu la photo lisible.
- **Descente vers le bouton Contact**, puis **aspiration**, puis **surface
  d'eau** en quatre temps selon storyboard.
- **Typographie** : titres de cartes en serif étroite, signature manuscrite.
- **Marques de classification** : fichiers du propriétaire, préparés pour fond
  sombre, réduits sur téléphone.
- « Faire glisser pour tourner » et « Réalisateur » de l'accueil : supprimés.

## Ce qui attend une décision du propriétaire

Trois choses sont **prêtes à être faites** mais n'ont pas été engagées, parce
qu'elles coûtent quelque chose qu'il doit arbitrer :

1. **La traînée qui strie le chemin (B-014).** Aujourd'hui elle floute la
   pierre sans laisser de trace le long du trajet, la toile voyageant avec
   elle. La corriger demande une toile fixe plein écran — soit un remplissage
   plein écran deux fois par image. C'est exactement la dépense que contraint
   l'exigence des 60 images par seconde, et c'est la seule chose que ce poste
   ne peut pas mesurer.
2. **Le photoréalisme de la surface d'eau.** Aller vers les caustiques du
   storyboard suppose de dessiner le bouton lui-même dans un canvas — ce qui
   sort du « ne change pas le bouton existant ».
3. **Le titre de morceau sur la fiche film.** Il est resté en grotesque large
   alors que la carte est passée en serif étroite. Question d'œil.

## Ce qui attend une vérification sur appareil

- **B-013** — comportement au doigt sur un vrai téléphone : rotation au
  glissement horizontal, défilement au glissement vertical **et défilement qui
  repart ensuite**, aucune réaction à côté de la pierre.
- La rotation d'accueil de 11° à la première apparition.
- La fluidité réelle de l'aspiration.

## Chantiers anciens, toujours ouverts

- **B-011** — aperçu de 10,4 Mo, recompression annoncée par le propriétaire.
- **B-012** — 5 médias en double sur le disque (~16 Mo).
- **B-010** — déséquilibre de masse entre skills.
- **B-006** — `GUIDE-DEPLOIEMENT.md` désynchronisé.

## Note pour ChatGPT

Le fichier d'origine `images/parental advisory.png` avait disparu du dossier et
mon `git add -A` avait entériné sa suppression. Il est récupéré et remis. Les
deux fichiers servis sont des **dérivées** : `marque-parental.png` et
`marque-16.png`. Ne pas les régénérer sans relire D-027 et D-035 — chaque
partie du sigle a une logique différente, et l'inverser en bloc le détruit.
