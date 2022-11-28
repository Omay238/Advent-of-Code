document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var answer = 0;
    for (var i = 0; i < split.length; i++) {
        var split2 = split[i].split("\t").map(x => parseInt(x)).sort((a, b) => {
            return a - b;
        });
        console.log(split2[0]);
        console.log(split2[split2.length - 1]);
        answer += split2[split2.length - 1] - split2[0];
    }
    document.querySelector("#out").innerHTML = answer;
}