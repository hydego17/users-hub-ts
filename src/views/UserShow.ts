import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `

        <h2>User Detail</h2>
        <div>Name: ${this.model.get("name")} </div>
        <div>Age: ${this.model.get("age")} </div>
  
    `;
  }
}
