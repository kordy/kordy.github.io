import * as styles from './index.styl';
import Input from './components/Input/Input';
import EmailsList from './components/EmailsList/EmailsList';
import { isEmailValid } from './utils';

interface IEmailsInput {
  rootEl: HTMLElement
}

class EmailsInput implements IEmailsInput {
  rootEl: HTMLElement;
  emails: string[] = [];
  emailList: EmailsList;

  template() {
    return `
      <div class="${styles.layout}">
        <div class="${styles.form}">
            <div class="${styles.formTop}">
                <div class="${styles.formTitle}">Share <strong>Board name</strong> with others</div>
                <div class="${styles.emailInput}">
                    <div class="js-emailInput"></div>
                    <div class="js-input"></div>
                </div>
            </div>
            <div class="${styles.formBottom}">
                <button class="${styles.formButton}">Add Email</button>
                <button class="${styles.formButton}">Get Emails Count</button>
            </div>
        </div>
      </div>
    `;
  }


  constructor(rootEl: HTMLElement) {
    if (!(this instanceof EmailsInput)) {
      return new EmailsInput(rootEl);
    }

    this.rootEl = rootEl;
    this.render();
    const input = new Input({ onEnter: this.onInputEnter });
    this.emailList = new EmailsList(this.rootEl.querySelector('.js-emailInput'), {
      onRemove: this.onRemoveEmail,
      emails: []
    });
    this.rootEl.querySelector('.js-input').appendChild(input.getElement());

  }

  onRemoveEmail = (i: number) => {
    this.emails.splice( i, 1);
    this.emailList.update(this.emails);
  }

  onInputEnter = (email: string) => {
    this.emails.push({
      email,
      isValid: isEmailValid(email)
    });
    this.emailList.update(this.emails);
  }

  render() {
    this.rootEl.innerHTML = this.template();
  }
  
}

declare global {
  interface Window {
    EmailsInput: any;
  }
}

window.EmailsInput = EmailsInput;