// What It Does
// Description: Array.prototype.pop() removes the last element from an array and returns that element. It mutates the array (changes its length).

// Signature
// arr.pop() → returns the removed element or undefined if the array was empty.

const arrPop = (arr) => {
  if (!Array.isArray(arr)) throw new TypeError("arrPop expects an array");
  const length = arr.length;
  if (length === 0) return undefined;
  const lastIndex = length - 1;
  const lastEle = arr[lastIndex];
  // Remove the last element by reducing the length (mutates the array)
  arr.length = lastIndex;
  return lastEle;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array: ",arr);
console.log(`length of array before pop ${arr.length}`);
console.log("Array pop", arrPop(arr));
console.log(`length of array after pop ${arr.length}`);
console.log("Updated array: ", arr)
