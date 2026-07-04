// direct way creating object 
// const student = {
//   fullName:"Rakesh Kumar",
//   marks: 91.2,
//   printMarks : function(){ // method ==> behavior bhi bool sakhte hai
//     console.log("marks=",this.marks);  
//   },
// };


// another object
const employee = {
  calcTax(){
    console.log("tax rate is 10%");
  },
};

const karanArjun = {
  salary:50000,
};

karanArjun.__proto__ = employee; //  for set the protptype