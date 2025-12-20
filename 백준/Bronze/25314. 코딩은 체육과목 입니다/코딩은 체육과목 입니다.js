const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let text = ["int"];
for ( i=0;i<Number(input)/4;i++){
    text.unshift("long");
}
console.log(text.join(" "));