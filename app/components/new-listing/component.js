import Ember from 'ember';

export default Ember.Component.extend({
  newListingForm: false,
  actions: {
    showListingForm() {
      this.set("newListingForm", true);
    },
    hideListingForm() {
      this.set("newListingForm", false);
    },
    saveListing() {
      console.log('saveListing');
      var params = {
        title: this.get("title"),
        price: parseFloat(this.get("price")),
        body: this.get("body"),
        category: this.get('category')
      };
      this.set('newListingForm', false);
      this.sendAction('saveListing2', params);
    }
  }
});
