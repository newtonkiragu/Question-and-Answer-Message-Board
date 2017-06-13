import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        author: this.get('author'),
        answer: this.get('answer'),
        image: this.get('image')
      };
      // this.set('addNewQuestion', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
