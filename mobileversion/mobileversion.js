let pfat;
let fts;
let sound1, sound2, sound3, analyzer;
let txtcol1, txtcol2;
let volume, volcol;
let opac;
let content = '';
let offset = 0;
let scrollspeed = 0.5;
let textsize = 30;

function preload(){
  font = loadFont('data/UchenLatin.ttf');
}

function setup() {
  createCanvas (windowWidth,windowHeight);
  frameRate(60);
  
  p = createP('\'Type Here\'');
  
  background(243,244,228);
  //background(50);


noStroke();

textFont(font);
angleMode(DEGREES);
  
}


function draw() {
  background(243,244,228);
  //background("#F3F4E4");

 
  let posX = 0;
  let posY = 0;
  

let content2 = 'Uchen Latin';
  
  pfat = map(millis(),0,300000,100,900);
  
  textSize(textsize);
  let contwidth = textWidth(content2);
    for (let x = offset; x < width; x += contwidth+30) { //use a for loop to draw the line of text multiple times down the vertical axis
    
    text(content2, x, height-(textsize/4)); //display text
  }
  
    for (let x = offset; x < width; x += contwidth+30) { //use a for loop to draw the line of text multiple times down the vertical axis
fill(210,211,186);
    text(content2, x, (textsize)); //display text
  }

 
  offset-=scrollspeed;
  
  fts = 150;
  
  p.style('font-size' ,fts);
  p.style('color' ,"#2B2D2D");
  p.style('font-weight' ,pfat);
  p.style('width', 0.9*windowWidth);
  p.style('height', 0.9*windowHeight);
  p.position(posX,posY);
  p.attribute('contenteditable',true);
  p.attribute('spellcheck', false);

}


function keyPressed(){
 
   if (keyCode != 8){
 content += key; } 
 else if (keyCode == 8){
   content=content.substring(0, content.length-1);
 }
 
  }
  

function keyTyped(){
  

 //  if (keyCode == 8) {
 //  content -=1;
 //}
 

 
}



function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
