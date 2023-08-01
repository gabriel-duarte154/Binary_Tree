import getRandomArray from './Random_Array.mjs';
import mergeSort from './Merge_Sort.mjs';
import removeDuplicates from './Remove_Duplicates.mjs';

function getSortedArray() {
  return mergeSort(removeDuplicates(getRandomArray()));
}

export default getSortedArray;
