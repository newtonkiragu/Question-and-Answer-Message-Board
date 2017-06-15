import Ember from 'ember';

export default Ember.Component.extend({
  heading: Ember.computed('question.querry', 'question.author', function() {
    return this.get('question.querry') + ' - ' + this.get('question.author')
  }),
  actions: {

  }
});
