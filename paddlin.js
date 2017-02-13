
var b = document.getElementById("clr-btn");
b.addEventListener( "onclick", function(){
    var c = document.getElementById("paddledCanvas");
    w = c.getAttribute("width");
    h = c.getAttribute("height");
    ctx = c.getContext("2d");
    ctx.clearRect( 0, 0, w, h);
});

var c = document.getElementById("paddledCanvas");
