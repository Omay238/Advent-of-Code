document.querySelector("#run").onclick = function(){
    var data = document.querySelector("#input").value;
    var out = 0;
    function loopBetween(x, mi, ma){
        return (x <= mi) ? ma - Math.abs(x) : ((x >= ma) ? mi + x - ma : x);
    }
    for(var i = 0; i < data.length; i++){
        if(data.charAt(i) === data.charAt(loopBetween(i+1, 0, data.length))){
            out += parseInt(data.charAt(i));
        }
    }
    console.log(data.length);
    document.querySelector("#out").innerText = out;
}