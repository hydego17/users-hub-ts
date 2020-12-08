/*  Option to show collection of users  */

import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on("change", () => {
  const root = document.getElementById("root");

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();

/*  Option to show single user and edit */

// import { UserEdit } from "./views/UserEdit";
// import { User } from "./models/User";

// const itachi = User.buildUser({ name: "Itachi", age: 23 });

// const root = document.getElementById("root");

// if (root) {
//   const userEdit = new UserEdit(root, itachi);

//   userEdit.render();
// } else {
//   throw new Error("Root element not found");
// }
