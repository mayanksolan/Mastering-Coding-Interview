let str = "Hi There!, Are you okay 123";

function charCount(str) {
  let result = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  console.log(result);
  return result;
}

charCount(str);
