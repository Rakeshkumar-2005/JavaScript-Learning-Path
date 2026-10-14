function sum(...args){
  return args.reduce((sum,el)=>sum+el);// it will not work
}

console.log(sum(1,2,3,4,5,));