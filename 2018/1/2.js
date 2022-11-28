document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var frequency = 0;
    var prev = [];
    while (true) {
        for (var i = 0; i < split.length; i++) {
            frequency += parseInt(split[i].substr(1)) * (split[i].charAt(0) === "-" ? -1 : 1);
            if (prev.indexOf(frequency) > -1) {
                document.querySelector("#out").innerHTML = frequency;
                return;
            } else {
                prev.push(frequency);
            }
        }
    }
}