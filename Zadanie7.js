// Задание 7

const arr = [1, 2, 0, 5, 0, 9, 11, 0, true, 'Hello']; 
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
        if (arr[i] % 2 === 0 && arr[i] !== 0) {
            evenCount++
        } 
        else if (arr[i] !== 0) {
            oddCount++
        } 
        else {
            zeroCount++
        } 
    }
}

console.log ('В массиве: \nЧетных чисел : ' + evenCount + '\nНечетных чисел : ' + oddCount + '\nНулей : ' + zeroCount)