 //setTimeOut and setInterval

 //setTimeOut
 //Executes a function once after a delayed given time in Milliseconds 
 //1000-->1 sec
 //5000-->5 sec

 function sayDhanu(){
    console.log("Ee sala cup Namdu🏆")
 }
 //It takes two parameters 
 //1st function
 //2nd time in Milliseconds
 let seconds=5;
 setTimeout(sayDhanu,seconds*1000)

 //setInterval
 //Exectutes a function repeatedly at given time in Milliseconds
 //And to stop....Use ctrl+c

 setInterval(sayDhanu,2000)
