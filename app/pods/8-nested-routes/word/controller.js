import Controller from "@ember/controller";
import { fadeIn, fadeOut } from "ember-animated/motions/opacity";
import move from "ember-animated/motions/move";
import adjustCSS from "ember-animated/motions/adjust-css";
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

  *parentTransition({ duration, receivedSprites }) {
    for (let sprite of receivedSprites) {
      sprite.applyStyles({
        width: sprite.initialBounds.width,
        height: sprite.initialBounds.height
      });
      sprite.element.querySelector(
        "div"
      ).style.width = `${sprite.finalBounds.width}px`;
      // sprite.reveal();
      // yield wait(duration * (1 / 8));
      yield freeze(sprite, { duration: duration / 8 });

      // let { left, top } = sprite.absoluteInitialBounds;
      // sprite.startAtPixel({ x: left, y: top });
      // sprite.startTranslatedBy(0, 30);
      resize(sprite, { duration: duration * (7 / 8) });
      move(sprite, { duration: duration * (7 / 8) });
    }
  },

  *rest({ duration, receivedSprites }) {
    for (let sprite of receivedSprites) {
      // move(sprite);
      yield wait(duration * (1 / 2));
      sprite.moveToFinalPosition();
      fadeIn(sprite, { from: 0, duration: duration * (1 / 2) });
      // debugger;
    }
    // console.log(arguments[0]);
  },

  *titleTransition({ beacons, duration, receivedSprites }) {
    for (let sprite of receivedSprites) {
      // sprite.startTranslatedBy(0, 30);
      // debugger;
      // yield wait(duration);
      // sprite.reveal();
      // sprite.applyStyles({ opacity: 0 });
      // debugger;
      // resize(sprite);
      // move(sprite);
    }
  }
});
