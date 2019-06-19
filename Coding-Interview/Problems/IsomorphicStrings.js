let s="title";
let t="paper";

var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        const a = s.indexOf(s[i]);
        const b = t.indexOf(t[i]);
        console.log(a, b, s[b], s[i], t[a], t[i]);
        if (t[a] !== t[i] || s[b] !== s[i]) {
            return false;
        }
    }
    return true;
};

isIsomorphic(s,t);