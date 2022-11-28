document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var answer = 0;
    for (var i = 0; i < split.length; i++) {
        var split2 = split[i].split("\t").map(x => parseInt(x)).sort((a, b) => {
            return a - b;
        });
        for (var j = 0; j < split2.length; j++) {
            for (var k = 0; k < split2.length; k++) {
                if (split2[j] / split2[k] === Math.round(split2[j] / split2[k]) && j !== ) {
                    answer += split2[j] / split2[k];
                }
            }
        }
    }
    document.querySelector("#out").innerHTML = answer;
}