Details = new Mongo.Collection('details');

Meteor.methods({

  addDetails: function (description, quantite, unite, prixUnitaire, categorieId) {
    var prixTotal = quantite * prixUnitaire;
    Details.insert({
      description: description,
      quantite: quantite,
      unite: unite,
      prixUnitaire: prixUnitaire,
      categorieId: categorieId,
      prixTotal: prixTotal,
    });
  },

});