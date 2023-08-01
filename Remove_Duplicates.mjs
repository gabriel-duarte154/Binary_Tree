function removeDuplicates(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i])) continue;
    newArr.push(arr[i]);
  }

  return newArr;
}

export default removeDuplicates;
