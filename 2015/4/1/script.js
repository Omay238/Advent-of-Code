var input = "yzbqklnj";
var i = 1;
var found = false;
while(!found){
    if(md5(input+i).substr(0, 5) === "00000"){
        found = true;
    }
    i++;
}
document.querySelector("#out").innerText = i-1;