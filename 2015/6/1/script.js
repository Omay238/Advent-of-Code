fetch("../data.txt")
.then(res => res.text())
.then((data) => {
    var split = data.split("\n");
    var map = [];
    for(var i = 0; i <= 999; i++){
        map.push([]);
        for(var j = 0; j <= 999; j++){
            map[i].push(false);
        }
    }
    for(var i = 0; i < split.length; i++){
        if(split[i].substr(0, 6) === "toggle"){
            var a = split[i].substr(7).split(" ");
            var b = a[0].split(",").map(x => parseInt(x));
            var c = a[2].split(",").map(x => parseInt(x));
            for(var j = b[1]; j <= c[1]; j++){
                for(var k = b[0]; k <= c[0]; k++){
                    map[j][k] = !map[j][k];
                }
            }
        }else if(split[i].substr(0, 8) === "turn off"){
            var a = split[i].substr(9).split(" ");
            var b = a[0].split(",").map(x => parseInt(x));
            var c = a[2].split(",").map(x => parseInt(x));
            for(var j = b[1]; j <= c[1]; j++){
                for(var k = b[0]; k <= c[0]; k++){
                    map[j][k] = false;
                }
            }
        }else if(split[i].substr(0, 7) === "turn on"){
            var a = split[i].substr(8).split(" ");
            var b = a[0].split(",").map(x => parseInt(x));
            var c = a[2].split(",").map(x => parseInt(x));
            for(var j = b[1]; j <= c[1]; j++){
                for(var k = b[0]; k <= c[0]; k++){
                    map[j][k] = true;
                }
            }
        }
    }
    var n = 0;
    map.forEach((i) => {
        i.forEach((j) => {
            if(j === true){
                n++;
            }
        });
    });
    document.querySelector("#out").innerText = n;
});