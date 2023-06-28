// Assignment code here
function generatePassword() {
  let charCount = promp(
    "How many characters whould you like your password to contain"
  );
  let lowerCase = confirm(
    "Do you want your password to contain lower case letters?"
  );
  let upperCase = confirm(
    "Do you want your password to contain upper case letters?"
  );
  let numeric = confirm("Do you want your password to contain numbers?");
  let specialChar = confirm(
    "Do you want your password to contain special characters??"
  );
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
