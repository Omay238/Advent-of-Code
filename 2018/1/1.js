document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var frequency = 0;
    for(var i = 0; i < split.length; i++) {
        frequency += parseInt(split[i].substr(1)) * (split[i].charAt(0) === "-" ? -1 : 1);
    }
    document.querySelector("#out").innerHTML = frequency;
}