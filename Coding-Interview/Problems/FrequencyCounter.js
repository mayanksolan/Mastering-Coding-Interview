let a = 1828;
let b = 2882;

function sameFrequency(a, b) {
  if (a.toString().length !== b.toString().length) {
    //console.log(false);
    return false;
  }
  let arra = [];
  let i = 0;
  while (a != 0) {
    let val = a % 10;
    arra[i] = val;
    i++;
    a = Math.floor(a / 10);
  }
  let arrb = [];
  i = 0;
  while (b != 0) {
    let val = b % 10;
    arrb[i] = val;
    i++;
    b = Math.floor(b / 10);
  }
  //console.log(arra, arrb);
  let counta = {},
    countb = {};
  for (let val of arra) {
    counta[val] = (counta[val] || 0) + 1;
  }
  for (let val of arrb) {
    countb[val] = (countb[val] || 0) + 1;
  }
  //console.log(counta, countb);
  for (let val in counta) {
    if (!(val in countb)) {
      //console.log(false);
      return false;
    }
    if (counta[val] !== countb[val]) {
      //console.log(false);
      return false;
    }
  }
  //console.log(true);
  return true;
}

sameFrequency(a, b);
