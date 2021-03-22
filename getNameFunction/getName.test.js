const getName = require('./getName');

describe('getName Function', () => {
  it('should return the name property of an object', () => {
    const dog = {
      name: ['spot'],
      age: [5],
      weight: ['20 lbs'],
    };
    const dogName = getName(dog);
    expect(dogName).toEqual(['spot']);
  });
});
