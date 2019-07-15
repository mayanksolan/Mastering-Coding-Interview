let a = [1, 2, 3, 2, 11];
let b = [4, 9, 1, 4, 21];

function same(a, b) {
  let counta = {};
  let countb = {};
  for (let val of a) {
    counta[val] = (counta[val] || 0) + 1;
  }
  for (let val of b) {
    countb[val] = (countb[val] || 0) + 1;
  }
  console.log(counta);
  console.log(countb);
  for (let val in counta) {
    if (!(val ** 2 in countb)) {
      console.log(false);
      return false;
    }
    if (countb[val ^ 2] !== counta[val]) {
      console.log(false);
      return false;
    }
    console.log(true);
    return true;
  }
}

same(a, b);
