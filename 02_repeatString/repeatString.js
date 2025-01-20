const repeatString = function(text,x) {
    if(x < 0) return "ERROR";
    let string = ""
    for(let i = 0; i < x; i++) {
        string += text;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
