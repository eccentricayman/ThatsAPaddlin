var clear = function(){
    var c = document.getElementById( "paddledCanvas" );
    w = c.getAttribute( "width" );
    h = c.getAttribute( "height" );
    ctx = c.getContext( "2d" );
    ctx.clearRect( 0, 0, w, h);
    ctx.beginPath();
};

var draw = function( ){
    var c = document.getElementById( "paddledCanvas" );
    ctx = c.getContext( "2d" );
    ctx.fillStyle = "#8159af" ;
    var x = event.x - c.offsetLeft;
    var y = event.y - c.offsetTop;
    ctx.fillRect(x - 10, y - 10, 20, 20);
};

var b = document.getElementById( "clr-btn" );
b.addEventListener( "click", function() {
    clear();
});

var c = document.getElementById( "paddledCanvas" );
c.addEventListener( "click", function() {
    console.log("drawing");
    drawCirc();
    drawLine();
});

/* Next Assignment */

var drawCirc = function() {
    var c = document.getElementById( "paddledCanvas" );
    ctx = c.getContext( "2d" );
    var x = event.x - c.offsetLeft;
    var y = event.y - c.offsetTop; 
    ctx.fillStyle = "#FF0000";
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
};

var drawLine = function() {
    var c = document.getElementById( "paddledCanvas" );
    ctx = c.getContext( "2d" );
    var x = event.x - c.offsetLeft;
    var y = event.y - c.offsetTop;
    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
    ctx.lineTo(x, y);
    ctx.fill();
    ctx.stroke();
};
