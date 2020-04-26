import './demo/demo.styl';
import './utils/polyfill';
import EmailsInput from './components/EmailsInput/EmailsInput';

const initInput = (rootEl: HTMLElement, props: emailsInputTypes.IEmailsInput) => {
  return new EmailsInput(rootEl, props)
}

declare global {
  interface Window {
    EmailsInput: any;
  }
}

window.EmailsInput = initInput;