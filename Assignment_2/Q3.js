"use strict";
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr6 = [];
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] % 2 != 0) {
        arr6.push(arr5[i]);
    }
}
console.log(arr6);
