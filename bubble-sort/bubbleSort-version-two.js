function bubbleSort(arr) {
 // set `i` to length of array with a text case of `i > 0` and decrement value of
 // `i` by `1`.
 for (var i = arr.length; i > 0; i--) {
    // by setting the test case to `i - 1` we will avoid unessessary comparisons
    // for the last element that has already been sorted
    for (var j = 0; j < i - 1; j++) {
        console.log(arr, arr[j], arr[j+1]);
        // if lower index value is greater than
        // higher index, swap
        if (arr[j] > arr[j + 1]) {
           // set temp placeholder for value of lower index value
           var temp = arr[j];
           // set lower index value to higher index value
           arr[j] = arr[j+1];
           // set higher index value to `temp` placeholder to complete swap
           arr[j+1] = temp;
        }
    }
 }
 // return bubble sorted `arr`
 return arr;
}

console.log(bubbleSort([12, 3, 9, 4, 2, 7]));
// result -> [2, 3, 4, 7, 9, 12]
