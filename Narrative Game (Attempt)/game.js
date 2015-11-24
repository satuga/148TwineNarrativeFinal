var game = new Phaser.Game(700,600,Phaser.CANVAS,'gameDiv');

var background;
var State;

var mainState =
{
	
	preload: function()
	{
		
		game.load.image('background1', "assests/background1.jpg");
		game.load.image('background2', "assests/background2.jpg");
		game.load.image('background3', "assests/background3.jpg");
		game.load.image('background4', "assests/background4.jpg");
		game.load.image('background5', "assests/background5.jpg");
		game.load.image('background6', "assests/background6.jpg");
		game.load.image('door', "assests/door.jpg");
	},
	
	create: function()
	{
		//title screen
		Screen = createState1('background1',textbubble1,100,0,"bold 32px Arial",0,450,actionOnClick);

	},
	
	update: function()
	{
		
		background.tilePosition.x += 2;

	}
}



function createState1(backgroundtype,texty,x1,y1,fonty,x2,y2,actionOnClick1)
{
	background = game.add.tileSprite(0,0,700,600,backgroundtype);
	style = { font: fonty, fill: "#8A0707", boundsAlignH: "center", boundsAlignV: "middle" };
	text = game.add.text(x1, y1, texty, style);
	button1 = game.add.button(x2+250, y2, 'door', actionOnClick1, this, 2, 1, 0);
}
function createState2(backgroundtype,texty,x1,y1,fonty,x2,y2,actionOnClick1,actionOnClick2)
{
	background = game.add.tileSprite(0,0,700,600,backgroundtype);
	style = { font: fonty, fill: "#8A0707", boundsAlignH: "center", boundsAlignV: "middle" };
	text = game.add.text(x1, y1, texty, style);
	button1 = game.add.button(x2+100, y2, 'door', actionOnClick1, this, 2, 1, 0);
	button2 = game.add.button(x2+425, y2, 'door', actionOnClick2, this, 2, 1, 0);
}
function createState3(backgroundtype,texty,x1,y1,fonty,x2,y2,actionOnClick1,actionOnClick2,actionOnClick3)
{
	background = game.add.tileSprite(0,0,700,600,backgroundtype);
	style = { font: fonty, fill: "#8A0707", boundsAlignH: "center", boundsAlignV: "middle" };
	text = game.add.text(x1, y1, texty, style);
	button1 = game.add.button(x2, y2, 'door', actionOnClick1, this, 2, 1, 0);
	button2 = game.add.button(x2+270, y2, 'door', actionOnClick2, this, 2, 1, 0);
	button3 = game.add.button(x2+560, y2, 'door', actionOnClick3, this, 2, 1, 0);
}

function actionOnClick()
{
	//screen 1, with three options left = 1 middle = 2 right = 3
	State = createState3('background3',textbubble2,50,0,"bold 32px Arial",0,450,actionOnClick1,actionOnClick2,actionOnClick3);
}
function actionOnClick1()
{	//left door wrong door go back to screen 1
	State = createState1('background2',textbubble3,50,0,"bold 32px Arial",0,450,actionOnClick);
}
function actionOnClick2()
{
	State = createState2('background4',textbubble4,50,0,"bold 32px Arial",0,450,actionOnClick4,actionOnClick3);
}
function actionOnClick3()
{
	State = createState1('background5',textbubble5,50,0,"bold 32px Arial",0,450,actionOnClick5);
}
function actionOnClick4()
{
	//assumably the correct pathway (make another state and continue the story.)
}
function actionOnClick5()
{
	State = createState1('background5',textbubble6,50,0,"bold 32px Arial",0,450,actionOnClick2);
}


game.state.add('mainState', mainState);
game.state.start('mainState');



var textbubble1 ="														Death's Quest\nA Horrible Journey Awaits You...";
var textbubble2 ="You enter the castle.\nHoping to find what you seek.\nYou see three doors ahead.\nWhich do you take?";
var textbubble3 ="Damn it all.\nI have chose the wrong door!\nThis is a dead end.\nI'd better head back.";
var textbubble4 = "Ah yes!\n It seems as though I have chosen correctly!\nNow I have 2 door choices to go through.\nWhich shall I take?";
var textbubble5 = "Hmmmmmmmmm.\nThere seems to be nothing in this room...\nOh god a warewolf!\nI guess I have to fight now!"
var textbubble6 = "You pull out your sword and attack\nthe beast with all your might.\nAfter a hard fight the wolf,\nnow wounded, runs away in fear. "