const expect = require('chai').expect;
const calculator = require('../calculator');
// const {add, minus, mult, div, equals} = calculator;

describe('calculator', () => {
  it('adds numbers', () => {
    expect(calculator.add(5,6)).to.eql(11);
  })
})