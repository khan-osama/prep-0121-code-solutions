var person = {
    firstName: "Osama ",
    lastName: "Khan",
    hobby: "Piano",
}

var str1 = person.firstName;
var str2 = person.lastName;
var fullName = str1.concat(str2);

person.job = "Programmer";
person.previousJob = "Business Analyst";

var myCar = {
    make: "Honda ",
    model: "Accord",
    year: "2021 ",
}

myCar['owner'] = fullName;
var str3 = "My name is ";
var str4 = " and I drive a ";
var str5 = ".";
var myInfo = str3.concat(myCar['owner'], str4, myCar['year'], myCar['make'], myCar['model'], str5);

myCar['color'] = "black";
console.log(myCar);
