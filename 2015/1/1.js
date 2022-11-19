fetch("../data.txt")
.then(res => res.text())
.then((data) => {
    var pos = 0;
    for(var i = 0; i < data.length; i++){
        if(data.charAt(i) === "("){
            pos++;
        }else{
            pos--;
        }
    }
    document.querySelector("#out").innerText = pos;
});