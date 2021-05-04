var font1, rando;
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var listLength;

function preload(){
  font1 = loadFont('data/tibetan.otf');
}
function setup() {
createCanvas (windowWidth, windowHeight);
angleMode(DEGREES);
background(164,62,32);

textFont(font1);
textAlign(CENTER, CENTER);

listLength = letters.length;
frameRate(5);
}


function draw() {
 rando = int(random(1, listLength-1));
//background(164,62,32, 20);
fill(228,253,84);
textSize(random(50,300));
text(letters[rando], random(width),random(height));

}
function mousePressed() {
  if (isLooping()) {
 noLoop(); 
  }
  else { loop(); 
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
