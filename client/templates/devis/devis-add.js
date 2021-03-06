
  Template.devisAdd.events({
    "submit .new-devis": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var numero = event.target.numero.value;
      var date = event.target.date.value;
      var clientId = event.target.clientId.value;
      var adresse = event.target.adresse.value;
      var codePostal = event.target.codePostal.value;
      var ville = event.target.ville.value;
      var percentDebut = event.target.percentDebut.value;
      var percentPendant = event.target.percentPendant.value;
      var percentFin = event.target.percentFin.value;

      // Insert a task into the collection
      Meteor.call("addDevis", numero, date, clientId, adresse, codePostal, ville, percentDebut, percentPendant, percentFin);

      Router.go('devisList');

    },

    "change .select-client": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();
      

      var client = Clients.findOne({_id:event.target.value});

      template.find("[name=adresse]").value = client.adresse;
      template.find("[name=codePostal]").value = client.codePostal;
      template.find("[name=ville]").value = client.ville;
    },
  });