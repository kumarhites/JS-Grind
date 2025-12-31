const addKey = (obj, key, value) => {
    obj[key] = value;
    return obj;
}

const user = {
    name: "Hitesh"
}
console.log(addKey(user, "age", 30));
