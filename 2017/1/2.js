document.querySelector("#run").onclick = function() {
    var data = document.querySelector("#input").value;
    var answer = 0;
    for (var i = 0; i < data.length; i++) {
        if (data.charAt(i) === data.charAt((i + data.length / 2) % data.length)) {
            answer += parseInt(data.charAt(i));
        }
    }
    document.querySelector("#out").innerHTML = answer;
}