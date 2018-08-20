const caesar = require('./caesar');

test('it encodes the word using caesar cipher', () => {
  expect(caesar("hello", 7)).toBe('olssv');
});

test('it encodes the sentence using caesar cipher, without shifting punctuation', () => {
  expect(caesar("Hello! This is a super secret.", 7)).toBe('Olssv! Aopz pz h zbwly zljyla.');
});

test('it encodes the string using caesar cipher with a negative shift', () => {
  expect(caesar("my oLd frieNd", -7)).toBe('fr hEw ykbxGw');
});

test('it correctly loops a-z', () => {
  expect(caesar("wxyz", 4)).toBe('abcd');
});