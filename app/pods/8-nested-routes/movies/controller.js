import Controller from "@ember/controller";
import move from "ember-animated/motions/move";
import resize from "ember-animated/motions/resize";
import { fadeIn } from 'ember-animated/motions/opacity';
import { inject as service } from '@ember/service';

export default Controller.extend({
  appState: service(),

  *transition({ receivedSprites, insertedSprites }) {
    console.log("index: ", arguments[0]);
    receivedSprites.forEach(sprite => {
      sprite.applyStyles({
        zIndex: 1
      })
      resize(sprite);
      move(sprite);
    });

    insertedSprites.forEach(sprite => {
      fadeIn(sprite)
    })
  }
});
