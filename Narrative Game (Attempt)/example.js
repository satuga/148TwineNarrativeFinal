var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World",10,50);

function clear_Canvas ()
{
    var s = document.getElementById ("myCanvas");
    var w = s.width;
    s.width = 10;
    s.width = w;
}

function new_Tile(text)
{
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.font = "30px Arial";
	ctx.fillText(text,30,90);
	
}

new_Tile("hello motherfucka");