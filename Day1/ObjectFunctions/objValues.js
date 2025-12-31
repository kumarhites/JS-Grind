const objValues = (obj) => {
    if(obj === null){
        throw new TypeError("Cannot convert undefined or null to Objects");
    }

    const object = Object(obj);
    const values = [];

    for(const key in object){
        if(object.hasOwnProperty(key)){
            values.push(JSON.stringify(obj[key]));
        }
    }
    return values;
}

console.log(objValues({ a: 1, b: 2, c: 3 }));