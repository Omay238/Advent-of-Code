document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var split = data.split(", ");
    var dir = 0;
    var x = 0;
    var y = 0;
    for (var i = 0; i < split.length; i++) {
        if (split[i].charAt(0) === "L") {
            dir--;
        } else {
            dir++;
        }
        if (dir === -1) {
            dir = 3;
        } else if (dir === 4) {
            dir = 0;
        }
        if (dir === 0) {
            y -= parseInt(split[i].substr(1));
        } else if (dir === 1) {
            x += parseInt(split[i].substr(1));
        } else if (dir === 2) {
            y += parseInt(split[i].substr(1));
        } else if (dir === 3) {
            x -= parseInt(split[i].substr(1));
        }
    }
    document.querySelector("#out").innerHTML = Math.abs(x) + Math.abs(y);
}