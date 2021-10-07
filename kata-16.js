const makeCase = function (input, cases) {
  //create a sorted array for case
  let sortedArray = [];
 
  //call appropriate helper functions depending on type of case
  if (typeof cases === 'string') {
    //call a helper function to parse string
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

console.log(makeCase("this is a string", ["lower","kebab","upper", "snake", "camel"]));