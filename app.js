/*defined function*/
console.log("app started");
var passGen = [];
var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var pwLen = prompt("What is your password length?");
var pwSymbol = prompt("Would you like to use a symbol?");
var isLetters = true;
var isNumbers = true;
var isSymbols = true;

function shuffle(array) {
  var currentIndex = array.length;
  // While there remain elements to shuffle//
  for (i = 0; i < pwLen; i++) {
    if (isSymbols === true && i === 0) {
      var randomLet = Math.floor(Math.random() * symbols.length);
      passGen.push(symbols[randomLet]);
    } else {
      var randomLet = Math.floor(Math.random() * symbols.length);
      passGen.push(symbols[randomLet]);
    }
  }
  //Pick a remaining element//
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;

  //and swap it with the current element//
  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;

  return array;

  /* defined function */
  function createPassword() {
    for (i = 0; i < pwLen; i++) {
      if (isSymbols === true && i === 0) {
        var randomSymNo = Math.floor(Math.random() * symbols.length);
        /* inject a symbol into the string*/
        pw.push(symbols[randomSumNo]);
      } else {
        /*inject a letter into the string*/
        var randomNo = Math.floor(Math.random * letters.length);
        pw.push(letters[randomNo]);
      }
    }

    /*randomize array*/
    pwShuffle = shuffle(passGen);
    pwBox.innerHTML = pwShuffle.toString();
  }
}

/* first event */
/* change this pw into a dynamic random pw */
/* document.write(pw */
