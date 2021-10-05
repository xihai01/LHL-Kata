const camelCase = function(input) {
  //create a variable to hold camelCase string
  let string = '';
  //split input string into an array of characters
  let inputChar = input.split('');
  //for each character in inputChar array
  for (let i = 0; i < inputChar.length; i++) {
    //if the char is a space, convert the next char to uppercase
    if (inputChar[i] === ' ') inputChar[i + 1] = inputChar[i + 1].toUpperCase();
    else string += inputChar[i]; //add character to string
  }
  return string;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));