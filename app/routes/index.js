import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      category: this.store.findAll('category'),
      listing: this.store.findAll('listing')
    });
  }
});
