let cur = 0;
let temp = [];
let build = true;

const add = (num1,num2) => {
  if(num2) {
    cur = num1 + num2;
  } else {
    cur += num1;
  }
  return cur;
}

const minus = (num1,num2) => {
  if(num2) {
    cur = num1 - num2;
  } else {
    cur -= num1;
  }
  return cur;
}

const mult = (num1,num2) => {
  if(num2) {
    cur = num1 * num2;
  } else {
    cur *= num1;
  }
  return cur;
}

const div = (num1,num2) => {
  if(num2) {
    cur = num1 / num2;
  } else {
    cur /= num1;
  }
  return cur;
}

const clear = (num1,num2) => {
  temp = [];
  cur = 0;
  return cur;
}
const computations = {
  add,
  minus,
  mult,
  div
}

const compute = (fn,num1,num2) => {
  fn(num1,num2);
}

if(typeof module !== 'undefined') {
  module.exports =  {
    add,
    minus,
    mult,
    div,
    compute,
    clear
  };
}