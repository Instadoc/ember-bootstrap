import Ember from 'ember';

var noop = () => {};

export function initialize(application) {
  if (application.startRouting) {
    application.startRouting = noop;
  }
  else if (application.__deprecatedInstance__ && application.__deprecatedInstance__.startRouting) {
    application.__deprecatedInstance__.startRouting = noop;
  }
  else {
    Ember.assert(`Unable to disable routing for this version of Ember (Ember.VERSION)`);
  }
}

export default {
  name: 'disable-routing',
  initialize
};
