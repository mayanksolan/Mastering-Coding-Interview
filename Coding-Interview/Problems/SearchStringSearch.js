function stringSearch(mainStr, str) {
  let subLen = str.length;
  let count = 0;
  for (let i = 0; i < mainStr.length - 1 - subLen; i++) {
    //console.log(mainStr.substring(i, i + subLen));
    if (mainStr.substring(i, i + subLen) === str) {
      count++;
    }
  }
  console.log(count);
}

stringSearch("lorie loled", "lol");
