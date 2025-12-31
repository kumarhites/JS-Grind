let arr = [1,2,3,4,5,6,7,8];


//double elements in array
const doubled = arr.map(ele => ele * 2);

const arrMap = (arr, callbackFn) => {
    if (!Array.isArray(arr)) throw new TypeError("arrMap expects an array");
    let customMapArr = [];
    for(let i = 0; i < arr.length; i++){
        customMapArr.push(callbackFn(arr[i], i, arr));
    }
    return customMapArr;

}



console.log("Original array: ", arr);
console.log("in built map fn: ", doubled);
console.log("custom map fn: ", arrMap(arr, x => x * 2));