let intervals=[[0,7],[8,8],[9,11]]
//[[0,0],[1,4],[6,8],[9,11]]
//[[1,5],[9,12]]
//[[0,5],[9,12]];
//[[4,4],[5,7],[8,10]]
//[[0,2],[3,3],[6,11]]
//[[0,4],[7,12]]
//[[0,5],[8,9]];
//[[2,5],[6,7],[8,9]]
//[[1,3],[6,9]]
//[[1,5],[6,8]]
//[[1,5]]
//[[1,5]]
//[[1,5],[6,8]]
//[[1,3],[6,9]]
//[[1,2],[3,5],[6,7],[8,10],[12,16]]
let newInterval = [4,13]
//[0,9]
//[0,4]
//[7,16]
//[10,18]
//[9,15]
//[0,5]
//[3,4];
//[0,1]
//[2,5];
//[5,6]
//[6,8]
//[2,7]
//[0,9]
//[2,5]
//[4,8]

var insert = function(intervals, newInterval) {    
    console.log(intervals, newInterval);
    if(intervals.length==0 || intervals[intervals.length-1][1]<newInterval[0]) {
        intervals.push(newInterval);
        console.log("1st", intervals);
        return intervals;
    }
    if(intervals.length===1 || newInterval[1]<intervals[0][0]) {
        if(newInterval[1]<intervals[0][0]) {
            intervals.unshift(newInterval);
            console.log("3rd", intervals);
            return intervals;
        }
        let min = Math.min(intervals[0][0],newInterval[0]);
        let max = Math.max(intervals[0][1],newInterval[1]);
        let newArr = [min,max];
        intervals.splice(0,1,newArr);
        return intervals;
    }
    if(intervals[intervals.length-1][1]>newInterval[0] && intervals[intervals.length-1][0]<newInterval[1] 
        && newInterval[0]>intervals[intervals.length-1][0] && newInterval[1]>intervals[intervals.length-1][1]) {
        let min = intervals[intervals.length-1][0];
        intervals.pop();
        newInterval = [min, newInterval[1]]
        intervals.push(newInterval);
        console.log("2nd", intervals);
        return intervals;
    }
    if(intervals[intervals.length-1][1]===newInterval[0])   {
        let min = Math.min(intervals[intervals.length-1][0],newInterval[0]);
        let max = Math.max(intervals[intervals.length-1][1],newInterval[1]);
        intervals.pop();
        intervals.push([min,max]);
        console.log("4th", intervals);
        return intervals;
    }
    if(intervals[intervals.length-1][1]>=newInterval[0] && intervals[intervals.length-1][1]<newInterval[1] &&
        intervals[intervals.length-1][0]<newInterval[0])   {
        let min = Math.min(intervals[intervals.length-1][0],newInterval[0]);
        let max = Math.max(intervals[intervals.length-1][1],newInterval[1]);
        intervals.pop();
        intervals.push([min,max]);
        console.log("5th", intervals);
        return intervals;
    }
    if(intervals[intervals.length-1][1]>=newInterval[0] && intervals[intervals.length-1][1]<newInterval[1] 
        && intervals[0][0]<newInterval[0] && newInterval[0]>intervals[intervals.length-1][0])   {
        let min = Math.min(intervals[intervals.length-1][0],newInterval[0]);
        let max = Math.max(intervals[intervals.length-1][1],newInterval[1]);
        intervals.pop();
        intervals.push([min,max]);
        console.log("6th", intervals);
        return intervals;
    }
    let i=0
    while(i<intervals.length-1) {
        if(intervals[i][1]>=newInterval[0]) {
            let min = Math.min(intervals[i][0],newInterval[0]);
            let max = Math.max(intervals[i][1],newInterval[1]);
            console.log("min=", min, "max=", max);
            let j=i+1;
            while(intervals[j][1]<newInterval[1] && j<intervals.length-1) {
                j++;
                if(max<intervals[j][1]) {
                    max = intervals[j][1];
                }                                
            }
            if(intervals[j][0]<=newInterval[1]) {
                max=Math.max(intervals[j][1],newInterval[1]);
            }
            console.log(i, j, min, max, intervals);
            if(min===intervals[i][0] && max===intervals[i][1]) {
                return intervals;
            }
            if(min<=intervals[i][1] && max>=intervals[intervals.length-1][0]) {
                console.log("here");
                intervals.splice(i,j-i+1);
            } else 
            if(min<newInterval[0] && max>newInterval[1]) {
                intervals.splice(i,j-i+1);
            } else if(min==newInterval[0] && max==newInterval[1] && max>=intervals[j][0]) {
                intervals.splice(i,j-i+1);
            } else {
                intervals.splice(i,j-i);
            }               
            console.log(i, j, min, max, intervals);
            let newArr = [min,max];
            intervals.splice(i,0,newArr);
            console.log(i, j, min, max, intervals);
            break;
        } else {
            i++;
        }
    }
    return intervals;
};

insert(intervals, newInterval);