//user enters a number & then tries to guess a random generated number between 1 to max

const max = prompt("enter the max number");
// console.log(max);

const random  = Math.floor(Math.random()*max)+1;
// console.log(random);

let guess = prompt("guess the number");

while(true){
  if(guess == "quit"){
    console.log("user quit");
    break;
  }

  if(guess ==random){
    console.log("your are right! congrat! random number was ",random);
    break;
  }

  else if(guess<random){
    guess = prompt("hints:your guess was too small. please try again");
  }

  else{
    guess = prompt(" hints:your guess was too large. please try again");
  }
  // else{
  //   guess = prompt("your guess was wrong . please try again")
  // }
}