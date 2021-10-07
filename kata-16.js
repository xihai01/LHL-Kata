//create a sorted array for case
let sortedArray = [];

const makeCase = function (input, cases) {
  let string = input;
 
  //call appropriate helper functions depending on type of case
  if (typeof cases === 'string') {
    //call a helper function to parse string
    return parseString(input, cases);
  } else {
    //sort cases into precendence order
    sortedArray = sortArray(cases);
    for (const word of sortedArray) {
      if (word === 'vowel' || word === 'consonant' || word === 'upper' || word === 'lower') {
        string = parseString(string, word);
      } else {
        string = parseString(input, word);
      }
    }
    return string;
  }
}

const sortArray = function (cases) {
  //organize cases array following the precedence order
  let firstArray = [], secondArray = [], thirdArray = [];
  for (const str of cases) {
    switch (str) {
      case 'camel':
        firstArray[0] = 'camel';
        break;
      case 'pascal':
        firstArray[1] = 'pascal';
        break;
      case 'snake':
        firstArray[2] = 'snake';
        break;
      case 'kebab':
        firstArray[3] = 'kebab';
        break;
      case 'title':
        firstArray[4] = 'title';
        break;
      //secondArray
      case 'vowel':
        secondArray[0] = 'vowel';
        break;
      case 'consonant':
        secondArray[1] = 'consonant';
        break;
      //thirdArray
      case 'upper':
        thirdArray[0] = 'upper';
        break;
      case 'lower':
        thirdArray[1] = 'lower';
        break;
      default:
        break;
    }
  }
  //add the three arrays togther
  tempArray = (firstArray.concat(secondArray)).concat(thirdArray);
  for (const elm of tempArray) {
    if (elm !== undefined) sortedArray.push(elm);
  }
  return sortedArray;
}

const parseString = function (input, cases) {
  let string = input;
  //determine the case and parse the string
  if (cases === 'camel') {
    string = camelCase(input);
  } else if (cases === 'pascal') {
    string = pascalCase(input);
  } else if (cases === 'snake') {
    string = snakeCase(input);
  } else if (cases === 'kebab') {
    string = kebabCase(input);
  } else if (cases === 'title') {
    string = titleCase(input);
  } else if (cases === 'vowel') {
    string = vowelCase(input);
  } else if (cases === 'consonant') {
    string = consonantCase(input);
  } else if (cases === 'upper') {
    string = upperCase(input);
  } else if (cases === 'lower') {
    string = lowerCase(input);
  } else {
    string = 'invalid cases.';
  }
  return string;
}

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

const pascalCase = function(input) {
  //create a variable to hold camelCase string
  let string = '';
  //split input string into an array of characters
  let inputChar = input.split('');
  //capitalize first letter
  inputChar[0] = inputChar[0].toUpperCase();
  //for each character in inputChar array
  for (let i = 0; i < inputChar.length; i++) {
    //if the char is a space, convert the next char to uppercase
    if (inputChar[i] === ' ') inputChar[i + 1] = inputChar[i + 1].toUpperCase();
    else string += inputChar[i]; //add character to string
  }
  return string;
}

const snakeCase = function(input) {
  //split input string into an array of words
  let inputChar = input.split(' ');
  //join the strings together with a _
  inputChar = inputChar.join('_');
  return inputChar;
}

const kebabCase = function(input) {
  //split input string into an array of words
  let inputChar = input.split(' ');
  //join the strings together with a -
  inputChar = inputChar.join('-');
  return inputChar;
}

const titleCase = function(input) {
  let string = '';
  //split input string into an array of characters
  let inputChar = input.split('');
  //capitalize first character
  inputChar[0] = inputChar[0].toUpperCase();
  //for each character in inputChar array
  for (let i = 0; i < inputChar.length; i++) {
    //if the char is a space, convert the next char to uppercase
    if (inputChar[i] === ' ') inputChar[i + 1] = inputChar[i + 1].toUpperCase();
    string += inputChar[i]; //add character to string
  }
  return string;
}

const vowelCase = function(input) {
  let string = '';
  //split input string into an array of characters
  let inputChar = input.split('');
  //for each character in inputChar array
  for (let i = 0; i < inputChar.length; i++) {
    //if the char is a vowel, capitalize it
    if (inputChar[i] === 'a' || inputChar[i] === 'e' || inputChar[i] === 'i' || inputChar[i] === 'o' || inputChar[i] === 'u') {
      inputChar[i] = inputChar[i].toUpperCase();
    }
    string += inputChar[i]; //add character to string
  }
  return string;
}

const consonantCase = function(input) {
  let string = '';
  //split input string into an array of characters
  let inputChar = input.split('');
  //for each character in inputChar array
  for (let i = 0; i < inputChar.length; i++) {
    //if the char is a consonant, capitalize it
    if (!(inputChar[i] === 'a' || inputChar[i] === 'e' || inputChar[i] === 'i' || inputChar[i] === 'o' || inputChar[i] === 'u')) {
      inputChar[i] = inputChar[i].toUpperCase();
    }
    string += inputChar[i]; //add character to string
  }
  return string;
}

const upperCase = function(input) {
  let string = '';
  //split input string into an array of characters
  let inputChar = input.split('');
  //for each character in inputChar array
  for (let i = 0; i < inputChar.length; i++) {
    //capitalize the character and then add it to string
    inputChar[i] = inputChar[i].toUpperCase();
    string += inputChar[i]; //add character to string
  }
  return string;
}

const lowerCase = function(input) {
  let string = '';
  //split input string into an array of characters
  let inputChar = input.split('');
  //for each character in inputChar array
  for (let i = 0; i < inputChar.length; i++) {
    //lowercase the character and then add it to string
    inputChar[i] = inputChar[i].toLowerCase();
    string += inputChar[i]; //add character to string
  }
  return string;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is a string", "lower"));
console.log(makeCase("this is a string", ["upper", "snake", "kebab"]));