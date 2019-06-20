import Controller from "@ember/controller";
import { A } from "@ember/array";
import { fadeOut } from "ember-animated/motions/opacity";
import move from "ember-animated/motions/move";

export default Controller.extend({
  *transition({ duration, removedSprites, keptSprites }) {
    for (let sprite of removedSprites) {
      fadeOut(sprite, { duration: duration * (1 / 4) });
    }

    for (let sprite of keptSprites) {
      move(sprite, { duration: duration * (3 / 4) });
    }
  },

  init() {
    this._super(...arguments);

    this.set(
      "genres",
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

  actions: {
    remove(genre) {
      this.genres.removeObject(genre);
    }
  }
});
