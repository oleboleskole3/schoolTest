let color1 = 113;
let color2 = 244;
let color3 = 88;
let div;
let div2;
//let input;
let butn;

function setup() 
{
	createCanvas(windowWidth, windowHeight).position(-1,-1);
	input = createInput('');
	input.position(width * 0.5 - 100, height * 0.3);
	input.size(200,20).input(regn);
	div = createDiv('kr.');
	div.position(width * 0.5 + 100, height * 0.3);
	div2 = createDiv('');
	//butn = createButton('Udregn!').position(width * 0.5 - 40, height * 0.4).size(80,25);
	//butn.mousePressed(regn);
	regn();
	console.log(windowHeight);
	console.log(windowWidth);
}

function regn()
{
	div2.elt.innerHTML = 'Pant A: ' + String(ceil(Number(input.value()))) + '.<br><br>Pant B: '+ String(ceil(Number(input.value()) / 1.5)) + '.<br><br>Pant C: ' + String(ceil(Number(input.value()) / 3));
	div2.center();
}

function RAINBOW()
{
	color1++;
	color2+=0.5;
	color3+=0.25;
	if (color1 > 255)
	{
		color1 = 0;
	}
	if (color2 > 255)
	{
		color2 = 0;
	}
	if (color3 > 255)
	{
		color3 = 0;
	}
}

function draw()
{
	background(color1,color2,color3);
	RAINBOW();
}

function windowResized()
{
	resizeCanvas(windowWidth, windowHeight);
	input.position(width * 0.5 - 100, height * 0.3);
	div.position(width * 0.5 + 100, height * 0.3);
	//butn.position(width * 0.5 - 40, height * 0.4);
	regn()
}
