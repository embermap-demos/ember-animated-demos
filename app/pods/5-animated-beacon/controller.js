import Controller from "@ember/controller";
import { A } from "@ember/array";
import move from "ember-animated/motions/move";
import { fadeOut } from "ember-animated/motions/opacity";

export default Controller.extend({
  *transition({ keptSprites, removedSprites, beacons }) {
    yield Promise.all(
      removedSprites.map(sprite => {
        sprite.endAtSprite(beacons.trash);
        sprite.applyStyles({
          zIndex: 99
        });

        return Promise.all([move(sprite), fadeOut(sprite)]);
      })
    );

    for (let sprite of keptSprites) {
      move(sprite);
    }
  },

  init() {
    this._super(...arguments);

    this.set("selectedItems", A([]));
    this.set("deletedItems", A([]));

    this.set(
      "items",
      A(
        [...Array(124)].map((_, i) => ({
          id: i,
          name: i + 1
        }))
      )
    );
  },

  actions: {
    toggle(item) {
      if (this.selectedItems.includes(item)) {
        this.selectedItems.removeObject(item);
      } else {
        this.selectedItems.addObject(item);
      }
    },

    deleteSelectedItems() {
      this.selectedItems.toArray().forEach(item => {
        this.items.removeObject(item);
        this.deletedItems.pushObject(item);
        this.selectedItems.removeObject(item);
      });
    }
  }
});
