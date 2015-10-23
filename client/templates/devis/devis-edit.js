Template.devisEdit.helpers({
  client: function (clientId) {
  	console.log(clientId);
    return Clients.findOne({_id:clientId});
  },
});