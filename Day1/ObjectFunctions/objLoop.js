const objLoop = (obj, parentKey = "") => {
    for(let key in obj){
        const fullKey = parentKey ? `${parentKey}.${key}` : key;

        if(typeof obj[key] === 'object' && obj[key]!== null){
            objLoop(obj[key], fullKey);
        }else{
            console.log(fullKey, ":", obj[key]);
        }
    }
}

const user = {
  name: "Hitesh",
  address: {
    city: "Jamshedpur",
    pin: {
      number: 831005,
      area: "Main Street",
      locality: {
        name: "near marine drive"
      }
    },
    street: {
        name: "tank road",
        landmark: "opp. bajrang akhara"
    }
  }
};


objLoop(user);
