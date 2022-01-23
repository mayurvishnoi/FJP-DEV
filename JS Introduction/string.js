let str='Mayur'

// //=====String Methods=====

// // length -- No of letters in a string
// console.log('Length: ',str.length)

// //==Extracting a part of a string==
// //slice(start,end+1) -- print from start to end-1
// console.log(str.slice(1,4)) //ayu
// console.log(str.slice(0,3)) //May

// //substr(start,length) -- print substring of given length from start index
// console.log(str.substr(1,3)) //ayu



// //replace(old, new) -- replace a particular letters or words from a string
// str= str.replace('ur','kan')
// console.log(str)


// //toUpperCase() -- Make the string uppercase
// str= str.toUpperCase()
// console.log(str)

// //toLowercase() -- Make the string to lower case
// console.log(str.toLowerCase())
// console.log(str)


//concat() -- to concat 2 strings
str= str.concat(' ','Vishnoi')
console.log(str)

str= str+' '+'Vishnoi'
console.log(str)

let str2='Agarwal'
str= str.concat(str2)
console.log(str)


//trim() -- remove white spaces from a string  start and endfrom
let text='      Mayur      Vishnoi         '
console.log(text)
text=text.trim()
console.log(text)
