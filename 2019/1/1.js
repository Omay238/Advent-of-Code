document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var fuel = 0;
    for (var i = 0; i < split.length; i++) {
        fuel += Math.floor(parseInt(split[i]) / 3) - 2;
    }
    document.querySelector("#out").innerHTML = fuel;
}