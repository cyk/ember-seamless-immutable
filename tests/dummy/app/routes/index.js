import Ember from 'ember';
import immutable from 'immutable';

const plumbus = {
  brapples: [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'sev'
  ],
  crushedRedPartyCups: true,
  howTheyDoIt: [
    { step: 'dinglebop' },
    { step: 'schleem' }
  ]
};

const gazorpazorpfield = {
  wants: 'enchiladas'
};

export default Ember.Route.extend({
  model() {
    return {
      plumbus: immutable(plumbus),
      gazorpazorpfield
    };
  },

  setupController(controller, models) {
    controller.setProperties(models);
  }
});
