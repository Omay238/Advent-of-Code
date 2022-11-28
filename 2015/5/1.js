document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var nices = 0;
    for (var i = 0; i < split.length; i++) {
        var c1 = 0;
        var c2 = false;
        var c3 = split[i].includes("ab") || split[i].includes("cd") || split[i].includes("pq") || split[i].includes("xy");
        for (var j = 0; j < split[i].length; j++) {
            if ("aeiou".includes(split[i].charAt(j))) {
                c1++;
            }
            if (split[i].charAt(j) === split[i].charAt(j + 1)) {
                c2 = true;
            }
        }
        if (c1 >= 3 && c2 && !c3) {
            nices++;
        }
    }
    document.querySelector("#out").innerHTML = nice;
}