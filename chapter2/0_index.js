const fs = require("fs");


fs.readFile("./files/starter.txt", "utf-8", (error, data) => {
  if (error) throw error;
  console.log(data);
});
console.log("hello world");
//exit on uncaught error

process.on("uncaughtError", (err) => {
  console.log(`there was an error ${err}`);
  process.exit(1);
});
