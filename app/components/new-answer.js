import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    answerFormShow() {
      this.set('answerForm', true);
    },
    saveAnswer() {
      var params = {
        author: this.get('author'),
        answer: this.get('answer'),
        image: this.get('image')
      };
      this.set('answerForm', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
