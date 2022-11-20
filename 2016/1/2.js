document.querySelector("#run").onclick = function(){
    var data = document.querySelector("#input").value;
    var dir = 0;
    var x = 0;
    var y = 0;
    var visited = [];
    var split = data.split(", ");
    for(var i = 0; i < split.length; i++){
        
        if(split[i].charAt(0) === "L"){
            if(dir === 0){
                dir = 3;
            }else{
                dir--;
            }
        }else{
            if(dir === 3){
                dir = 0;
            }else{
                dir++;
            }
        }
        var n = parseInt(split[i].substr(1));
        if(dir === 0){
            y -= n;
        }else if(dir === 1){
            x += n;
        }else if(dir === 2){
            y += n;
        }else if(dir === 3){
            x -= n;
        }
        if(visited.find((e) => {
            if(e.x === x && e.y === y){
                return true;
            }else{
                return false;
            }
        })){
            //document.querySelector("#out").innerText = i;
            break;
        }else{
            visited.push({x:x,y:y});
        }
    }
    document.querySelector("#out").innerText = Math.abs(x) + Math.abs(y);
}