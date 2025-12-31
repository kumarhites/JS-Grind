const objDelete = (obj, key) => {
    delete obj[key];
    return obj;
}

const user = {
    name: "Hitesh",
    age: 20,
    address: "Narmada path"
};

console.log(objDelete(user, "address"));

