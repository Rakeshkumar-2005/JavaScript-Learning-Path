// Destructuring  

// let names = ["tony","bruce","steve","peter","xyz","pyq"];
// let[winner,runnerup,secrunnerup]=names;
// console.log(winner,runnerup,secrunnerup);


// destructuring with objecct

const student={
  name:"Rakesh",
  class:12,
  age:21,
  subject:["hinndi","english","maths","social stuudies"],
  usename:"Rakesh123",
  password:12234,
};

const {usename:user,password:pass,city="Raxaul"}=student;
console.log(user,city);//rakesh123
