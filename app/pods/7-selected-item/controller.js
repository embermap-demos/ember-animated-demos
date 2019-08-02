import Controller from "@ember/controller";
import { A } from "@ember/array";
import move from "ember-animated/motions/move";
import { fadeOut } from "ember-animated/motions/opacity";
import { computed } from "@ember/object";

export default Controller.extend({
  init() {
    this._super(...arguments);

    this.redList = A([1, 2, 3]);
  },

  selectedItem: null,

  sortedRedList: computed("redList.[]", function() {
    return this.redList.sort();
  }),

  *redTransition({ keptSprites, receivedSprites }) {
    keptSprites.forEach(move);
    receivedSprites.forEach(move);
  },

  *selectedTransition({ removedSprites, receivedSprites }) {
    removedSprites.forEach(fadeOut);
    receivedSprites.forEach(move);
  },

  actions: {
    select(item) {
      // Add back in old item
      if (this.selectedItem) {
        this.redList.addObject(this.selectedItem);
      }

      // Set new item
      this.set("selectedItem", item);
      this.redList.removeObject(item);
    }
  }
});
