document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var pad = "..1..,.234.,56789,.ABC.,..D..".split(",");
    var pass = "";
    var x = 2;
    var y = 2;
    for (var i = 0; i < split.length; i++) {
        for (var j = 0; j < split[i].length; j++) {
            if (split[i].charAt(j) === "U") {
                y--;
                if (pad[y].charAt(x) === ".") {
                    y++;
                }
            } else if (split[i].charAt(j) === "L") {
                x--;
                if (pad[y].charAt(x) === ".") {
                    x++;
                }
            } else if (split[i].charAt(j) === "D") {
                y++;
                if (pad[y].charAt(x) === ".") {
                    y--;
                }
            } else if (split[i].charAt(j) === "R") {
                x++;
                if (pad[y].charAt(x) === ".") {
                    x--;
                }
            }
        }
        pass += pad[y].charAt(x);
    }
    document.querySelector("#out").innerHTML = pass;
}