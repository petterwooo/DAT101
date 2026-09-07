"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

const orgMathexp = "2 + 3 * 2 - 4 * 6";
const mathAttemptp1 = "2 + 3 * (2 - 4) * 6";
const mathAnswerp1 = 2 + 3 * (2 - 4) * 6;

printOut(orgMathexp);
printOut(mathAttemptp1);
printOut(mathAnswerp1);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

let millimeters = (25*1000) + (34*10);
let millPrInch = 25.4;
let sumPt2 = millimeters / millPrInch;

printOut(millimeters);
printOut(millPrInch);
printOut(sumPt2.toFixed(2));

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

let days = (3*1440);
let hours = (12*60);
let minutes = (14*1);
let seconds = (45/60);

printOut(days + hours + minutes + seconds);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

const totaldays = (6322.52) / (24*60);
const wholedays = Math.floor(4);

const leftoverdays = totaldays - wholedays;
const totalhours = leftoverdays*24;
const wholehours = Math.floor(9);

const leftoverhours = totalhours-wholehours;
const totalmin = leftoverhours*60;
const wholemin = Math.floor(22)

const leftovermin = totalmin - wholemin;
const totalsec = leftovermin*60;
const wholesec = Math.floor(31);

printOut(totaldays.toFixed(2) + " Total Days");
printOut(wholedays + " Whole Days" );
printOut(totalhours.toFixed(2) + " Total Hours");
printOut(wholehours + " Whole Hours");
printOut(leftoverhours.toFixed(2) + " Remaining Hours");
printOut(totalmin.toFixed(2) + " Total Minutes");
printOut(wholemin + " Whole Minutes");
printOut(totalsec.toFixed(1) + " Total Seconds");
printOut(wholesec + " Whole Seconds");

printOut(wholedays + " days " + wholehours + " hours " + wholemin + " minutes " + " and " + wholesec + " seconds" )

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

const nokrate = 76 / 8.6
const dollarrate = 8.6 / 76

let nok = Math.round(54 * nokrate);
let dollars = Math.round(477 * dollarrate);

printOut(nok + " Kroner")
printOut(dollars + " Dollars")

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

let text = "There is much between heaven and earth that we do not understand."


printOut(text);
printOut(text.length)
printOut(text.charAt(19))
printOut(text.substring(35, 43))
printOut(text.indexOf("earth"))

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

if(5 > 3)
    printOut("5 is greater than 3")
else
    printOut("5 is not greater than 3")

if(7 >= 7)
    printOut("7 is greater than or equal to 7")
else printOut("7 is not greater than or equal to 7")

if ("a" > "b")
    printOut("'a' is greater than 'b'")
else printOut("'a' is not greater than 'b'")

if("1" < "a")
    printOut("'1' is less than 'a'")
else printOut("'1' is not less than 'a'")

if("2500" < "abcd")
    printOut("'2500' is less than 'abcd'")
else printOut("'2500' is not less than 'abcd'")

if("arne" !== "thomas")
    printOut("'arne' is not equal to 'thomas'")
else printOut("'arne' is equal to 'thomas'")

if(2 === 5)
    printOut("2 equals 5")
else printOut("2 does not equal 5")

if("abcd" > "bcd")
    printOut("The statement 'abcd is greater than bcd' is true")
else printOut("The statement 'abcd is greater than bcd' is false")


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

const nr1 = Number("254")

printOut(parseInt(nr1))

const nr2 = Number("57.23")

printOut(parseFloat(nr2))

const nr3 = Number.parseInt("25 kroner")

printOut(parseFloat(nr3))


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

let r = Math.floor(Math.random() * 360) + 1

printOut(r)

printOut (newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

let answer = Math.floor(131 / 7)

printOut(answer + " Weeks")
printOut(131 % 7 + " leftover days")


printOut(newLine);