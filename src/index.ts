import { User } from "./models/User";

const user = new User({ id: 1 });

user.set({ name: "Hydego New", age: 99 });

user.events.on("change", () => {
  console.log("Change!");
});

user.events.trigger("change");
