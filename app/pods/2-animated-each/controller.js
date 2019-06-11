import Controller from '@ember/controller';
import { A } from '@ember/array';
import move from 'ember-animated/motions/move';
import { fadeOut } from 'ember-animated/motions/opacity';

export default Controller.extend({

  *transition({ duration, keptSprites, removedSprites }) {
    for (let sprite of removedSprites) {
      yield fadeOut(sprite, { duration: duration / 5 });
      // fadeOut(sprite);
    }

    for (let sprite of keptSprites) {
      fadeOut(sprite);
      // move(sprite);
    }
  },

  init() {
    this._super(...arguments);

    this.set('tags', A([
      'Action/Adventure',
      'Animation',
      'Comedy',
      'Crime',
      'Documentary',
      'Drama',
      'Sci-Fi/Fantasy',
      'Horror',
      'Musical',
      'Mystery',
      'Romance',
      'Thriller',
    ]));
  },

  actions: {
    removeTag(tag) {
      this.tags.removeObject(tag);
    }
  }

});
