function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const mid = arr.length / 2;
    const leftSide = arr.slice(0, mid);
    const rightSide = arr.slice(mid);
    return merge(mergeSort(leftSide), mergeSort(rightSide));
  }
}

function merge(leftSide, rightSide) {
  const sortArray = [];
  const ls = leftSide.length;
  const rs = rightSide.length;
  let li = 0;
  let ri = 0;

  for (; li < ls && ri < rs; ) {
    if (leftSide[li] < rightSide[ri]) {
      sortArray.push(leftSide[li++]);
    } else {
      sortArray.push(rightSide[ri++]);
    }
  }

  for (; li < ls; li++) {
    sortArray.push(leftSide[li]);
  }
  for (; ri < rs; ri++) {
    sortArray.push(rightSide[ri]);
  }

  return sortArray;
}

export default mergeSort;
