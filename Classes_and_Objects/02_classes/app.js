class ToyotaCar{
  constructor(brand,mileage){
    console.log("creating new object");
    this.brand = brand;
    this.mileage = mileage;
  }
  start(){
    console.log("start")
  }

  stop(){
    console.log("stop");
  }
  // setBrand(brand){
  //   this.brand=brand;
  // }
}

let fortuner = new ToyotaCar("fortuner",10);// connstuctor
// fortuner.setBrand("fortuner");
console.log(fortuner);

let lexus = new ToyotaCar("lexus",20); // constuctor
// lexus.setBrand("lexus");
console.log(lexus);