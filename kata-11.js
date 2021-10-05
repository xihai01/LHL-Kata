//global math constants
const PI = 3.14159;

//function calculates the volume of a sphere
const sphereVolume = function (radius) {
  return (4 / 3) * PI * radius * radius * radius;
}

//function calculates the volume of a cone
const coneVolume = function (radius, height) {
  return PI * radius * radius * (height / 3);
}

//function calculates the volume of a prism
const prismVolume = function (height, width, depth) {
  return height * width * depth;
}

//function calculates total volume given an array of shape objects
const totalVolume = function (solids) {
  let totalVolume = 0;
  //go through each solid objects and calculate their volumes
  for (const shape of solids) {
    if (shape.type === 'sphere') totalVolume += sphereVolume(shape.radius);
    else if (shape.type === 'cone') totalVolume += coneVolume(shape.radius, shape.height);
    else totalVolume += prismVolume(shape.height, shape.width, shape.depth);
  }
  return totalVolume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);