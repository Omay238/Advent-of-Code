document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var world = [];
    for (var i = 0; i < 1000; i++) {
        world.push([]);
        for (var j = 0; j < 1000; j++) {
            world[i].push(0);
        }
    }
    for (var i = 0; i < split.length; i++) {
        if (split[i].substr(0, 6) === "toggle") {
            var t = split[i].substr(7).split(" ");
            var x1 = parseInt(t[0].split(",")[0]);
            var y1 = parseInt(t[0].split(",")[1]);
            var x2 = parseInt(t[2].split(",")[0]);
            var y2 = parseInt(t[2].split(",")[1]);
            for (var j = x1; j < x2 + 1; j++) {
                for (var k = y1; k < y2 + 1; k++) {
                    world[k][j] += 2;
                }
            }
        } else if (split[i].substr(0, 7) === "turn on") {
            var t = split[i].substr(8).split(" ");
            var x1 = parseInt(t[0].split(",")[0]);
            var y1 = parseInt(t[0].split(",")[1]);
            var x2 = parseInt(t[2].split(",")[0]);
            var y2 = parseInt(t[2].split(",")[1]);
            for (var j = x1; j < x2 + 1; j++) {
                for (var k = y1; k < y2 + 1; k++) {
                    world[k][j]++;
                }
            }
        } else if (split[i].substr(0, 8) === "turn off") {
            var t = split[i].substr(9).split(" ");
            var x1 = parseInt(t[0].split(",")[0]);
            var y1 = parseInt(t[0].split(",")[1]);
            var x2 = parseInt(t[2].split(",")[0]);
            var y2 = parseInt(t[2].split(",")[1]);
            for (var j = x1; j < x2 + 1; j++) {
                for (var k = y1; k < y2 + 1; k++) {
                    world[k][j] = Math.max(0, world[k][j] - 1);
                }
            }
        }
    }
    var lights = 0;
    for (var i = 0; i < world.length; i++) {
        for (var j = 0; j < world[i].length; j++) {
            lights += world[i][j];
        }
    }
    document.querySelector("#out").innerHTML = lights;
}