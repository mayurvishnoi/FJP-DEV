// let types = {
//     media: ["mp4", "mkv", "mp3"],
//     archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
//     documents: ["docx","doc","pdf","xlsx","xls","odt","ods","odp","odg","odf","txt","ps","tex",],
//     app: ["exe", "dmg", "pkg", "deb"],
//     images: ["jpg", "png", "svg"]
// };


//Modularity
const help= require('./commands/help')
const organize= require('./commands/organize')
const tree= require('./commands/tree')

// //Taking input from Command Line in JS
// let input= process.argv[2]
// console.log(input)

// //Slice() method
// let input2=process.argv.slice(3,5)
// console.log(input2)

//======Project Overview
// We will be creating a File System Organizer////Features of the Project -//If you have numerous Files in a folder and they are not Properly arranged//So you can use this tool to arrange them in specific directory according to their extension// like text files will go into text File Folder .exe files will go into application folder and so on// so at the end you will have a arranged set of files in specific folders
// const fs=require('fs')
// const path=require('path')

//JS me input array ki form me jata hai.....Or vo array hai process.argv

//We have to get the path as well, so we will use the slice method
// let input= process.argv[2]
let inputArr= process.argv.slice(2)

// let command=input
let command=inputArr[0] //tree, organize, help

switch(command){
    case 'tree':
        //Using Modularity
        tree.treeKey(inputArr[1])
        console.log('Tree Implemented')
        break;
    case 'organize':
        //Using Modularity
        organize.organizeKey(inputArr[1]);
        console.log('Organize Implemented')
        break;
    case 'help':
        //Using Modularity
        help.helpKey()
        console.log('Help Implemented')
        break;
    default:
        console.log('PLEASE ENTER A VALID COMMAND')
}










