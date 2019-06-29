var fs=require("fs");
fs.appendFile("f1.txt","f2.txt",function(err,file){
if (err) throw err;
console.log("file saved");
}
)
