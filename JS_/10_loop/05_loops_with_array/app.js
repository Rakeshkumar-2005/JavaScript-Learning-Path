//llop whith array

// let fruits = ["mango","apple","banana","litchi","orange"];


// fruits.push("pineapple")
// for(let i=0;i<fruits.length;i++){
//   console.log(i,fruits[i]);
// }

// loops with nested array

// let heroes = [["ironman","spiderman","thor"],["superman","wonder women","flash"]];

// for(let i=0;i<heroes.length;i++){
//   console.log(`list # ${i}`);
//   for(let j=0;j<heroes[i].length;j++){
//     console.log(`# ${j}, ${heroes[i][j]}`);
//   }
// }

let student = [["aman",95],["rakesh",94.4],["karan",100]];


for(let i=0;i<student.length;i++){
  console.log(`info of student #${i+1}`);
  for(let j=0;j<student[i].length;j++){
    console.log(student[i][j])
  }
}