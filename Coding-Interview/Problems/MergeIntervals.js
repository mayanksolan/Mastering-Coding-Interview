let intervals=[[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]];
//[[1,4],[0,2],[3,5]];

var merge = function(intervals) {
    for(let i=0; i<intervals.length-1; i++) {
        for(let j=i+1; j<intervals.length; j++) {
            if(intervals[i][0]>intervals[j][0]) {
                let temp = intervals[i];
                intervals[i] = intervals[j];
                intervals[j]=temp;
            } else {
                if(intervals[i][0]==intervals[j][0] && intervals[i][1]>intervals[j][1]) {
                    let temp = intervals[i];
                    intervals[i] = intervals[j];
                    intervals[j]=temp;
                }
            }
        }
    }
    console.log(intervals);
    let i=0
    while(i<intervals.length-1) {
        if(intervals[i][1]>=intervals[i+1][0]) {
            let newInt = [Math.min(intervals[i][0], intervals[i+1][0]),Math.max(intervals[i][1], intervals[i+1][1])];
            intervals.splice(i,2);
            intervals.splice(i,0,newInt);
        } else {
            i++;
        }        
        console.log(intervals, i, intervals.length);
    }
    return intervals;
};

merge(intervals);