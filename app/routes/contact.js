import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('contact');
  },
  actions: {
    saveDetails(newContactMessage) {
      newContactMessage.save().then(() => {
        this.controller.set('savedModel', this.controller.model.toJSON());
        this.controller.model.set('email', '');
        this.controller.model.set('message', '');
        this.controller.set('responseMessage', true);
      });
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }

      this.controller.set('responseMessage', false);
    }
  }
});
