const makeCase = function (input, cases) {
  //create a sorted array for case
  let sortedArray = [];
 
  //call appropriate helper functions depending on type of case
  if (typeof cases === 'string') {
    //call a helper function to parse string
    return parseString(input, cases);
  } else {
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
  }
  return sortedArray;
}

const parseString = function (input, cases) {
  let string = '';
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

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));