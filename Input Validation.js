//To test out this function, please refer to Input Validation.html

function validate_input(invoice_address) {
  var addressValue = invoice_address[0];
  var zipValue = invoice_address[1];
  var countryValue = invoice_address[2];
  var address2Value = invoice_address[3];
  var cityValue = invoice_address[4];

  if (addressValue == "" || zipValue == "" || countryValue == "" || cityValue == "" ){ //checks the starred inputs
    alert("Please fill in all the starred areas");
    return false;
  }
  else if (addressValue.length < 3){ //checks the Address input if it is less than 3 characters long
    alert("Address cannot be less than 3 characters");
    return false;
  }
  else if (zipValue.length < 3 || !(zipValue.match(/^[0-9]*$/gm))){ //checks the ZIP code if it is less than 3 characters long OR if the ZIP code is a non-numerical
    alert("ZIP cannot be less than 3 digits and needs to contain only numbers");
    return false;
  }
  else if (countryValue > 250 || countryValue < 1){ //checks that the Country value is somewhere in between 1-250
      alert("Country must contain a valid country ID (1-250)");
      return false;
  }
  else if (!(address2Value == "")) { //checks if the Address 2 value is filled. If it is, then also if the length is less than 3 characters
    if(address2Value.length < 3){
        alert("Address 2 cannot be less than 3 characters");
        return false;
    }
  }
  else if (cityValue.length < 3){ //checks if the length of City is less than 3 characters
      alert("City cannot be less than 3 characters");
      return false;
  }


  //This version is more specficic and tells the user exactly what part of the starred inputs they missed
  /*
  if (addressValue == "") {
    alert("Address must be filled out");
    return false;
  } else if (addressValue.length < 3){
    alert("Address cannot be less than 3 characters");
    return false;
  }
  if (zipValue == "") {
    alert("ZIP must be filled out");
    return false;
  } else if (zipValue.length < 3 || !(zipValue.match(/^[0-9]*$/gm))){
      alert("ZIP cannot be less than 3 digits and needs to contain only numbers");
      return false;
  }
  if (countryValue == "") {
    alert("Country must be filled out");
    return false;
  } else if (countryValue > 250 || countryValue < 1)){
      alert("Country must contain a valid country ID (1-250)");
      return false;
  }
  if (!(address2Value == "")) {
    if(address2Value.length < 3){
      alert("Address 2 cannot be less than 3 characters");
      return false;
    }
  }
  if (cityValue == "") {
    alert("City must be filled out");
    return false;
  } else if (cityValue.length < 3){
      alert("City cannot be less than 3 characters");
      return false;
  } */


}
