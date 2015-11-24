var game = new Phaser.Game(700,600,Phaser.CANVAS,'gameDiv');

var background;
var Screen;
var text;
var style;
var button1;
var button2;
var button3;
var myHealth;
var monsterHealth;

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
		game.load.image('warewolf', "assests/warewolf.jpg");
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
function monsterState(monsterType,myHealth,monsterHealth,actionOnClick1,actionOnClick2,actionOnClick3,actionOnClick4)
{
	background = game.add.tileSprite(0,0,700,600,'background6');
	if(monsterType == "wolf")
	{
		var monster = game.add.tileSprite(400,100,200,200,'warewolf');
	}
	style = { font: "bold 32px Arial", fill: "#8A0707", boundsAlignH: "center", boundsAlignV: "middle" };
	var text1 = game.add.text(200, 0, "FIGHT: Warewolf", style);
	var text2 = game.add.text(30, 400, "Attack", style);
	button1 = game.add.button(10, 450, 'door', actionOnClick1, this, 2, 1, 0);
	var text2 = game.add.text(180, 360, "Take your\n chances", style);
	button2 = game.add.button(180, 450, 'door', actionOnClick2, this, 2, 1, 0);
	var text3 = game.add.text(360, 400, "Defend", style);
	button3 = game.add.button(350, 450, 'door', actionOnClick3, this, 2, 1, 0);
	var text4 = game.add.text(550, 400, "Run", style);
	button4 = game.add.button(520, 450, 'door', actionOnClick3, this, 2, 1, 0);
	var text5 = game.add.text(80, 100, "Your HP: " + myHealth, style);
	var text5 = game.add.text(80, 200, "Monster's HP: " + monsterHealth, style);
}
function victory(actionOnClick1)
{
	background = game.add.tileSprite(0,0,700,600,'background6');
	style = { font: "bold 32px Arial", fill: "#8A0707", boundsAlignH: "center", boundsAlignV: "middle" };
	Screen = createState1('background2',"You have won! The enemy runs \naway in fear.\n Proceed to the next location.",50,0,"bold 32px Arial",0,450,actionOnClick1);
}
function runAway(actionOnClick1)
{
	background = game.add.tileSprite(0,0,700,600,'background6');
	style = { font: "bold 32px Arial", fill: "#8A0707", boundsAlignH: "center", boundsAlignV: "middle" };
	Screen = createState1('background2',"You ran away like a coward.\nYou got away, but you have stumbled\nback a couple rooms.\nTry again.",50,0,"bold 32px Arial",0,450,actionOnClick1);

}

function actionOnClick()
{
	//screen 1, with three options left = 1 middle = 2 right = 3
	Screen = createState3('background3',textbubble2,50,0,"bold 32px Arial",0,450,actionOnClick1,actionOnClick2,actionOnClick3);
}
function actionOnClick1()
{	//left door wrong door go back to screen 1
	Screen = createState1('background2',textbubble3,50,0,"bold 32px Arial",0,450,actionOnClick);
}
function actionOnClick2()
{
	Screen = createState2('background4',textbubble4,50,0,"bold 32px Arial",0,450,actionOnClick4,actionOnClick3);
}
function actionOnClick3()
{
	Screen = createState1('background5',textbubble5,50,0,"bold 32px Arial",0,450,actionOnClick5);
}
function actionOnClick4()
{
	//assumably the correct pathway
}
function actionOnClick5() //encounter wolf
{
	myHealth = 100;
	monsterHealth = 300;
	Screen = monsterState("wolf",100,300,actionOnClick6,actionOnClick7,actionOnClick8,actionOnClick9);
}
function actionOnClick6() //if attack wolf
{
	if(myHealth > 0 && monsterHealth > 0)
	{
		Screen = monsterState("wolf",myHealth-=10,monsterHealth-=50,actionOnClick6,actionOnClick7,actionOnClick8,actionOnClick9);
	}
	else
	{
		Screnn = victory(actionOnClick4);
	}
}
function actionOnClick7() //if double or nothing wolf
{
	if(myHealth > 0 && monsterHealth > 0)
	{
		Screen = monsterState("wolf",myHealth-=20,monsterHealth-=150,actionOnClick6,actionOnClick7,actionOnClick8,actionOnClick9);
	}
	else
	{
		Screnn = victory(actionOnClick4);
	}
}
function actionOnClick8() //if defend against wolf
{
	if(myHealth > 0 && monsterHealth > 0)
	{
		Screen = monsterState("wolf",myHealth-=5,monsterHealth-=25,actionOnClick6,actionOnClick7,actionOnClick8,actionOnClick9);
	}
	else
	{
		Screnn = victory(actionOnClick4);
	}
}
function actionOnClick9() //if ran from wolf
{
	runAway(actionOnClick);
}

game.state.add('mainState', mainState);
game.state.start('mainState');

var textbubble1 ="														Death's Quest\nA Horrible Journey Awaits You...";
var textbubble2 ="You enter the castle.\nHoping to find what you seek.\nYou see three doors ahead.\nWhich do you take?";
var textbubble3 ="Damn it all.\nI have chose the wrong door!\nThis is a dead end.\nI'd better head back.";
var textbubble4 = "Ah yes!\n It seems as though I have chosen correctly!\nNow I have 2 door choices to go through.\nWhich shall I take?";
var textbubble5 = "Hmmmmmmmmm.\nThere seems to be nothing in this room...\nOh god a monster!\nI guess I have to fight now!"