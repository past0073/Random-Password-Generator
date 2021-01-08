// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Gather user password length preference
function writePassword() {
  var pwLength = prompt("How many characters should your password be? Select a number between 8 and 128.");
  while (pwLength < 8 || pwLength > 128 || pwLength === "") {
    var pwLength = prompt("You must choose a number between 8 and 128.")
    if (pwLength > 8 && pwLength < 128) break;
    }
// Gather user password character preferences
  var upperCase = confirm("Do you want your password to include uppercase characters?");
    if (upperCase === true)
    alert("Your password will contain upper case characters.")
    else alert ("Your password will not contain upper case characters.")
  var lowerCase = confirm("Do you want your password to include lowercase characters?");
    if (lowerCase === true)
    alert("Your password will contain lower case characters.")
    else alert ("Your password will not contain lower case characters.")
  var numbers = confirm("Do you want your password to include numbers?");
    if (numbers === true)
    alert("Your password will contain numbers.")
    else alert ("Your password will not contain numbers.")
  var special = confirm("Do you want your password to include speical characters?");
    if (special === true)
    alert("Your password will contain special characters.")
    else alert ("Your password will not contain special characters.");

// Ensure that at least one character type has been selected
  while (upperCase === false && lowerCase === false && numbers === false && special === false) {
    alert("You must select at least one character type.");
    var upperCase = confirm("Do you want your password to include uppercase characters?");
    if (upperCase === true)
    alert("Your password will contain upper case characters.")
    else alert ("Your password will not contain upper case characters.")
  var lowerCase = confirm("Do you want your password to include lowercase characters?");
    if (lowerCase === true)
    alert("Your password will contain lower case characters.")
    else alert ("Your password will not contain lower case characters.")
  var numbers = confirm("Do you want your password to include numbers?");
    if (numbers === true)
    alert("Your password will contain numbers.")
    else alert ("Your password will not contain numbers.")
  var special = confirm("Do you want your password to include speical characters?");
    if (special === true)
    alert("Your password will contain special characters.")
    else alert ("Your password will not contain special characters.");
    if (upperCase === true || lowerCase === true || numbers === true || special === true) break;
  }
  
  // Assign characters to arrays
  var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialArr =  ["!", "#", "$", "%","&","'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@"];
 
  
  // Randomize the password
function generatePassword () {
  let generatedPassword = "";
  for (i=0; i<(pwLength); i++) {
   
    if (upperCase === true)
    generatedPassword += upperArr[Math.floor(Math.random()* upperArr.length)];
    if (lowerCase === true)
    generatedPassword += lowerArr[Math.floor(Math.random()* lowerArr.length)];
    if (numbers === true)
    generatedPassword += numArr[Math.floor(Math.random()* numArr.length)];
    if (special === true)
    generatedPassword += specialArr[Math.floor(Math.random()* specialArr.length)];

       generatedPassword = generatedPassword.substr(0, pwLength);
      }

 return generatedPassword;
 
 }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
