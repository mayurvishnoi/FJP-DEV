function add(a,b){
    console.log("The sum is: ",a+b)
}
function sub(a,b){
    console.log("The difference is: ",a+b)
}
function mul(a,b){
    console.log("The product is: ",a+b)
}
function div(a,b){
    console.log("The quotient is: ",a+b)
}

//module.exports ia an object while helps in exporting functions to other file , in the form of key-value pairs
module.exports={
    addition: add,
    subtract: sub,
    multiply: mul,
    division: div
}

