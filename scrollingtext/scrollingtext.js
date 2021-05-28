
let content = 'Font Name'; 
//let content = ''; 
let start = 0; 
let font;

function preload() {
  font = loadFont('data/uchen-Regular.ttf'); 
}

function setup() {
  createCanvas (windowWidth,windowHeight);
  textFont(font);
  textAlign(CENTER, CENTER);
  textSize(40); 
  angleMode(DEGREES);
}

function draw() {
  background(255);
    for (let x = start; x < width; x += 220) { 
    fill(0); 
    text(content, x, height-30); 
  }
  start-=1;
  
  // for (let x = start; x < width; x += content.length) { 
  //  fill(0); 
  //  text(content, x, height-25); 
  //}
  //start-=1;
  
    for (let x = start; x < width; x += 220) { 
    fill(0); 
    text(content, x, 15);
  }
  start-=1;
 
}

//function keyTyped(){
// content += key; 
//}
