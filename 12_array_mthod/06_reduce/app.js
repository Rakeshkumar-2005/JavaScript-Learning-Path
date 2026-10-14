// reduce function 
// arr.reduce((accumulator,Element ) => (accumulator+Element))

// [1,2,3,4].reduce((res,el) => (res+el));

let nums =[1,2,3,4];
let finalVal = nums.reduce((res,el) =>{
  console.log(res) ;
  return res+el});
console.log(finalVal);