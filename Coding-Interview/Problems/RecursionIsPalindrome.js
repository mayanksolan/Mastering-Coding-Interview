function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  } else {
    if (str.charAt(0) === str.charAt(str.length - 1)) {
      return isPalindrome(str.slice(1, str.length - 1));
    } else {
      return false;
    }
  }
}

isPalindrome("tacocat");
