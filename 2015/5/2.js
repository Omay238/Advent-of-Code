document.querySelector("#run").onclick = function(){
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var nice = 0;
    for(var i = 0; i < split.length; i++){
        var r1 = 0;
        var r2 = 0;
        for(var j = 0; j < split[i].length; j++){
            var s = split[i].substr(j, 3);
            if(s.charAt(0) === s.charAt(2)){
                r2++;
            }
        }
        for(var j = 0; j < split[i].length; j++){
            var a = split[i].substr(j, 2);
            for(var k = 0; k < split[i].length; k++){
                if(k < j-1 || k > j+1){
                    var b = split[i].substr(k, 2);
                    if(b === a){
                        r1++;
                    }
                }
            }
        }
        if(r1 >= 2 && r2 >= 1){
            nice++;
        }
    }
    document.querySelector("#out").innerText = nice;
}