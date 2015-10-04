/* jshint node: true */
'use strict';
var p = require('path');
var templatePath = p.resolve(__dirname + '/assets/module-template.js.t');

var stew = require('broccoli-stew');
var rename = stew.rename;
var find = stew.find;
var Template = require('broccoli-templater');
var mergeTrees = require('broccoli-merge-trees');

function expand(input) {
  var path = p.dirname(input);
  var file = p.basename(input);

  return path + '/{' + file + '}';
}

module.exports = {
  name: 'ember-seamless-immutable',

  // This follows @stefanpenner import strategy from ember-fetch
  // @link https://github.com/stefanpenner/ember-fetch/blob/master/index.js
  treeForVendor: function(tree) {
    var seamlessImmutablePath = require.resolve('seamless-immutable');
    var expandedSeamlessImmutablePath = expand(seamlessImmutablePath);

    var seamlessImmutable = rename(find(expandedSeamlessImmutablePath), function(path) {
      return 'seamless-immutable/src/seamless-immutable.js'
    });

    var app = this.app;

    return mergeTrees([
      new Template(seamlessImmutable, templatePath, function variables(content) {
        return {
          environment: app.env,
          moduleBody: content
        };
      })
    ]);
  },

  included: function(app) {
    this.app = app;
    this._super.included(app);

    app.import('vendor/seamless-immutable/src/seamless-immutable.js', {
      exports: {
        default: [
          'default',
          'Immutable'
        ]
      }
    });
  }
};
