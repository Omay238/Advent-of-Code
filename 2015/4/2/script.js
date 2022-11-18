var input = "yzbqklnj";
var i = 282749;
var found = false;
while(!found){
    if(md5(input+i).substr(0, 6) === "000000"){
        found = true;
    }
    i++;
}
document.querySelector("#out").innerText = i-1;