Categories = new Mongo.Collection('categories');

Meteor.methods({

  addCategories: function (nom, documentId, type) {

  	if(type == 'devis'){
	    Categories.insert({
	      nom: nom,
	      devisId: documentId,
	    });
  	}
  	else if (type == 'facture'){
	    Categories.insert({
	      nom: nom,
	      factureId: documentId,
	    });
  	}

  },

  deleteCategories: function (categoriesId) {
    Categories.remove(categoriesId);
  },

  editCategories: function(id, nom){
      Categories.update(id, {

        $set: {
          nom: nom,
        }

      });
  },

});