class Person{
  constructor(){
    console.log("enter parent constructor")
    this.species = "homo sapein";
  }
  eat(){
    console.log("eat");
  }
}

class Enngineer extends Person{
  constructor(branch){
    console.log("enter child constructor")
    super()// to invoke parent class constructor
    this.branch = "branch";
    console.log("exit child constructor")
  }
  work(){
    console.log("solve problem,Build something");

  }
}


let enghObj = new Enngineer("chemical engineer");