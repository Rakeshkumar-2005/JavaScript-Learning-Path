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
function sum(a,b){
  console.log("hello");
  console.log("hello");
  return a+b;// afteer return statement nothing will execute 
  console.log("hello1");
}
// let s = sum(3,4);
// console.log(sum(3,4))
// sum(sum(1,2),3);//if  we add three number
// console.log(sum(1,2))

function isadult(){
  if(age>=18){
    return("Adult");
  }
  else{
    return("not Adult");
  }
  console.log("bye bye..")
}