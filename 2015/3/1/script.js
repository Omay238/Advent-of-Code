fetch("../data.txt")
.then(res => res.text())
.then((data) => {
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
        if(!visited.includes({x:x,y:y})){
            visited.push({x:x,y:y});
        }
    }
    document.querySelector("#out").innerText = visited.length;
});