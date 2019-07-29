function stringifyNumbers(obj) {
  let newObj = JSON.parse(JSON.stringify(obj));
  function callIt(newObj) {
    let keys = Object.keys(newObj);
    keys.forEach(k => {
      if (typeof newObj[k] === "number") {
        newObj[k] = String(newObj[k]);
      }
      if (typeof newObj[k] === "object") {
        callIt(newObj[k]);
      }
    });
  }
  callIt(newObj);
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

stringifyNumbers(obj);

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
