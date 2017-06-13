import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    QuestionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion1() {
      var params = {
        author: this.get('author'),
        querry: this.get('querry'),
        image: this.get('image')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});
