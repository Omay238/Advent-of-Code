document.querySelector("#run").onclick = function(){
    var data = document.querySelector("#input").value;var floor = 0;for(var i = 0; i < data.length; i++){    if(data.charAt(i) === ")"){        floor--;    }else{        floor++;    }}document.querySelector("#out").innerHTML = floo;
}