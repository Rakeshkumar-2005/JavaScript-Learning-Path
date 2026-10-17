
// let jsonRes = '{"fact":"The cat appears to be the only domestic companion animal not mentioned in the Bible.","length":84}';

// console.log(JSON.parse(jsonRes));

// let student = {
//   name:"Rakesh kumar",
//   marks:90
// };


// our first api
// let url  = "https://catfact.ninja/fact";

// using promise 
// fetch(url)
// .then((Response)=>{
//   return Response.json();// make data readable 
// })
// .then((data)=>{
//   console.log("data1 = ",data.fact);
//   return fetch(url);
// })
// .then((Response)=>{
//   return Response.json()
// })
// .then((data2)=>{
//   console.log("data2 =",data2.fact)
// })
// .catch((err)=>{
//   console.log("ERROR - ",err);
// });

// console.log("i am happy");



// using async await

// async function getFects() {
//   try{let res = await fetch(url);
//   let data1 = await res.json();
//   console.log(data1.fact)

//   let res2 = await fetch(url);
//   let data2 = await res2.json();
//   console.log(data2.fact)
// }catch(e){
//   console.log("error :",e)
// }

// }

// using axios 

// let btn = document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//   let fact = await getFects();
    // console.log(fact);
//     let p = document.querySelector("#output");
//     p.innerText = fact;
// })


// async function getFects() {
//   try{let res = await axios.get(url);
//     return (res.data.fact);
//   }catch(e){
//   console.log("error :",e);
//   return "No fact found";
//   }
// }


// let url2 = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//   let link = await getImage();
  // console.log(link)
//   let img = document.querySelector("#result");
//   img.setAttribute("src",link);
//   console.log(link);
// })


// async function getImage() {
//   try{let res = await axios.get(url2);
//     return res.data.message ;
//   }catch(e){
//   console.log("error :",e);
//   return "No image found";
//   }
// };

// const url = "https://icanhazdadjoke.com/";
// async function  getJokes(){
//   try{
//     const config = {headers:{Accept:"application/json"}};
//     let res = await axios.get(url,config);
//     console.log(res.data);
//   }
//   catch(err){
//     console.log(err);
//   }
// }