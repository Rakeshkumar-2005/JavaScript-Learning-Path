let id = setInterval(()=>{
  console.log("hello World");
},2000);

setTimeout(()=>{
  clearInterval(id);
  console.log("clear interval ran")
},10000);