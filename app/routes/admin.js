import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    var password = "epicodus";
    var userInputArea = "";
    var userInputtedPassword = prompt("Enter the password to access the Admin page:", userInputArea);

    if(password !== userInputtedPassword) {
      alert('Sorry, that is the wrong password.');
      transition.abort();
    }
  },

  model() {
    return this.store.findAll('event');
  },

  actions: {
    editEvent(event, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          event.set(key, params[key]);
        }
      });
      event.save();
    },

    destroyEvent(event) {
      if(confirm("DESTROY?")){
        event.destroyRecord();
        this.transitionTo('admin');
      }

    }
  }
});
