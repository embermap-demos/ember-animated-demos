import Controller from "@ember/controller";
import { fadeIn, fadeOut } from "ember-animated/motions/opacity";
import move from "ember-animated/motions/move";
import adjustCSS from "ember-animated/motions/adjust-css";
import adjustColor from "ember-animated/motions/adjust-color";
import resize from "ember-animated/motions/resize";
import scale from "ember-animated/motions/scale";
import { wait } from "ember-animated";
import { inject as service } from "@ember/service";

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

  *parentTransition({ duration, receivedSprites, sentSprites }) {
    for (let sprite of receivedSprites) {
      sprite.applyStyles({
        width: sprite.initialBounds.width,
        height: sprite.initialBounds.height
      });
      // debugger;
      sprite.element.querySelector(
        "div"
      ).style.width = `${sprite.finalBounds.width}px`;

      // Delay by 1/8 duration to give removed sprites chance to fade out
      yield freeze(sprite, { duration: duration / 8 });

      resize(sprite, { duration: duration * (7 / 8) });
      move(sprite, { duration: duration * (7 / 8) });
    }

    console.log("parent ", arguments[0]);

    for (let sprite of sentSprites) {
      // sprite.applyStyles({
      //   width: sprite.initialBounds.width,
      //   height: sprite.initialBounds.height
      // });
      // sprite.element.querySelector(
      //   "div"
      // ).style.width = `${sprite.finalBounds.width}px`;
      // yield freeze(sprite, { duration: duration / 8 });
      //
      resize(sprite, { duration: duration * (7 / 8) });
      move(sprite, { duration: duration * (7 / 8) });
    }
  },

  *rest({ duration, receivedSprites, sentSprites, removedSprites }) {
    for (let sprite of receivedSprites) {
      yield wait(duration * (1 / 2));
      sprite.moveToFinalPosition();
      fadeIn(sprite, { from: 0, duration: duration * (1 / 2) });
    }

    console.log("child ", arguments[0]);

    for (let sprite of removedSprites) {
      // freeze(sprite);
      //   sprite.applyStyles({ zIndex: 99 });
      //   fadeOut(sprite, { from: 1, to: 0, duration: duration * (1 / 8) });
    }
  }
});
