//require
// http  ==> express
const http = require("http");
var server = http.createServer();
const obj = require("./calc");

var name = require("./calc");
const PORT = 3000
//console.log(add(2,3));
console.log(obj.name);

const files =  require('./filehandling/FileDemo')
//files.writeDataTofile()
//files.appendDataTOFile()
///files.readDataFromFile()
//files.removeFile()
//files.createFolder()
//files.reneameFile()
//files.copyFile()
//files.moveFile()
//files.readJsonFromFile()
files.writeJsonData()

console.log(obj.add(100,200));

server.listen(PORT,()=>{
    console.log("Server is running on port ",PORT);
})