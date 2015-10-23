Router.configure({
  layoutTemplate: 'template',
});

Router.route('/', {
  name: 'home',
});

Router.route('/clients', {
  name: 'clientList',
  data: function() {
    templateData = { clients: Clients.find({}) };
    return templateData;
  }
});

Router.route('/clients/add', {
  name: 'clientAdd',
});

Router.route('/clients/edit/:id', {
  name: 'clientEdit',
  data: function() {
    templateData = { client: Clients.findOne(this.params.id) };
    return templateData;
  }
});

Router.route('/devis', {
  name: 'devisList',
  data: function() {
    templateData = { devis: Devis.find({}) };
    return templateData;
  }
});

Router.route('/devis/add', {
  name: 'devisAdd',
  data: function() {
    templateData = { clients: Clients.find({}) };
    return templateData;
  }
});

Router.route('/devis/edit/:id', {
  name: 'devisEdit',
  data: function() {
    templateData = { 
      devis: Devis.findOne(this.params.id),
      categories: Categories.find({devisId:this.params.id}),
    };
    return templateData;
  }
});

Router.route('/factures', {
  name: 'facturesList',
});