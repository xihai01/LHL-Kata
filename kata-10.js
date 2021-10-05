const multiplicationTable = function(maxValue) {
  let string = '';
  for (let row = 1; row <= maxValue; row++) {
    for (let col = 1; col <= maxValue; col++) {
      //add multiplication values of current row seperated by spaces to string
      string += `${row * col} `;
    }
    //insert a new line at end of each row to create a table
    string += '\n';
  }
  return string;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));