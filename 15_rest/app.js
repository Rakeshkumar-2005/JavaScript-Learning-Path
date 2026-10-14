// rest concept 

// function sum(...args){ // argument
//   for(let i=0;i<args;i++){
//       console.log("you gave us:",args[i]);
//   }
// }
// sum(2,3,4,5,7);

// function min(a,b,c,d){
//   console.log(arguments); // argument is bacically is collection
//   console.log(arguments.length);
//   arguments.push(1);// push pop like method will not work here
// }


function sum(...args){
  return args.reduce((sum,el)=>sum+el);// it will not work
}

console.log(sum(1,2,3,4,5,));


function min(msg,...args){
  console.log(msg);
  return args.reduce((min,el) => {
    if(min>el){
      return el;
    }
    else{
      return min;
    }
  });
}