// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var pwLength = prompt("How many characters should your password be? Select a number between 8 and 128.");
  while (pwLength < 8 || pwLength > 128 || pwLength === "") {
    var pwLength = prompt("You must choose a number between 8 and 128.")
    if (pwLength > 8 && pwLength < 128) break;
    }

  var upperCase = confirm("Do you want your password to include uppercase characters?");
  var lowerCase = confirm("Do you want your password to include lowercase characters?");
  var numbers = confirm("Do you want your password to include numbers?");
  var special = confirm("Do you want your password to include speical characters?");

  while (upperCase === false && lowerCase === false && numbers === false && special === false) {
    alert("You must select at least one character type.");
    var upperCase = confirm("Do you want your password to include uppercase characters?");
    var lowerCase = confirm("Do you want your password to include lowercase characters?");
    var numbers = confirm("Do you want your password to include numbers?");
    var special = confirm("Do you want your password to include speical characters?");
    if (upperCase === true || lowerCase === true || numbers === true || special === true) break;
  }

  alert("Your password will be " + pwLength + " characters and will contain the following types of characters: Uppercase: " + upperCase + ", Lowercase: " + lowerCase + ", Numbers: " + numbers + ", and Special Characters: " + special + ".")
  
  var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialArr =  ["!", "#", "$", "%","&","'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@"];
 
  // Add selected characters to an array
  charArray = [];

     if (upperCase === true)
    charArray.push(upperArr);
    if (lowerCase === true)
    charArray.push(lowerArr);
    if (numbers === true)
    charArray.push(numArr);
    if (special === true)
    charArray.push(specialArr);
 
  console.log(charArray);
  
  // Put all values into a single array
  var charArray = [].concat.apply([], charArray);
  
  console.log(charArray);
 
  var pwLength = parseInt(pwLength)
 
  // Randomize the password
function generatePassword () {
  let generatedPassword = "";
  for (i=0; i<pwLength; i++) {
   
      password = charArray[Math.floor(Math.random() * charArray.length)];
       generatedPassword = generatedPassword + password;      
 }
 return generatedPassword;
 }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
