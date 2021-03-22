const getName = require('./getName');

describe('getName Function Dog', () => {
  it('should return the name property of an object', () => {
    const dog = {
      name: 'spot',
      age: 5,
      weight: '20 lbs',
    };
    const dogName = getName(dog);
    expect(dogName).toEqual('spot');
  });
});

describe('getName Function Char', () => {
  it('should return the name property of an object', () => {
    const char = {
      _id: '5cf5679a915ecad153ab68c9',
      name: 'Aang',
    };
    const charName = getName(char);
    expect(charName).toEqual('Aang');
  });
});
