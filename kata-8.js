const repeatNumbers = function(data) {
  //create a new string to return repeated values
  let string = '';
  //create a new counter variable to keep track of array index
  let i = 0;

  //go through each element in data array
  for (const element of data) {
    //extract the value to repeat and the number of times to repeat
    let value = element[0].toString();
    let numOfTimes = element[1];
    //add repeated value to string
    string += value.repeat(numOfTimes);
    //add a comma and space to string if the element is not the last entry of data array
    if (i !== data.length - 1) string += `, `;
    i++;
  }
  return string;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));