// reduce function syntax

// arr.reduce((accumulator,Element ) => (accumulator+Element))

// [1,2,3,4].reduce((res,el) => (res+el));

// let nums =[1,2,3,4];
// let finalVal = nums.reduce((res,el) =>{
//   console.log(res) ;
//   return res+el});
// console.log(finalVal);

// finding max in an array

let nums = [2,3,4,5,3,4,7,8,1,2];
// let max = -1;
// for(let i=0;i<nums.length;i++){
//   if(max>nums[i]){
//     max=nums[i];
//   }
// }
// console.log(max);


let result = nums.reduce((max , el) =>{
  if(el>max){
    return el;
  }
  else{
    return max;
  }
});
console.log(result)