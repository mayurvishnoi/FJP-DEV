const fs=require('fs')
const path=require('path')


let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: ["docx","doc","pdf","xlsx","xls","odt","ods","odp","odg","odf","txt","ps","tex",],
    app: ["exe", "dmg", "pkg", "deb"],
    images: ["jpg", "png", "svg"]
};

//*********Organize***********

//dirpath -- input of a directory path
function organizeFn(dirpath){

    let destPath
    // console.log(dirpath)

    //Edge Cases - 1)Directory Path not written
    if(dirpath==undefined){
        console.log('Please enter a valid Directory path')
        return;

        //Edge Case - 2)If path/directory exist or not
    } else{
        let doesExist=fs.existsSync(dirpath)
        // console.log(doesExist)

        if(doesExist== true){
            //To get the path where we have to create a folder
            destPath=path.join(dirpath,'organized_files')
            //Edge Case - 3)If there is already present folder named as "organized_files"
            if(fs.existsSync(destPath)== false){
                fs.mkdirSync(destPath)
            }else {
                console.log('This folder already exists')
            }
            //If entered path does not exist
        }else {
            console.log('Please enter a valid path')
            return
        }
    }
    organizeHelper(dirpath, destPath)
}


//=====Defining a category in organized_files
//We are writing this function to categorize our files
function organizeHelper(src,dest){
    //Get all the files and folders which are inside our source folder
    
    let childNames= fs.readdirSync(src)

    // // It will show folders as well
    // console.log(childNames)
    for(let i=0; i<childNames.length; i++){
        //Path for the file
        let childAddress= path.join(src,childNames[i])
        //To identify the files
        let isFile= fs.lstatSync(childAddress).isFile()

        // //To print if it is file or folder
        // console.log(childNames[i]+" " + isFile)

        if(isFile== true){
            //getCategory() function find the extension of the files and then matches the extension with the arrays(keys) of the type object and then finally return the key when ext matches
            let fileCategory=getCategory(childNames[i])
            //We took out the Category of the different files
            // console.log(childNames[i]+ " belongs to "+fileCategory)

            sendFiles(childAddress, dest, fileCategory)

        }
    }
}


function getCategory(name){
    let ext= path.extname(name)
    // console.log(ext)
    // //It will come with .

    //So we will be using slice() function to remove that .
    ext=ext.slice(1)
    // console.log(ext)

    //Iterating the types object
    for(let type in types){
        let cTypeArray= types[type]
        // console.log(cTypeArray)

        for(let i=0;i<cTypeArray.length;i++){

            //We are matching the extension with the value of the keys(cTypeArray)
            if(ext==cTypeArray[i]){
                return type
            }
        }
    }
    return 'others'
}


//sendFiles() - To check if the category folders exist, and if not exist then create the category folder, then copy the file, and now finally delete the source file
function sendFiles(srcFilePath, dest, fileCategory){

    //Here, we are making file category path
    let catPath= path.join(dest, fileCategory)
    // console.log(catPath)

    //To check if category folders exists or not
    if(fs.existsSync(catPath)==false){
        fs.mkdirSync(catPath)
    }

    //Took the name of the files
    let fileName= path.basename(srcFilePath)
    //Here we have created the path for the files in Category folder
    let destFilePath= path.join(catPath, fileName)

    //Copied files from src to dest
    fs.copyFileSync(srcFilePath, destFilePath)

    //Deleted the files from src
    fs.unlinkSync(srcFilePath)

    console.log(fileName+ " is copied to "+ fileCategory)
}

module.exports={
    organizeKey: organizeFn
}