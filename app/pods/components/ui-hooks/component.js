import Component from '@ember/component';

export default Component.extend({

  'did-insert'() {},

  didInsertElement() {
    this._super(...arguments);

    this['did-insert']()
  },
});
