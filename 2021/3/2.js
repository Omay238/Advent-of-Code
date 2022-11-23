document.querySelector("#run").onclick = function(){
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var split2 = split;
    var ogr = "";
    var co2 = "";
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
        var c = zeros > ones ? "0" : "1";
        for(var j = 0; j < split.length; j++){
            if(split[j].charAt(i) !== c){
                split.splice(j, 1);
            }
        }
        if(split.length === 1){
            ogr = split[0];
            break;
        }
    }
    for(var i = 0; i < split2[0].length; i++){
        var zeros = 0;
        var ones = 0;
        for(var j = 0; j < split2.length; j++){
            if(split2[j].charAt(i) === "0"){
                zeros++;
            }else{
                ones++;
            }
        }
        var c = zeros > ones ? "1" : "0";
        for(var j = 0; j < split2.length; j++){
            if(split2[j].charAt(i) !== c){
                split2.splice(j, 1);
            }
        }
        if(split2.length === 1){
            co2 = split2[0];
            break;
        }
    }
    document.querySelector("#out").innerText = parseInt(ogr, 2);
}