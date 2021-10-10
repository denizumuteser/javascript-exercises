
function checkpunc(c)
{
    var punctuation = [".", ",", ":", "?", "!", ";", " "]
    for (let i = 0; i < punctuation.length; i++) {
        if (punctuation[i] == c) {
            return true;
        }
    }
    return false;
}

const palindromes = function (s) {
    
    let forward = "";
    let backward = "";
    
    for (let i = 0; i < s.length; i++) {
        if (!checkpunc(s[i])) {
            forward += s[i];
        }
        
    }

    for (let i = s.length-1; i >= 0; i--) {
        if (!checkpunc(s[i])) {
            backward += s[i];
        }
    }
    if (forward.toLocaleLowerCase() === backward.toLocaleLowerCase()) {
        return true;
    }
    return false;
};



// Do not edit below this line
module.exports = palindromes;
