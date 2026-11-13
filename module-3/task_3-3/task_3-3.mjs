"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/



printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

function calculateCircle(aRadius){
    const diameter = aRadius * 2;
    const circumference = diameter * Math.PI;
    const area = Math.PI * Math.pow(aRadius, 2);
    printOut(`Diam.:${diameter.toFixed(1)}, circum.:${circumference.toFixed(1)}, area.:${area.toFixed(1)}`);
}

calculateCircle(5)

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

function calcRectangle(aWidth, aHeight){
    const circumferenceRec = 2 * (aHeight + aWidth);
    const areaRec = aHeight * aWidth
    
    printOut(`Circumference: ${circumferenceRec}, Area: ${areaRec}`);
}

calcRectangle(2, 4);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

const tempType = {
    Fahrenheit: 1, Celsius: 2, Kelvin: 3
}

function convertTemp(aTemp, aType){
  let Fahrenheit = 0;
  let Celsius = 0;
  let Kelvin = 0;
  switch(aType){
    case tempType.Fahrenheit:
        Fahrenheit = aTemp;
        Celsius = (Fahrenheit - 32) * 5/9;
        Kelvin = (Fahrenheit - 32) * 5/9 + 273.15;
        break;
    case tempType.Celsius:
        Celsius = aTemp;
        Fahrenheit = (Celsius * 9/5) + 32;
        Kelvin = Celsius + 273.15;
        break;
    case tempType.Kelvin:
        Kelvin = aTemp;
        Fahrenheit = (Kelvin - 273.15) * 9/5 + 32;
        Celsius = Kelvin - 273.15;
        break;
  }  
  
  printOut(`${Celsius.toFixed(0)} Celsius, ${Fahrenheit.toFixed(0)} Fahrenheit, ${Kelvin.toFixed(0)} Kelvin`)
}

convertTemp(38, tempType.Celsius)
convertTemp(-40, tempType.Fahrenheit)

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

function calcVAT(aAmount, aVATGroup){
  let vat = 0;
  const VATGroup = aVATGroup.toLowerCase();
  switch(VATGroup){
   case "normal":
    vat = 25;
    break;
   case "food":
    vat = 15;
    break;
   case "hotel":
   case "transport":
   case "cinema":
    vat = 10;
    break;
   default:
    printOut("Unknown VAT group!");
    return;
  }
if (vat != 0){
  const vatAmount = vat * aAmount / 100;
  const netAmount = aAmount + vatAmount;

  printOut(`Amount: ${aAmount}, VAT: ${vatAmount}, Net: ${netAmount}`);
 }
}


calcVAT(100, "Normal");
calcVAT(90, "Cinema");
calcVAT(50, "Shampo")

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

function calcMotion(aSpeed, aDistance, aTime){
    if(aSpeed != undefined && aDistance != undefined && aTime == undefined)
        return aDistance / aSpeed;
    else if(aSpeed != undefined && aDistance == undefined && aTime != undefined)
        return aSpeed * aTime;
    else if(aSpeed == undefined && aDistance != undefined && aTime != undefined)
        return aDistance / aTime
    else{
        return NaN;
    }
}

let speed = calcMotion(undefined, 36, 12)
printOut(`Speed: ${speed}`);

let distance = calcMotion(3, undefined, 12);
printOut(`Distance: ${distance}`);

let time = calcMotion(3, 36, undefined);
printOut(`Time: ${time}`);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

function justifyText(aText, aMaxSize, aChar, aBefore){
    let length = aText.length;
    while(aText.length < aMaxSize){
        if(aBefore){
            aText = aChar + aText;
        }else{
            aText = aText + aChar;
        }
        length++;
    }
    return aText;
}

let newText = justifyText("Hello World!", 100, "&nbsp;", true);
printOut(newText);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

// let counter = 1;


// for (let round = 1; round <= 200; round++){
   // const left = calcLeftSide(); 
   //const right = calcRightSide();
   //if(left != right){
    //printOut(`Left side is not equal to right side for round ${round}`);
    //break;
   //}
//}

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

function factorial(aValue){
  let sum = 1;
    if(aValue > 1){
     sum = aValue * factorial(aValue - 1);
    }
    return sum;
}


const result = factorial(6);
printOut(`Factorial of 6 = ${result}`);
printOut(6 * 5 * 4 * 3 * 2 * 1);

printOut(newLine);
