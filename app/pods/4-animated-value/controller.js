import Controller from "@ember/controller";
import faker from "faker";
import { easeExpIn, easeExpOut } from "d3-ease";
import move from "ember-animated/motions/move";

export default Controller.extend({
  *transition({ duration, insertedSprites, removedSprites }) {
    for (let sprite of removedSprites) {
      sprite.endAtPixel({ x: 0 - sprite.initialBounds.width });
      yield move(sprite, {
        duration: duration * (1 / 2),
        easing: easeExpIn
      });
    }

    for (let sprite of insertedSprites) {
      sprite.startAtPixel({ x: window.innerWidth });
      move(sprite, {
        duration: duration * (1 / 2),
        easing: easeExpOut
      });
    }
  },

  word: faker.company.bsBuzz().toUpperCase(),

  actions: {
    changeWord() {
      this.set("word", faker.company.bsBuzz().toUpperCase());
    }
  }
});
