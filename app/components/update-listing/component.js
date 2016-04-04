import Ember from 'ember';

export default Ember.Component.extend({
  updateListingForm: false,
  actions: {
    showUpdateListingForm() {
      this.set("updateListingForm", true);
    },
    hideUpdateListingForm() {
      this.set("updateListingForm", false);
    },
    updateListing(listing){
      console.log('updateListing');
      var params = {
        title: this.get("updateTitle"),
        price: parseFloat(this.get("updatePrice")),
        body: this.get("updateBody"),
        category: this.get('category')
      };
      this.sendAction('updateListing2', listing, params);
    }
  }
});
