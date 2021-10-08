const ftoc = function(number) {
  let output = (number-32)*(5.0/9.0)
  return Math.round(output*10)/10
};

const ctof = function(number) {
  let output = (number*9.0/5.0)+32
  return Math.round(output*10)/10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
