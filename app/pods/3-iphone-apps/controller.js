import Controller from "@ember/controller";
import { A } from "@ember/array";

const COLORS = ["blue", "green", "red"];

export default Controller.extend({
  init() {
    this._super(...arguments);

    this.set(
      "apps",
      A(
        [...Array(16)].map((_, i) => ({
          id: i,
          name: i + 1,
          color: COLORS[i % 3]
        }))
      )
    );
  },

  actions: {
    removeApp(app) {
      this.apps.removeObject(app);
    }
  }
});
