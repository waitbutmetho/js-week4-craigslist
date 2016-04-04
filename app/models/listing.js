import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('number'),
  body: DS.attr('string'),
  category: DS.belongsTo('category', {async: true})
});
