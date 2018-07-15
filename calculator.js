let cur = 0

const add = (num1,num2) => {
  if(num2) {
    return num1 + num2;
  }
  cur += num1;
  return cur; 
}

const minus = (num1,num2) => {
  if(num2) {
    return num1 - num2;
  }
  cur -= num1;
  return cur; 
}

const mult = (num1,num2) => {
  if(num2) {
    return num1 * num2;
  }
  cur *= num1;
  return cur; 
}

const div = (num1,num2) => {
  if(num2) {
    return num1 / num2;
  }
  cur /= num1;
  return cur; 
}

module.exports =  {
  add,
  minus,
  mult,
  div
};