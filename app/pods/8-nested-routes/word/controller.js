import Controller from "@ember/controller";
import { fadeIn, fadeOut } from "ember-animated/motions/opacity";
import move from "ember-animated/motions/move";
import adjustCSS from "ember-animated/motions/adjust-css";
import adjustColor from "ember-animated/motions/adjust-color";
import resize from "ember-animated/motions/resize";
import scale from "ember-animated/motions/scale";
import { wait } from "ember-animated";
import { inject as service } from "@ember/service";
import { easeExpIn, easeExpOut } from "d3-ease";

import { wait as waitUtil, Motion } from "ember-animated";

function freeze(sprite, opts) {
  return new Wait(sprite, opts).run();
}

class Wait extends Motion {
  *animate() {
    yield waitUtil(this.duration);
  }
}

export default Controller.extend({
  appState: service(),

  *transition({ duration, receivedSprites, sentSprites }) {
    for (let sprite of receivedSprites) {
      // adjustCSS.property("font-size")(sprite);
      // resize(sprite);
      adjustColor.property("color")(sprite);
      yield freeze(sprite, { duration: duration * 1 });
      move(sprite);
      // let finalAspectRatio =
      //   sprite.finalBounds.height / sprite.finalBounds.width;
      //
      // sprite._initialBounds.height =
      //   finalAspectRatio * sprite.initialBounds.width;
      //
      // fadeIn(sprite, { from: 0 });
      // scale(sprite);
      // move(sprite);
    }

    for (let sprite of sentSprites) {
      yield freeze(sprite, { duration: duration * 0.5 });
      move(sprite);
      // adjustCSS.property("font-size")(sprite);
      // let ar = sprite.initialBounds.height / sprite.initialBounds.width;
      // sprite._finalBounds.height = ar * sprite.finalBounds.width;
      //
      // fadeOut(sprite, { to: 0 });
      // scale(sprite);
      // move(sprite);
    }
  },

  *bodyTransition({ duration, receivedSprites, sentSprites, removedSprites }) {
    console.log(arguments[0]);
    for (let sprite of receivedSprites) {
      sprite.moveToFinalPosition();
      sprite.applyStyles({ opacity: 0 });
      yield freeze(sprite, { duration: duration * 1.5 });
      fadeIn(sprite, { from: 0, duration: duration / 2 });
      // move(sprite);
    }

    for (let sprite of removedSprites) {
      fadeOut(sprite, { to: 0, duration: duration / 2 });
    }
  }
});
