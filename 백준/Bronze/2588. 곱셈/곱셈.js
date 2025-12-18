const fs = require("fs");

let [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = [];
for (let i = A.length - 1; i >= 0; i--) {
    arr.push(Number(A) * Number(B[i]));
}


arr.forEach(a => console.log(a));

console.log(Number(A) * Number(B));
