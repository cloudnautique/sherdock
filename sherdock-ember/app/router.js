import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('images');
  this.resource('graph');
  this.resource('containers');
  this.resource('volumes');
  this.route('config');
});

export default Router;
