// FINDS THE GREATEST ONE AMONG 3 NUMBERS ENTERED BY USER////////////

// var a = prompt("1. sayı") ;
// var b = prompt("2. sayı") ;
// var c = prompt("3. sayı") ;

// if(a>b && a>c){

//     if(b>c){
//       alert(`${a} is the greatest and ${c} is the smallest`);
//     }else{
//       alert(`${a} is the greatest and ${b} is the smallest`);
//     }

// }else if(b>a && b>c) {
//     if(a>c){
//       alert(`${b} is the greatest and ${c} is the smallest`);
//     }else{
//       alert(`${b} is the greatest and ${a} is the smallest`);
//     }
// }else{
//   if(a>b){
//     alert(`${c} is the greatest and ${b} is the smallest`);
//   }else{
//     alert(`${c} is the greatest and ${a} is the smallest`);
//   }
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MAKES 10% DISCOUNT FOR OVER 5000 PURCHASES, AFTER QUANTITY AND THE UNIT PRICE ENTERED///

// var quantity = prompt("Please enter the quantity of the product sold");
// var price = prompt("Please enter the unit price");
// var revenue = quantity*price;
// if(revenue>5000){
//   revenue = revenue - (revenue*0.1);
//   alert(`Excellent, you won %10 discount. Total cost is: `+ revenue + "$");
// }else{
//   alert("Total cost is: " + revenue + "$");
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ODD & EVEN NUMBERS //////////////

// var x = prompt("Enter a number:");  
//   x %= 2;
// if(x==1){
//   alert("ODD")
// }else{
//   alert("EVEN")
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//GRADING FOR 3 EXAMS AVERAGE - Exams are entered by user/////////

// let a = prompt("Please enter first exam score");
// let b = prompt("Please enter second exam score");
// let c = prompt("Please enter third exam score");
// let g = (Number(a)+Number(b)+Number(c))/3; 

// if( g >= 75){
//   prompt("Congratulations!! You have passed. Your grade is: " + Math.round(g));
// }else if(g >= 45){
//   prompt("Insufficient grade! You will be assigned a re-test. Your grade is: " + Math.round(g));
// }else{
//   prompt("Sorry!! You have failed. Your grade is: " + Math.round(g));
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ROCK & PAPER & SCISSORS ////////////////////////////////////////

// alert('Welcome to the Rock-Scissors-Paper game!');
// var str = prompt("Please select your choice; Rock , Paper, Scissors");
// if(str=="Rock" || str=="Scissors" || str=="Paper"){
//     var compt = "Rock";
//   if(str == compt){
//     alert("It's a draw!");
//   }else if( str=="Scissors" ){
//     alert("You lost!");
//   }else{
//     alert("You won!");
// }
// }else{
//   alert("You have entered invalid option");
// }


// alert('Welcome to the Rock-Scissors-Paper game!');
// var str = prompt("Please select your choice; Rock , Paper, Scissors");
// if(str=="Rock" || str=="Scissors" || str=="Paper"){

//     var compt = "Rock";

//   if(compt=="Rock" && str == "Paper"){
//     alert("You Won");
//   }else if(compt=="Rock" && str == "Scissors"){
//     alert("You Lost");
//   }else if(compt=="Paper" && str == "Rock"){
//     alert("You Won");
//   }else if(compt=="Paper" && str == "Scissors"){
//     alert("You Lost");
//   }else if(compt=="Scissors" && str == "Paper"){
//     alert("You Won");
//   }else if(compt=="Scissors" && str == "Rock"){
//     alert("You Lost");
//   }else {
//     alert("It's a Tie")
//   }
  
// }else{
//   alert("You have entered invalid option");
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DRIVING LICENCE PORTAL////////////////

// alert("Welcome to Licence Portal");
// var age = prompt("Enter Your Age:");
// if(age<16){
//   alert("Not eligible to drive");
// }else if(16 <= age && age <=18){
//   var type = prompt("Enter your licence type:  \n (P) for Provisional Licence \n (N) for None")
//   if(type=="P"){
//     var adult = prompt("Are you with and adult with licence? \n Yes \n No");
//       if(adult == "Yes"){
//         alert("You are eligible to drive");
//       }else{
//         alert("Not eligible to drive");
//       }
//     }else{
//       alert("Not eligible to drive");
//     }
// }else{
//   var licence = prompt("Do you have a driving licence: (Y) or (N)")
//     if(licence=="Y"){
//       alert("You are eligible to drive");
//     }else{
//       alert("Not eligible to drive");
//     }
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//NUMBERS 0 TO 15 ARE DEFINED WHETHER THEY ARE EVEN OR ODD.////

// var i;
// console.log("0 and 1 are neither Even nor Odd")
// for(i=2; i<=15; i++){
//   if((i % 2)==1){
//    console.log(`${i} is Odd`)
//   }else{
//     console.log(`${i} is Even`)
//   }
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FIVE SCORES ENTERED --> BELL- CURVE ///////

// var g1 = prompt (`Enter the 1st score`);
// var g2 = prompt (`Enter the 2nd score`);
// var g3 = prompt (`Enter the 3rd score`);
// var g4 = prompt (`Enter the 4th score`);
// var g5 = prompt (`Enter the YOUR score`);
// const f=45;

// var c = (Number(g1)+Number(g2)+Number(g3)+Number(g4)+Number(g5))/5;


// if(g1>g2 && g1>g3 && g1>g4 && g1>g5){
//   high=g1;
// }else if(g2>g1 && g2>g3 && g2>g4 && g2>g5){
//   high=g2;
// }else if(g3>g2 && g3>g1 && g3>g4 && g3>g5){
//   high=g3;
// }else if(g4>g2 && g4>g3 && g4>g1 && g4>g5){
//   high=g4;
// }else{
//   high=g5;
// }

// var inc = (high-45)/4;

// if(g5>c+2*inc){
//   alert("Your grade is A")
// }else if( g5>c+inc){
//   alert("Your grade is B")
// }else if(g5==c){
//   alert("Your grade is C")
// }else if(g5>45){
//   alert("Your grade is D")
// }else{
//   alert("Your grade is F")
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MULTIPLE OF 3=FIZZ, 5=BUZZ, 3&5=FIZZBUZZ//////

// for(var i=0; i<=100; i++){
//   if(i%15==0){
//     console.log("FIZZBUZZ");
//   }else if(i%5==0){
//     console.log("BUZZ");
//   }else if(i%3==0){
//     console.log("FIZZ");
//   }else{
//     console.log(i);
//   }
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ATM ////////////////////////////
var balance=2000;
var q=prompt("Enter a money amount to withdraw:")
console.log(ATM(q))
var q1=prompt("Do you wanna continue? (Y) or (N)")

do{
var q=prompt("Enter a money amount to withdraw:")
ATM(q);
var q1=prompt("Do you wanna continue? (Y) or (N)")

}while(q1=="Y")
console.log("Thank you for choosing SaidBank :)")
function ATM(){
  if(q%5==0){
    balance =parseInt( balance - q - 0.50);
    rem = alert("You have withdrawn "+ q +"$ \n Your remaining budget is "+ Number(balance) +"$. \n Transaction fee : 0.50 $ ")
  }else{
    rem = alert("please enter amount in times of 5")
  }
  return rem
}