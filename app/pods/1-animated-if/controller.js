import Controller from '@ember/controller';
import fade from 'ember-animated/transitions/fade';

import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';

export default Controller.extend({

  // transition: fade

  transition: function*({ insertedSprites, removedSprites, keptSprites, duration }) {
    yield Promise.all(removedSprites.map(sprite => {
      return fadeOut(sprite, { duration: duration / 2 });
    }));

    for (let sprite of insertedSprites.concat(keptSprites)) {
      fadeIn(sprite, { duration: duration / 2 });
    }
  }

});
