function selectionSort(arr) {
  // loop through our array to compare our current index with the next index
    for (var i = 0; i < arr.length; i++) {
      // create `lowest` placeholder to store the index of lowest value
      // we will initially set this to index 0 of our array
        var lowest = i;
        // compare i to the rest of the array
        // i = 0, j = 1; i = 0, j = 2; i = 0, j = 3...
        // i = 1, j = 2; i = 1, j = 3; i = 1, j = 4...
        for (var j = i + 1; j < arr.length; j++) {
          // if the compared elements is lower than the value of the lowest stored index
            if (arr[j] < arr[lowest]) {
              // set lowest to the index of j
                lowest = j;
            }
        }
        // if the index of i and lowest are not already the same, swap.
        if (i !== lowest ) {
         var temp = arr[i];
         arr[i] = arr[lowest];
         arr[lowest] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));
