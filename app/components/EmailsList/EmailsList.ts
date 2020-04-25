import * as styles from '../../index.styl';
import crossSvg from '../../assets/cross.svg';

export default class EmailsList {
  emails: string[];
  onRemove: (i: number) => void
  rootEl: HTMLElement;

  get template() {
    return `
      <div class="${styles.emailInputList}">
        ${
          this.emails.map(({ email, isValid }, i) =>`
            <div class="${styles.emailInputListItem} ${isValid ? styles.isValid : styles.isInvalid}">
                ${email} <button data-i=${i} type="button" class="${styles.emailInputListItemRemove}">${crossSvg}</button>
            </div>`
          ).join('')
        }
        <label for="emailsInput" class="${styles.emailInputListItem} ${styles.isPlaceholder}">add more people…</label>
      </div>`;
  }

  constructor(rootEl: HTMLElement, props: { onRemove: (i: number) => void, emails: string[] }) {
    this.rootEl = rootEl;
    this.onRemove = props && props.onRemove;
    this.emails = props && props.emails;
    this.initElement();
  }

  private handleClick = (e: Event) => {
    const button = e.target.closest(`.${styles.emailInputListItemRemove}`);
    if (button) {
      this.onRemove(+button.getAttribute('data-i'));
    }
  }

  private addEventListeners() {
    this.rootEl.addEventListener('click', this.handleClick)
  }

  private initElement() {
    this.addEventListeners();
    this.render();
  }

  public update(emails: string[]) {
    this.emails = emails;
    this.render();
  }

  private render() {
    this.rootEl.innerHTML = this.template;
  }
}
