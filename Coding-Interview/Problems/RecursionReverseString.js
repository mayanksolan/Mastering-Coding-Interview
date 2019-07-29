function res() {
  let res = "";
}
function reverse(str) {
  if (str.length === 0) {
    return "";
  } else {
    console.log(str.charAt(str.length - 1));
    return str
      .charAt(str.length - 1)
      .concat(reverse(str.slice(0, str.length - 1)));
  }
}

reverse("awesome");
