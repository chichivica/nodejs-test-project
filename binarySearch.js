/**
 * Created by Ivan Talalaev on 1/20/2017.
 */

let array = [1, 2, 4, 6, 8, 9, 29, 29, 29, 29, 29, 29, 29, 29, 45, 60, 73, 90];

function binSearchRecurUpperBound(array, key, left, right) { //key < array[right]

  let middle = Math.floor((left + right) / 2);
  if (left >= right - 1) {
    if (array[left] == key) {
      return left;
    } else {
      return -1;
    }
  }
  if (key < array[middle]) {
    return binSearchRecurUpperBound(array, key, left, middle);
  } else {
    return binSearchRecurUpperBound(array, key, middle, right);
  }
}

function binSearchRecurLowerBound(array, key, left, right) { //array[left] < key
  let middle = Math.floor((left + right) / 2);
  if (left >= right - 1) {
    if (array[right] == key) {
      return right;
    } else {
      return -1;
    }
  }
  if (array[middle] < key) {
    return binSearchRecurLowerBound(array, key, middle, right);
  } else {
    return binSearchRecurLowerBound(array, key, left, middle);
  }
}

function binSearchIterativeLowerBound(array, key, left, right) { //array[right] >= key
  while (left < right - 1) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] < key) {
      left = middle
    } else {
      right = middle
    }
  }
  if (array[right] == key) {
    return right;
  } else {
    return -1;
  }
}

function binSearchIterativeUpperBound(array, key, left, right) { //array[left] <= key
  while (left < right - 1) {
    let middle = Math.floor((left + right) / 2);
    if (key < array[middle]) {
      right = middle;
    } else {
      left = middle;
    }
  }
  if (array[left] == key) {
    return left;
  } else {
    return -1;
  }
}


module.exports = {
  lowerBound: {
    iterative: binSearchIterativeLowerBound,
    recursive: binSearchRecurLowerBound
  },
  upperBound: {
    iterative: binSearchIterativeUpperBound,
    recursive: binSearchRecurUpperBound
  }
};