import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    answerFormShow() {
      this.set('answerForm', true);
    },
    saveAnswer1() {
      var params = {
        author: this.get('author'),
        answer: this.get('answer'),
        image: this.get('image'),
        question: this.get('question')
      };
      this.set('answerForm', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
