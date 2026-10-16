// let btn = document.querySelector("button");

// btn.addEventListener("click",function(event){
//   console.log(event)
//   console.log("button was clicked")
// });

// btn.addEventListener("dblclick",function(event){
//   console.log(event)
//   console.log("button was clicked")
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//   console.log(event.key);
//   console.log(event.code);
//   console.log("key was presses");
// });

// inp.addEventListener("keydown",function(){
//   console.log("key was presses")
// });

// inp.addEventListener("keyup",function(){
//   console.log("key was release")
// });


let inp = document.querySelector("input");
inp.addEventListener("keydown",function(event){
  console.log("code = ",event.code); // Arrowup, Arrowdown, Arrowleft, Arrowright
  if(event.code=="ArrowUp"){
    console.log("character moves forward")
  }
  else if(event.code=="ArrowDown"){
    console.log("character moves Downward")
  }
  else if(event.code=="ArrowLeft"){
    console.log("character moves leftward")
  }
  else if(event.code=="ArrowRight"){
    console.log("character moves rightward")
  };
});
