let input = process.argv.slice(2);
let fs = require("fs");
let path = require("path");

let options = [];
let filePaths = [];

for (let i = 0; i < input.length; i++){
    if (input[i].charAt(0) == "-") {
        options.push(input[i]);
    }
    else {
        filePaths.push(input[i]);
    }
}

//edge case: if file does not exist.
for (let i = 0; i < filePaths.length; i++){
    if (fs.existsSync(filePaths[i]) == false) {
        console.log(filePaths[i], " does not exist");
        return;
    }
}

let allFilesContent = "";
for (let i = 0; i < filePaths.length; i++){
    allFilesContent += fs.readFileSync(filePaths[i]);
    allFilesContent += "\n";
}
//console.log(allFilesContent);
//this will print all content of given files.

let allContentArr = allFilesContent.split("\r\n");
let strString = allContentArr.join("\n");
allContentArr = strString.split("\n");

function includes(arr, x) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == x) {
            return true;
        }
    }
    return false;
}

let isSpresent = includes(options, "-s");
if (isSpresent) {
    for (let i = 1; i < allContentArr.length; i++){
        if (allContentArr[i] == "" && allContentArr[i - 1] == "") {
            allContentArr[i] = null;
        } else if(allContentArr[i] == "" && allContentArr[i - 1] == null) {
            allContentArr[i] = null;
        }
    }

    let tempArr = [];
    for (let i = 0; i < allContentArr.length; i++){
        if (allContentArr[i] != null) {
            tempArr.push(allContentArr[i]);
        }
    }
    allContentArr =  tempArr;
}

//console.log(allContentArr);

let finalOption = "";
if (options.includes("-b")) {
    if (options.includes("-n")) {
        if (options.indexOf("-b") < options.indexOf("-n")) {
            finalOption = "-b";
        } else {
            finalOption = "-n";
        }
    } else {
        finalOption = "-b";
    }
}

if (options.includes("-n")) {
    if (options.includes("-b")) {
        if (options.indexOf("-n") < options.indexOf("-b")) {
            finalOption = "-n";
        } else {
            finalOption = "-b";
        }
    } else {
        finalOption = "-n";
    }
}

if (finalOption != "") {
    if (finalOption == "-b") {
        addLineToContent(allContentArr);
    } else {
        addLineToEveryOne(allContentArr);
    }
}

function addLineToEveryOne(arr) {
    for (let i=0; i < arr.length; i++){
        let strArr = arr[i].split("");
        strArr.unshift(i + 1 + " ");
        arr[i] = strArr.join("");
    }
}

function addLineToContent(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != '') {
            let strArr = arr[i].split("");
            strArr.unshift(counter + 1 + " ");
            arr[i] = strArr.join("");
            counter++;
        }
    }
}
console.log(allContentArr.join("\n"));