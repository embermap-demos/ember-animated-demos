import Controller from "@ember/controller";
import { A } from "@ember/array";
import { inject as service } from "@ember/service";
import { fadeIn, fadeOut } from "ember-animated/motions/opacity";
import move from "ember-animated/motions/move";
import { wait } from "ember-animated";
import resize from "ember-animated/motions/resize";

export default Controller.extend({
  appState: service(),
  router: service(),

  *transition({ duration, removedSprites }) {
    for (let sprite of removedSprites) {
      fadeOut(sprite, { duration: duration * (1 / 4) });
    }
  },

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
  }
});
