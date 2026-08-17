function isPangram(sentence) {
    sentence = sentence.toLowerCase();
    for (let c = 97; c <= 122; c++) {
        if (!sentence.includes(String.fromCharCode(c))) {
            return false;
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("blah blah blah ")); 
