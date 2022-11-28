document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var split = data.split("\n").map(x => parseInt(x));
    for (var i = 0; i < split.length; i++) {
        for (var j = 0; j < split.length; j++) {
            for (var k = 0; k < split.length; k++) {
                if (split[i] + split[j] + split[k] === 2020) {
                    document.querySelector("#out").innerHTML = split[i] * split[j] * split[k];
                }
            }
        }
    }
}