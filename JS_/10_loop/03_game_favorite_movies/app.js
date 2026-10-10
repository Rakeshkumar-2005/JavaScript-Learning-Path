// guess the movies 

const favmovies = "avatar";
let guess = prompt("guess my favourite movies");

// while((guess != favmovies) && (guess!="quit")){
//   guess=prompt(" wrong guess ,please try again ");
// }


// using break keyword
while((guess != favmovies)){

  if(guess == "quit"){
    console.log("you quit")
    break;
  }
  guess=prompt(" wrong guess ,please try again ");
}

if(guess == favmovies){
  console.log("congrat !!");
}
// else{
//   console.log("quit");
// }