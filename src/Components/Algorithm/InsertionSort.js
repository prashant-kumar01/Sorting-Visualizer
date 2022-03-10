export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  //   const auxiliaryArray = array.slice();
  insertionSort(array, array.length, animations);
  //   insertionSort(array,array.length,animations);
  console.log(animations);
  return animations;
}
function insertionSort(inputArr, n, animations) {
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < inputArr[j]) {
      inputArr[j + 1] = inputArr[j];
      animations.push([i, j]);
      animations.push([i, j]);
      animations.push([j, inputArr[j]]);
      j--;
    }
    inputArr[j + 1] = current;
    animations.push([i, n-1]);
    animations.push([i, n-1]);
    animations.push([i, inputArr[i]]);
  }
  animations.push([0, 0]);
    animations.push([0, 0]);
    animations.push([0, inputArr[0]]);
}
