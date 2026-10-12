let greet = "hello";  // global scope 

function changeGreet(){
  let greet  = "namaste"; // function scope 
  console.log(greet);
  function innergreet(){
    console.log(greet); // lexical scope 
  }
}

console.log(greet);
changeGreet();