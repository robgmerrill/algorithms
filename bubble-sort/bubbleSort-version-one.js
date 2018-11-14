function bubbleSort(arr) {
 // iterate through our array
 for (var i = 0; i < arr.length; i++) {
    // this loop will allow us to compare all
    // our elements
    for (var j = 0; j < arr.length; j++) {
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

bubbleSort([12, 3, 9, 4, 2, 7])
// result -> [2, 3, 4, 7, 9, 12]
