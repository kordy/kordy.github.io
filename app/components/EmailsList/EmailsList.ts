import * as styles from '../../index.styl';
import crossSvg from '../../assets/cross.svg';
import Component from "../Component";
import { isEmailValid } from "../../utils";

interface IEmailList {
  emails: string[],
  id: string
}

export default class EmailsList extends Component<IEmailList> {

  private emails: emailsInputTypes.EmailsType;

  protected onBeforeInit() {
    this.emails = EmailsList.handleEmails(this.props.emails);
  }

  private static handleEmails(emails: string | string[]): emailsInputTypes.EmailsType {
    return []
      .concat(emails)
      .filter(email => email)
      .map(email => ({
        email,
        isValid: isEmailValid(email)
      }));
  }

  protected onAfterInit() {
    this.rootEl.addEventListener('click', this.handleClick.bind(this));
  }

  private handleClick(e: Event): void {
    const buttonEl = (e.target as HTMLElement).closest('.js-remove');
    if (buttonEl) {
      const listItemEl = (e.target as HTMLElement).closest('.js-list-item');
      const i = Array.from(listItemEl.parentElement.children).indexOf(listItemEl);
      this.removeEmailFromState(i);
      this.removeEmailFromHTML(i);
    }
  }

  public addEmails(emails: string | string[]) {
    const newEmails = EmailsList.handleEmails(emails);
    this.appendEmailsToState(newEmails);
    this.appendEmailsToHTML(newEmails);
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
    this.emails.splice(i, 1)
  }

  private removeEmailFromHTML(i: number) {
    this.rootEl
      .querySelector('.js-list')
      .removeChild(this.rootEl.querySelectorAll('.js-list-item')[i])
  }

  private static getListTemplate(emails: emailsInputTypes.EmailsType) {
    return emails.map(({ email, isValid }, i) =>`
      <div class="js-list-item ${styles.emailInputListItem} ${isValid ? styles.isValid : styles.isInvalid}">
        ${email} <button type="button" class="js-remove ${styles.emailInputListItemRemove}">${crossSvg}</button>
      </div>`
    ).join('')
  }

  get template() {
    return `
      <div class="js-list ${styles.emailInputList}">
        ${EmailsList.getListTemplate(this.emails)}
        <label for="${this.props.id}" class="js-placeholder ${styles.emailInputListItem} ${styles.isPlaceholder}">add more people…</label>
      </div>`;
  }
}
