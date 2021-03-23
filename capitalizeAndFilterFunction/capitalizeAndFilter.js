const capitalizeAndFilter = (word) => {
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].toUpperCase();
  }
  return word.filter((fItem) => fItem.charAt(0) !== 'F');
};

module.exports = capitalizeAndFilter;
