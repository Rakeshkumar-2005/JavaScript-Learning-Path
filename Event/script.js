let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//   console.log("btn1 was clicked");
//   let a = 25;
//   a++;
//   console.log(a);//26
// };



//event object
// btn1.onclick = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);

// };


// event listeners
btn1.addEventListener ("click",(evt) =>{
  console.log("button1 was clicked");
  console.log(evt.type);
  console.log(evt);
});

btn1.addEventListener ("click",(evt) =>{
  console.log("event handler 2");
  
});



let div = document.querySelector("div");
div.onmouseover = () => {
  console.log("you are inside div");
};