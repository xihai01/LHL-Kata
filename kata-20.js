const blocksAway = function(directions) {
  //return an object of east and north directions
  let obj = {east: 0, north: 0};
  //split into directions and blocks array
  const direction = [];
  const block = [];
  direction[0] = directions[0];
  for (let i = 1; i < directions.length; i++) {
    //if is even, push to direction
    if (i % 2 === 0) direction.push(directions[i]);
    else block.push(directions[i]);
  }
  
  //create a variable to keep track of taxi pos ( 0 deg => up, 90 deg => right, 
  //-90 deg => left, 180/-180 deg => down)
  let carPos = 0;
  let coords = [0, 0]; //[east, north]
  for (let i = 0; i < direction.length; i++) {
    //update carPos
    if (direction[i] === 'right') carPos += 90;
    else carPos += (-90);

    //update coords
    if (carPos === -90) {
      coords[0] += (-1) * block[i];
    } else if (carPos === 90) {
      coords[0] += block[i];
    } else if (carPos === 180 || carPos === -180) {
      coords[1] += (-1) * block[i];
    } else {
      coords[1] += block[i];
    }
  }
  //the coordinates mush be positive integers
  coords[0] = Math.abs(coords[0]);
  coords[1] = Math.abs(coords[1]);

  obj.east = coords[0];
  obj.north = coords[1];
  return obj;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));