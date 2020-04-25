import * as styles from './index.styl';
import Input from './components/Input/Input';
import EmailsList from './components/EmailsList/EmailsList';
import Component from "./components/Component";
import { getUniqueNumber } from "./utils";

interface IEmailsInput {
  emails: string[];
}

class EmailsInput extends Component<IEmailsInput> {
  emailList: EmailsList;

  protected onBeforeInit() {
    if (!this.props.emails) this.props.emails = [];
  }

  protected onAfterInit() {
    const inputEl = this.rootEl.querySelector('.js-input');
    const emailsListEl = this.rootEl.querySelector('.js-emailsList');
    const id = `emailInput_${getUniqueNumber()}`;
    new Input(inputEl as HTMLElement, { onEnter: this.onInputEnter.bind(this), id });
    this.emailList = new EmailsList(emailsListEl as HTMLElement, {
      emails: this.props.emails,
      id
    });
  }

  private onInputEnter(emails: string | string[]) {
    this.emailList.addEmails(emails);
  }

  get template() {
    return `
      <div class="${styles.layout}">
        <div class="${styles.form}">
            <div class="${styles.formTop}">
                <div class="${styles.formTitle}">Share <strong>Board name</strong> with others</div>
                <div class="${styles.emailInput}">
                    <div class="js-emailsList"></div>
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
}

declare global {
  interface Window {
    EmailsInput: any;
  }
}

window.EmailsInput = EmailsInput;