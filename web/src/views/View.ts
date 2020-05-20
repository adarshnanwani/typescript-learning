
export abstract class View<T> {
  abstract bindModel(): void

  abstract eventsMap(): { [key: string]: () => void }

  abstract template(): string

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      })
    }
  }

  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
