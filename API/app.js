const url = "https://dog.ceo/api/breeds/image/random";

let factPara = document.querySelector("#fact");

let btn = document.querySelector("#btn");

//using Async Wait 

// const getFact = async () =>{
//   console.log("getting data....");
//   let response = await fetch(url);
// console.log(response); //Json Format
// let data = await response.json();
// // console.log(data);
// factPara.innerText = data.text;
// };


// usinng promise 
function getFact(){
  fetch(url).then((respone) =>{
    return respone.json();
  }).then((data) =>{
    console.log(data);
    factPara.innerText = data.text;
  })
}
btn.addEventListener("click",getFact);