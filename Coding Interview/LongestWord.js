function LongestWord(sen) {
  sen = sen.trim();
  var arr = sen.match(/[a-z0-9]+/gi);
  console.log(arr);
  var sorted = arr.sort(function(a, b) {
    return b.length - a.length;
  });
  console.log(sorted[0]);
}

// keep this function call here
LongestWord("fun&!! time here");
