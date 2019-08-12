import Controller from "@ember/controller";
import { fadeIn, fadeOut } from "ember-animated/motions/opacity";
import move from "ember-animated/motions/move";
import adjustCSS from "ember-animated/motions/adjust-css";
import resize from "ember-animated/motions/resize";
import { wait } from "ember-animated";
import { inject as service } from "@ember/service";

export default Controller.extend({
  appState: service(),

  *fade({ duration, insertedSprites, removedSprites }) {
    console.log("did render: ", this.get("appState").didRender);
    // console.log(arguments[0]);
    removedSprites.forEach(sprite => {
      fadeOut(sprite, { duration: duration / 4 });
    });

    yield wait(duration);

    insertedSprites.forEach(fadeIn);
  },

  *transition({
    receivedSprites,
    sentSprites,
    duration,
    insertedSprites,
    removedSprites
  }) {
    sentSprites.forEach(sprite => {
      sprite.element.classList.add("flex");
      sprite.element.classList.add("items-center");
      sprite.element.classList.add("justify-center");
      resize(sprite, { duration: duration / 2 });
      move(sprite, { duration: duration / 2 });
    });

    receivedSprites.forEach(sprite => {
      sprite.element.classList.add("flex");
      sprite.element.classList.add("items-center");
      sprite.element.classList.add("justify-center");
      sprite.applyStyles({
        width: sprite.initialBounds.width,
        height: sprite.initialBounds.height
      });
      sprite.reveal();
    });

    yield wait(duration * (1 / 2));

    receivedSprites.forEach(sprite => {
      resize(sprite, { duration: duration * (1 / 2) });
      move(sprite, { duration: duration * (1 / 2) });
    });
  }
});
