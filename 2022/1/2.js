document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var calorieElves = [];
    var calories = 0;
    for (var i = 0; i < split.length; i++) {
        if (split[i] === "") {
            calorieElves.push(calories);
            calories = 0;
        } else {
            calories += parseInt(split[i]);
        }
    }
    var s = calorieElves.sort((a, b) => {
        return b - a;
    });
    document.querySelector("#out").innerHTML = s[0] + s[1] + s[2];
}