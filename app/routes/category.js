import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    saveListing3(params){
      console.log('saveListing3');
      var newListing = this.store.createRecord('listing', params);
      var category = params.category;
      category.get('listing').addObject(newListing);
      newListing.save().then(function(){
        return category.save();
      });
      this.transitionTo('category', params.category);
    },
    deleteListing3(listing){
      return listing.destroyRecord();
    },
    updateListing5(listing, params){
      console.log('updateListing5');
      Object.keys(params).forEach(function(key) {
        if(params[key] !==undefined) {
          listing.set(key, params[key]);
        }
      });
      listing.save();
      this.transitionTo('index');
    }
  }
});
