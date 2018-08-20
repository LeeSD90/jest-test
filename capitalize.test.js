const capitalize = require ('./capitalize.js');

test('it should capitalize the first letter in the string', () => {
  expect(capitalize('hello')).toMatch('Hello');
})

test('it should capitalize the first letter in the string', () => {
  expect(capitalize('goodbye')).toMatch('Goodbye');
})