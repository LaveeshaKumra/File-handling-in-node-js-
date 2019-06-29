var fs=require("fs");
fs.writeFile("f2.txt","Hello everyone !! ",function(err,file){
if (err) throw err;
console.log("New file created");
}
)
