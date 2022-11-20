document.querySelector("#run").onclick = function(){
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var p = Math.Infinity;
    var inc = 0;
    for(var i = 0; i < split.length; i++){
        if(parseInt(split[i])+parseInt(split[i+1])+parseInt(split[i+2]) > p){
            inc++;
        }
        p = parseInt(split[i])+parseInt(split[i+1])+parseInt(split[i+2]);
    }
    document.querySelector("#out").innerText = inc;
}