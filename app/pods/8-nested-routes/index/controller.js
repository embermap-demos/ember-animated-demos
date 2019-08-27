import Controller from "@ember/controller";
import { A } from "@ember/array";
import { inject as service } from "@ember/service";
import { fadeIn, fadeOut } from "ember-animated/motions/opacity";
import move from "ember-animated/motions/move";
import scale from "ember-animated/motions/scale";
import { wait, Motion } from "ember-animated";
import resize from "ember-animated/motions/resize";
import adjustCSS from "ember-animated/motions/adjust-css";
import adjustColor from "ember-animated/motions/adjust-color";

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

  *transition(
    index,
    { duration, insertedSprites, removedSprites, receivedSprites, sentSprites }
  ) {
    // for (let sprite of receivedSprites) {
    //   move(sprite);
    //   adjustColor.property("color")(sprite);
    // }

    // console.log(index);
    // console.log(removedSprites.length);
    for (let sprite of removedSprites) {
      console.log(sprite);
      freeze(sprite);
      yield wait(30 * index);
      fadeOut(sprite, { duration: duration * 0.3 });
    }

    for (let sprite of insertedSprites) {
      sprite.applyStyles({ opacity: 0 });
      yield freeze(sprite, { duration: duration * 1.5 });
      fadeIn(sprite, { duration: duration / 2 });
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
