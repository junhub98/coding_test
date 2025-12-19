const fs = require("fs");


const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");



let numbers=[];

for (const value in input){
    numbers.push(input[value].split(" "));
}
    numbers.shift();
    
for (const value of numbers){
    console.log(value.map(Number).reduce((temp,num)=>temp+num,0));
}

