export default class Component {
  protected rootEl: HTMLElement;
  protected events: {
    [eventSelector: string]: (e: Event) => void
  }
  protected props?: {
    [propName: string]: any
  }

  protected get template() {
    return "";
  }

  private addEventListeners() {
    Object.keys(this.events).forEach(eventSelector => {
      const [event, selector] = eventSelector.split(/\s(.*)/g, 2);
      if (selector) {
        Array.from(this.rootEl.querySelectorAll(selector)).forEach(el => {
          el.addEventListener(event, this.events[eventSelector])
        })
      } else {
        this.rootEl.addEventListener(event, this.events[eventSelector])
      }
    })
  }

  private removeEventListeners() {
    Object.keys(this.events).forEach(eventSelector => {
      const [event, selector] = eventSelector.split(/\s(.*)/g, 2);
      if (selector) {
        Array.from(this.rootEl.querySelectorAll(selector)).forEach(el => {
          el.removeEventListener(event, this.events[eventSelector])
        })
      } else {
        this.rootEl.removeEventListener(event, this.events[eventSelector])
      }
    })
  }

  constructor(rootEl: HTMLElement, props: { [propName: string]: any }) {
    this.rootEl = rootEl;
    this.props = props;
    this.initComponent();
    this.onAfterInit();
  }

  protected render() {
    this.rootEl.innerHTML = this.template;
  }

  protected initComponent() {
    this.render();
    this.addEventListeners();
  }

  protected onAfterInit() { }

  protected update(props: { [propName: string]: any }) {
    this.props = props;
    this.removeEventListeners();
    this.initComponent();
  }
}
