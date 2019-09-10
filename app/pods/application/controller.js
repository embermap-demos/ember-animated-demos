import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { next } from '@ember/runloop';

export default Controller.extend({
  appState: service(),

  actions: {
    setAppDidRender() {
      next(() => {
        this.appState.set('didRender', true)
      })
    }
  }

});
