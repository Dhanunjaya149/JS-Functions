 //There are 3 types of Scops in JS
 //1.Block scope
 //2.Function Scope
 //3.Global scope
 
 //1.Block scope
 //Block scope means code access only in braces
 //example:()

 //                      var       let      const
 //Inside of block       ✅        ✅        ✅
 //Outside of block      ✅        ❌        ❌
  

 //Inside of block var
 {
    var x=10;
    var y=20;
    console.log(x)
    console.log(y)
 }

 //Inside of block let
  {
    let a=30;
    let b=40;
    console.log(a)
    console.log(b)
 } 

 //Inside of block const
  {
    const ab=60;
    const ba=70;
    console.log(ab)
    console.log(ba)
 }

 //Outside of block 

 {
    let k=12;
    var g=23;
    const h=34;
 }
//  console.log(k)
 console.log(g)
//  console.log(h)


//2.Function scope

//                      var       let      const
 //Inside of block       ✅       ✅       ✅
 //Outside of block      ❌       ❌       ❌

 //Inside of function var,let,const

 function s1(){
    var abc=67;
    let hds=77;
    const hsg=99;
    console.log(abc,hds,hsg)
 }
 s1()

 //Outside of function var,let,const

//  console.log(abc)
//  console.log(hsg)
//  console.log(hds)

//3.Global scope

//                      var       let      const
 //Inside of block       ✅       ✅       ✅
 //Outside of block      ❌       ❌       ❌

//Inside the Global scope var,let,const
var m = 10;
let p = 20;
const z = 30

console.log(m);
console.log(p);
console.log(z);

{
    console.log(m);
    console.log(p);
    console.log(z);
}

function numbers(){
    console.log(m);
    console.log(p);
    console.log(z);
}

numbers();

