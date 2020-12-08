import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const itachi = User.buildUser({ name: "Itachi", age: 23 });

const root = document.getElementById("root");

if (root) {
  const userForm = new UserForm(root, itachi);

  userForm.render();
} else {
  throw new Error("Root element not found");
}
