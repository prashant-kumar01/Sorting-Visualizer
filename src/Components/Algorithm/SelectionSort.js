export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  selectionSort(array, array.length, animations);
  return animations;
}
function selectionSort(inputArr, n, animations) {
  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
        animations.push([i, j]);
        animations.push([i, j]);
        animations.push([min, inputArr[min]]);
      if (inputArr[j] < inputArr[min]) {
        min = j;
        animations.push([i, j]);
        animations.push([i, j]);
        animations.push([min, inputArr[min]]);
      }
    }
    if (min != i) {
      // Swapping the elements
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
      animations.push([i, min]);
      animations.push([i, min]);
      animations.push([i, inputArr[i]]);
    }
  }
  animations.push([n-1, n-1]);
  animations.push([n-1, n-1]);
  animations.push([n-1, inputArr[n-1]]);
}
