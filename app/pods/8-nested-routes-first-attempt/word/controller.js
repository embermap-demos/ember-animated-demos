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

  *parentTransition({ duration, receivedSprites, sentSprites }) {
    for (let sprite of receivedSprites) {
      sprite.applyStyles({
        width: sprite.initialBounds.width,
        height: sprite.initialBounds.height
      });
      sprite.element.querySelector(
        "div"
      ).style.width = `${sprite.finalBounds.width}px`;

      // Delay by 1/8 duration to give removed sprites chance to fade out
      yield freeze(sprite, { duration: duration / 8 });

      resize(sprite, { duration: duration * (7 / 8) });
      move(sprite, { duration: duration * (7 / 8) });
    }

    yield Promise.all(
      sentSprites.map(sprite => {
        return Promise.all([
          resize(sprite, { duration: duration * (7 / 8) }),
          move(sprite, { duration: duration * (7 / 8) })
        ]);
      })
    );
  },

  *bodyTransition({ duration, insertedSprites, removedSprites }) {
    yield Promise.all(
      removedSprites.map(sprite => {
        sprite.applyStyles({
          zIndex: 99999
        });
        fadeOut(sprite, { duration: duration / 4 });
      })
    );

    yield wait(duration / 3);
    insertedSprites.forEach(sprite => {
      fadeIn(sprite, { duration: duration * (2 / 3) });
    });
  }
});
