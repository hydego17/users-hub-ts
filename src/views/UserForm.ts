export class UserForm {
  constructor(public parent: Element) {}

  template(): string {
    return `
        <div class="container">
            <h1>Users Connect</h1>
            <p>Simple user listing</p>

            <h1> User Form </h1>
            <input/>
        </div>
      `;
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}
