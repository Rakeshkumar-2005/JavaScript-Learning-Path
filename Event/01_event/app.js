// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function(){
//   console.log("buttom was click");
//   alert("buttom wes click");
// };



// let btns = document.querySelectorAll("button");
// for(btn of btns){
//   btn.onclick=sayHello; // () is not allowed here
//   btn.onmouseenter = function (){
//     console.log("you entered a buttom")
//   }
  // console.dir(btn);
  // btn.addEventListener("click",sayHello);
  // btn.addEventListener("click",sayName);
  // btn.addEventListener("dblclick",function(){
  //   console.log("you double clicked me");
  // });
// }

// let btns = document.querySelectorAll("button");

// Add 'let' here ↓
// for (let btn of btns) {
//     btn.addEventListener("dblclick", function() {
//         console.log("you double clicked me");
//     });
// }


// function sayHello(){
//   alert("hello");
// };

// function  sayName(){
//   alert("apna College")
// }


// let p = document.querySelector("p");
// p.addEventListener("click",function(){
//   console.log("para was clicked")
// })


// let box = document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//   console.log("mouse inside box")
// })


// this in event listner


let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");



// btn.addEventListener("click",function(){
//   console.dir(this.innerText);
//   this.style.backgroundColor="blue";
// });

// h1.addEventListener("click",function(){
//   console.dir(this.innerText);
//   this.style.backgroundColor="blue";
// });

// h3.addEventListener("click",function(){
//   console.dir(this.innerText);
//   this.style.backgroundColor="blue";
// });

// p.addEventListener("click",function(){
//   console.dir(this.innerText);
//   this.style.backgroundColor="blue";
// });

function changeColor(){
  console.dir(this.innerText);
  this.style.backgroundColor="blue";
}


btn.addEventListener("click",changeColor);

h1.addEventListener("click",changeColor);

h3.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);