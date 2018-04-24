import Controller from '@ember/controller';
import {
  match,
  not,
  gte,
  and
} from '@ember/object/computed';

export default Controller.extend({

  emailAddress: '',
  message: '',


  isEmailValid: match('emailAddress', /^.+@.+\..+$/),
  isMessageLongEnough: gte('message.length', 5),

  isFormValid: and('isEmailValid', 'isMessageLongEnough'),

  isDisabled: not('isFormValid'),

  actions: {
    sendMessage() {
      alert(`Email address: ${this.get('emailAddress')}\nMessage: ${this.get('message')}`)
      this.set('responseMessage', 'Thank you for your message!');
      this.set('emailAddress', '')
      this.set('message', '')

    }
  }
});
