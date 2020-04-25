import * as styles from '../../index.styl';
import Component from "../Component";

interface IInput {
  onEnter: emailsInputTypes.onEnterType,
  id: string
}

export default class Input extends Component<IInput> {

  private inputElement: HTMLInputElement;

  protected onAfterInit(): void {
    this.inputElement = this.rootEl.querySelector(`.${styles.emailInputInput}`);
    this.inputElement.addEventListener('keypress', this.onKeyUp.bind(this));
    this.inputElement.addEventListener('blur', this.onBlur.bind(this));
    this.inputElement.addEventListener('paste', this.onPaste.bind(this));
  }

  private onAddEmail(): void {
    const value = this.inputElement.value.trim();
    if (value) {
      this.props.onEnter(this.inputElement.value)
    }
    this.inputElement.value = '';
  }

  private onKeyUp(e: KeyboardEvent): void {
    if (e.keyCode === 13 || e.keyCode === 44) {
      this.onAddEmail();
      e.preventDefault();
    }
  }

  private onBlur(): void {
    this.onAddEmail()
  }

  private onPaste(e: ClipboardEvent): void {
    e.stopPropagation();
    e.preventDefault();
    const clipboardValue = e.clipboardData.getData('Text');
    const trimmedValue = clipboardValue && clipboardValue.replace(/\s+/g, '')
    if (trimmedValue) {
      this.props.onEnter(trimmedValue.split(','))
    }
  }

  protected get template() {
    return `<input class="${styles.emailInputInput}" type="text" id="${this.props.id}" />`;
  }
}
