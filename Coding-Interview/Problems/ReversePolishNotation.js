let arr = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];

function revPolNot(arr) {
    let num = [];  
    let sum;  
    for(let i=0; i<arr.length; i++) {
        if(arr[i]==="*" || arr[i]==="+" || arr[i]==="-" || arr[i]==="/") {
            let a=num.pop();
            let b=num.pop();
            sum = 0;
            let str = "("+b+")"+arr[i]+"("+a+")";           
            sum = parseInt(eval(str));
            console.log(sum);
            num.push(Math.floor(sum));
            console.log(num);
        } else {
            num.push(arr[i]);
        }
    }
    console.log(num[0]);
    return num[0];
}

revPolNot(arr);