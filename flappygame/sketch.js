var w;
var h;
var img;
var bird;
var pipes = [];
function setup() {
  createCanvas(400, 500);
  bird = new Bird();
  pipes.push(new Pipe());
	eye= new Eye();
	img= loadImage("https://raw.githubusercontent.com/wongj19/sketches/gh-pages/N_Vs09bt_400x400.jpg");
	new Audio('https://www.bensound.com/royalty-free-music?download=funkyelement').play()

}

function draw() {
background(0);
	image(img,0,0,400,500); 
w= random(1000);
h=random(1000);
	
fill(220);
var millisecond = millis();
text("Milliseconds \nrunning: \n" + millisecond, 5, 40);
fill(82,255,51);	
  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
document.location.reload()
    }


    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
	
}
function mousePressed() {
  if (mousePressed) {
    bird.up();
    //console.log("SPACE");
  }
}
function Eye() {
this.eyey =height/2
this.eyex =64;
 this.gravity = 0.6;
  this.lift = -15;
  this.velocity = 0;
	this.show= function () {
	fill(0);
	ellipse(this.eyex,this.eyey,8,8);
	}
	this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.eyey += this.velocity;

    if (this.eyey > height) {
      this.eyey = height;
      this.velocity = 0;
    }

    if (this.eyey < 0) {
      this.eyey = 0;
      this.velocity = 0;
    }
  }


}

function Bird() {
  this.y = height/2;
  this.x = 64;

  this.gravity = 0.6;
  this.lift = -15;
  this.velocity = 0;

  this.show = function() {
    fill(255,255,0);
    ellipse(this.x, this.y, 32, 32);
		 fill(255,255,0);
    triangle(this.x+7,this.y-7,this.x+7,this.y+7,this.x+30,this.y);
		    triangle(this.x-11,this.y+8,this.x+2,this.y+8,this.x-10,this.y-19);

    triangle(this.x-11,this.y+8,this.x+2,this.y+8,this.x-16,this.y-15);
		fill(0);
		ellipse(this.x-1,this.y-4,4)
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}

function Pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
  this.speed = 2;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
				textSize(60);
text( "why bad bro?",w,h);
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }


}
