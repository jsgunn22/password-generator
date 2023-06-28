// Assignment code here

let characters = {
  // prettier-ignore
  charLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  // prettier-ignore
  charUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  charNumber: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  charSpecial: ["!", "@", "#", "$", "%", "&", "*", "?", "/", "~"],
};

function generatePassword() {
  // Conditional function for selecting character count
  function getCharCount() {
    let charCountInput = prompt(
      "How many characters whould you like your password to contain.  Choose a value between 8 and 128."
    );
    if (charCountInput < 8) {
      alert("That is not enough characters.");
      getCharCount();
    } else if (charCountInput > 128) {
      alert("That is too many characters.");
      getCharCount();
    } else {
      return charCountInput;
    }
  }

  function getCharTypes() {
    // character type prompts
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

    let temp = []; // holds all chosen character type arrays

    // common use for pushing characters to temp
    function addCharsToTemp(charType) {
      for (let i = 0; i < charType.length; i++) {
        temp.push(charType[i]);
      }
    }

    // adds each chosen character types to temp
    if (lowerCase) {
      addCharsToTemp(characters.charLowerCase);
    }

    if (upperCase) {
      addCharsToTemp(characters.charUpperCase);
    }

    if (numeric) {
      addCharsToTemp(characters.charNumber);
    }

    if (specialChar) {
      addCharsToTemp(characters.charSpecial);
    }

    // conditional to make sure user selected at least one character type
    if (temp.length === 0) {
      alert(
        "You mush choose at least one type of character to include in your password. Try again."
      );
      getCharTypes();
    } else {
      return temp;
    }
  }

  let charCount = getCharCount();
  let availableChars = getCharTypes();

  let generatedPassword = [];
  for (let x = 0; x < charCount; x++) {
    generatedPassword.push(
      availableChars[Math.floor(Math.random() * availableChars.length)]
    );
  }

  generatedPassword = generatedPassword.join("");

  return generatedPassword;
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
