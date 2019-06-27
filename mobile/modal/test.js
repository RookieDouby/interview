function XMLHttpRequest() {
    var xhttp;
    if(window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest()
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
} 

xhttp.open(method, url, true)
xhttp.send();
xhttp.onreadystatechang = function() {
    if(xhttp.readyState == 4 && xhttp.status == 200) {
        console.log(xhttp.responseText);
    } else {
        xhttp.statusText;
    }
}