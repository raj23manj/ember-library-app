import Controller from '@ember/controller';
import { match, gte } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Controller.extend({
  headerMessage: 'Contact',
  emailAddress: '',
  message: '',
  responseMessage: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  messageLength: gte('message.length', 5),
  isDisabled: computed( 'isValid', 'messageLength', function() {
    return !(this.get('isValid') && this.get('messageLength'))
  }),

  actions: {
    saveDetails() {
      const email = this.get('emailAddress');
      const message = this.get('message');
      this.store.createRecord('contact', {email: email, message: message}).save()
                .then(response => {
                  this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
                  this.set('emailAddress', '');
                  this.set('message', '');
                })

    }
  }


});
