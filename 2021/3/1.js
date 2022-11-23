document.querySelector("#run").onclick = function(){
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var gamma = "";
    var epsilon = "";
    for(var i = 0; i < split[0].length; i++){
        var zeros = 0;
        var ones = 0;
        for(var j = 0; j < split.length; j++){
            if(split[j].charAt(i) === "0"){
                zeros++;
            }else{
                ones++;
            }
        }
        gamma += zeros > ones ? "0" : "1";
        epsilon += zeros > ones ? "1" : "0";
    }
    document.querySelector("#out").innerText = parseInt(gamma, 2) * parseInt(epsilon, 2);
}