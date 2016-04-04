import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  listing: DS.hasMany('listing', {async: true})
});
