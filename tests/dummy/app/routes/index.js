import Ember from 'ember';
import immutable from 'immutable';

export default Ember.Route.extend({
  model() {
    return {
      array: immutable([{ hammer: "Can’t Touch This" }])
    };
  }
});
