// STEP 1: Assignment code here
var generateBtn = document.querySelector("#generate");


// STEP 2: Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Get references to the #generate element
  function generatePassword () {
    var password = "";
    for(var i = 0; i < Length; i++) {
      var randomIndex = Math.floor(Math.random() * userChoices.Length);
      password = password + userChoices[randomIndex];
    }
    return password;
  }


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); //TRUE OR FALSE

  if(correctPrompts) {
  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
} else {
  passwordTest.value = "";
}
}






// VARIABLES LISTED BELOW
var Length = 8;
var userChoice = [];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "xX", "Y", "Z"];
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];



// PROMPTS
function getPrompts(){
  Length = parseInt(prompt("Between 8 to 128, how many characters would you like your password to be?"));
  if(isNaN(Length) || Length < 8 || Length > 128) {
  alert("Value required.");
  return false;
  }

  if (confirm("Will your password contain lower case letters?")) {
    userChoice = userChoice.concat(lowerCase);
  }

  if (confirm("Will your password contain upper case letters?")) {
    userChoice = userChoice.concat(upperCase);
  }

  if (confirm("Will your password contain numbers?")) {
    userChoice = userChoice.concat(Numbers);
  }

  if (confirm("Will your password contain special characters?")) {
    userChoice = userChoice.concat(Special);
  } 
  return true;
}

function generatePassword() {

}



