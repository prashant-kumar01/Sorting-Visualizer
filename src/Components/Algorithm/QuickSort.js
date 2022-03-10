export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  //   const auxiliaryArray = array.slice();
  quickSort(array, 0, array.length-1, animations);
  return animations;
}
function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items, left, right,animations) {
  var pivotIndex=Math.floor((right + left) / 2);
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    animations.push([i, pivotIndex]);
    animations.push([i, pivotIndex]);
    animations.push([i, items[i]]);
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right, animations) {
  var index;
  if (items.length >=1) {
    index = partition(items, left, right,animations); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1, animations);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right, animations);
    }
    animations.push([left, index]);
    animations.push([left, index]);
    animations.push([index, items[index]]);
  }
}
