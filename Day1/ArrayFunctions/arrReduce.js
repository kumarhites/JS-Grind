let arr = [1,2,3,4,5,6,7,8,9];

const sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log("in built reduce sum", sum);

const arrReduce = (arr, callback, initialValue) => {
    if(!Array.isArray(arr)) throw new TypeError("arrReduce expects an Array");
    if(typeof callback !== "function") throw new TypeError("callback must be a function");

    let accumulator;
    let startIndex = 0;

    // if initialValue value is provided used it else use first Element
    if(initialValue !== undefined){
        accumulator = initialValue;
    }else{
        if(arr.length === 0) throw new TypeError("Reduce of empty array with no initial value");
        accumulator = arr[0];
        startIndex = 1;
    }

    // iterate through the array and apply callback
    for(let i = 0; i < arr.length; i++){
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;

}


// Test cases
console.log("\n--- Custom arrReduce Tests ---");

// Test 1: Sum with initial value
const customSum = arrReduce(arr, (acc, curr) => acc + curr, 0);
console.log("Custom reduce sum:", customSum); // Should be 45

// Test 2: Sum without initial value
const customSum2 = arrReduce(arr, (acc, curr) => acc + curr);
console.log("Custom reduce sum (no initial):", customSum2); // Should be 45

// Test 3: Product
const product = arrReduce(arr, (acc, curr) => acc * curr, 1);
console.log("Custom reduce product:", product); // Should be 362880

// Test 4: Concatenate strings
const words = ["Hello", " ", "World"];
const sentence = arrReduce(words, (acc, curr) => acc + curr, "");
console.log("Custom reduce concatenate:", sentence); // Should be "Hello World"

// Test 5: Max value
const maxVal = arrReduce(arr, (acc, curr) => (curr > acc ? curr : acc));
console.log("Custom reduce max:", maxVal); // Should be 9

// Test 6: Min value
const minVal = arrReduce(arr, (acc, curr) => (curr < acc ? curr : acc));
console.log("Custom reduce min:", minVal); // Should be 1

// Test 7: Count occurrences
const nums = [1, 2, 2, 3, 3, 3];
const count = arrReduce(nums, (acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log("Custom reduce count:", count); // Should be { '1': 1, '2': 2, '3': 3 }