import Controller from "@ember/controller";
import { A } from "@ember/array";
import move from "ember-animated/motions/move";

export default Controller.extend({
  init() {
    this._super(...arguments);

    this.redList = A([1, 2, 3]);
    this.blueList = A([]);
  },

  *redTransition({ keptSprites, receivedSprites }) {
    keptSprites.forEach(move);
    receivedSprites.forEach(move);
  },

  *blueTransition({ keptSprites, receivedSprites }) {
    keptSprites.forEach(move);
    receivedSprites.forEach(move);
  },

  actions: {
    moveToBlue(item) {
      this.blueList.addObject(item);
      this.redList.removeObject(item);
    },

    moveToRed(item) {
      this.redList.addObject(item);
      this.blueList.removeObject(item);
    }
  }
});
