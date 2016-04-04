import Ember from 'ember';

export default Ember.Component.extend({

actions: {
  deleteListing(listing){
    if(confirm("Delete me?")) {
      this.sendAction('deleteListing2', listing);
    }
  }
}

});
