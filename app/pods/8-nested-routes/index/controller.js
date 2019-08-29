import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { fadeIn, fadeOut } from "ember-animated/motions/opacity";

export default Controller.extend({
  appState: service(),

  *transition({ duration, insertedSprites, removedSprites, keptSprites }) {
    for (let sprite of removedSprites) {
      fadeOut(sprite, { duration: duration * 0.15 });
    }

    for (let sprite of insertedSprites) {
      fadeIn(sprite, { duration: duration * 0.5 });
    }

    for (let sprite of keptSprites) {
      fadeIn(sprite);
    }
  }
});
