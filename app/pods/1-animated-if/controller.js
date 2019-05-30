import Controller from '@ember/controller';
import fade from 'ember-animated/transitions/fade';

import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';

export default Controller.extend({

  // transition: fade

  transition: function*({ insertedSprites, removedSprites, duration }) {
    for (let sprite of removedSprites) {
      yield fadeOut(sprite, { duration: duration / 2 });
    }

    for (let sprite of insertedSprites) {
      fadeIn(sprite, { duration: duration / 2 });
    }
  }

});
