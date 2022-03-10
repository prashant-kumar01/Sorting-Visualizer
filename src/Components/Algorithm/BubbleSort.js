export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  bubbleSort(array, array.length - 1, auxiliaryArray, animations);
  console.log(auxiliaryArray + '\n');
  return animations;
}
function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

// An optimized version of Bubble Sort
function bubbleSort(arr, n, auxiliaryArray, animations) {
  var i, j;
  for (i = 0; i <n; i++) {
    for (j = 0; j <n - i; j++) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (auxiliaryArray[j] < auxiliaryArray[j + 1]) {
        swap(auxiliaryArray, j, j + 1);
        animations.push([i, auxiliaryArray[j + 1]]);
      } else {
        animations.push([i, auxiliaryArray[j + 1]]);
      }
    }
  }
  animations.push([i, j]);
  animations.push([i, j]);
  animations.push([i, auxiliaryArray[0]]);
  console.log(animations[i]);
}
