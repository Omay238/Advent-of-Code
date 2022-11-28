document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var fuel = 0;
    for (var i = 0; i < split.length; i++) {
        var n = Math.max(Math.floor(parseInt(split[i]) / 3) - 2, 0);
        var n2 = n;
        var n3 = n;
        while (n2 > 0) {
            n2 = Math.max(Math.floor(n3 / 3) - 2, 0);
            n3 = n2;
            n += n2;
        }
        fuel += n;
    }
    document.querySelector("#out").innerHTML = fuel;
}