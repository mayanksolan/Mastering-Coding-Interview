const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for(let i=0; i<array.length; i++) {
    let min = array[i], minInd = i;
    for(let j=i+1; j<array.length; j++) {
      if(array[j]<min) {
        min=array[j];
        minInd=j;
      }
    }
    if(minInd!==i) {
      let temp = min;
      array[minInd]=array[i];
      array[i] = temp;
    }
  }
  return array;
}

selectionSort(numbers);
