function power(a, b) {
  if (b == 0) {
    return 1;
  } else {
    console.log(a, b);
    return a * power(a, b - 1);
  }
}

power(2, 3);
