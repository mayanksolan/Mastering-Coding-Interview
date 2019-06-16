function power(a,b) {
    if(b!=0) {
      return a*power(a,b-1);
    } else {
      return 1;
    }
  }
  
  power(3,4);