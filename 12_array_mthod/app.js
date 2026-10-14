// 01. forEach 
// example

// let arr = [1,2,3,4,5];

// function print(el){
//   console.log(el);
// }

// arr.forEach(print);

// or

// arr.forEach(function(el){
//   console.log(el);
// });


// arrow function 
// arr.forEach((el) =>{
//   console.log(el);
// });

let arr = [
  {
    name:"rakesh",
    marks:90
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

arr.forEach((student)=>{
  console.log(student.marks);
})