// 02. map method

let num = [1,2,3,4];
// let double = num.map(function(el){
//   return el*2;
// });

// let double = num.map((el)=>{
//   return el*2;
// });

let arr = [
  {
    name:"rakesh",
    marks:90,
  },
  {
    name:"Rajan",
    marks:89,
  },
  {
    name:"dipu",
    marks:90,
  }
];

let gpa = arr.map((el)=>{
  return el.marks/10;
})