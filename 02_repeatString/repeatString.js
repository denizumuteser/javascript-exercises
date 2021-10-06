const repeatString = function(s, n) {
    let output = ''
    if (n < 0) {
        return 'ERROR'
    }
    for (let i = 0; i < n; i++) {
        output += s
    }
    return output
};

// Do not edit below this line
module.exports = repeatString;
