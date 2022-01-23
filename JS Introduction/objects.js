//Objects in JS are in Key-Value pair

//Declare an object
let obj={}

// //Example
// let person={
//     name: 'Mayur',  //Name is Key and String(Mayur) is the value
//     age: 21,
//     Phone: 9105755964,
//     Friends: ['Anoop','Sidd','Mukul','Vaibhav','Rajesh']
// }
// console.log(person)

let captain={
    firstName: 'MS',
    lastName: 'Dhoni',
    age: 41,
    friends: ['Raina','Ashwin','Jadeja','Kohli'],
    address: {
        state:'Jharkhand',
        city:'Ranchi'
    },
    sayHi: function(){
        console.log('Dhoni says Hi')
    }
}
// console.log(captain)

// captain.sayHi() //Calling a function of an object
// console.log(captain.sayHi()) //Dhoni says Hi && undefined
// console.log(captain.firstName,'',captain.lastName) //Accessing a property of an object

// //Access a property using bracket notation
// console.log(captain['age'], captain['lastName'])

// //Accessing a particular elemen of an array inside an object
// console.log('My best friend is:',captain.friends[0])

// //Accessing a particular property of an object inside an object
// console.log(captain.address.state)

// //Updating any property of an object
// captain.age= 42
// console.log(captain.age)

// //Adding more properties to an object
// captain.trophies= [2007,2010,2011,2013,2018,2021]
// console.log(captain.trophies)

// //Delete a property of an object
// delete captain.sayHi
// console.log(captain)

console.log(captain.key)


//for-in loop -- for-in loop gives us the properties of an object with its key-value pair
for(let i in captain){
    console.log('Key:',i, 'Value:',captain[i])
}