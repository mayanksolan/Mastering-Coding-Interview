function areThereDuplicates(a, b, c, d) {
  var args = [...arguments];
  console.log(args);
  let set = new Set();
  for (let val of args) {
    //console.log(val);
    if (!set.has(val)) {
      set.add(val);
      //console.log(set);
    } else {
      //console.log(true);
      return true;
    }
  }
  //console.log(false);
  return false;
}

areThereDuplicates(1, 2, 3, 2);
