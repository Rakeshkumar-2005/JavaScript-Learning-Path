// let stud1 = "aman";
// let stud2 = "rajan";
// let stud3 = "rakesh";

// let student = ["aman","shradha","rajat"];

// let nums = [2,4,6,8];

// let info = ["rakesh",99,80.6];//mixed array

// let newArr = []; //empty array


// 2.array are mutable -> change in the same array

// let arr = ["mango","banana","lithchi"];
// arr[0]="go";
// console.log(arr);



// 3.array method

// let car = ["audi","bmw","xuv","maruti"];
// car.push("toyata");
// console.log(car);// add element int the last

// car.pop();// delete the last element 
// console.log(car);


// car = unshift("belro"); // add the start point
// console.log(car);


// 04 practice question 
// let months = ["january","july","march","august"];


// 05.concat and reverse method
// let primary = ["red","yellow","blue"];
// let secondary = ["orange","green","violet"];
// primary.concat(secondary);
// console.log(primary.concat(secondary));

// console.log(primary.reverse());

// 07. slice -> copies a portion of an array

// let color = ["red","yellow","blue","orange","pink","whilte"];

// console.log(color.slice());// copies of array

// console.log(color.slice(2));
// console.log(color.slice(2,3));
// console.log(color.slice(-2));

// 06. splice remove/replace/add element in place
// let color = ["red","yellow","blue","orange","pink","whilte"];

// console.log(color.splice(4));
// console.log(color);
// console.log(color.splice(0,1));
// console.log(color);
// console.log(color.splice(0,1,"black","grey"));


// 08.sort method  = sort the array

// let days = ["monday","sunday","wednesday","tuesdy"];
// console.log(days.sort());

// let square = [25,16,4,49,36,9];// but not work on number
// console.log(square.sort());


// practice question
// let month = ["january","july","march","august"];

// console.log(month.splice(0,2,"july","june"));
// console.log(month)


// 08.array reference ->address in memeory
// let arr = ['a','b'];
// let arrCopy = arr;
// console.log(arrCopy);

// arrCopy.push('c');
// console.log(arr);

// console.log(arr==arrCopy);


//1.constant array
// const arr = [1,2,3,4];
// console.log(arr.push(5));

// console.log(arr);
// console.log(arr.pop());



// 2.nested arrays->array of array

// let nums = [[2,4],[3,6],[4,8]];


// practice question 

// tic-tok-toe
let game  = [['x',null,'o'],[null,'x',null],['o',null,'x']];