Template.categoriesAdd.events({
  "submit .new-categories": function (event, template) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    var nom = event.target.nom.value;
    var devisId = template.data.devis._id;

    // Insert a task into the collection
    Meteor.call("addCategories", nom, devisId, 'devis');

    event.target.nom.value = '';

  },
});