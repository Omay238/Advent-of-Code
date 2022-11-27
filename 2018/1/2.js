document.querySelector("#run").onclick = function(){
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var frequency = 0;
    var prev = [];
    for(var i = 0; i < split.length; i++){
        frequency += parseInt(split[i].substr(1)) * (split[i].charAt(0) === "+" ? 1 : -1);
        if(prev.indexOf(frequency) !== -1){
            break;
        }
        if(i === split.length){
            i = 0;
        }
        prev.push(frequency);
    }
    document.querySelector("#out").innerText = frequency;
}