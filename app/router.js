import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("1-animated-if");
  this.route("2-animated-each");
  this.route("3-iphone-apps");
  this.route("4-animated-value");
  this.route("5-animated-beacon");
});

export default Router;
