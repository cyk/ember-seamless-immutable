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

test('I see how they make plumbuses', function(assert) {
  visit('/');

  andThen(() => {
    assert.equal(findWithAssert('.brapple').length, 7);
    assert.ok(findWithAssert(':contains(Crushed Red Party Cups)').length);
    assert.equal(findWithAssert('.step:eq(0)').text(), 'dinglebop');
    assert.equal(findWithAssert('.step:eq(1)').text(), 'schleem');
  });
});

test('I see what Gazoropfield wants', function(assert) {
  visit('/');

  andThen(() => {
    assert.equal(findWithAssert('.wants').text(), 'enchiladas');
  });
});
