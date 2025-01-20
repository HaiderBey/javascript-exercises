const removeFromArray = function(array, ...elements) {
    for (let e of elements){
        array = array.filter(item => item !== e);
    }
    // for (let e of elements){
    //     while(array.indexOf(e) != -1) {
    //         array.splice(array.indexOf(e),1);
    //     }
    // }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
