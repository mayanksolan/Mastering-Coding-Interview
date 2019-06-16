let stri = "ABCDCBA";

function palindrome(str) {
  if(str.length<=1) {
    console.log(true);
  } else {
    if(str[0] === str[str.length-1]) {
      console.log(str[0], str[str.length-1]);
      palindrome(str.substring(1,str.length-1));
    } else {
      console.log(false);
    }
  }
}

palindrome(stri);