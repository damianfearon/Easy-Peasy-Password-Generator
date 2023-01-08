// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var userOptions = {};

var howMany = function () {
  var numOfChar = Number(
    prompt("How many characters would you like in your password? (between 10-64)")
  );

  // create a condition to the numbers of characters
  if (numOfChar >= 10 && numOfChar <= 64) {
    return numOfChar;
  } else {
    alert(
      "Sorry, your password needs a minimum of 10 characters and no more than 64. Please try again."
    );
    return howMany();
  }
};

var characters = function () {
  var char = {
    lowCase: confirm("Would you like lower case letters in your password?"),
    upCase: confirm("Would you like upper case letters in your password?"),
    numCase: confirm("Would you like numeric characters in your password?"),
    specialCase: confirm("Would you like special characters in your password?"),
  };

 // Code should validate for each input and at least one character type should be selected.
 if (char.lowCase || char.upCase || char.numCase || char.specialCase) {
  return char;
} else {
  alert("At least one character type should be selected, Please try again.");
  return characters();
}
};

function getPasswordOptions() {
  userOptions = {
    numOfChar: howMany(),
    userCharacters: characters(),
  }

}

// Function for getting a random element from an array
function getRandom(arr) {
  // retrieve random index of array
  const i = Math.floor(Math.random() * arr.length);

  // retrieve item using random index
  const item = arr[i];

  return item;

}

var special = getRandom(specialCharacters);
var numeric = getRandom(numericCharacters);
var lowerCase = getRandom(lowerCasedCharacters);
var upperCase = getRandom(upperCasedCharacters);


// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

  var userChar = userOptions.userCharacters;

  var charArrayModel = [];
  var pass = []

  for (let i = 0; i <userOptions.numOfChar; i++) {
    // Run user option functions
    if(userChar.lowCase){
      charArrayModel.push(getRandom(lowerCasedCharacters))
    }if(userChar.upCase){
      charArrayModel.push(getRandom(upperCasedCharacters))
    }if(userChar.numCase){
      charArrayModel.push(getRandom(numericCharacters))
    }if(userChar.specialCase){
      charArrayModel.push(getRandom(specialCharacters))
    }

    // Populate the pass array repeating charArrayMode1
    pass.push(charArrayModel[i % charArrayModel.length])
    }

    
    // Console.log 
    return pass.join("");
  }


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);