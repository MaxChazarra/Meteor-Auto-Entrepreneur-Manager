Template.devisItem.helpers({
  getClientFullName: function (parentContext) {
 	if(this.clientId == null) return "Pas de client associé";
    var client = Clients.findOne({_id:this.clientId});
    return client.nom + " " + client.prenom;
  }
});