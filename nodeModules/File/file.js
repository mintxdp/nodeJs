const { Console } = require('console');
const file=require('fs');

function changeMode(){
file.chmod('test.txt',0o775,(err)=>{
    if(err){
        console.log("There is a error, file mode may not be changed.")
        
    }
    else{
        console.log("File permission changed.")
        
    }
})
};
changeMode();