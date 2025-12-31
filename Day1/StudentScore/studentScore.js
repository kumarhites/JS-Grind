const calculateFinalScore = (obj) => {

    if(obj === null){
        throw new TypeError("Object cannot be null or undefined!");
    }

    let sum = 0;
    let len = 0;
    const marks = Object(obj);
    for(let key in marks){
        len++;
        sum = sum + marks[key];
    }
    return (sum/len).toFixed(2);
}



console.log("Final score is",calculateFinalScore({ math: 80, science: 75, english: 90 }));
// "Final score is 81.66"
