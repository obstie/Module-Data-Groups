const tally = require("./tally.js");

/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a', 'a', 'a']), target output: { a: 3 }
 * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
 */

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item

// Given an empty array
// When passed to tally
// Then it should return an empty object
test.todo("tally on an empty array returns an empty object");

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error



describe('tally function', () => {
  test('counts frequency of items in an array', () => {
    expect(tally(['a'])).toEqual({ a: 1 });
    expect(tally(['a', 'a', 'a'])).toEqual({ a: 3 });
    expect(tally(['a', 'a', 'b', 'c'])).toEqual({ a: 2, b: 1, c: 1 });
  });

  // Empty arrays
  test('returns empty object for empty array', () => {
    expect(tally([])).toEqual({});
  });

  // Case sensitive
  test('handles case sensitivity correctly', () => {
    expect(tally(['a', 'A', 'a'])).toEqual({ a: 2, A: 1 });
  });

  // Invalid input
  describe('invalid inputs', () => {
    test('throws error for string input', () => {
      expect(() => tally('hello')).toThrow('Input must be an array');
    });

    test('throws error for number input', () => {
      expect(() => tally(123)).toThrow('Input must be an array');
    });

    test('throws error for object input', () => {
      expect(() => tally({ key: 'value' })).toThrow('Input must be an array');
    });

    test('throws error for null input', () => {
      expect(() => tally(null)).toThrow('Input must be an array');
    });

    test('throws error for undefined input', () => {
      expect(() => tally(undefined)).toThrow('Input must be an array');
    });
  });
});