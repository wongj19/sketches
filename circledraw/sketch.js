function setup() { 
  createCanvas(1000,1000);
	background(220);
} 

 
 

function draw() {
var r;
var g;
var b;
var W;
var L;

	r = random(255);
	g = random(255);
	b= 	random(255);
	W= random(100);
	L= random(100);
strokeWeight(0);
stroke(r,g,b)
fill(r,g,b)
ellipse(mouseX,mouseY,W,L);
}
function mousePressed(){
background(220);
}
