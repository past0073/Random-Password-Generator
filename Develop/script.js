// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var pwLength = prompt("How many characters should your password be? Select a number between 8 and 128.");
  while (pwLength < 8 || pwLength > 128 || pwLength === "") {
    var pwLength = prompt("You must choose a number between 8 and 128.")
    if (pwLength > 8 && pwLength < 128) break;
    }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
