//question 1
// let data  = "secret information";
// class User{
//   constructor(name,email){
//     this.name = name;
//     this.email = email;
//   }

//   viewData(){
//     console.log("data =", data);
//   }
// }

// let student1 = new User("Rakesh","abcd@gmail.com");
// let student2 = new User("dipu","dipu@gmail.com");

//question 2

let data  = "secret information";
class User{
  constructor(name,email){
    this.name = name;
    this.email = email;
  }

  viewData(){
    console.log("data =", data);
  }
}

class Admin extends User{
  constructor(name,email){
    super(name,email);
  }
  editData(){
    data = "new edit data";
  }
}

let student1 = new User("Rakesh","abcd@gmail.com");
let student2 = new User("dipu","dipu@gmail.com");

let Admin = new User("Admiv","admin@gmail.com");