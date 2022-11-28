document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var split = data.split("\n").map(x => parseInt(x));
    for (var i = 0; i < split.length; i++) {
        for (var j = 0; j < split.length; j++) {
            if (split[i] + split[j] === 2020) {
                document.querySelector("#out").innerHTML = split[i] * split[j];
            }
        }
    }
}