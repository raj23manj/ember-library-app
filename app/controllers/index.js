import Controller from '@ember/controller';
//import { computed, observer } from '@ember/object';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

  //isDisabled: true,
  responseMessage: '',
  emailAddress: '',
  headerMessage: 'Comming Soon',

  // actualEmailAddress: computed('emailAddress', function() { 
  //   console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  // }),
  //
  // emailAddressChanged: observer('emailAddress', function() { 
  //   console.log('observer is called', this.get('emailAddress'));
  // })

 //  isDisabled: computed('emailAddress', function() {
 //   return this.get('emailAddress') === '';
 // })

 //isDisabled: empty('emailAddress')

 isValid: match('emailAddress', /^.+@.+\..+$/),
 isDisabled: not('isValid')

});
