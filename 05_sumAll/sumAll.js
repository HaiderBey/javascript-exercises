const sumAll = function(start,end) {
    
    if(!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if(start < 0 || end < 0) return "ERROR";
    
    if(start > end) {
        const aux = start;
        start = end;
        end = aux;
    }

    let result = 0;
    for(;start <= end; start++) {
        result += start;
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;
