import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";

const itachi = User.buildUser({ name: "Itachi", age: 23 });

const root = document.getElementById("root");

if (root) {
  const userEdit = new UserEdit(root, itachi);

  userEdit.render();
} else {
  throw new Error("Root element not found");
}
