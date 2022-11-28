document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var twos = 0;
    var threes = 0;
    for (var i = 0; i < split.length; i++) {
        var letters = {};
        for (var j = 0; j < split[i].length; j++) {
            letters[split[i].charAt(j)] = letters[split[i].charAt(j)] + 1 || 0;
        }
        var twof = false;
        var threef = false;
        for (var j = 0; j < Object.keys(letters).length; j++) {
            if (letters[Object.keys(letters)[j]] === 2) {
                twof = true;
            }
            if (letters[Object.keys(letters)[j]] === 3) {
                threef = true;
            }
        }
        if (twof) twos++;
        if (threef) threes++;
        console.log(letters);
    }
    document.querySelector("#out").innerHTML = twos * threes;
}