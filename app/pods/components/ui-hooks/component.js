import Component from "@ember/component";
import { next } from "@ember/runloop";

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);

    next(() => {
      this["did-insert"]();
    });
  },

  "did-insert"() {}
});
