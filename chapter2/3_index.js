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


fs.writeFile(path.join(__dirname,'files','replies.txt'), 'Nice to meet you', (error) => {
    if (error) throw error;
    console.log('write compelete');
    fs.appendFile(path.join(__dirname,'files','replies.txt'), '\n\n yes, me too also', (error) => {
        if (error) throw error;
        console.log('append complete');
      });
  });
