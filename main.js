canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	numkey_imgTag = new Image(); 
	numkey_imgTag.onload = uploadimg; 
	numkey_imgTag.src = numkey.png;
	
	otherkey_imgTag = new Image(); 
	otherkey_imgTag.onload = uploadimg; 
	otherkey_imgTag.src = otherkey.png;

	spkey_imgTag = new Image(); 
	spkey_imgTag.onload = uploadimg; 
	spkey_imgTag.src = spkey.png;

	Alpkey_imgTag = new Image(); 
	Alpkey_imgTag.onload = uploadimg; 
	Alpkey_imgTag.src = Alpkey.png;

	Arrkey_imgTag = new Image(); 
	Arrkey_imgTag.onload = uploadimg; 
	Arrkey_imgTag.src = Arrkey.png;
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}


window.addEventListener("keyDown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
	{
		alphabetkey();
		console.log("Alphabet")
	}
	else
	{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function alphabetkey()
{
	img_image="Alpkey.png";
	add(); 
}

function numberkey()
{
	img_image="numkey.png";
	add();
}

function arrowkey()
{
	img_image="Arrkey.png";
	add();
}

function specialkey()
{
	img_image="spkey.png";
	add();
}

function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
