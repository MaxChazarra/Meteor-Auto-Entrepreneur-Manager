Template.categoriesItem.events({
	"click .delete-categories": function () {
	  Meteor.call("deleteCategories", this._id);
	},

	"click .edit-categories": function (event,template) {
	  if(event.currentTarget.text == 'Modifier'){
	  	event.currentTarget.text = 'Sauvegarder';
	  	var dom = template.$(".categorie-title"); 
	  	var input = '<input class="categorie-title" id="" value="'+dom.text()+'" type="text" class="validate">';
	  	dom.replaceWith(input);
	  }
	  else if(event.currentTarget.text == 'Sauvegarder'){
		event.currentTarget.text = 'Modifier';
	  	var dom = template.$(".categorie-title"); 
	  	var input = '<h4 class="categorie-title">' + dom[0].value + '</h4>';
	  	Meteor.call("editCategories", this._id, dom[0].value);
	  	dom.replaceWith(input);
	  }

	},

});