// class Parent{
//   hello(){
//     console.log("hello");
//   }
// }

// class Child extends Parent{}

// let obj = new Child();

//Example

class Person{
  constructor(){
    this.species = "homo sapein";
  }
  eat(){
    console.log("eat");
  }
  sleep(){
    console.log("sleep");
  }
}

class Enngineer extends Person{
  work(){
    console.log("solve problem,Build something");
  }
}
class Doctor extends Person{
  work(){
    console.log("treats patients");
  }
}

let rakeshObj = new Enngineer();