// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function(){
//   console.log("buttom was click");
//   alert("buttom wes click");
// };



let btns = document.querySelectorAll("button");
for(btn of btns){
  btn.onclick=sayHello; // () is not allowed here
  btn.onmouseenter = function (){
    console.log("you entered a buttom")
  }
  // console.dir(btn);
  // btn.addEventListener("click",sayHello);
  // btn.addEventListener("click",sayName);
  // btn.addEventListener("dblclick",function(){
  //   console.log("you double clicked me");
  // });
}

// let btns = document.querySelectorAll("button");

// Add 'let' here ↓
// for (let btn of btns) {
//     btn.addEventListener("dblclick", function() {
//         console.log("you double clicked me");
//     });
// }


function sayHello(){
  alert("hello");
};

function  sayName(){
  alert("apna College")
}
