document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var vps = 0;
    for (var i = 0; i < split.length; i++) {
        var range = split[i].split(" ")[0];
        var letter = split[i].split(" ")[1].charAt(0);
        var password = split[i].split(" ")[2];
        var letters = 0;
        for (var j = 0; j < password.length; j++) {
            if (password.charAt(j) === letter) {
                letters++;
            }
        }
        if (Math.max(parseInt(range.split("-")[0]), Math.min(parseInt(range.split("-")[1]), letters)) === letters) {
            vps++;
        }
    }
    document.querySelector("#out").innerHTML = vps;
}