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
  this.route("6-between-lists");
  this.route("7-selected-item");
  this.route("8-nested-routes", function() {
    this.route("movie", { path: ":movie_id" });
  });
});

export default Router;
