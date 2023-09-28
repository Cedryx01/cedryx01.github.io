let zBereich;


function setup() {
  zBereich= createCanvas(windowWidth, windowHeight);
  zBereich.position(0,0);
  zBereich.style('z-index', '-1');
  
}

function draw() {
  noStroke();
  fill(250,0,0, 20);
  circle(mouseX, mouseY, 25);
}

function mousePressed(){
  background(255);
  
}