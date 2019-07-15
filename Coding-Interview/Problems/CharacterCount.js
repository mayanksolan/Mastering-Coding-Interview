let str = "Hi There!, Are you okay 123";

function charCount(str) {
  let result = {};
  for (var char of str) {
    var char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      result[char] > 0 ? result[char]++ : (result[char] = 1);
    }
  }
  console.log(result);
  return result;
}

charCount(str);
