

// //Function as a Variable
// let sayHi= function(a){
//     console.log(a)
// }
// sayHi(2)
// console.log(sayHi) //Prints function
// console.log(a) //a is not defined


//IIFE
// let add=(function(a,b){
//     console.log(a+b)
// })(10,20)
// console.log(add) //undefined

// let add=(function(a,b){
//     return a+b
// })(10,20)
// console.log(add) //30
// //add(5,2) //Add is not treated as a function

// console.log(5,10)

let sayHi= function(){
    console.log("Hi")
}
sayHi()
