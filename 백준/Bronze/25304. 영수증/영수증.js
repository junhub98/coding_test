const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const X = Number(input[0]);
const N = Number(input[1]);

const items = input.slice(2, 2 + N).map(line => line.split(" ").map(Number));


const sum = items.reduce((acc, [price, count]) => acc + price * count, 0);

console.log(sum === X ? "Yes" : "No");