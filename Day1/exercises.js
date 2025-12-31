//reverse string
const inBuiltReverse = (str) => {
  const reverseString = str.split("").reverse().join("");
  return reverseString;
};

const customReverseString = (str) => {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
};

const string = "Hitesh 123";
console.log("in built reverse function: ", inBuiltReverse(string));
console.log("custom reverse function: ", customReverseString(string));

//even odd
const evenOdd = (num) => {
  return num % 2 === 0 ? "even" : "odd";
};

console.log(evenOdd(2));
console.log(evenOdd(3));

//max of 3
const maxOf3 = (a, b, c) => {
  return a > b && a > c ? a : b > c ? b : c;
};

maxOf3(2, 9, 0);

//count vowels
const countVowels = (str) => {
  let stringArr = str.toLowerCase().split("");
  let vowelCount = 0;
  for (let i = 0; i < stringArr.length; i++) {
    if (
      stringArr[i] == "a" ||
      stringArr[i] == "e" ||
      stringArr[i] == "i" ||
      stringArr[i] == "o" ||
      stringArr[i] == "u"
    ) {
      vowelCount++;
    }
  }
  return vowelCount;
};

console.log(countVowels("The quick brOwn fox Jumps ovEr the lazy dog"));

//remove duplicates
const removeDuplicates = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const removeDuplicatesSetVersion = (arr) => {
  return [...new Set(arr)];
};

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));
console.log(removeDuplicatesSetVersion([1, 2, 3, 2, 4, 1, 5]));

//sum of arrays
//custom
const sumOfArrays = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};


console.log(sumOfArrays([1, 2, 3, 2, 4, 1, 5]));
console.log(sumOfArrays([1, 2, 3, 2, 4, 1, 5]));

//compare object keys
const compareKeyCustom = (obj1, obj2) => {
  let count1 = 0;
  let count2 = 0;

  for (let key in obj1) {
    count1++;
  }
  for (let key in obj2) {
    count2++;
  }
  if (count1 !== count2) return false;

  for (let key in obj1) {
    let exists = false;

    for (let k in obj2) {
      if (key === k) {
        exists = true;
        break;
      }
    }
    if (!exists) return false;
  }
  return true;
};

console.log(
  compareKeyCustom({ name: "Hitesh", age: 29 }, { age: 40, name: "Amit" })
); // true
console.log(
  compareKeyCustom({ name: "Hitesh", age: 29 }, { name: "Hitesh", role: "Dev" })
); // false

// //merge arrays - without trailing zeros
// // Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// // Output: [1,2,2,3,5,6]
// // Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// // The result of the merge is [1,2,2,3,5,6].

// const mergedArr = (arr1, arr2) => {
//   let i = 0;
//   let j = 0;
//   let tempArr = [];

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       tempArr.push(arr1[i]);
//       i++;
//     } else {
//       tempArr.push(arr2[j]);
//       j++;
//     }
//   }
//   // Add remaining elements from arr1 (if any)
//   while (i < arr1.length) {
//     tempArr.push(arr1[i]);
//     i++;
//   }

//   // Add remaining elements from arr2 (if any)
//   while (j < arr2.length) {
//     tempArr.push(arr2[j]);
//     j++;
//   }
//   return tempArr;
// };


//merge arrays - with trailing zeros

const mergedArr = (arr1, arr2) => {
let i = arr1.length - 1;
let j = arr2.length - 1;
let k = arr1.length + arr2.length - 1;

while(i >= 0 && j >= 0){
  if(arr1[i] > arr2[j]){
    arr1[k] = arr1[i];
    i--;
  }else{
    arr1[k] = arr2[j];
    j--;
  }
  k--;
}
while(j >= 0){
  arr1[k] = arr2[j];
  j--;
  k--;
}
  return arr1;
}

const arr1 = [1, 2, 3];
const arr2 = [2, 5, 6];

console.log(mergedArr(arr1, arr2));

const mergeArraysCustom = (arr1, arr2) => {
  let merged = [];
  for (let i = 0; i < arr1.length; i++) merged.push(arr1[i]);
  for (let i = 0; i < arr2.length; i++) merged.push(arr2[i]);
  return merged;
};
console.log(mergeArraysCustom([1,2,3], [2,3,4]));

//find index

const findIndex = (arr, ele) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === ele) return i;
   
  } 
  return -1;
}
console.log(findIndex([10, 20, 30, 40], 10));

//toTitleCase
const toTitleCase = (str) => {
  let result = "";
  let capitalizeNext = true;
  for(let i = 0; i < str.length; i++){
    if(str[i] === " " || str[i] === "\t" || str[i] === "\n"){
      result += str[i];
      capitalizeNext = true;
    }else{
      if(capitalizeNext){
        result += str[i].toUpperCase();
        capitalizeNext = false;
      }else{
        result += str[i].toLowerCase();
      }
    }
  }
  return result
}

console.log(toTitleCase("hello world from javaScript"));