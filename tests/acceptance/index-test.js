import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'dummy/tests/helpers/start-app';
var application;

module('Acceptance: Index', {
  beforeEach() {
    application = startApp();
  },

  afterEach() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/');

  andThen(() => {
    assert.equal(currentPath(), 'index');
    assert.equal(findWithAssert('.item').text(), 'Can’t Touch This');
  });
});
