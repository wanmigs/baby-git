// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var execProcess = require("./exec_process.js");
const fs = require('fs');

// The absolute path of the new file with its name
var filepath = "mynewfile.txt";

execProcess.result("sh temp.sh", function(err, response){
    if(!err){
        response = response.replace(/(?:.*refs\/heads\/)(.*)/g, '$1')
        fs.writeFile(filepath, response, (err) => {
		    if (err) throw err;

		    console.log("The file was succesfully saved!");
		}); 
    }else {
        console.log(err);
    }
});