const leapYears = function(year) {
    let isleap = false;
    if (year % 4 === 0)
    {
        isleap = true;
    }        
    if (year % 100 === 0)
    {
        if (year % 400 === 0) {
            isleap = true;
        }
        else
        {
            isleap = false;
        }
    }
    return isleap;
};

// Do not edit below this line
module.exports = leapYears;
