export default class Component<IProps> {
  protected rootEl: HTMLElement;
  protected props?: IProps;

  protected get template() {
    return "";
  }

  constructor(rootEl: HTMLElement, props: IProps = {} as IProps) {
    this.rootEl = rootEl;
    this.props = props;
    this.onBeforeInit();
    this.render();
    this.onAfterInit();
  }

  protected onBeforeInit() { }

  protected onAfterInit() { }

  protected render() {
    this.rootEl.innerHTML = this.template;
  }

  protected onBeforeUpdate() { }

  protected onAfterUpdate() { }

  protected update(props: Partial<IProps>) {
    this.props = { ...this.props, ...props };
    this.onBeforeUpdate();
    this.render();
    this.onAfterUpdate();
  }

}
