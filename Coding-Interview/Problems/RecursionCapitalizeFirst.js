function capitalizeFirst(arr) {
  let newArray = [];
  function helperCapitalize(arr) {
    if (arr.length === 0) {
      return newArray;
    } else {
      newArray.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
      console.log(newArray);
      helperCapitalize(arr.slice(1));
    }
  }
  helperCapitalize(arr);
  return newArray;
}

capitalizeFirst(["car", "taco", "banana"]);
