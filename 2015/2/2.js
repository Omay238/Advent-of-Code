document.querySelector("#run").onclick = function(){
    var data = document.querySelector("#input").value;var split = data.split("\n");var ft = 0;for(var i = 0; i < split.length; i++){    var t = split[i].split("x").map(x => parseInt(x));    var l = t[0];    var w = t[1];    var h = t[2];    ft += l * w * h + l * 2 + w * 2 + h*2 - Math.max(l * 2, w * 2, h *2);}document.querySelector("#out").innerHTML = ft;
}