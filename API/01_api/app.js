
// let jsonRes = '{"fact":"The cat appears to be the only domestic companion animal not mentioned in the Bible.","length":84}';

// console.log(JSON.parse(jsonRes));

// let student = {
//   name:"Rakesh kumar",
//   marks:90
// };


// our first api
let url  = "https://catfact.ninja/fact";

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

async function getFects() {
  try{let res = await fetch(url);
  let data1 = await res.json();
  console.log(data1.fact)

  let res2 = await fetch(url);
  let data2 = await res2.json();
  console.log(data2.fact)
}catch(e){
  console.log("error :",e)
}

}