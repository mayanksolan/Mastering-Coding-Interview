let s="the sky is blue";

function Reverse(s) {
    if(s.length==0) {
        return "";
    } else {
        s=Reverse(s.substr(1,s.length))+s[0];
    }
    console.log(s);
    return s;
}

Reverse(s);