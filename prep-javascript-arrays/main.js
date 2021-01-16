var languagesArray = ["html", "css", "javascript", "react", "node.js"];
languagesArray.push("C#", "php");
languagesArray.pop();
languagesArray.splice(0, 0, "C++");
languagesArray.splice(0, 1);

var thirdElement = languagesArray[2];
var arrayLength = languagesArray.length;
var lastItem = languagesArray[arrayLength - 1];
