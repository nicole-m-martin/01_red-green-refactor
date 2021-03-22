const copyAndPush = require('./copyAndPush');

describe('Copy and Push Function', () => {
  it('returns a new array with all the items in the original array and a new item pushed to the end', () => {
    const arr = [1, 2, 3];
    const arrCopy = copyAndPush(arr, 4);
    expect(arrCopy).toEqual([...arr, 4]);
  });
});

describe('Copy and Push Function original array', () => {
  it('returns the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = arr;
    expect(originalArr).toEqual([1, 2, 3]);
  });
});
