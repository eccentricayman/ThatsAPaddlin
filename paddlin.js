
var clear = function(){
    var c = document.getElementById( "paddledCanvas" );
    w = c.getAttribute( "width" );
    h = c.getAttribute( "height" );
    ctx = c.getContext( "2d" );
    ctx.clearRect( 0, 0, w, h);
}

var draw = function( event ){
    var c = document.getElementById( "paddledCanvas" );
    ctx = c.getContext( "2d" );
    ctx.fillStyle( "#8159af" );
    ctx.fillRect(event.clientX - 10, event.clientY -10, 20, 20);
}
