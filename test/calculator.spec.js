const expect = require('chai').expect;
const calculator = require('../calculator');
// const {add, minus, mult, div, equals} = calculator;

describe('calculator', () => {
  it('adds numbers', () => {
    expect(calculator.add(5,6)).to.eql(11);
  });
  it('subtracts numbers', () => {
    expect(calculator.minus(5,6)).to.eql(-1);
  });
  it('multiplies numbers', () => {
    expect(calculator.mult(5,6)).to.eql(30);
  });
  it('divides numbers', () => {
    expect(calculator.div(5,6)).to.eql(5/6);
  });
})