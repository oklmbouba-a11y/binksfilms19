/* ============================================================
   BOUTIQUE — les données

   Même discipline que films.js : ce fichier est la source, la page
   n'est que son affichage. Une entrée absente ne laisse aucun trou,
   un champ vide ne s'affiche pas.

   ------------------------------------------------------------
   LE PAIEMENT — À LIRE AVANT D'AJOUTER UN PRODUIT

   Le champ « achat » est l'adresse d'une caisse que TU possèdes :
   un lien de paiement Stripe, une page Lemon Squeezy, un produit
   Gumroad. Tu la crées chez eux, tu colles l'adresse ici.

   C'est la seule façon correcte pour un site sans serveur : la
   caisse, le paiement, la TVA et la livraison du fichier restent
   chez le prestataire. AUCUNE CLÉ SECRÈTE NE DOIT JAMAIS ÊTRE
   ÉCRITE DANS CE FICHIER NI DANS LA PAGE — tout ce qui est ici est
   lisible par n'importe quel visiteur. Une clé secrète posée dans
   le site serait exactement le trou dont on a parlé pour admin.html.

   Pour des LUTs et des packs, préfère un prestataire qui livre le
   fichier et gère la TVA tout seul (Lemon Squeezy, Gumroad). Stripe
   encaisse très bien mais ne livre pas de fichier.

   ------------------------------------------------------------
   LES CHAMPS

   slug      identifiant dans l'adresse. minuscules, tirets.
   nom       le nom du produit.
   famille   "lut" | "pack" | "vetement". Décide de la fiche.
   phrase    une phrase, pas deux. Ce que ça fait, pas ce que c'est.
   prix      nombre, en euros. 0 = gratuit.
   achat     l'adresse de ta caisse. Vide = le produit ne s'achète
             pas encore et le bouton ne s'affiche pas.
   apres     l'image telle que le produit la rend.
   avant     la même image sans le produit. C'est la seule preuve
             honnête pour un étalonnage : on ne décrit pas un LUT,
             on le montre sur une image.
   contenu   le rôle contractuel : [[libellé, valeur], ...]
             ce qu'on reçoit, dans quel format, sous quelle licence.
   tailles   pour un vêtement seulement : ["S","M","L"].
   statut    "publie"   → visible de tous
             "brouillon"→ visible seulement sur #/shop/tout
             "epuise"   → visible, mais sans bouton d'achat

   ------------------------------------------------------------
   EXEMPLE — à remplacer par un vrai produit, puis à passer en
   "publie". Il est en brouillon, donc personne ne le voit sur
   #/shop ; pour le regarder, ouvre #/shop/tout.
   ============================================================ */
window.SHOP_DATA = [
  {
    slug: "exemple-lut",
    nom: "Exemple — à remplacer",
    famille: "lut",
    phrase: "Entrée de démonstration : elle sert à voir la mise en page, pas à vendre.",
    prix: 0,
    achat: "",
    apres: "images/skinny.jpg",
    avant: "images/skinny.jpg",
    simule: true,
    contenu: [
      ["Contenu", "à renseigner"],
      ["Format", "à renseigner"],
      ["Compatible", "à renseigner"],
      ["Licence", "à renseigner"],
      ["Livraison", "à renseigner"]
    ],
    statut: "brouillon"
  }
];
