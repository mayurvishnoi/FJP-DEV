//=====Directories======

const fs= require('fs')

// //Creating a Directory
// //mkdirSync method is used to create a new directory or folder
// fs.mkdirSync('myDirectory')
// console.log('Directory Created')

// //To delete an already existing directory
// fs.rmdirSync('dirToBeDeleted')
// console.log('Directory Removed')

// //To check if a directory exist
// let doesExist=fs.existsSync('myDirectory')
// console.log(doesExist)

// //To check the stats of a Directory
// let statsOfADirectory= fs.lstatSync('myDirectory')
// console.log(statsOfADirectory)


// //=====Uses of statsOfADirectory/File======
// //To check from statsOfADirectory/File that it is a file
// console.log('Is it a file: ', statsOfADirectory.isFile())

// //To check from statsOfADirectory/File that it is a Directory
// console.log('Is it a folder: ', statsOfADirectory.isDirectory())


// //To read the content of a Directory
// //readdirSync
// let folderPath= 'C:\\Users\\mayur\\Desktop\\FJP DEV\\Node_Modules\\myDirectory'
// let folderContent= fs.readdirSync(folderPath)
// console.log("Directory Content: "+folderContent)
// //While working in NodeJs, always pass path with \\(double slash)



// //====Copy Files=====
// //Path module is needed
// const path=require('path')

// //Needed src file, destination path
// //Destination folder
// // fs.mkdirSync('myDirectory2')

// let srcFilePath= "C:\\Users\\mayur\\Desktop\\FJP DEV\\Node_Modules\\myDirectory\\f4.txt"
// // let destPath= "C:\\Users\\mayur\\Desktop\\FJP DEV\\Node_Modules\\myDirectory2\\f3.txt"
// let destinationPath= "C:\\Users\\mayur\\Desktop\\FJP DEV\\Node_Modules\\myDirectory2"

// //To get the file name from a path
// let toBeCopiedFileName= path.basename(srcFilePath)
// console.log(toBeCopiedFileName)
// //To join 2 paths
// let destPath= path.join(destinationPath, toBeCopiedFileName)
// console.log(destPath)

// //To copy 1 file from one path to another
// fs.copyFileSync(srcFilePath, destPath)
// console.log("File copied")

