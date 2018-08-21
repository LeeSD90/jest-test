const analyze = require('./analyze');

test('it returns the correct average, min, max and length for a given array of numbers', () => {
  const result = analyze([1,8,3,4,2,6]);
  expect(result.average).toBe(4);
  expect(result.min).toBe(1);
  expect(result.max).toBe(8);
  expect(result.length).toBe(6);
});

test('it returns the correct average, min, max and length for a given array of numbers', () => {
  const result = analyze([-1,25,3,4,2,6, 10, 5, 17]);
  expect(result.average).toBeCloseTo(7.88888888888);
  expect(result.min).toBe(-1);
  expect(result.max).toBe(25);
  expect(result.length).toBe(9);
});

test('it returns the correct average, min, max and length for a given array of numbers', () => {
  const result = analyze([10,10,10]);
  expect(result.average).toBeCloseTo(10);
  expect(result.min).toBe(10);
  expect(result.max).toBe(10);
  expect(result.length).toBe(3);
});

test('it returns the correct average, min, max and length for a given array of numbers', () => {
  const result = analyze([1]);
  expect(result.average).toBe(1);
  expect(result.min).toBe(1);
  expect(result.max).toBe(1);
  expect(result.length).toBe(1);
});