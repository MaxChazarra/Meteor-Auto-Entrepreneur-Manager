Template.detailsAdd.onRendered(function() {
    $("select").material_select();
});


Template.detailsAdd.events({
"submit .new-details": function (event,template) {
  // Prevent default browser form submit
  event.preventDefault();

  // Get value from form element
  var description = event.target.description.value;
  var quantite = event.target.quantite.value;
  var prixUnitaire = event.target.prixUnitaire.value;
  var unite = event.target.unite.value;
  var categorieId = template.data._id;

  // Insert a task into the collection
  Meteor.call("addDetails", description, quantite, unite, prixUnitaire, categorieId);

  //Router.go('clientList');

},
});