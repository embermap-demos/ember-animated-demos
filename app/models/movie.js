import DS from "ember-data";

export default DS.Model.extend({
  title: DS.attr(),
  posterUrl: DS.attr(),
  synopsis: DS.attr(),
  director: DS.attr(),
  description: DS.attr(),
  rottenTomatoes: DS.attr(),
  releaseDate: DS.attr(),
  genre: DS.attr()
});
