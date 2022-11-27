document.querySelector("#run").onclick = function(){
    var data = document.querySelector("#input").value;
    var split = data.split("\n");
    var checksum = 0;
    for(var i = 0; i < split.length; i++){
        var split2 = split[i].split("\t").map(x => parseInt(x)).sort((a, b) => a - b);
        console.log(split2[split2.length-1]);
        checksum += split2[split2.length-1] - split2[0];
    }
    document.querySelector("#out").innerText = checksum;
}