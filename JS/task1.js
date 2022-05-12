"use strict"
//length
let str = "Salam";
console.log(str.length);
//slice
let strSlice = "Baku,Istanbul";
console.log(strSlice.slice(5));
//substring
let strSubstring = "Azerbaijan,Turkey";
console.log(strSubstring.substring(5, 0));
//replace
let strReplace = "Welcome to azerbaijan";
console.log(strReplace.replace("azerbaijan", "Azerbaijan"));
//toUpperCase
let strUppercase = "salam";
console.log(strUppercase.toUpperCase);
//toLowerCase
let strLowercase = "SALAM";
console.log(strLowercase.toLowerCase);
//concat
let strConcat1 = "Salam";
let strConcat2 = "Aleykum";
console.log(strConcat1.concat(" ", strConcat2));
//trim
let strTrim = "      Hello World!      ";
console.log(strTrim.trim());
//padStart
let strpadStart = "A";
console.log(strpadStart.padStart(4, "b"));
//padEnd
let strpadEnd = "B";
console.log(strpadEnd.padEnd(4, "a"));
//charAt
let strcharAt = "Class";
console.log(strcharAt.charAt(0));
//charCodeAt
let strcharCodeAt = "Mamed";
console.log(strcharCodeAt.charCodeAt(3));
//split
let strSplit = "Sa,lam";
console.log(strSplit.split(","));