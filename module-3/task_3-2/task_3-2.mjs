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

let primes = "";

for(let i = 2; i <= 200; i++) {
    let isprime = true;
    let j = 2;
    while(isprime && j < i) {
        if(i % j === 0){
            isprime = false;
    }
    j++;
 }
 if(isprime === true){
primes += " " + i;
 }

}

printOut(primes);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let rowText = "";

for(let row = 1; row <= 7; row++){
    for(let column = 1; column <= 9; column++){
        rowText += " K"+column + "R" + row; 
    }
    rowText += newLine;
}

printOut(rowText);


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const grade1 = Math.round((Math.floor(Math.random * 236) + 1)  / 236 * 100);
const grade2 = Math.round((Math.floor(Math.random * 236) + 1)  / 236 * 100);
const grade3 = Math.round((Math.floor(Math.random * 236) + 1)  / 236 * 100);
const grade4 = Math.round((Math.floor(Math.random * 236) + 1)  / 236 * 100);
const grade5 = Math.round((Math.floor(Math.random * 236) + 1)  / 236 * 100);
const grade6 = Math.round((Math.floor(Math.random * 236) + 1)  / 236 * 100);

if(grade1 <= 40){
    printOut(`Grade 1: F - ${grade1}`);
} else if(grade1 <= 52){
    printOut(`Grade 1: E - ${grade1}`);
} else if(grade1 <= 64){
    printOut(`Grade 1: D - ${grade1}`);
} else if(grade1 <= 76){
    printOut(`Grade 1: C - ${grade1}`);
} else if(grade1 <= 88){
    printOut(`Grade 1: B - ${grade1}`);
} else{
    printOut(`Grade 1: A - ${grade1}`);
}

if(grade2 <= 40){
    printOut(`Grade 2: F - ${grade2}`);
} else if(grade2 <= 52){
    printOut(`Grade 2: E - ${grade2}`);
} else if(grade2 <= 64){
    printOut(`Grade 2: D - ${grade2}`);
} else if(grade2 <= 76){
    printOut(`Grade 2: C - ${grade2}`);
} else if(grade2 <= 88){
    printOut(`Grade 2: B - ${grade2}`);
} else{
    printOut(`Grade 2: A - ${grade2}`);
}

if(grade3 <= 40){
    printOut(`Grade 3: F - ${grade3}`);
} else if(grade1 <= 52){
    printOut(`Grade 3: E - ${grade3}`);
} else if(grade1 <= 64){
    printOut(`Grade 3: D - ${grade3}`);
} else if(grade1 <= 76){
    printOut(`Grade 3: C - ${grade3}`);
} else if(grade1 <= 88){
    printOut(`Grade 3: B - ${grade3}`);
} else{
    printOut(`Grade 3: A - ${grade3}`);
}

if(grade4 <= 40){
    printOut(`Grade 4: F - ${grade4}`);
} else if(grade4 <= 52){
    printOut(`Grade 4: E - ${grade4}`);
} else if(grade4 <= 64){
    printOut(`Grade 4: D - ${grade4}`);
} else if(grade4 <= 76){
    printOut(`Grade 4: C - ${grade4}`);
} else if(grade4 <= 88){
    printOut(`Grade 4: B - ${grade4}`);
} else{
    printOut(`Grade 4: A - ${grade4}`);
}
    
if(grade5 <= 40){
    printOut(`Grade 5: F - ${grade5}`);
} else if(grade5 <= 52){
    printOut(`Grade 5: E - ${grade5}`);
} else if(grade5 <= 64){
    printOut(`Grade 5: D - ${grade5}`);
} else if(grade5 <= 76){
    printOut(`Grade 5: C - ${grade5}`);
} else if(grade5 <= 88){
    printOut(`Grade 5: B - ${grade5}`);
} else{
    printOut(`Grade 5: A - ${grade5}`);
}

if(grade6 <= 40){
    printOut(`Grade 6: F - ${grade6}`);
} else if(grade6 <= 52){
    printOut(`Grade 6: E - ${grade6}`);
} else if(grade6 <= 64){
    printOut(`Grade 6: D - ${grade6}`);
} else if(grade6 <= 76){
    printOut(`Grade 6: C - ${grade6}`);
} else if(grade6 <= 88){
    printOut(`Grade 6: B - ${grade6}`);
} else{
    printOut(`Grade 6: A - ${grade6}`);
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let throwCount = 0;

let Straight = false; 
let threePair = false;
let Tower = false;
let Yahtzee = false; 

do{
const dice1 = Math.floor(Math.random() * 6) + 1;
const dice2 = Math.floor(Math.random() * 6) + 1;
const dice3 = Math.floor(Math.random() * 6) + 1;
const dice4 = Math.floor(Math.random() * 6) + 1;
const dice5 = Math.floor(Math.random() * 6) + 1;
const dice6 = Math.floor(Math.random() * 6) + 1;

const diceThrow = `${dice1}${dice2}${dice3}${dice4}${dice5}${dice6}`;
throwCount++;

let count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0, count6 = 0;
for(let i = 0; i < 6; i++){
    const character = diceThrow.charAt(i);
    if(character === "1"){
        count1++;
    }else if(character === "2"){
        count2++;
    }else if(character === "3"){
        count3++;
    }else if(character === "4"){
        count4++;
    }else if(character === "5"){
        count5++;
    }else if(character === "6"){
        count6++;
    }
}
const diceCount = `${count1}${count2}${count3}${count4}${count5}${count6}`;

let o1 = 0, o2 = 0, o3 = 0, o4 = 0, o5 = 0, o6 = 0;
for(let i = 0; i < 6; i++){
    const character = diceThrow.charAt(i);
    if(character === "1"){
        o1++;
    }else if(character === "2"){
        o2++;
    }else if(character === "3"){
        o3++;
    }else if(character === "4"){
        o4++;
    }else if(character === "5"){
        o5++;
    }else if(character === "6"){
        o6++;
    }
}
const Occurency = `${o1}${o2}${o3}${o4}${o5}${o6}`;

if(Occurency === "600000"){
    if(Straight === false){
        Straight = true;
        printOut ("--Straight--");
        printOut({diceThrow, throwCount});
        printOut("--------");
    }
}else if(Occurency === "030000"){
    if(threePair === false){
        threePair = true;
        printOut("--Three Pair--");
        printOut({diceThrow, throwCount});
        printOut("--------");
    }
}else if(Occurency === "010100"){
    if(Tower === false){
        Tower = true;
        printOut("--Tower--");
        printOut({diceThrow, throwCount});
        printOut("--------");
    }
}else if(Occurency === "000001"){
    if(Yahtzee === false){
        Yahtzee = true;
        printOut("--Yahtzee--");
        printOut({diceThrow, throwCount});
        printOut("--------");
    }
}


}while (Straight === false || threePair === false || Tower === false || Yahtzee === false);


printOut(newLine);
