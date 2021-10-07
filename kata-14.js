const calculateChange = function (total, cash) {
  //create a new object to hold the change
  let changeObject = new Object(); 
  //create a variable to store the difference in total and cash
  let difference = cash - total;

  //while difference is greater or equal to 0
  while (difference != 0) {
    if (difference >= 2000) {
      //add a twentyDollar property to object if property doesn't exist, otherwise, increment the property by 1
      checkProperty(changeObject, 'twentyDollar');
      //update difference
      difference -= 2000;
    } else if (difference >= 1000) {
      checkProperty(changeObject, 'tenDollar');
      difference -= 1000;
    } else if (difference >= 500) {
      checkProperty(changeObject, 'fiveDollar');
      difference -= 500;
    } else if (difference >= 200) {
      checkProperty(changeObject, 'twoDollar');
      difference -= 200;
    } else if (difference >= 100) {
      checkProperty(changeObject, 'oneDollar');
      difference -= 100;
    } else if (difference >= 25) {
      checkProperty(changeObject, 'quarter');
      difference -= 25;
    } else if (difference >= 10) {
      checkProperty(changeObject, 'dime');
      difference -= 10;
    } else if (difference >= 5) {
      checkProperty(changeObject, 'nickle');
      difference -= 5;
    } else {
      checkProperty(changeObject, 'penny');
      difference -= 1;
    }
  }
  return changeObject;
}

const checkProperty = function (changeObject, property) {
  if (!(changeObject.hasOwnProperty(property))) changeObject[property] = 1;
  else changeObject[property]++;
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));