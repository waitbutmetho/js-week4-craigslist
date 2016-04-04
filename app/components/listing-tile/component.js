import Ember from 'ember';

export default Ember.Component.extend({

actions: {
  deleteListing(listing){
    if(confirm("Delete me?")) {
      this.sendAction('deleteListing2', listing);
    }
  },
  updateListing3(listing, params) {
    console.log('updateListing3');
    this.sendAction('updateListing4', listing, params);
  }
}

});
