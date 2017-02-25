function anagrams(word, words) {
     let wordAry = [];
     let compObj = countNumLetters(word);
     
     for (let i = 0; i < words.length; i++) {
         if (words[i].length !== word.length) {
             continue;
         } else {
            let newWordCompObj = countNumLetters(words[i]);
            let addWord = true;
            console.log(words[i]);

            for (let key in compObj) {
                if (newWordCompObj.hasOwnProperty(key)) {
                    if (newWordCompObj[key] !== compObj[key]) {
                        addWord = false;
                    }
                } else {
                    addWord = false;
                }
            }

            if (addWord) { wordAry.push(words[i]); }
         }
     }

     return wordAry;
}

function countNumLetters(word) {
    let returnObj = { };

    for (let i = 0; i < word.length; i++) {
        if (returnObj[word[i]]) { returnObj[word[i]] += 1 } else {
            returnObj[word[i]] = 1;
        }
    } 

    return returnObj;
}

//console.log(countNumLetters('test'));


console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));



