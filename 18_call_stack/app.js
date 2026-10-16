// 01. call stack

// function hello(){
//   console.log("inside hello function");
//   console.log("hello");
// }

// hello() // this is called function call

// function demo(){
//   console.log("calling demo function");
//   hello();
// }

// console.log("calling demo function");
// demo();
// console.log("done , bye!");






// 02.visualizing the call stack // 03. breakpoint

// function one(){
//   return 1;
// }
// function two(){
//   return one()+one();
// }

// function three(){
//   let ans = one()+two();
//   console.log(ans);
// }
// three();




//04 js is single threaded : at a time only one thing will execute

// synchrous nature

// let a=10;
// console.log(a);
// let b =25;
// console.log(b);
// console.log(a+b);


// asynchrous nature

// setTimeout( ()=>{
//   console.log("apna college");
// },2000);

// setTimeout( ()=>{
//   console.log("Hello world");
// },2000);

// console.log("Hello...");






// 05. callback hell
// callback nesting -> callback hell

// let h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//   setTimeout(()=>{
//     h1.style.color = color;
//     if(nextColorChange) nextColorChange();
//   },delay);
// };

// changeColor("red",1000,()=>{
//   changeColor("orange",1000,()=>{
//     changeColor("green",1000,()=>{
//       changeColor("yellow",1000,()=>{
//         changeColor("blue",1000);
//       });
//     });
//   });
// });



// optimise with promise 
// let h1 = document.querySelector("h1");

// function changeColor(color,delay){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     h1.style.color = color;
//     resolve("color change!")
//     },delay);
//   });
// };

// changeColor("red",1000)
//   .then(()=>{
//   console.log("red color was completed");
//   return changeColor("orange",1000);
// })
// .then(()=>{
//   console.log("orange color was printed");
//   return changeColor("green",1000);
// })
// .then(()=>{
//   console.log("green color was completed");
// })
// .catch(()=>{
//   console.log("some promise was rejected");
// });
// changeColor("red",1000,()=>{
//   changeColor("orange",1000,()=>{
//     changeColor("green",1000,()=>{
//       changeColor("yellow",1000,()=>{
//         changeColor("blue",1000);
//       });
//     });
//   });
// });

// changeColor("green",2000);
// changeColor("orange",3000);

// setTimeout(()=>{
//   h1.style.color = "red";
// },1000);

// setTimeout(()=>{
//   h1.style.color = "orange";
// },2000);

// setTimeout(()=>{
//   h1.style.color = "green";
// },3000);



// 06 promises

// function savetoDb(data,success,failure){
//   let internetSpeed = Math.floor(Math.random()*10)+1;

//   if(internetSpeed>4){
//     success();
//   }
//   else{
//     failure()
//   }
// }


// callback hell 
// savetoDb("apna college",()=>{
//   console.log(" success: your data was saved:");
//   savetoDb("Hello World",()=>{
//     console.log(" success2: your data2 was saved:");
//   },
//   ()=>{
//     console.log(" failure2: weak connection,data2 not saved");
//   })
//   },
//   ()=>{
//   console.log(" failure: weak connection,data not saved");
// });



// promises

// function saveTODbPromise(data){
//   return new Promise((resolve , reject)=>{
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//       resolve("success :data was saved");
//     }
//     else{
//       reject("failure : weak connection")
//     }
//   });
// }


// then() & catch()

// let request = saveTODbPromise("apna college");
// console.log(request);
// request
//   .then(()=>{
//     console.log("promise resolved");
//     console.log(request);
//   })
//   .catch(()=>{
//     console.log("promise rejected");
//     console.log(request);
//   });


// improved version
// let request = saveTODbPromise("apna college");

// saveTODbPromise("apna college");
// request
//   .then(()=>{
//     console.log("promise1 / data1 resolved");
//     return saveTODbPromise("hello world")
//   })
//   .then(()=>{
//     console.log("promise2 / data2 resolved");
//     return saveTODbPromise("Rakesh");
//   })
//   .then(()=>{
//     console.log("data3 saved")
//   })
//   .catch(()=>{
//     console.log("some promise rejected");
//   });


// promises are rejected and resolved with some data (valid result or errors);

// let request = saveTODbPromise("apna college");

// saveTODbPromise("apna college");
// request
//   .then((result)=>{
//     console.log("result :",result);
//     console.log("promise1 / data1 resolved");
//     return saveTODbPromise("hello world")
//   })
//   .then((result)=>{
//     console.log("result :",result);
//     console.log("promise2 / data2 resolved");
//     return saveTODbPromise("Rakesh");
//   })
//   .then((result)=>{
//     console.log("result :",result);
//     console.log("data3 saved")
//   })
//   .catch((error)=>{
//     console.log("error:",error);
//     console.log("some promise rejected");
//   });
