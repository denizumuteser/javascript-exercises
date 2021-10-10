const getTheTitles = function(mylist) {
    let output = [];
    for (let i = 0; i < mylist.length; i++) {
        output.push(mylist[i]["title"]);
    }
    return output;
};

// Do not edit below this line
module.exports = getTheTitles;
