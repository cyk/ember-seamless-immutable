# Ember Seamless Immutable

Immutable data structures for JavaScript which are backwards-compatible with normal JS Arrays and Objects provided 
by [seamless-immutable](https://github.com/rtfeldman/seamless-immutable)  wrapped and adapted for Ember CLI.

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

See [API Overview](https://github.com/rtfeldman/seamless-immutable#api-overview).

## Why?

* Seamless-immutable source is imported from node_modules (i.e., up-to-date, not bundled) to Ember app
* Seamless-immutable environment is set to your Ember app environment
* Immutable objects are made usable in Ember templates