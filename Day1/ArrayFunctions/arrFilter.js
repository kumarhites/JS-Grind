let arr = [1,2,3,4,5,6,7,8,9];

const filteredArr = arr.filter(ele => ele % 2 === 0);

const arrFilter = (arr, callBackFn) => {
    if(!Array.isArray(arr)) throw new TypeError('arrFilter is expecting an array');
    const customFilterArr = [];
    for(let i = 0; i < arr.length; i++){
        if(callBackFn(arr[i], i, arr)){
            if(callBackFn(arr[i], i, arr)){
                customFilterArr.push(arr[i]);
            }
        }
    }
    return customFilterArr;
}

console.log("original Filter function: ", filteredArr);
console.log("original arr: ", arr);
console.log("customFilterArr: ", arrFilter(arr, ele => ele % 2 === 0));