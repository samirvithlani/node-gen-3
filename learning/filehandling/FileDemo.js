const fs = require("fs");

function writeDataTofile() {
  let data = "Hello this is node file....!!!!!!";
  fs.writeFileSync("./filehandling/input.txt", data);
}
function appendDataTOFile() {
  let data = "new Data for fs.appendFile";
  fs.appendFileSync("./filehandling/input.txt", data);
}

function readDataFromFile() {
  let data;
  if (fs.existsSync("./filehandling/input.txt")) {
    data = fs.readFileSync("./filehandling/input.txt", "utf-8");
  }

  console.log(data);
}

function removeFile() {
  fs.unlinkSync("./filehandling/input.txt");
}

function createFolder() {
  if (fs.existsSync("./filehandling/newFolder")) {
    console.log("Folder already exist");
  } else {
    fs.mkdirSync("./filehandling/newFolder");
  }
}

function copyFile(){

    if(fs.existsSync("./filehandling/input.txt")){
        fs.copyFileSync('./filehandling/input.txt','./filehandling/newFolder/input.txt')
    }

}

// function moveFile(){

//   if(fs.existsSync("./filehandling/input.txt")){

//     if(fs.existsSync('./filehandling/newFolder/input.txt')){
//      // fs.unlinkSync('./filehandling/newFolder/input.txt')
//     }
//     else{
//       fs.moveFileSync('./filehandling/input.txt','./filehandling/newFolder/input.txt')
//     }
//   }
// }
function  reneameFile(){
  if(fs.existsSync("./filehandling/input.txt")){
    fs.renameSync('./filehandling/input.txt','./filehandling/input1.txt')
  }
}

function readJsonFromFile(){

    var employeestr = fs.readFileSync('./filehandling/employee.json','utf-8')
    var employee = JSON.parse(employeestr)
    console.log(employee);
    console.log(employee[0].name);
  }

  function writeJsonData(){

    var students = [
      {
        name:'Raj',
        age:20
      },
      {
        name:'amit',
        age:24
      },
      {
        name:'parth',
        age:26
      }
    ]

    var studentstr = JSON.stringify(students)
    fs.writeFileSync('./filehandling/students.json',studentstr)
    fs.writeFile("./filehandling/students.json", studentstr, function(err) {
      if (err) {
          console.log(err);
      }
  });

  }

module.exports = {
  writeDataTofile,
  appendDataTOFile,
  readDataFromFile,
  removeFile,
  createFolder,
  copyFile,
  reneameFile,
  readJsonFromFile,
  writeJsonData
};
