document.querySelector("#run").onclick = function(){
    var data = document.querySelector("#input").value;
    var sqft = 0;
    var splitData = data.split("\n");
    for(var i = 0; i < splitData.length; i++){
        var split2 = splitData[i].split("x");
        var l = split2[0];
        var w = split2[1];
        var h = split2[2];
        sqft += 2*l*w + 2*w*h + 2*h*l + Math.min(l*w, w*h, h*l);
    }
    document.querySelector("#out").innerText = sqft;
}