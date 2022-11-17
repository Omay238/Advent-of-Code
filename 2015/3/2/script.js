fetch("../data.txt")
.then(res => res.text())
.then((data) => {
    var visited = [];
    var x = 0;
    var y = 0;
    var rx = 0;
    var ry = 0;
    visited.push({x:x,y:y});
    visited.push({x:rx,y:ry});
    for(var i = 0; i < data.length; i++){
        if(data.charAt(i) === ">"){
            x++;
            rx--;
        }else if(data.charAt(i) === "<"){
            x--;
            rx++;
        }else if(data.charAt(i) === "^"){
            y--;
            ry++;
        }else if(data.charAt(i) === "v"){
            y++;
            ry--;
        }
        if(!visited.find((e) => {
            if(x.x === x && x.y === y){
                return true;
            }else{
                return false;
            }
        })){
            visited.push({x:x,y:y});
        }
        if(!visited.find((e) => {
            if(x.x === rx && x.y === ry){
                return true;
            }else{
                return false;
            }
        })){
            visited.push({x:rx,y:ry});
        }
    }
    document.querySelector("#out").innerText = visited.length;
});