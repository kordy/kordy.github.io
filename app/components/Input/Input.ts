import * as styles from './Input.styl';
import Component from "../Component";

interface IInput {
  onEnter: emailsInputTypes.OnEnterType,
  id: string
}

export default class Input extends Component<IInput> {

  private inputElement: HTMLInputElement;

  protected onAfterInit(): void {
    this.inputElement = this.rootEl.querySelector('.js-input');
    this.inputElement.addEventListener('keydown', this.onKeyUp.bind(this));
    this.inputElement.addEventListener('input', this.onInput.bind(this));
    this.inputElement.addEventListener('blur', this.onBlur.bind(this));
    this.inputElement.addEventListener('paste', this.onPaste.bind(this));
  }

  public focus(): void {
    this.inputElement.focus();
  }

  private onAddEmail(): void {
    let value = this.inputElement.value.trim();
    if (value[value.length - 1] === ',') {
      value = value.slice(0, -1);
    }
    if (value) {
      this.props.onEnter(value)
    }
    this.inputElement.value = '';
  }

  private onInput(e: InputEvent): void {
    if (e.data === ',') {
      this.onAddEmail();
      e.preventDefault();
    }
  }

  private onKeyUp(e: KeyboardEvent): void {
    if (e.key === 'Enter' || e.key === ',') {
      this.onAddEmail();
      e.preventDefault();
      e.stopPropagation();
    }
  }

  private onBlur(): void {
    this.onAddEmail()
  }

  private onPaste(e: ClipboardEvent): void {
    e.stopPropagation();
    e.preventDefault();

    const clipboardValue = (e.clipboardData || window.clipboardData).getData('Text');
    const trimmedValue = clipboardValue && clipboardValue.replace(/\s+/g, '')
    if (trimmedValue) {
      this.props.onEnter(trimmedValue.split(','))
    }
  }

  protected get template() {
    return `<input class="js-input ${styles.input}" type="text" id="${this.props.id}" />`;
  }
}

declare global {
  interface Window {
    clipboardData: any;
  }
}
