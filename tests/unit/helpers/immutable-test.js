import { Immutable } from 'immutable';
import { immutable } from '../../../helpers/immutable';
import { module, test } from 'qunit';

module('Unit | Helper | immutable');

test('objects passed in are immutable', function(assert) {
  var result = immutable({ name: 'Ch-ch-changes' });
  assert.ok(Immutable.isImmutable(result));
});
