const capitalizeAndFilter = require('./capitalizeAndFilter');

describe('capitalizeAndFilter Function', () => {
  it('should return a function that takes an array of strings capitalize all strings and filter out any string that starts with the letter f', () => {
    const foxArray = [
      'the',
      'quick',
      'brown',
      'fox',
      'jumps',
      'over',
      'the',
      'lazy',
      'dog',
    ];

    const filterFoxArray = capitalizeAndFilter(foxArray);
    expect(filterFoxArray).toEqual([
      'THE',
      'QUICK',
      'BROWN',
      'JUMPS',
      'OVER',
      'THE',
      'LAZY',
      'DOG',
    ]);
  });
});
