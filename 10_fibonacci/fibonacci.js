const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS"
    }
    let fibar = [1,1]
    for (let i = 2; i < n; i++) {
        let temp = fibar[i-2]+fibar[i-1];
        fibar.push(temp);
    }
    return fibar[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
