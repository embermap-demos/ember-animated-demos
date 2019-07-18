import Controller from "@ember/controller";
import { A } from "@ember/array";

export default Controller.extend({
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
