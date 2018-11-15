function bubbleSort(arr) {
 var noSwaps;
 for (var i = arr.length; i > 0; i--) {
     noSwaps = true;
    // this loop will move from the end `i - 1` which is decreasing after each
    // iteration to avoid unessessary comparisons
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
           noSwaps = false;
        }
    }
    if (noSwaps) break;
 }
 // return bubble sorted `arr`
 return arr;
}

console.log(bubbleSort([12, 1, 2, 3, 4]));
// result -> [1, 2, 3, 4, 12]
