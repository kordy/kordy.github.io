import * as styles from './EmailsInput.styl';
import Input from '../Input/Input';
import EmailsList from '../EmailsList/EmailsList';
import Component from "../Component";
import { getUniqueNumber } from "../../utils";

export default class EmailsInput extends Component<emailsInputTypes.IEmailsInput> {
  emailList: EmailsList;
  input: Input;

  protected onBeforeInit() {
    if (!this.props.emails) this.props.emails = [];
  }

  protected onAfterInit() {
    const inputEl = this.rootEl.querySelector('.js-input');
    const emailsListEl = this.rootEl.querySelector('.js-emailsList');
    const id = `emailInput_${getUniqueNumber()}`;
    this.input = new Input(inputEl as HTMLElement, { onEnter: this.onInputEnter.bind(this), id });
    this.emailList = new EmailsList(emailsListEl as HTMLElement, {
      emails: this.props.emails,
      id
    });
    this.rootEl.addEventListener('click', () => this.input.focus());
  }

  private onInputEnter(emails: emailsInputTypes.EmailsUnhandledType) {
    this.emailList.addEmails(emails);
  }

  public getAllEmails() {
    return this.emailList.getAllEmails();
  }

  public replaceEmails(emails: emailsInputTypes.EmailsUnhandledType) {
    return this.emailList.replaceEmails(emails);
  }

  public subscribe(callback: emailsInputTypes.Callback) {
    this.emailList.subscribe(callback);
  }

  public unSubscribe(callback: emailsInputTypes.Callback) {
    this.emailList.unSubscribe(callback);
  }

  get template() {
    return `
      <div class="${styles.container}">
        <div class="js-emailsList"></div>
        <div class="js-input"></div>
      </div>
    `;
  }
}