let currentDate = new Date() 

const findTheOldest = function(mylist) {
    let oldest = mylist[0];
    let tempAge;
    let oldestAge;
    if (!("yearOfDeath" in oldest)) {
        oldestAge = currentDate.getFullYear() - oldest.yearOfBirth;
    }
    else
    {
        oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    }

    for (let i = 1; i < mylist.length; i++) {
        
        if (!("yearOfDeath" in mylist[i])) {
            tempAge = currentDate.getFullYear() - mylist[i].yearOfBirth; 
        }
        else
        {
            tempAge = mylist[i].yearOfDeath - mylist[i].yearOfBirth;
        }

        if (tempAge > oldestAge) {
            oldest = mylist[i];
            oldestAge = tempAge;
        }   
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
