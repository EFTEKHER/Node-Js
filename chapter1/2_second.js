const path= require('path')
console.log(1);
console.log(path.dirname(__filename));
console.log(2);
console.log(path.basename(__filename));
console.log(3);
console.log(path.extname(__filename));
console.log(4);
console.log(path.parse(__filename));