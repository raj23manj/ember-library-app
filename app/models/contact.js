import DS from 'ember-data';
import {  match, gte, and, not  } from '@ember/object/computed';
import { computed } from '@ember/object';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),


  isValidEmail: match('email', /^.+@.+\..+$/),
  isMessageEnoughLong: gte('message.length', 5),
  isDisabled: computed( 'isValidEmail', 'isMessageEnoughLong', function() {
    return !(this.get('isValidEmail') && this.get('isMessageEnoughLong'))
  })
  // isValid: and('isValidEmail', 'isMessageEnoughLong'),
  // isDisabled: not('isValid')
});
