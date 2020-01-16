//This code takes an array of JSON objects as input, then sorts it in an ascending order based on the value of 'inventory' in each object.
//run the command following in terminal to test the code
//  node Sort\ JSON\ Array.js
//NOTE: this code has not been checked for any "dumb inputs", such as "asdf". Inputting anything that is not in "JSON format" will throw an error instead.
//Also, the JSON objects inside the array should contain at least one key:value pair where the key is "inventory".

var readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var response
rl.question("Enter an array ", function (answer) { //reads an input from the user, in this case it's an array
    response = answer
    outside();
    rl.close();
});

outside = function(){
    get_sorted_articles(response);
}


function get_sorted_articles(array){
  var arrayAsString = `${array}`; //makes the array into a string
  var replacedArray = arrayAsString.replace(/{(.*)}/, '[$1]'); //fixes any "curly bracket" issues if there is by replacing with square braces
  var parsifiedArray = JSON.parse(replacedArray);  //parses the array that's currently in string form into JSON form
  var sortedArray = parsifiedArray.sort((a, b) => parseFloat(a.inventory) - parseFloat(b.inventory)); //sorts the array based on the inventory number in ascending order numerically
  var finalArray = JSON.stringify(sortedArray); //makes the sorted array back into a string so it's readable on the terminal when printed, this step is optional if the array wants to be kept in JSON parsed form
  console.log("SORTED ARRAY LOOKS LIKE: " + finalArray);
}
