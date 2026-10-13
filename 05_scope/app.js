// 1.function scope 
// let sum = 45;// global scope

// function calSum(a,b){
  //let sum = a+b;  // function scope
//   console.log(sum);
// }

// calSum(1,2);
// console.log(sum); // not accessible from ouside

// console.log(sum)



// 2.block scope 

// {
//   let  a = 25;

// }
// console.log(a);

// for(let i = 1;i<=5;i++){
//   console.log(i); // block scope
// }
// console.log(i);

// let age =25;
// if(age>=18){
//   let str = "adult"
// }

// console.log(str);

// lexical scope
function outerFunc(){
  let x =5;
  let y = 6;
  function innerFunc(){
    let a =10;
    console.log(x);
    console.log(y);
  }

  innerFunc();
  console.log(a);// it will not possible
}
// hoisting concept le karn hota hai