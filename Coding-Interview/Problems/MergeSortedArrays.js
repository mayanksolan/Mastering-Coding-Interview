function mergeSortedArrays(arr1,arr2) {
  console.log(arr1, arr2);
  let a1Len = arr1.length;
  let a2Len = arr2.length;
  let arr3 = [];
  let i=0, j=0;

  while(i<a1Len || j<a2Len) {
    if(arr1[i]==undefined && arr2[j]!=undefined) {
      arr3.push(arr2[j]);
      j++;
    } else if(arr1[i]!=undefined && arr2[j]==undefined) {
      arr3.push(arr1[i]);
      i++;
    } else if(arr1[i]<=arr2[j]) {
      arr3.push(arr1[i]);
      i++;
      console.log(arr3);
    } else {
      arr3.push(arr2[j]);
      j++;
      console.log(arr3);
    }
  }
  return arr3;
}

mergeSortedArrays([0,3,4,31],[4,6,30]);
