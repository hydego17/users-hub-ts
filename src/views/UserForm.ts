import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-name": this.onSetNameClick,
      "click:.set-age": this.onSetAgeClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    const name = input.value;

    this.model.set({ name });
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
    <div class="container">
        <header>
            <h1>Users Connect</h1>
        </header>

        <div>
            <p> Name: ${this.model.get("name")}</p>
            <p> Age: ${this.model.get("age")} </p>
        </div>
            
        <h2> User Form </h2>
        <input/>
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
    </div>
      `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
