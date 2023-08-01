function getRandomArray() {
  const length = getNumberTillHundred();
  const arr = [];

  for (let i = 0; i < length; i++) {
    arr.push(getNumberTillHundred());
  }

  return arr;
}

const getNumberTillHundred = () => Math.floor(Math.random() * 10) + 1;

export default getRandomArray;
