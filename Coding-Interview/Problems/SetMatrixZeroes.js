let matrix=[
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
  ]

var setZeroes = function(matrix) {
    //console.log(matrix.length);
    let row=-1, col=-1;
    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[i].length; j++) {
            if(matrix[i].indexOf(0)>-1) {
                matrix[i][j]=0;
            }
            let sam = matrix[i].indexOf(0);
            console.log(sam);
        }
    }
    console.log(matrix);
    return matrix;
};

setZeroes(matrix);

