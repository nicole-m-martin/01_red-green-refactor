const copyAndPush = (arr, newNum) => {
  const arrCopy = [...arr];
  arrCopy.push(newNum);
  return arrCopy;
};

module.exports = copyAndPush;
