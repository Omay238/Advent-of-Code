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
        console.log(split);
        var c = (ones >= zeros) ? "1" : "0";
        for(var j = 0; j < split.length; j++){
            if(split[j].charAt(i) !== c){
                split.splice(j, 1);
            }
        }
        // ogr = split;
        if(split.length === 1){
            ogr = split[0];
            break;
        }
        console.log(c);
        console.log(split);
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
        // co2 = split2;
        if(split2.length === 1){
            co2 = split2[0];
            break;
        }
    }
    console.log(ogr);
    console.log(co2);
    document.querySelector("#out").innerText = parseInt(ogr, 2) + parseInt(co2, 2);
}