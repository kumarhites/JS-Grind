//push(immutable)
const arrPushImmutable = (arr, ...elements) => {
  if (!Array.isArray(arr)) throw new TypeError("arrPush expects an array");
  return [...arr, ...elements];
};

//push(mutable)
const arrPushMutable = (arr, ...elements) => {
    let len = arr.length;
    if (!Array.isArray(arr)) throw new TypeError("arrPush expects an array");
    for(let i = 0; i < elements.length; i++){
        arr[len] = elements[i];
        len++;
    }
    return len;
}






let arr = [1, 2, 3, 4];

console.log("original arr:", arr);
console.log("arrPushImmutable(arr, 5, 6, 7):", arrPushImmutable(arr, 5, 6, 7, 8));
console.log("arrPushMutable(arr, 5, 6, 7) length:", arrPushMutable(arr, 5, 6, 7, 8));
console.log("arrPushMutable(arr, 5, 6, 7) mutated arr:", arr);