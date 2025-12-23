const fs = require("fs");


const input = fs.readFileSync(0, 'utf8').toString().trim().split("\n");

const target = Number(input[2]);

const nums = input[1].split(" ").map(Number).filter(num=>num===target).length;

console.log(nums);