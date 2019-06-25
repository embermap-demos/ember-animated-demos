import Controller from "@ember/controller";
import faker from "faker";

export default Controller.extend({
  *transition() {},

  word: faker.company.bsBuzz().toUpperCase(),

  actions: {
    changeWord() {
      this.set("word", faker.company.bsBuzz().toUpperCase());
    }
  }
});
