const todo = require("./todo.js");

switch (process.argv[2]) {
  case "--new":
    process.argv[3]
      ? todo.add(process.argv[3])
      : console.log("try this '--new 'my new todo'' id is missing");
    break;
  case "--list":
    todo.list(process.argv[3]);
    break;
  case "--done":
    process.argv[3]
      ? todo.update(process.argv[3])
      : console.log("try this '--done id' id is missing");
    break;
  case "--delete":
    process.argv[3]
      ? todo.destroy(process.argv[3])
      : console.log("try this '--delete id' id is missing");
    break;
  case "--version":
    todo.version();
    break;
  case "--help":
    todo.help();
    break;
  default:
    console.log(process.argv[2] + " : no action found");
}
