Devis = new Mongo.Collection('devis');

Meteor.methods({

  addDevis: function (numero, date, clientId, adresse, codePostal, ville, percentDebut, percentPendant, percentFin) {

    Devis.insert({
      numero: numero,
      date: date,
      clientId: clientId,
      adresse: adresse,
      codePostal: codePostal,
      ville: ville,
      percentDebut: percentDebut,
      percentPendant: percentPendant,
      percentFin: percentFin,
    });
  },

});