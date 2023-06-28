// Assignment code here

// character options
let characters = {
  // prettier-ignore
  charLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  // prettier-ignore
  charUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  charNumber: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  charSpecial: ["!", "@", "#", "$", "%", "&", "*", "?", "/", "~"],
};

function generatePassword() {
  // gets initial count from user
  let charCount = prompt(
    "How many characters whould you like your password to contain.  Choose a value between 8 and 128."
  );

  // conditional for character count input
  while (charCount < 8 || charCount > 128) {
    if (charCount < 8) {
      charCount = prompt(
        "That is not enough characters. Choose a value between 8 and 128."
      );
    } else if (charCount > 128) {
      charCount = prompt(
        "That is too many characters. Choose a value between 8 and 128."
      );
    } else {
      charCount = charCount;
    }
  }

  // asks user to select which character types they would like to use
  function getCharTypes() {
    // // character type prompts & alert conditionals
    // prettier-ignore
    let lowerCase = confirm("Do you want your password to contain lower case letters?");
    if (lowerCase) {
      alert("Okay.  We will use lower case characters");
    } else {
      alert("Okay. We won't use lower case characters");
    }
    // prettier-ignore
    let upperCase = confirm("Do you want your password to contain upper case letters?");
    if (upperCase) {
      alert("Okay. We will user upper case characters");
    } else {
      alert("Okay. We won't use upper case characters");
    }
    // prettier-ingore
    let numeric = confirm("Do you want your password to contain numbers?");
    if (numeric) {
      alert("Okay. We will use numbers");
    } else {
      alert("Okay. We won't use numbers");
    }
    // prettier-ignore
    let specialChar = confirm("Do you want your password to contain special characters??");
    if (specialChar) {
      alert("Okay.  We will use special characters");
    } else {
      if (!lowerCase && !upperCase && !numeric) {
        // if no character type is selecter user receives alert to try again
        alert(
          "You mush choose at least one type of character to include in your password. Try again."
        );
      } else {
        alert("Okay.  We won't use special characters");
      }
    }

    let temp = []; // holds all chosen characters of selected types

    // common use () for pushing characters to temp
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

    return temp;
  }

  let availableChars = getCharTypes();

  // conditional for at least one character type being selected
  while (availableChars.length === 0) {
    availableChars = getCharTypes();
  }

  // randomly selects characters from temp and pushes them to generatedPassword * number user selected
  let generatedPassword = [];
  for (let x = 0; x < charCount; x++) {
    generatedPassword.push(
      availableChars[Math.floor(Math.random() * availableChars.length)]
    );
  }

  // accumulates the array of randomly selected characters into single string
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
