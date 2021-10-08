const removeFromArray = function(myarray, ...myvalue) {
    let output = [];
    let remove;
    for (let i = 0; i < myarray.length; i++) {
        remove = false;
        for (let ii = 0; ii < myvalue.length; ii++) {
            if (myarray[i] == myvalue[ii] && (typeof myarray[i] == typeof myvalue[ii]))
            {
                remove = true;
            }    
        }
        if (!remove)
        {
            output.push(myarray[i]);
        }
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
