// Task 1 ********** Sum of all digits of a number **********

// let number = prompt("Enter a number");
// let sum = 0;
// for(let i=0; i<number.length; i++){
//     sum = parseInt(number[i])+sum;
// }
// console.log(sum);


// Task 2 ********** Sum of the range of 2 numbers **********

// let firstNumber = +prompt("Enter first number");
// let secondNumber = +prompt("Enter second number");
// let sum = 0;
// for(let i=firstNumber; i<=secondNumber; i++){
//     sum +=i;
// }
// console.log(sum);


// Task 3 ********** Calculate the average of number given in an array **********

// let number = [2,5,9,12,13]
// let sum = 0;
// let average = "";
// for(let i=0; i<number.length; i++){
//     sum = sum+number[i];
//     average=sum/number.length;
// }
// console.log(average);


// Task 4 ********** Compare string by count of characters **********

// let userInput1 = prompt("Enter first string");
// let userInput2 = prompt("Enter second string");

// if(userInput1.length===userInput2.length){
//     alert("Yes string length are equal");
// }
// else{
//     alert("No string length is not equal");
// }


// Task 5 ********** Swap the string's first and last character **********

let str = prompt("Enter a string");
str = str.charAt(str.length-1)+str.slice(1,-1)+str.charAt(0);
console.log(str);