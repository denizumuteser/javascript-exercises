const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
};

const multiply = function(a,b) {
  let mul = 1;
  for (let i = 0; i < a.length; i++) {
    mul *= a[i];
  }
  return mul;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let sum = 1;
	for (let i = 0; i < a; i++) {
    sum *= i+1;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
