import { User } from "./models/User";

const user = new User({ name: "Hydego New", age: 99 });

user.on("change", () => {
  console.log("changed!");
});

user.trigger("change");

console.log(user.get("name"));
