Meteor.subscribe("clients");

Template.clientItem.events({
"click .delete": function () {
  Meteor.call("deleteClient", this._id);
},
});