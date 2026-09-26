"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let up = "Up: ";
let down = "Down: ";

for (let i = 1, j = 10; i <= 10; i++, j--){
    up += i + " ";
    down += j + " ";
}

printOut(up);
printOut(down);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const number = 45;
let randomnum = 0;

while(number !== randomnum){
    randomnum = Math.floor(Math.random() * 60) + 1;
}
printOut("The number is " + number);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const task3number = 45;
let task3randnum = 0;
let task3attempts = 0;
let task3time = Date.now();
while(task3randnum !== task3number){
    task3randnum = Math.floor(Math.random() * 10000000) + 1;
    task3attempts++;
}
let task3timeend = Date.now();
let task3timetaken = (task3timeend - task3time);
printOut(`The number is  ${task3randnum}`);
printOut(`Number of attempts was ${task3attempts}`);
printOut(`Time taken: ${task3timetaken} ms`);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for(let i = 2; i <= 200; i++){
    let isprime = true;
    let j = i - 1;
    while(!isprime && j > i){
        if(i % j === 0)
            isprime = false;
    }
    j--;
}

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);
