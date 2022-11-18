fetch("../data.txt")
.then(res => res.text())
.then((data) => {
    var visited = [];
    var x = 0;
    var y = 0;
    var rx = 0;
    var ry = 0;
    visited.push({x:0,y:0});
    for(var i = 0; i < data.length; i++){
        if(i % 2 === 0){
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
        }else{
            if(data.charAt(i) === ">"){
                rx++;
            }else if(data.charAt(i) === "<"){
                rx--;
            }else if(data.charAt(i) === "^"){
                ry--;
            }else if(data.charAt(i) === "v"){
                ry++;
            }
            if(!visited.find((e) => {
                if(e.x === rx && e.y === ry){
                    return true;
                }else{
                    return false;
                }
            })){
                visited.push({x:rx,y:ry});
            }
        }
    }
    document.querySelector("#out").innerText = visited.length;
});