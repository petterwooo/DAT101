"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/

let wakeuptime = 8;
let bustime = 7;

if(wakeuptime <= bustime){
    printOut("Congrats, you caught the bus.");
}else if(wakeuptime == 8){
    printOut("Bummer, the bus is gone. You can still catch the train however.");
}else if(wakeuptime >= 8){
    printOut("Sucks to suck, take the car.");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const part4Number = 0;
if (part4Number >= 0){
    printOut("The number is positive.")
}else if(part4Number < 0){
    printOut("The number is negative.")
}else{
    printOut("The number is zero.")
}

printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const imageMinSize = 4;
const imageMaxSize = 6;
const imageUserSize = Math.floor(Math.random() * 8) + 1;

printOut(`Image user size = ${imageUserSize}`);
if(imageUserSize >= imageMinSize)
  if(imageUserSize <= imageMaxSize) 
    printOut("Thank You!")
  else printOut("Image is too big.");
else
    printOut("Image is too small.");

printOut(newLine);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

if(monthName.includes("r") ){
    printOut("You must take vitamin D.");
}else { printOut ("you do not need vitamin D.");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

switch(monthName){
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        printOut("31 days in the month")
        break;
    case "February":
        printOut("28 days in the month")
        break;
    default:
        printOut("30 days in the month")

}

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if(monthName === "March" || monthName === "May"){
    printOut("The gallery is closed.");
}else if(monthName === "April"){
    printOut("The gallery is closed, but you are welcome to visit our temporary premises next door!")
}
else{
    printOut("Welcome to our gallery!")
}

printOut(newLine);
