document.querySelector("#run").onclick = function(){
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var p = Math.Infinity;
    var inc = 0;
    for(var i = 0; i < split.length; i++){
        if(parseInt(split[i]) > p){
            inc++;
        }
        p = parseInt(split[i]);
    }
    document.querySelector("#out").innerText = inc;
}