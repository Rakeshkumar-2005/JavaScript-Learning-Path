// let imgObj = document.getElementById("mainImg");



// let classObj = document.getElementsByClassName("oldImg");

//printing old images 
// for(let i=0;i<classObj.length;i++){
//   console.dir(classObj[i].src);
// }

// let tagObj = document.getElementsByTagName("p");






//2.quary selector

// console.dir(document.querySelector('h1')); // select first p element
// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("div a"))
// console.dir(document.querySelectorAll("div a"))


//3. using properties and method

//01.innerText;
// 02.innerHTML;
//03.innerContent

// let para  = document.querySelector('p');
// para.innerText = "abc";
// para.innerHTML = "hi ! i am <b> rakesh kumar</b>";



// 4.Manipulating Attribute

// let img = document.querySelector('img');
// img.getAttribute('id');
// img.setAttribute('id','spidermanimg');

// 5. Manupulating Style

// 01.style property
// let heading = document.querySelector('h1');
// heading.style.color = "red";

// let link = document.querySelectorAll(".box a");
// for(let i=0;i<link.length;i++){
//   link[i].Style.color="yellow";
// }
// for(links of link){
//   links.style.color = "Yellow";
// }

// 02.using classList
// let heading = document.querySelector('h1');
// heading.classList.add('green');
// heading.classList.remove('green');

// let box = document.querySelector(".box");
// box.classList.add("yellowbg");// it will not apply beaccuse it present below box class





// 06.Navigation 

// let h4 = document.querySelector('h4');
// h4.parentElement;

// let img = document.querySelector('img');
// img.previousElementSibling;

// img.previousElementSibling.style.color = "green";


// 07. Adding Elememt

// let newp = document.createElement('p');
// newp.innerText = "hi i am new p";
// let body = document.querySelector('body');
// body.appendChild(newp);

// newp.append("this is new text");

// let btn  = document.querySelector('button');
// btn.innerHTML = "new buttom";
// let p = document.querySelector('p');
// p.insertAdjacentElement('beforebegin',btn);

//09 Removing Elements

