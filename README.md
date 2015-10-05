# Ember Seamless Immutable

[![Build Status](https://travis-ci.org/cyk/ember-seamless-immutable.svg?branch=master)](https://travis-ci.org/cyk/ember-seamless-immutable)
[![npm version](https://badge.fury.io/js/ember-seamless-immutable.svg)](http://badge.fury.io/js/ember-seamless-immutable)
[![Ember Observer Score](http://emberobserver.com/badges/ember-seamless-immutable.svg)](http://emberobserver.com/addons/ember-seamless-immutable)

Immutable data structures for JavaScript which are backwards-compatible with normal JS Arrays and Objects provided 
by [seamless-immutable](https://github.com/rtfeldman/seamless-immutable) wrapped and adapted for Ember CLI.

:warning: **Experimental.** A no-op function is added to objects targeted for immutability to work around issues of Ember defining meta on immutable objects.

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

The default export `immutable` is adapted for Ember. The origin named export remains intact:

```
import { Immutable } from 'immutable';
```

See [Seamless Immutable: API Overview](https://github.com/rtfeldman/seamless-immutable#api-overview).

## Why?

* Seamless-immutable source is imported from node_modules to Ember app (i.e., up-to-date, not bundled)
* Seamless-immutable environment uses your Ember app environment
* Immutable objects are made usable in Ember templates
