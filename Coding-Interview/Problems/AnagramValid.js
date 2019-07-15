let a = "";
let b = "";

function validAnagram(a, b) {
  if (a.length !== b.length) {
    console.log(false);
    return false;
  }
  let checka = {},
    checkb = {};
  for (let val of a) {
    checka[val] = (checka[val] || 0) + 1;
  }
  console.log(checka);
  for (let val of b) {
    checkb[val] = (checkb[val] || 0) + 1;
  }
  console.log(checkb);
  for (let val in checka) {
    if (!(val in checkb)) {
      console.log(false);
      return false;
    }
    if (checka[val] !== checkb[val]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

validAnagram(a, b);
