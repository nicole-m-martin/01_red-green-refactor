const copyAndPush = require('./copyAndPush');

describe('Copy and Push Function', () => {
  it('returns a new array with all the items in the original array and a new item pushed to the end', () => {
    const arr = [1, 2, 3];
    const newArr = copyAndPush(arr, 4);
    expect(newArr).toEqual([1, 2, 3, 4]);
  });
});
