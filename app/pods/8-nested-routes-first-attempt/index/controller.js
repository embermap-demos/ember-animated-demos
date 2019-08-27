import Controller from "@ember/controller";
import { A } from "@ember/array";
import { inject as service } from "@ember/service";
import { fadeIn, fadeOut } from "ember-animated/motions/opacity";
import move from "ember-animated/motions/move";
import scale from "ember-animated/motions/scale";
import { wait, Motion } from "ember-animated";
import resize from "ember-animated/motions/resize";

function freeze(sprite, opts) {
  return new Wait(sprite, opts).run();
}

class Wait extends Motion {
  *animate() {
    yield wait(this.duration);
  }
}

export default Controller.extend({
  appState: service(),
  router: service(),

  *transition({ duration, removedSprites, insertedSprites, receivedSprites }) {
    yield Promise.all(
      insertedSprites.map(sprite => {
        sprite.applyStyles({ opacity: 0 });
        return freeze(sprite, { duration: duration * (3 / 4) });
      })
    );

    insertedSprites.forEach(sprite => {
      fadeIn(sprite, { duration: duration * (1 / 4) });
    });

    // receivedSprites.forEach(sprite => {
    //   sprite.moveToFinalPosition();
    // });

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
