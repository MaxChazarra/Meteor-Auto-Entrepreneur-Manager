Clients = new Mongo.Collection('clients');

Meteor.methods({

  updateClient: function (id, nom, prenom, adresse, codePostal, ville) {
      Clients.update(id, {

        $set: {
          nom: nom,
          prenom: prenom,
          adresse: adresse,
          codePostal: codePostal,
          ville: ville,
        }

      });
  },

  addClient: function (nom, prenom, adresse, codePostal, ville) {
    Clients.insert({
      nom: nom,
      prenom: prenom,
      adresse: adresse,
      codePostal: codePostal,
      ville: ville,
    });
  },

  deleteClient: function (clientId) {
    var client = Clients.findOne(clientId);
    Clients.remove(clientId);
  },

});