Template.detailsList.helpers({
  getDetailsFromCategories: function (categorieId) {
    return Details.find({categorieId:categorieId});
  },
});