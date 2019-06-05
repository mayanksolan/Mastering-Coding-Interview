//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
  let set = new Set();
  for(let i=0; i<input.length; i++) {
    if(set.has(input[i])) {
      return input[i];
    } else {
      set.add(input[i]);
    }
  }
  return undefined;
}

firstRecurringCharacter([2,5,5,2,3,5,1,2,4]);

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2 yo

function firstRecurringCharacter2(input) {
  let map = {};
  for(let i=0; i<input.length; i++) {
    if(map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map[input[i]]);
  }
  return undefined;
}

firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]);


function firstRecurringCharacter3(input) {
  let leng=input.length; let num;
  for(let i=0; i<input.length; i++) {
    let inLen=input.length; let inNum = input[0];
    for(let j=i+1; j<input.length; j++) {
      if(input[i]===input[j]) {
        if(inLen>j-i) {
          inLen = j-i;
          inNum = input[i];
        }
      }
    }
    if(leng>inLen) {
      leng=inLen, num=inNum;
    }
    console.log("leng="+leng+" inLen="+inLen+" num="+num+" inNum="+inNum);
  }
  return num;
}

firstRecurringCharacter3([2,5,5,2,3,5,1,2,4]);
