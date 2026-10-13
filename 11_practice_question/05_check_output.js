const object={
  message:"hello,world!",
  logMessage(){
    console.log(this.message);
  }
};

setTimeout(object.logMessage,1000);