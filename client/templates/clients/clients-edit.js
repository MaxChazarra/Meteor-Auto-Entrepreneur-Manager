  Template.clientEdit.events({
    "submit .client": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var nom = event.target.nom.value;
      var prenom = event.target.prenom.value;
      var adressse = event.target.adresse.value;
      var codePostal = event.target.codePostal.value;
      var ville = event.target.ville.value;

      // Insert a task into the collection
      Meteor.call("updateClient",this.client._id , nom, prenom, adressse, codePostal, ville);

      Router.go('clientList');

    },
  });