# Ember Seamless Immutable

[![Build Status](https://travis-ci.org/cyk/ember-seamless-immutable.svg?branch=master)](https://travis-ci.org/cyk/ember-seamless-immutable)
[![npm version](https://badge.fury.io/js/ember-seamless-immutable.svg)](http://badge.fury.io/js/ember-seamless-immutable)
[![Ember Observer Score](http://emberobserver.com/badges/ember-seamless-immutable.svg)](http://emberobserver.com/addons/ember-seamless-immutable)

"Immutable data structures which are backwards-compatible with normal Arrays and Objects" provided by the excellent [Seamless Immutable](https://github.com/rtfeldman/seamless-immutable) library, wrapped and adapted for Ember.

:warning: **Experimental.** A noop function is defined on all objects made immutable to circumvent Ember defining meta properties on them.

:warning: **Array prototype extension incompatibility.** This add-on is incompatible with the Ember array prototype extension. For instructions on disabling prototype extensions [consult the Ember guide](http://guides.emberjs.com/v1.13.0/configuring-ember/disabling-prototype-extensions/).

### Why Addon?

* Seamless-immutable is imported from node_modules to Ember app (i.e., up-to-date, not bundled)
* Seamless-immutable is configured to your Ember app environment
* Immutable objects are made usable in Ember templates
* Helper that makes properties passed to a component immutable

Read more about it in ["Exploring Immutability in Ember.js"](https://medium.com/@cyk/exploring-immutability-in-ember-js-e45a2a2cf5f#.rzi3rdpb1)

## Installation

`ember install ember-seamless-immutable`

## Usage

```js
import immutable from 'immutable';
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON('/api/contacts').then(response => {
      return immutable(response.contacts);
    });
  }
});
```

The default export `immutable` is adapted for Ember. The original named export remains intact:

```
import { Immutable } from 'immutable';
```

See [Seamless Immutable: API Overview](https://github.com/rtfeldman/seamless-immutable#api-overview).

### Helper

```
{{contact-detail contact=(immutable contact)}}
```

An immutable contact object will be passed in to the component.

## Running Tests

* `ember test`
* `ember test --server`
