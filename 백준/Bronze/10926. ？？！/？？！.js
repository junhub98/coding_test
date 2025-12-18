const fs = require("fs");


const name = fs.readFileSync("/dev/stdin").toString().trim();


console.log(name + "??!");          
