function collectStrings(obj) {
  let newArray = [];
  function helperCollect(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        newArray.push(obj[key]);
      } else if (typeof obj[key] === "object") {
        helperCollect(obj[key]);
      }
    }
  }
  helperCollect(obj);
  console.log(newArray);
  return newArray;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};

collectStrings(obj); // ["foo", "bar", "baz"])
