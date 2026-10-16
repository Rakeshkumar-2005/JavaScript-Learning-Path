// 01. call stack

// function hello(){
//   console.log("inside hello function");
//   console.log("hello");
// }

// hello() // this is called function call

// function demo(){
//   console.log("calling demo function");
//   hello();
// }

// console.log("calling demo function");
// demo();
// console.log("done , bye!");






// 02.visualizing the call stack // 03. breakpoint

// function one(){
//   return 1;
// }
// function two(){
//   return one()+one();
// }

// function three(){
//   let ans = one()+two();
//   console.log(ans);
// }
// three();




//04 js is single threaded : at a time only one thing will execute

// synchrous nature

// let a=10;
// console.log(a);
// let b =25;
// console.log(b);
// console.log(a+b);


// asynchrous nature

// setTimeout( ()=>{
//   console.log("apna college");
// },2000);

// setTimeout( ()=>{
//   console.log("Hello world");
// },2000);

// console.log("Hello...");






// 05. callback hell
// callback nesting -> callback hell

// let h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//   setTimeout(()=>{
//     h1.style.color = color;
//     if(nextColorChange) nextColorChange();
//   },delay);
// };
// changeColor("red",1000,()=>{
//   changeColor("orange",1000,()=>{
//     changeColor("green",1000,()=>{
//       changeColor("yellow",1000,()=>{
//         changeColor("blue",1000);
//       });
//     });
//   });
// });




// changeColor("green",2000);
// changeColor("orange",3000);

// setTimeout(()=>{
//   h1.style.color = "red";
// },1000);

// setTimeout(()=>{
//   h1.style.color = "orange";
// },2000);

// setTimeout(()=>{
//   h1.style.color = "green";
// },3000);



// 06 promises
