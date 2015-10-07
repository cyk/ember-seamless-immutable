# Ember Seamless Immutable

"Immutable data structures which are backwards-compatible with normal Arrays and Objects" provided by the excellent [Seamless Immutable](https://github.com/rtfeldman/seamless-immutable) library, wrapped and adapted for Ember.

:warning: **Experimental.** A noop function is defined on all objects made immutable to circumvent Ember defining meta properties on them.

### Why Addon?

* Seamless-immutable is imported from node_modules to Ember app (i.e., up-to-date, not bundled)
* Seamless-immutable is configured to your Ember app environment
* Immutable objects are made usable in Ember templates
* Helper that makes properties passed to a component immutable

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