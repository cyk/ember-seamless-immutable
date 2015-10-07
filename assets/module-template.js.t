/**
 * When Ember retrieves meta hash for an object, we can avoid
 * its attempts to define a property on an immutable object
 * by specifying a __defineNonEnumerable method.
 *
 * @link https://github.com/emberjs/ember.js/blob/master/packages/ember-metal/lib/meta.js
 * @param {object} obj
 */
function addDefineNonEnumerable(obj) {
  if (!obj.__defineNonEnumerable) {
    obj.__defineNonEnumerable = function __defineNonEnumerable(property) {
      // no-op
    }
  }
}

/**
 * Override array slice with extra behavior.
 *
 * @param {Array} array
 * @param {Function} extraBehavior
 */
function afterSlice(array, extraBehavior) {
  var originalSlice = array.slice;
  array.slice = function slice() {
    var result = originalSlice.apply(this, arguments);
    extraBehavior(result);
    return result;
  }
}

/**
 * Prevent Ember from mutating the soon-to-be immutable object
 * when it attempts to extend with __ember_meta__.
 *
 * @param {object} obj
 */
function preventEmberMutate(obj) {
  if (obj instanceof Array) {
    afterSlice(obj, addDefineNonEnumerable)
  } else {
    addDefineNonEnumerable(obj);
  }

  for (var key in obj) {
    if (obj.hasOwnProperty(key) && key !== '__defineNonEnumerable') {
      if (obj[key] instanceof Object){
        preventEmberMutate(obj[key]);
      }
    }
  }
}

define('immutable', [ 'exports' ], function(exports) {
  'use strict';
  var process = { env: { NODE_ENV: '<%= environment %>' } };

  <%= moduleBody %>

  exports['default'] = function(obj) {
    if (!exports.Immutable.isImmutable(obj)) {
      preventEmberMutate(obj);
    }

    return exports.Immutable.apply(this, arguments);
  };
});