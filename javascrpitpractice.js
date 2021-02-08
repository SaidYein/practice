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
// var balance=2000;
// var q=prompt("Enter a money amount to withdraw:")
// console.log(ATM(q))
// var q1=prompt("Do you wanna continue? (Y) or (N)")

// do{
// var q=prompt("Enter a money amount to withdraw:")
// ATM(q);
// var q1=prompt("Do you wanna continue? (Y) or (N)")

// }while(q1=="Y")
// console.log("Thank you for choosing SaidBank :)")
// function ATM(){
//   if(q%5==0){
//     balance =parseInt( balance - q - 0.50);
//     rem = alert("You have withdrawn "+ q +"$ \n Your remaining budget is "+ Number(balance) +"$. \n Transaction fee : 0.50 $ ")
//   }else{
//     rem = alert("please enter amount in times of 5")
//   }
//   return rem
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///EVEN FIBONACCI NUMBERS LESS THAN 1000////30-01-2021

// var arr=[1,1];
// do{
//   arr[1]=arr[0]+arr[1];
//   if(arr[1]%2==0){
//     console.log(arr[1]);
//   }
//   arr[0]=arr[0]+arr[1];
//   if(arr[0]%2==0 && arr[0]<1000){
//     console.log(arr[0]);
//   }
// }while(arr[0]<1000 && arr[1]<1000)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const greet = name => `Hello  ${name} `;
// let result=greet("Said");
// console.log(result);

// let products=[];
// let p=prompt("Enter the number of products")
// let tax=0.2;

// for(let i=0; i<p; i++){
//   products.push(prompt("Enter the price of product no."+ (i+1)))
// }

// const bill = (products, tax) => {
//   let total=0;

//   for(let i=0; i<products.length; i++){
//     total+= products[i] + products[i]*tax;
//   }
//   return total;
// }
// console.log(bill(products, tax));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Keeping Even numbers in Array//
// let arr=[];
// for(i=0; i<10; i++){
//   arr.push(+prompt("add a number to array." +[10-i]+" left."))
// }
// console.log(arr);

// function isEven(num){
//   return num%2===0;
// }

// result=arr.filter(isEven);

// console.log(result);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CALCULATOR - CALLBACK FUNCTIONS/////
// let arr=[
//   add = (a,b) => a + b,
//   subtract = (a,b) => a-b, 
//   multiply = (a,b) => a*b,
//   divide = (a,b) => (a/b).toFixed(1)
//   ]
// let x = prompt("enter a number:");
// let y = prompt("enter the second:");
// let i = prompt("enter an operator:\n 1. (1) add \n 2. (2) subtract\n 3. (3) multiply\n 4. (4) divide");

// calculator = (num1, num2, operation) => console.log(operation(num1, num2));

// calculator(x,y,arr[i-1]);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum. ////

// let num=prompt("How many element do you want to use?");
// let arr=[];
// let sumSq=[];

// for(i=1; i<=num; i++){
//   arr.push(i);
// }

// for(i=0; i<num; i++){
//   sumSq[i]=arr[i]*arr[i];
// }

// function sumOfTheSquares(){
//   return sumSq.reduce((a, b) => a + b, 0);
// }

// function squaresOfTheSum(){
//   let sum = arr.reduce((a, b) => a + b, 0);
//   return sum*sum;
// }

// function difference(a,b){
//   return a()-b();
// }

// console.log(difference(squaresOfTheSum, sumOfTheSquares));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CALL-BACK (Higher Order) FUNCTION - CEMIL HOCA EX.//

// function getNumber(){
//   return num = prompt("Your Number:")
// }

// function yazdır(item){
//   return console.log("Your number is :" + item())
// }

// yazdır(getNumber);

//ANOTHER EXAMPLE:_________________________________

// const getUserName = function (callback){
//   const name=prompt('enter your name');
//   callback(name);
// }

// const greet = function (isim){
//   console.log("Hello "+isim)
// }

// getUserName(greet)


//ARROW FUNCTION HALI_____________________

// const getUserName = function (callback){
//   const name=prompt('enter your name');
//   callback(name);
// }

// getUserName((name) => console.log("hello " + name))

///////////////////////////////////////////////////////

// //HELPER FUNCTION

// function rakam(){
//   let r=prompt("rakam?");
//   yaz(r);
// }

// function yaz(sayı){
//   console.log("toplam: "+ sayı);
// }

// rakam(yaz);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//given numbers in array, sort them from big to small///////////////
// var arr = [];
// var i = 0;
// while( i < 10){
//   let x = prompt("Enter a number");
//     if(x*0==0){
//       arr.push(x);
//       i++;
//     }else{
//      console.log("Not a number")
//     }
// }
// console.log(...arr);
// arr.sort((a,b)=>a-b);
// console.log(arr);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// FINDING HIGHEST PRODUCT OF 2 ADJACENT NUMBERS IN THE STRING ///
let str="7316717653133062491992511967442657474235534919";
let arr=str.split('')
let base = 1;
let k=1;

  for(i=0; i<arr.length-1; i++){
      let x=arr[i]*arr[i+1];
      if(x>base){
        k=i;
        base=x;
      }
  }
  
console.log(`adjacent items with highest product are : ${arr[k]} and ${arr[k+1]}. Their plcaes in the array are ${k} and ${k+1} respectively.`)
