// const student = {
//   name:"rakesh",
//   age:23,
//   math:95,
//   eng:90,
//   phy:80,
//   getAvg(){
//     console.log(this);
//     let avg = (this.eng + this.math + this.phy)/3;
//     console.log(`${this.name} got the avg marks :${avg}`);
//   }
// }

// function   getAvg(){
//     console.log(this); // window object : it is at higher level
//   }


// this key word with arrow function
const student = {
  name:"aman",
  marks:"95",
  prop:this,// global scope
  getname:function(){
    console.log(this); // this is student object
    return this.name;
  },
  getmarks:()=>{
    console.log(this); // window object <- parent scope
    return this.name;
  },

  getInfo:function(){
    setTimeout(()=>{
      console.log(this);// student obeject
    },2000);
  },
  getInfo2:function(){
    setTimeout(function() {
      console.log("apna college");// window object
    },2000);
  }, 

};