import Controller from "@ember/controller";
import { A } from "@ember/array";
import { inject as service } from "@ember/service";
import { fadeIn, fadeOut } from "ember-animated/motions/opacity";
import move from "ember-animated/motions/move";
import { wait } from "ember-animated";

export default Controller.extend({
  appState: service(),
  router: service(),

  *transition({
    duration,
    insertedSprites,
    receivedSprites,
    removedSprites,
    sentSprites
  }) {
    sentSprites.forEach(sprite => {
      sprite.element.querySelector("span").style.opacity = 0;
    });

    [...removedSprites, ...sentSprites].forEach(sprite => {
      fadeOut(sprite, { duration: duration * (1 / 3) });
    });

    // receivedSprites.forEach(sprite => {
    //   sprite.moveToFinalPosition();
    // });

    yield wait(duration / 2);

    insertedSprites.forEach(fadeIn);

    // console.log("here");
    // console.log(arguments[0]);
    receivedSprites.forEach(sprite => {
      sprite.moveToFinalPosition();
      fadeIn(sprite, { from: 0 });
    });
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
