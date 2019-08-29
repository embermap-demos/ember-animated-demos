import Controller from "@ember/controller";
import move from "ember-animated/motions/move";
import resize from "ember-animated/motions/resize";

export default Controller.extend({
  *transition({ receivedSprites }) {
    console.log("index: ", arguments[0]);
    receivedSprites.forEach(sprite => {
      resize(sprite);
      move(sprite);
    });
  }
});
