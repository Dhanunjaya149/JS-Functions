//Arrow Function

// function sayBye(){
//     console.log("Bye")
// }
// sayBye()



//How to convert simple to Arrow Functions
 //1.Remove function key word and add let
 //2.add = sign after function name
 //3.add => sign after function name

 let sayBye = () => {
    console.log(`Bye`);
}
sayBye();


let Name="Dhanu";
let clg= "Global";

let sayName=()=>{
    console.log("My Name is "+Name + ": studying in " + clg)
}

sayName()

// sayH1()

// let sayH1=()=>{
//     console.log("Hii")
// }
//simple functions supports Hosting
//Arrow functions does'nt support Hosting
