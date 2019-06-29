var fs=require("fs");
fs.unlink("f2.txt",function(err,file){
if (err) throw err;
console.log("file deleted!!");
}
)
