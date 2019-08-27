import Controller from "@ember/controller";
import { A } from "@ember/array";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Controller.extend({
  router: service(),

  init() {
    this._super(...arguments);

    this.set(
      "words",
      A([
        "Action/Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Sci-Fi/Fantasy",
        "Horror",
        "Musical",
        "Mystery",
        "Romance",
        "Thriller"
      ])
    );
  },

  currentWord: computed("router.currentRoute", function() {
    return this.router.currentRoute.params.word_id;
  }),

  previousWord: computed("currentWord", function() {
    let currentIndex = this.words.indexOf(this.currentWord);

    return this.words[currentIndex - 1];
  }),

  nextWord: computed("currentWord", function() {
    let currentIndex = this.words.indexOf(this.currentWord);

    return this.words[currentIndex + 1];
  })
});
