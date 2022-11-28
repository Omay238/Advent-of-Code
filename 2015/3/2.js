document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var x = 0;
    var y = 0;
    var rx = 0;
    var ry = 0;
    var visited = [];
    for (var i = 0; i < data.length; i++) {
        if (i % 2 === 0) {
            if (data.charAt(i) === "^") {
                y--;
            } else if (data.charAt(i) === ">") {
                x++;
            } else if (data.charAt(i) === "v") {
                y++;
            } else if (data.charAt(i) === "<") {
                x--;
            }
            if (!visited.find((e) => {
                    if (e[0] === x && e[1] === y) {
                        return true;
                    } else {
                        return false;
                    }
                })) {
                visited.push([x, y]);
            }
        } else {
            if (data.charAt(i) === "^") {
                ry--;
            } else if (data.charAt(i) === ">") {
                rx++;
            } else if (data.charAt(i) === "v") {
                ry++;
            } else if (data.charAt(i) === "<") {
                rx--;
            }
            if (!visited.find((e) => {
                    if (e[0] === rx && e[1] === ry) {
                        return true;
                    } else {
                        return false;
                    }
                })) {
                visited.push([rx, y]);
            }
        }
    }
    document.querySelector("#out").innerHTML = visited.length + 1;
}