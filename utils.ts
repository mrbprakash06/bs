export function search<T>(
  array: T[],
  value: T,
  accessor: (item: T) => number,
): T | undefined {
  if (array.length === 0) {
    return undefined;
  }

  let low = 0;
  let high = array.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (accessor(array[mid]!) < accessor(value)) {
      low = mid + 1;
    } else if (accessor(array[mid]!) > accessor(value)) {
      high = mid - 1;
    } else {
      return array[mid];
    }
  }

  return undefined;
}

export function smallestlarger<T>(
  array: T[],
  value: T,
  accessor: (item: T) => number,
): T | undefined {
  if (array.length === 0) {
    return undefined;
  }

  let low = 0;
  let high = array.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (accessor(array[mid]!) > accessor(value)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return array[low];
}
