var fs=require("fs");
fs.appendFile("f1.txt","f2.txt",function(err,file){
  //to append two files 
if (err) throw err;
console.log("file saved");
}
)
