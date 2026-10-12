// function definition 

// function hello(){
//   console.log("hello");
// }


// function printName(){
//   console.log("Rakesh kumar");
//   console.log("we can write any thing ");
// }
// loop
// function  print1to5(){
//   for(let i=1;i<=5;i++){
//     console.log(i);
//   }
// }

//if else 
// function isadult(){
//   let age = 18;
//   if(age>=18){
//     console.log("Adult");
//   }
//   else{
//     console.log("not Adult");
//   }
// }
// function calling 
// printName();
// hello();
// print1to5();
// isadult();


// function with argument 

// function printInfo(name,age){
//   console.log(name,age)
// }

// printInfo("Rakesh kumar",21);
// printInfo("Rajan kumar",21)
// printInfo("Dipu");// age is undefined
// printInfo(17);// store as a name in function

// function sum(a,b){
//   console.log(a+b);
// }

// sum(1,3);
// sum(9,7);

// return keyword 
// function sum(a,b){
//   console.log("hello");
//   console.log("hello");
//   return a+b;// afteer return statement nothing will execute 
//   console.log("hello1");
// }
// let s = sum(3,4);
// console.log(sum(3,4))
// sum(sum(1,2),3);//if  we add three number
// console.log(sum(1,2))

// function isadult(){
//   if(age>=18){
//     return("Adult");
//   }
//   else{
//     return("not Adult");
//   }
//   console.log("bye bye..")
// }

// function expression 
// let name = "rakesh";

// let sum = function(a,b){
//   return a+b;
// }

// let hello = function(){
//   console.log("hello");
// }

// hello = function(){ //value change
//   console.log("namaste")
// }


// higher order function


// function multipleGreet(func,count){
//   for(let i=1;i<=count;i++){
//     func();
//   }
// }


// let greet = function(){
//   console.log("hello");
// }
// make a function that call greet func multiple time

// multipleGreet(greet,5);
// multipleGreet(function(){console.log("namaste")},20);

//higher order function
// return a function

// function oddEvenTest(request){
//   if(request=="odd"){
//     return function(n){
//       console.log(!(n%2==0));
//     }
//   }
//   else if(request =="even"){
//     return function(n){
//       console.log(n%2==0);
//     }
//   }
//   else {
//     console.log("wrong request");
//   }
// }

// let request = "odd"

// let func = oddEvenTest(request);
// func(4);
