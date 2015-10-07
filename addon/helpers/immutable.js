import Ember from 'ember';
import _immutable from 'immutable';

export function immutable(params) {
  return _immutable(params[0]);
}

export default Ember.Helper.helper(immutable);
