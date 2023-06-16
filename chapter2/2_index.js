const fs = require("fs");
const path=require("path");

fs.readFile(path.join(__dirname,'files','starter.txt'), "utf-8", (error, data) => {
  if (error) throw error;
  console.log(data);
});
console.log("hello world");
//exit on uncaught error

process.on("uncaughtError", (err) => {
  console.log(`there was an error ${err}`);
  process.exit(1);
});

fs.appendFile(path.join(__dirname,'files','test.txt'), 'Testing me', (error) => {
    if (error) throw error;
    console.log('append complete');
  });