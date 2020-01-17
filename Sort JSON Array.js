//This code takes an array of JSON objects as input, then sorts it in an ascending order based on the value of 'inventory' in each object.
//run the command following in terminal to test the code, paste in any JSON or the below example given.
//  node Sort\ JSON\ Array.js
//NOTE: this code has not been checked for any "dumb inputs", such as "asdf". Inputting anything that is not in "JSON format" will throw an error instead.
//Also, the JSON objects inside the array should contain at least one key:value pair where the key is "inventory". The code does, however, do some cleaning up of badly-written JSON code, like in the example given to me.

// This was the JSON input given to me:
/*
{{“name”:”F3607gw”,“part_number”:”10001”,”manufacturer”:”Ericsson”,”inventory”:”127”,”creation_date”:”2014-12-07”},{“name”:” F3307”,“part_number”:”10005”,”manufacturer”:”Ericsson”,”inventory”:”4”,”creation_date”:”2014-10-03”},{“name”:”L850-GL”,“part_number”:”80011”,”manufacturer”:”Fibocom”,”inventory”:”1”,”creation_date”:”2018-02-19”},{“name”:” SL871L EVK”,“part_number”:”12074”,”manufacturer”:”Telit”,”inventory”:”314”,”creation_date”:”2019-06-23”},{“name”:“EU850D”,“part_number”:”10031”,”manufacturer”:”Novatel”,”inventory”:”0”,”creation_date”:”2012-06-14”},{“name”:“UMTS Rubber Antenna,IP65”,“part_number”:”10244”,”manufacturer”:”V.Torch”,”inventory”:”1100”,”creation_date”:”2015-09-26”},{“name”:“M.2 to mPCIe adapt. SIM-slot”,“part_number”:”10231”,”manufacturer”:”BPlus”,”inventory”:”0”,”creation_date”:”2018-01-30”},{“name”:“SIM5320 HSDPA SMT”,“part_number”:”10297”,”manufacturer”:”SIMCom”,”inventory”:”312”,”creation_date”:”2016-08-12”},{“name”:“ ME909s-120”,“part_number”:”10278”,”manufacturer”:”Huawei”,”inventory”:”1499”,”creation_date”:” 2020-01-03”},{“name”:“WMX5401”,“part_number”:”10916”,”manufacturer”:”JJ-Plus”,”inventory”:”1”,”creation_date”:” 2017-06-02”}}
*/
//As you can see, this "array" has some problems with it. It starts and ends with curly braces, which is not what an array should be in terms of holding JSON objects. Its quotation marks are also forward and backward ones, which could cause problems in certain syntax. Some of the values also contain whitespaces, which causes problems when it comes to comparing things if they are not parsed correctly.

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
  var replacedQuotationMarksArray1 = arrayAsString.replace(/“/g,'"'); //replaces the forward quotes with normal quotes because some dates don't get compared if they happen to have a whitespace in the first char of the value of creation_date
  var replacedQuotationMarksArray2 = replacedQuotationMarksArray1.replace(/”/g,'"'); //replaces the backward quotes with normal quotes for same reason above
  var replacedCurlyArray = replacedQuotationMarksArray2.replace(/{(.*)}/, '[$1]'); //fixes any "curly bracket" issues if there is by replacing with square braces because an array needs to start and end with square brackets and not curly ones
  var removedSpaceDateArray = replacedCurlyArray.replace(/creation_date":"(\s)/g , 'creation_date":"'); //some values under creation_date contains a space before the actual white, this removes that space. This would otherwise cause some problems when sorting the dates.
  var parsifiedArray = JSON.parse(removedSpaceDateArray);  //parses the array that's currently in string form into JSON form so we can do cool stuff with it (like sorting)
  var sortedDateArray = parsifiedArray.sort((a, b) => new Date(a.creation_date) - new Date(b.creation_date)); //this sorts the JSON objects in date order first so that if identical values in inventory gets also sorted based on date; think LSD sort
  var sortedInventoryArray = sortedDateArray.sort((a, b) => parseFloat(a.inventory) - parseFloat(b.inventory)); //and then this sorts the array based on the inventory number in ascending order numerically
  var finalArray = JSON.stringify(sortedInventoryArray); //makes the sorted array back into a string so it's readable on the terminal when printed, this step is optional if the array wants to be kept in JSON parsed form. Otherwise simply return this value.
  console.log("FINAL SORTED ARRAY LOOKS LIKE: " + finalArray);
  //return sortedInventoryArray; //uncomment this line to make the function return an array with JSON Objects inside
  return finalArray; //this line returns the array as a String, comment it out if returning the above instead
}
