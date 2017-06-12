import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  addNewQuestion: false,
  actions: {
    QuestionFormShow() {
      this.set('addNewRental', true);
    },
  }
});
