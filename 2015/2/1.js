document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var sqft = 0;
    for (var i = 0; i < split.length; i++) {
        var t = split[i].split("x").map(x => parseInt(x));
        var l = t[0];
        var w = t[1];
        var h = t[2];
        var s1 = l * w;
        var s2 = w * h;
        var s3 = l * h;
        sqft += 2 * s1 + 2 * s2 + 2 * s3 + Math.min(s1, s2, s3);
    }
    document.querySelector("#out").innerHTML = sqft;
}