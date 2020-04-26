import * as styles from './EmailsList.styl';
import crossSvg from '../../assets/cross.svg';
import Component from "../Component";
import { isEmailValid } from "../../utils";

interface IEmailList {
  emails: emailsInputTypes.EmailsUnhandledType,
  id: string
}

export default class EmailsList extends Component<IEmailList> {

  private emails: emailsInputTypes.EmailsType;
  private subscribers: emailsInputTypes.Callback[] = [];

  private static handleEmails(emails: emailsInputTypes.EmailsUnhandledType): emailsInputTypes.EmailsType {
    return []
      .concat(emails)
      .filter(email => email)
      .map(email => ({
        email,
        isValid: isEmailValid(email)
      }));
  }

  private setEmailsFromProps() {
    this.emails = EmailsList.handleEmails(this.props.emails);
  }

  protected onBeforeInit() {
    this.setEmailsFromProps()
  }

  protected onAfterInit() {
    this.rootEl.addEventListener('click', this.handleClick.bind(this));
  }

  protected onBeforeUpdate() {
    this.setEmailsFromProps()
  }

  protected onAfterUpdate() {
    this.publishChange()
  }

  private handleClick(e: Event): void {
    const listItemEl = (e.target as HTMLElement).closest('.js-list-item');
    const buttonEl = (e.target as HTMLElement).closest('.js-remove');
    if (buttonEl) {
      const i = Array.from(listItemEl.parentElement.children).indexOf(listItemEl);
      this.removeEmailFromState(i);
      this.removeEmailFromHTML(i);
      this.publishChange();
    }
    if (listItemEl) {
      e.stopImmediatePropagation();
    }
  }

  public addEmails(emails: emailsInputTypes.EmailsUnhandledType) {
    const newEmails = EmailsList.handleEmails(emails);
    this.appendEmailsToState(newEmails);
    this.appendEmailsToHTML(newEmails);
    this.publishChange();
  }

  public getAllEmails(): emailsInputTypes.EmailsUnhandledType {
    return this.emails.map(({ email }) => email);
  }

  public replaceEmails(emails: emailsInputTypes.EmailsUnhandledType) {
    this.update({ emails });
  }

  public subscribe(callback: emailsInputTypes.Callback) {
    this.subscribers.push(callback)
  }

  public unSubscribe(callback: emailsInputTypes.Callback) {
    const i = this.subscribers.findIndex(item => item === callback);
    if (i >= 0) {
      this.subscribers.splice(i, 1);
    }
  }

  private publishChange() {
    this.subscribers.forEach((callback: emailsInputTypes.Callback) => {
      callback(this.getAllEmails());
    });
  }

  private appendEmailsToState(newEmails: emailsInputTypes.EmailsType): void {
    this.emails = [...this.emails, ...newEmails];
  }

  private appendEmailsToHTML(newEmails: emailsInputTypes.EmailsType): void {
    this.rootEl
      .querySelector('.js-placeholder')
      .insertAdjacentHTML('beforebegin', EmailsList.getListTemplate(newEmails));
  }

  private removeEmailFromState(i: number) {
    this.emails.splice(i, 1);
  }

  private removeEmailFromHTML(i: number) {
    this.rootEl
      .querySelector('.js-list')
      .removeChild(this.rootEl.querySelectorAll('.js-list-item')[i])
  }

  private static getListTemplate(emails: emailsInputTypes.EmailsType) {
    return emails.map(({ email, isValid }, i) =>`
      <div class="js-list-item ${styles.listItem} ${isValid ? styles.isValid : styles.isInvalid}">
        ${email} <button type="button" class="js-remove ${styles.listItemRemove}">${crossSvg}</button>
      </div>`
    ).join('')
  }

  get template() {
    return `
      <div class="js-list ${styles.list}">
        ${EmailsList.getListTemplate(this.emails)}
        <label for="${this.props.id}" class="js-placeholder ${styles.listItem} ${styles.isPlaceholder}">add more people…</label>
      </div>`;
  }
}
