const fs=require('fs')
const path=require('path')

//***************Help*************** */
function helpfn(){
    console.log(`List of all the commands:
                    1)Tree Command - node FO.js tree <dirname>
                    2)Organize Command - node FO.js organize <dirname>
                    3)Help Command - node Fo.js help`)
}

module.exports={
    helpKey: helpfn
}