
// Passing Through 02 (Gathering)
// TicTac Art Centre Interactive Logo
// Move mouse over to interact with it
// Press space to change shapes
// Concept and programming by Marlon Barrios Solano
// September 13th 2022


const SPIN_MULTIPLIER = 80;
const MIN_PARTICLE_COUNT = 200;
const MAX_PARTICLE_COUNT = 700;
const MIN_PARTICLE_SIZE = 5;
const MAX_PARTICLE_SIZE = 50;
const MIN_FORCE = 0.2;
const MAX_FORCE = 0.6;
const REPULSION_RADIUS = 100;
const REPULSION_STRENGTH = 0.09;
const IMG_RESIZED_WIDTH = 500;
const IMG_SCAN_STEPS = 1;

const DrawTypes = {
	Rect: 0,
	Ellipse: 1,
	Triangle: 2
};

var imgNames = ["0.png"];
var particles = [];
var indices = [];
var imgIndex = 0;
var drawType = 1;
var particleCount = 1000;
var maxSize = 0;
var img;

function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);
	canvas.canvas.oncontextmenu = () => false;
	loadImg(imgNames[0]);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup()
}

function draw() {
	background(251, 222, 198);
	
	fill(80);
	noStroke();
	text(
		`
		Passing Through 02 | Gathering
		TicTac Art Centre Interactive Logo
		Move mouse over to interact with it
		Press space to change shapes
		Concept and programming by Marlon Barrios Solano
		September 13th 2022
		`, 
		20, 20);
	
	if (img == null) {
		return;
	}
	
	push();
	translate(width / 2 - img.width / 2, height / 2 - img.height / 2);
	
	fill(255);
	noStroke();
	
	rectMode(CENTER);
	
	particles.forEach(particle => {
		particle.move();
		
		push();
		translate(particle.pos.x, particle.pos.y);
		
		let spin = particle.vel.mag() * SPIN_MULTIPLIER;
		rotate(radians(particle.mapped_angle + spin));
		
		fill(particle.color);
		
		switch(drawType) {
			case DrawTypes.Ellipse:
				ellipse(0, 0, particle.size, particle.size);
				break;
			case DrawTypes.Rect:
				rect(0, 0, particle.size, particle.size);
				break;
			case DrawTypes.Triangle:
				triangle(
					particle.size * -0.5, particle.size * -0.5, 
					0, particle.size, 
					particle.size * 0.5, particle.size * -0.5);
		}
		
		pop();
	});
	
	rectMode(CORNER);
	
	if (mouseIsPressed) {
	
		image(img, 0, 0);
 
	
		
		}
	
		
	


	pop();
}

function keyPressed() {
	
	if (key == ' ') {
		nextDrawType();
	}
}

// function mousePressed() {
// 	if (mouseButton == LEFT) {
// 		loadNextImg();
// 	}
// }