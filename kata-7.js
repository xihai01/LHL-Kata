const checkAir = function (samples, threshold) {
  // create a variable tha keeps track of dirty samples
  let numOfDirty = 0;
  //for each sample in array, log number of dirty samples
  for (const sample of samples) {
    if (sample === 'dirty') numOfDirty ++;
  }
  //do some math to calculate threshold
  let actualThreshold = numOfDirty / samples.length;
  //determine if air is polluted or clean by comparing threshold
  return (actualThreshold < threshold) ? 'Clean' : 'Polluted';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))