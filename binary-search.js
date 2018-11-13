// Binary Search
function binarySearch(arr, elem) {
  	// define `start`
    var start = 0;
  	// define `end`
    var end = arr.length - 1;
  	// round down to define `middle`
    var middle = Math.floor((start + end) / 2);
  	// while `middle` is not a match `elem` and `start`
    // is less than or equal to `end`
    while(arr[middle] !== elem && start <= end) {
      if (elem < arr[middle]) {
        // if `elem` is less than `middle` create new `end`
          end = middle - 1;
      } else {
        // if `elem` is greater than `middle` create new `start`
          start = middle + 1;
      }
      // based on new `start` or `end` redefine `middle`
      middle = Math.floor((start + end) / 2);
    }
  	// if match, return `middle`
    if (arr[middle] === elem) {
      return middle;
    }
  	// if no match, return `-1`
    return -1;
}
console.log(binarySearch([2,3,4,5,6,7], 15)); // -1
console.log(binarySearch([2,3,4,5,6,7], 5)); // 3
// find more at javascriptbootcamp.tech
