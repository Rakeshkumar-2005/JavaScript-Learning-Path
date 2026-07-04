// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);


// Attribute

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));

//Style
// let div = document.querySelector("div");
// div.style.backgroundColor = "red";
// div.style.backgroundColor = "green";

// div.style.fontSize = "25px";

// div.innerText = "Hello !"


//insert
let newBtn = document.createElement("buttom");
newBtn.innerText = "Click me !";

console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>i am new !</i>"
document.querySelector("body").prepend(newHeading);

// delete
let para = document.querySelector("p");
para.remove();


