import Ember from 'ember';

export default Ember.Component.extend({
  answerForm: false,
  isImageShowing: false,

  actions: {
    answerFuom() {
      this.set('answerForm', true);
      this.sendAction('answerForm');
    },
  }
});
