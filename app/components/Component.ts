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

  protected render() {
    this.rootEl.innerHTML = this.template;
  }

  protected onBeforeInit() { }

  protected onAfterInit() { }

  public update(props: Partial<IProps>): void {
    this.props = { ...this.props, ...props };
    this.render();
  }
}
