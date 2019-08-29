import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    return this.modelFor("8-nested-routes").findBy("id", params.movie_id);
  }
});
