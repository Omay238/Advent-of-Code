fetch("../data.txt")
.then(res => res.text())
.then((data) => {
    var split = data.split("\n");
    var vowels = "aeiou";
    var naughty = ["ab", "cd", "pq", "xy"];
    var nice = 0;
    for(var i = 0; i < split.length; i++){
        var v = 0;
        var d = 0;
        var n = 0;
        for(var j = 0; j < split[i].length; j++){
            if(vowels.includes(split[i].charAt(j))){
                v++;
            }
            var s = split[i].substr(j, 2);
            if(s.charAt(0) === s.charAt(1)){
                d++;
            }
        }
        for(var j = 0; j < naughty.length; j++){
            if(split[i].includes(naughty[j])){
                n++;
            }
        }
        if(v >= 3 && d >= 1 && n === 0){
            nice++;
        }
    }
    document.querySelector("#out").innerText = nice;
});