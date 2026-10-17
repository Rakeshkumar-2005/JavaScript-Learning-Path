// Async Function 
//01. async keyWord

// async function greet() {
//   return "hello world" // return a promise;
// }

// greet()
// .then((result)=>{
//   console.log("promise was successful");
//   console.log("result was: ",result)
// })
// .catch((error)=>{
//   console.log("promise was rejected :" , error);
// })


// arror  fuunction
// let demo = async ()=>{
//   return 5;
// };



// function getNum(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       let num  = Math.floor(Math.random()*10)+1;
//       console.log(num);
//       resolve();
//     },1000);
//   });
// }

// async function demo(){
//   await getNum();
//   await getNum();
//   await getNum();
//   await getNum();
// }


let h1 = document.querySelector("h1");

function colorChange(color,delay){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let num = Math.floor(Math.random()*5)+1;
      if(num>3){
        reject("promise rejecetd")
      }
    h1.style.color = color;
    console.log(`color changed to ${color}!`);
    resolve("color change!")
    },delay);
  });
};

async function demo(){
  try{
    await colorChange("violet",1000);
  await colorChange("indigo",1000);
  await colorChange("green",1000);
  await colorChange("yellow",1000);
  await colorChange("orange",1000);
  }catch(err) {
    console.log("error caught");
    console.log(err);
  }
  

  let a=5;
  console.log(a);
  console.log("new number=",a+4);
}