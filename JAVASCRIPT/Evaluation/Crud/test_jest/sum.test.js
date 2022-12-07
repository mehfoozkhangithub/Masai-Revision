const sum = require('./sum');//ES5 syntax

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(4);
});