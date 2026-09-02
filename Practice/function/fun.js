// User Define functionss

// function mult(p,q){
//     m = p*q;
//     console.log('Multiplication is:'+m);
// }
// mult(8, 5); //function caall

// ....Builtin functions
// 1>alert('this is home page');
// 2> let name=prompt("Enter the name");
// console.log(name);

//  3> let s="I am Happy";
// console.log(s.toUpperCase());

// 4> let s="    I am Happy    ";
// console.log(s.toUpperCase());
// console.log(s.trim());

// pure function
// function income(salary){
//     console.log(salary*2);
// }
// income(2000);

// Impure function....
// let increment = parseInt(prompt('Enter the Incentive:'));
// function income(salary){
//     let total=(salary*2+increment);
//     console.log(total); 
// }
// income(20000);

// First Class Function
// let mult = function(p,q){
//     m = p*q;
//     console.log('Multiplication is:'+m);
//  }
// mult(8, 5); //function caall

//Higher order function

// function sayHello(){
//     console.log("Hello");
// }

// function higherOrder(abcd){
//     for(let i=1;i<=5;i++){
//         abcd();
//     }
// }
// higherOrder(sayHello);


// function greet(name){
//     return `Hello, ${name}!`;
// }
// console.log(greet("Students"));


//Arrow function 
//no need to write return if no curly braces......
// let greet=(name)=>`Hello ${name}...!!`;
// console.log(greet('Aditya'));


// // compulsary to writr the return if curly bracess.....
// let greet1=(name)=>{
//     return `Hello ${name}...!!`;
// }
// console.log(greet1('Aditya'));   