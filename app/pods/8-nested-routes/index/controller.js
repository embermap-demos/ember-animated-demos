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

  *transition({
    duration,
    insertedSprites,
    receivedSprites,
    removedSprites,
    sentSprites
  }) {
    // console.log(arguments[0]);
    sentSprites.forEach(sprite => {
      // debugger;
      sprite.element.querySelector("span").style.opacity = 0;
      resize(sprite, { duration: duration * (3 / 4) });
      move(sprite, { duration: duration * (3 / 4) });
    });
    // sentSprites.forEach(sprite => {
    //   sprite.element.querySelector("span").style.opacity = 0;
    // });
    //
    // [...removedSprites, ...sentSprites].forEach(sprite => {
    //   fadeOut(sprite, { duration: duration * (1 / 3) });
    // });
    // console.log(arguments[0]);
    //
    // yield wait(duration / 2);
    //
    // insertedSprites.forEach(fadeIn);
    //
    // receivedSprites.forEach(sprite => {
    //   sprite.moveToFinalPosition();
    //   fadeIn(sprite, { from: 0 });
    // });
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
