var fs=require("fs");
fs.open("file1.txt","This is my first file",function(err,file){
if(err) throw err;
console.log("saved!");
});

