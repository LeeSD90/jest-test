const calculator = require('./calculator');

test("it adds two numbers correctly", () => {
  calc = calculator();
  expect(calc.add(50, 12)).toBe(62);
});

test("it subtracts two numbers correctly", () => {
  calc = calculator();
  expect(calc.subtract(50, 12)).toBe(38);
});

test("it multiplies two numbers correctly", () => {
  calc = calculator();
  expect(calc.multiply(50, 12)).toBe(600);
});

test("it divides two numbers correctly", () => {
  calc = calculator();
  expect(calc.divide(50, 12)).toBeCloseTo(4.166666666666667);
});

test("it throws an error when dividing by zero", () => {
  calc = calculator();
  expect(function() { calc.divide(50, 0)}).toThrow(Error);
});