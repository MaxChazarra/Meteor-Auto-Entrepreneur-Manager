Template.home.helpers({

  nbClients: function(){
  	return Clients.find({}).count();
  },

  nbDevis: function(){
  	return Devis.find({}).count();
  },

  nbFactures: function(){
  	return Factures.find({}).count();
  }
});