const path=require('path')

// //extname() -To get the extension of a file from a particular path
// let ext=path.extname('C:\\Users\\mayur\\Desktop\\FJP DEV\\Node_Modules\\myDirectory2\\f4.txt')
// console.log(ext)

// //basename() - To get the name of a directory/file from a particular path
// let basename=path.basename('C:\\Users\\mayur\\Desktop\\FJP DEV\\Node_Modules\\myDirectory2')
// console.log(basename)

// //To get the path of current directory
// console.log(__dirname)

// //To get the path of the current file
// console.log(__filename)

//To join 2 paths
let joinedPath= path.join('C:\\Users\\mayur\\Desktop', 'FJP DEV\\Node_Modules\\myDirectory2')
console.log(joinedPath)