import * as styles from '../../index.styl';

export default class Input {
  emails: string[];
  el: HTMLElement;

  template() {
    return `<input class="${styles.emailInputInput}" type="text" id="emailsInput" />`;
  }

  constructor(props) {
    this.onEnter = props && props.onEnter;
    this.initElement();
  }

  private static createElementFromHTML(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  }

  private initElement() {
    this.el = Input.createElementFromHTML(this.template());
    this.addEventListeners()
  }

  private onAddEmail() {
    const value = this.el.value.trim();
    if (value) {
      this.onEnter(this.el.value)
    }
    this.el.value = '';
  }

  private onKeyPress = ({ keyCode }) => {
    if (keyCode === 13 || keyCode === 44) {
      this.onAddEmail()
    }
  }

  private onBlur = () => {
    this.onAddEmail()
  }

  private addEventListeners() {
    this.el.addEventListener('keypress', this.onKeyPress)
    this.el.addEventListener('blur', this.onBlur)
  }

  public getElement() {
    return this.el;
  }

}
