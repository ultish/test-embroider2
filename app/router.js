// import EmberRouter from '@ember/routing/router';
import EmberRouter from '@embroider/router';
import config from 'test-embroider2/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('portfolios');
});
