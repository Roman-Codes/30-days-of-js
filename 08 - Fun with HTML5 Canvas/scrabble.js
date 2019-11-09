const array = [1,2,3,4,5,6,7];

const map = (array, cb) => {
    const newArr = [];
    for (let i = 0; i < array.length; i++){
        newArr.push(cb(array[i]));
    }; 
    return newArr;
}