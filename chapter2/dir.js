const fs=require("fs");
const path=require("path");

if(!fs.existsSync('./chapter2/new'))
{
    fs.mkdir('./chapter2/new',(error) => {

        if(error) throw error;
    
        console.log('Diretory created successfully');
    });
}
if(fs.existsSync('./chapter2/new'))
{
    fs.rmdir('./chapter2/new',(error) => {

        if(error) throw error;
    
        console.log(' remove Diretory  successfully');
    });
}