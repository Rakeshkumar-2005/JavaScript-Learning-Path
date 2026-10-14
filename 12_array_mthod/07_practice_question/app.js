// 01 check multiple of  10
// let nums = [10,40,50,10];
// let ans = nums.every((el)=>(el%10==0));
// console.log(ans);

//02. find min in array

let nums = [10,40,50,10];

function getMin(nums){
  let min = nums.reduce((min,el)=>{
  if(el<min){
    return el;
  }
  else{
    return min;
  }
});
return min;
}
console.log(getMin(nums));