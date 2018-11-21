function merge(arr1, arr2){
    // declare placeholder array to return in the end
    let results = [];
    // initialize `i` and `j` to 0 to compare elements of each array
    let i = 0;
    let j = 0;
    // while both i and j are still looping through the array and haven't reached the end
    while(i < arr1.length && j < arr2.length){
        // this can be done in either order
        // check if j of arr2 is greater than i of arr1
        if(arr2[j] > arr1[i]){
            // push the smaller arr1[i] into the results array
            results.push(arr1[i]);
            // increment i by one to begin to compare the next element in arr1 to arr2
            i++;
        } else {
            // if arr1[i] is greater then push the smaller arr2[j] into results array
            results.push(arr2[j])
            // increase j by 1 to compare next element in arr2 to arr1
            j++;
        }
    }
    // when the above while loop is broken out of (meaning that one of the arrays has reached their end)
    // if there is still room in the arr1 array
    while(i < arr1.length) {
        // push next element into results array
        results.push(arr1[i])
        // iterate i by one until you reach the end
        i++;
    }
    // same as above if arr2 is the longer array
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    // return final results array
    return results;
}
console.log(merge([100,200], [1,2,3,5,6]));
