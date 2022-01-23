const fs=require('fs')
const path=require('path')

//*******************Tree View********** */

function treefn(dirPath){

    //Checks if any path is passed or not
    if(dirPath==undefined){
        console.log('Please enter a valid command')
    //Check if the passed path exists or not
    }else {
        let doesExist = fs.existsSync(dirPath)
        if(doesExist==true){
            treeHelper(dirPath, " ")
            //Space is indent
        }
    }
}

function treeHelper(targetPath, indent){
    let isFile= fs.lstatSync(targetPath).isFile()

    if(isFile== true){
        //If given path is a file, then we need to only display that file, as there can't be any folder inside any file

        let fileName= path.basename(targetPath)
        //As it is a file, we need to give indent and add a symbol
        console.log(indent+ "├──" + fileName)
        //|-- is an include symbol and need to be pasted
    }

    //If it is a folder
    else{
        let dirName= path.basename(targetPath) //To get the name of folder from the path, then we can display the name
        console.log(indent + '└──'+ dirName)

        let children= fs.readdirSync(targetPath)
        // //Shows all the childrens of Test Folder
        // console.log(children)

        //Loop for the childrens
        for(let i=0; i<children.length; i++){
            let childPath= path.join(targetPath, children[i]);

            treeHelper(childPath, indent+ '\t')
            // Using Recursion to repeat process for all files and folders
        }
    }
}

module.exports={
    treeKey: treefn
}