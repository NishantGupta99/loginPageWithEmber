import Route from '@ember/routing/route';

export default class LoggedRoute extends Route {
    location = config.locationType;
    rootURL = config.rootURL;
  model() {
    
  }
}