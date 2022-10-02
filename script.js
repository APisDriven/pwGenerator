// Assignment Code
var generateBtn = document.querySelector("#generate");

//function to select random character*****
function randomInt(min, max) {

  var rand = Math.random()
  return Math.floor(rand * max)
}

//function for getting random item from list
function getRandomItem(list) {
  return list[randomInt(0, list.length - 1)]
}

//Assignment: define generatePassword function
function generatePassword() {

  // 1. Prompt the user for the password criteria
  var userInput = window.prompt("Desired Character Count?", "Type a number between 8 & 128");

  //  a. pw length? 8 < 28
  var passwordLength = parseInt(userInput)

  //validate input for characterCount
  if (isNaN(passwordLength)) {
    window.alert("That is not a valid number!")
    return
  }
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Character count must be between 8 and 128 characters")
    return
  }

  var userInclNumbers = window.confirm("Would you like numbers in your password?")
  var userInclSymbols = window.confirm("Would you like symbols in your password?")
  var userInclLowercase = window.confirm("Would you like lowercase letters in your password?")
  var userInclUppercase = window.confirm("Would you like uppercase letters in your password?")


  //array of special characters, upper case, lower case adn numbers
  var symbolsList = ["!", "@", "#", "$", "%", "&", "*", "+", "=", "?"];
  var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbersList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  //connect userInputs to each array
  var parameterSelection = []

  //if statements for each parameteer
  if (userInclNumbers === true) {
    parameterSelection.push(numbersList)
  }

  if (userInclSymbols === true) {
    parameterSelection.push(symbolsList)
  }

  if (userInclLowercase === true) {
    parameterSelection.push(lowerCaseList)
  }

  if (userInclUppercase === true) {
    parameterSelection.push(upperCaseList)
  }

  if (parameterSelection.length === 0) {
    parameterSelection.push(symbolsList)
  }

  var generatedPassword = ""

  //pull random character, one by one until selection reaches the user-input pw length
  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(parameterSelection);

    var randomChar = getRandomItem(randomList);

    // 3. Generate pw based on criteria
    generatedPassword += randomChar
  }

  // 4. Display Generated pw on page  
  return (generatedPassword)
}

// 2. Validate Input

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
