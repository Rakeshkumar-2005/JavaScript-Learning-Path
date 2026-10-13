const arrayAverage = ((arr) =>{
  let total = 0;
  for(let i=0;i<arr.length;i++){
    total+=arr[i];
  }
  return total/arr.length;
});

let arr = [2,3,4,4,5,8];
console.log(arrayAverage(arr));