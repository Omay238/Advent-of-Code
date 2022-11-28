document.querySelector("#run").onclick = function() {
        var data = document.querySelector("#input").value;
        var split = data.split("\n");
        var nices = 0;
        for (var i = 0; i < split.length; i++) {
            var c1 = false;
            var c2 = false;
            for (var j = 0; j < split[i].length; j++) {
                for (var k = 0; k < split[i].length; k++) {
                    if (j - 1 > k || j + < k) {
                        if (split[i].substr(j, 2) === split[i].substr(k, 2)) {
                            c1 = true;
                        }
                    }
                }
                if (split[i].charAt(j) === split[i].charAt(j + 2)) {
                    c2 = true;
                }
            }
            if (c1 && c2) {
                nices++;
            }
        }
        document.querySelector("#out").innerHTML = nices; //qjhvhtzxzqqjkmpb}