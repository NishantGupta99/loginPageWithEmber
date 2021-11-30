import Route from '@ember/routing/route';
import config from 'lofin-form/config/environment';
import Router from '../router';

export default class LoggedRoute extends Route {
    location = config.locationType;
    rootURL = config.rootURL;
  model() {

 Router.map(function () {
  this.route('logged', { path: '/logged' });
});
   
  }
}