let beginWord = "hot";
let endWord = "dog";
let wordList = ["hot","cog","dog","tot","hog","hop","pot","dot"];


var ladderLength = function (beginWord, endWord, wordList) {
    let arr = [beginWord];
    for (let i = 0; i < wordList.length; i++) {
        let count = 0;
        for (let j = 0; j < wordList[i].length; j++) {
            //console.log(arr[i][j], wordList[i][j])
            if (arr[arr.length - 1][j] === wordList[i][j]) {
            } else {
                count++;
            }
        }
        if (count == 1) {
            arr.push(wordList[i]);
        }
        console.log(i, count, arr);
    }
    if (arr[arr.length - 1] === endWord) {
        console.log(arr.length - 1);
    } else {
        return 0;
    }
    //console.log(arr, arr.length - 1);
};

var ladderLength2 = function (beginWord, endWord, wordList) {
    let arr = [beginWord];
    let count = 0;
    let found = false, i=0;
    while(found===false) {
        count=0;
        for (let j = 0; j < wordList[0].length; j++) {
            //console.log(arr[arr.length - 1][j], endWord.charAt(j));
            if (arr[arr.length - 1][j] === endWord.charAt(j)) {
            } else {
                count++;
            }
        }
        if(count===1 && wordList.includes(endWord)) {
            arr.push(endWord);
            found=true;
        } else {
            count=0;
            for (let j = 0; j < wordList[0].length; j++) {
                if (arr[arr.length - 1][j] === wordList[i][j]) {
                } else {
                    count++;
                }
            }
            if (count == 1 && !arr.includes(wordList[i])) {
                arr.push(wordList[i]);
                i=0;
                if(arr[arr.length - 1] === endWord) {
                    found=true;
                }
            } else {
                i++;
                if(i===wordList.length) {
                    return 0;
                }
            }
        }        
        console.log(i, count, arr, found);
    }
    if (arr[arr.length - 1] === endWord) {
        return arr.length;
    } else {
        return 0;
    }
};

ladderLength2(beginWord, endWord, wordList);