document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var trees = 0;
    var x = 0;
    var y = 0;
    for (var i = 0; i < split.length; i++) {
        if (split[i].charAt(x % split[0].length) === "#") {
            trees++;
        }
        x += 3;
    }
    document.querySelector("#out").innerHTML = tree;
}