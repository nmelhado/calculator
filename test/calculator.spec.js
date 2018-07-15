const expect = require('chai').expect;
const calculator = require('../calculator');
// const {add, minus, mult, div, equals} = calculator;

describe('calculator', () => {
  it('adds numbers', () => {
    expect(calculator.add(5,6)).to.eql(11);
  });
  it('adds one number to the previous', () => {
    expect(calculator.add(6)).to.eql(17);
  });
  it('subtracts numbers', () => {
    expect(calculator.minus(5,6)).to.eql(-1);
  });
  it('multiplies numbers', () => {
    expect(calculator.mult(6)).to.eql(-6);
  });
  it('divides numbers', () => {
    expect(calculator.div(5,6)).to.eql(5/6);
  });
})