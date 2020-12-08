import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const itachi = User.buildUser({ name: "Itachi", age: 23 });

const userForm = new UserForm(document.getElementById("root"), itachi);

userForm.render();
