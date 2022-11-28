document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var vps = 0;
    for (var i = 0; i < split.length; i++) {
        var range = split[i].split(" ")[0].split("-").map(x => parseInt(x) - 1);
        var letter = split[i].split(" ")[1].charAt(0);
        var password = split[i].split(" ")[2];
        var letters = 0;
        if (password.charAt(range[0]) === letter) {
            letters++;
        }
        if (password.charAt(range[1]) === letter) {
            letters++;
        }
        if (letters === 1) {
            vps++
        }
    }
    document.querySelector("#out").innerHTML = vps;
}