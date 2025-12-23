const fs = require("fs");


const input = fs.readFileSync(0, 'utf8').toString().trim().split("\n");

let sumList= "";

for(i=0;i<input.length;i++){
    
   const [A, B] = input[i].split(" ").map(Number);
    sumList += A+B +"\n";
}

console.log(sumList);
