// input is an multi-array consisting of parking spots and a string of a car type: 'regular', 'small', motorcycle'
// regular cars can only park in R spots
// small cars can park in R or S spots
// motorcycles can park in R or S or M spots
// uppercase means available
// lower case means unavailable


const whereCanIPark = function (spots, vehicle) {
  for (let y = 0; y < spots.length; y++) { // rows
    for (let x = 0; x < spots[y].length; x++) { // col
      if (vehicle === 'regular' && spots[y][x] === 'R') {
        return [x, y];
      } else if (vehicle === 'small' && (spots[y][x] === 'R' || spots[y][x] === 'S')) {
        return [x, y];
      } else if (vehicle === 'motorcycle' && (spots[y][x] === 'R' || spots[y][x] === 'S' || spots[y][x] === 'M')) {
        return [x, y];
      }
    }
  }
  //return false if no parking spaces available
  return false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))