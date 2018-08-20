const reverse = require ('./reverse.js');

test('it reverses the string', () => {
  expect(reverse('Hello')).toMatch('olleH');
})

test('it reverses the string', () => {
  expect(reverse('reveRse')).toMatch('esRever');
})

test('it reverses the string', () => {
  expect(reverse('Hello world.')).toMatch('.dlrow olleH');
})