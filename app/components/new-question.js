import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    QuestionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        author: this.get('author'),
        querry: this.get('querry'),
        image: this.get('image')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
