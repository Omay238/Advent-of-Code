document.querySelector("#run").onclick = function(){
    var data = document.querySelector("#input").value;
    var visited = [];
    var x = 0;
    var y = 0;
    visited.push({x:x,y:y});
    for(var i = 0; i < data.length; i++){
        if(data.charAt(i) === ">"){
            x++;
        }else if(data.charAt(i) === "<"){
            x--;
        }else if(data.charAt(i) === "^"){
            y--;
        }else if(data.charAt(i) === "v"){
            y++;
        }
        if(!visited.find((e) => {
            if(e.x === x && e.y === y){
                return true;
            }else{
                return false;
            }
        })){
            visited.push({x:x,y:y});
        }
    }
    document.querySelector("#out").innerText = visited.length;
}