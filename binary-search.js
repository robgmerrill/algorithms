function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        // console.log(start, middle, end);
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    // console.log(start, middle, end);
    if (arr[middle] === elem) {
      return middle;
    }
    return -1;
}
console.log(binarySearch([2,3,4,5,6,7], 15));
console.log(binarySearch([2,3,4,5,6,7], 5));
