var fs=require("fs");
fs.rename("file1.txt","f1.txt",function(err,file){
if (err) throw err;
console.log("file renamed");
}
)
