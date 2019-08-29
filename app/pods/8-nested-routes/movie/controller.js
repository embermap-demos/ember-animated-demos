import Controller from "@ember/controller";
import { fadeIn, fadeOut } from "ember-animated/motions/opacity";
import move from "ember-animated/motions/move";
// import resize from "ember-animated/motions/resize";
import resize from "./resize";
import { inject as service } from "@ember/service";
import { wait as waitUtil, Motion } from "ember-animated";
import { easeExpOut } from "d3-ease";

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
      move(sprite, { easing: easeExpOut, duration: duration * 0.5 });
      resize(sprite, { easing: easeExpOut, duration: duration * 0.5 });
    }

    for (let sprite of sentSprites) {
      sprite.applyStyles({
        zIndex: 99
      });
      move(sprite, { easing: easeExpOut, duration: duration * 0.5 });
      resize(sprite, { easing: easeExpOut, duration: duration * 0.5 });
    }
  },

  *fade({ duration, insertedSprites, removedSprites }) {
    for (let sprite of insertedSprites) {
      sprite.applyStyles({ opacity: 0 });
      yield freeze(sprite, { duration: duration * 0.35 });
      fadeIn(sprite, { duration: duration * 0.1 });
    }

    for (let sprite of removedSprites) {
      fadeOut(sprite, { duration: duration * 0.125 });
    }
  }
});
