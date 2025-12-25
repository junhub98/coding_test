const fs = require("fs");


const input = fs.readFileSync(0, 'utf8').toString().trim().split("\n");

const length = Number(input[0].split(" ")[0]);
const maxNum = Number(input[0].split(" ")[1]);

const arr = input[1].split(" ").map(Number);

let list = [];

arr.forEach((num)=>{if(num<maxNum)list.push(num);});

console.log(list.join(" "));