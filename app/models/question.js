import DS from 'ember-data';

export default DS.Model.extend({
  querry: DS.attr(),
  author: DS.attr(),
  image: DS.attr()
});
