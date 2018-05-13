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
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }


});
