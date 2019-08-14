import Controller from "@ember/controller";
import { fadeIn, fadeOut } from "ember-animated/motions/opacity";
import move from "ember-animated/motions/move";
import adjustCSS from "ember-animated/motions/adjust-css";
import resize from "ember-animated/motions/resize";
import scale from "ember-animated/motions/scale";
import { wait } from "ember-animated";
import { inject as service } from "@ember/service";

export default Controller.extend({
  appState: service(),

  *transition({ duration, receivedSprites }) {
    let moveDuration = duration * (3 / 4);
    console.log(moveDuration);
    for (let sprite of receivedSprites) {
      // }
      // receivedSprites.forEach(sprite => {
      // sprite.hide();
      sprite.applyStyles({ opacity: 0 });
      // sprite.moveToFinalPosition();
      // resize(sprite, { duration: moveDuration });
      move(sprite, { duration: moveDuration });
      // yield wait(duration * (3 / 4));
      // resize(sprite);
      // sprite.hide();

      yield fadeIn(sprite, { duration: duration * (1 / 4), from: 0 });
      // });
    }
    console.log(arguments[0]);
  }

  // *fade({ duration, insertedSprites, removedSprites }) {
  //   // insertedSprites[0].startTranslatedBy(0, 0);
  //   insertedSprites.forEach(sprite => {
  //     // debugger;
  //     // insertedSprites[0].moveToFinalPosition();
  //     // sprite.initialBounds = sprite.finalBounds;
  //     // scale(sprite);
  //     fadeIn(sprite);
  //   });
  //   // console.log(arguments[0]);
  //   // // insertedSprites.forEach(sprite => {
  //   // //   sprite.applyStyles({
  //   // //     display: "none"
  //   // //   });
  //   // //   // fadeIn
  //   // // });
  //   // //
  //   // // removedSprites.forEach(sprite => {
  //   // //   fadeOut(sprite, { duration: duration / 4 });
  //   // // });
  //   // //
  //   // yield wait(duration / 3);
  //   //
  //   // insertedSprites.forEach(sprite => {
  //   //   fadeIn(sprite, { duration: duration * (2 / 3) });
  //   //   // fadeIn
  //   // });
  // },
  //
  // *transition({ receivedSprites, sentSprites, duration }) {
  //   // sentSprites.forEach(sprite => {
  //   //   sprite.element.classList.add("flex");
  //   //   sprite.element.classList.add("items-center");
  //   //   sprite.element.classList.add("justify-center");
  //   //   resize(sprite, { duration: duration / 2 });
  //   //   move(sprite, { duration: duration / 2 });
  //   // });
  //   //
  //   // receivedSprites.forEach(sprite => {
  //   //   sprite.element.classList.add("flex");
  //   //   sprite.element.classList.add("items-center");
  //   //   sprite.element.classList.add("justify-center");
  //   //   sprite.applyStyles({
  //   //     width: sprite.initialBounds.width,
  //   //     height: sprite.initialBounds.height
  //   //   });
  //   //   sprite.reveal();
  //   // });
  //   //
  //   // yield wait(duration * (1 / 2));
  //   console.log("parent: ", arguments[0]);
  //
  //   receivedSprites.forEach(sprite => {
  //     // sprite.element.querySelector(
  //     //   "p"
  //     // ).style.lineHeight = `${sprite.initialBounds.height}px`;
  //     // debugger;
  //     // sprite.element.classList.add("flex");
  //     // sprite.element.classList.add("items-center");
  //     // sprite.element.classList.add("justify-center");
  //     // sprite.element.querySelector("div").style.height = 0;
  //
  //     resize(sprite);
  //     // scale(sprite);
  //     move(sprite);
  //     // fadeIn(sprite);
  //   });
  // },
  //
  // *titleTransition({ receivedSprites }) {
  //   console.log("title: ", arguments[0]);
  //   receivedSprites.forEach(sprite => {
  //     sprite.moveToFinalPosition();
  //     fadeIn(sprite);
  //     // sprite.reveal();
  //     // console.log(arguments[0]);
  //   });
  // }
});
