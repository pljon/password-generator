// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specials = ["!", "@", "#", "$", "%", "^", "&", "(", ")", "?"];

// Set criteria
// var setLength = "";
// var setUppercase;
// var setLowercase;
// var setSpecials;
// var setNumbers;

// Function to generate password
function generatePassword() {
  var setLength = (prompt("Set length of password (8 characters - 128 characters)"));
  // Set length of password or it will loop back to message if parameter is not true
  if (setLength < 8 || setLength > 128) {
    alert("Please re-enter password that is between 8 characters and 128 characters");
    var setLength = (prompt("Set length of password (8 characters - 128 characters)"));
  } else {
    // Display user input for password length
    alert(`Password will be ${setLength} characters`);
  }

  // User to click OK on prompt to set specified criteria
  var setUppercase = confirm("Click OK if you would like uppercase letters in your password");
  var setLowercase = confirm("Click OK if you would like lowercase letters in your password");
  var setSpecials = confirm("Click OK if you would like special characters in your password");
  var setNumbers = confirm("Click OK if you would like numbers in your password");

  // If user clicks CANCEL on all prompts, re-displays each prompt 
  if (!setUppercase && !setLowercase && !setSpecials && !setNumbers) {
    alert("At least one specification must be applied to have a strong password");
    var setUppercase = confirm("Click OK if you would like uppercase letters in your password");
    var setLowercase = confirm("Click OK if you would like lowercase letters in your password");
    var setSpecials = confirm("Click OK if you would like special characters in your password");
    var setNumbers = confirm("Click OK if you would like numbers in your password");
  }

  // Empty array to place characters into based on set criteria
  var passwordCharacters = [];

  // Selected criteria to include characters from global variable's arrays
  if (setUppercase) {
    passwordCharacters = passwordCharacters.concat(uppercaseLetters);
  }

  if (setLowercase) {
    passwordCharacters = passwordCharacters.concat(lowercaseLetters);
  }

  if (setNumbers) {
    passwordCharacters = passwordCharacters.concat(numbers);
  }

  if (setSpecials) {
    passwordCharacters = passwordCharacters.concat(specials);
  }

  // Empty string for concat characters to be randomized
  var randomizeCharacters = "";

  // For loop for each item in passwordCharacters array to be randomly selected until setLength is met
  for (i = 0; i < setLength; i++) {
    randomizeCharacters += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  
  return randomizeCharacters;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
