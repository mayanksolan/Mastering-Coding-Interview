function capitalizeWords(arr) {
  let newArray = [];
  function helperCapitalize(arr) {
    if (arr.length === 0) {
      return newArray;
    } else {
      newArray.push(arr[0].toUpperCase());
      console.log(newArray);
      helperCapitalize(arr.slice(1));
    }
  }
  helperCapitalize(arr);
  return newArray;
}

capitalize(["i", "am", "learning", "recursion"]);
