
function largestElement(arr: number[]): number {
    var largest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
        largest = arr[i];
        }
    }
    return largest;
}
    var arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(largestElement(arr7));
