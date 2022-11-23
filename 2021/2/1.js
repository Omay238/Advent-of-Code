document.querySelector("#run").onclick = function(){
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var depth = 0;
    var horiz = 0;
    for(var i = 0; i < split.length; i++){
        if(split[i].substr(0, 1) === "f"){
            horiz += parseInt(split[i].substr(8));
        }else if(split[i].substr(0, 1) === "d"){
            depth += parseInt(split[i].substr(5));
        }else if(split[i].substr(0, 1) === "u"){
            depth -= parseInt(split[i].substr(3));
        }
    }
    document.querySelector("#out").innerText = depth * horiz;
}