fetch("../data.txt")
.then(res => res.text())
.then((data) => {
    var ft = 0;
    var splitData = data.split("\n");
    for(var i = 0; i < splitData.length; i++){
        var split2 = splitData[i].split("x");
        split2 = split2.sort((a, b) => a>b?-1:1);
        console.log(split2);
        ft += split2[0]*2 + split2[1]*2 + split2[0]*split2[1]*split2[2];
    }
    document.querySelector("#out").innerText = ft;
});