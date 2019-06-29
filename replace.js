var fs=require("fs");
fs.writeFile("file1.txt","this is my updated text",function (err,file){
if(err) throw err;
console.log("replaced");
});
