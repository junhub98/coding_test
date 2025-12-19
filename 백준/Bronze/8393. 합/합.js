const fs = require("fs");


const input = fs.readFileSync("/dev/stdin").toString().trim();
let temp = 0;
let i = 1;
while(i!==Number(input)){
    temp += i;
    i++
}


console.log(temp+i);