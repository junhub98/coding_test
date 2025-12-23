const fs = require("fs");


const input = fs.readFileSync(0, 'utf8').toString().trim().split("\n");

const total = Number(input[0]);

let star="*";

for(i=1;i<total+1;i++){

    console.log(star);
    star+="*";
}
