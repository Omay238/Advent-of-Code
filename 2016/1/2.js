document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var split = data.split(", ");
    var dir = 0;
    var x = 0;
    var y = 0;
    var visited = [];

    function check() {
        if (visited.find((e) => {
                if (e[0] === x && e[1] === y) {
                    return true;
                } else {
                    return false;
                }
            })) {
            document.querySelector("#out").innerHTML = Math.abs(x) + Math.abs(y);
            return true;
        } else {
            return false;
        }
        visited.push([x, y]);
    }
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
        for (var j = 0; j < parseInt(split[i].substr(1)); j++) {
            if (dir === 0) {
                y--;
            } else if (dir === 1) {
                x++;
            } else if (dir === 2) {
                y++;
            } else if (dir === 3) {
                x--;
            }
            check()
        }
    }
}