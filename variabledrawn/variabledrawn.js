let pvar=100;
//set starting variable type size
let typeSize = 0;
let cnv, mapper;
let pfat;
let fts;
let sound1, sound2, sound3, sound4, sound5, sound6, sound7, analyzer;
let txtcol1, txtcol2;
let volume, volcol, volcol2;
let opac;
let content = '';
//let content2 = '';
let content3 = '\'Uchen Latin\'';
let offset = 0;
let scrollspeed;
let playing;
//let pause = sound1.pause() || sound2.pause() || sound2.pause() || sound3.pause() || sound4.pause();


function preload(){
  sound1 = loadSound('data/Envy.mp3');
  sound2 = loadSound('data/Envy2.mp3');//offline
  sound3 = loadSound('data/Envy3.mp3');
  sound4 = loadSound('data/GCRiff110D-05.wav');
  sound5 = loadSound('data/GCChugStrat160-E.wav');
  sound6 = loadSound('data/GCChugStrat160-A.wav');
  sound7 = loadSound('data/GCRiff120D-05.wav');
}

function setup() {
  cnv = createCanvas (windowWidth,windowHeight);
  frameRate(60);
  textFont('vartext', typeSize);
  background(243,244,228);
  //background(50);
noStroke();
angleMode(DEGREES);
  
  analyzer = new p5.Amplitude();  
  analyzer.setInput(); 
}


function draw() {
  background(243,244,228);
  updateVariableFont(pfat, 0, 900);
  let volume = analyzer.getLevel();
 playing = sound1.isPlaying() || sound2.isPlaying() || sound3.isPlaying() || sound4.isPlaying() || sound5.isPlaying();
     if (playing){
//background(40);
background(volcol2);
  } else {
    background(243,244,228);
  }
  
  push();
  volume = volume * 2;
  volcol = map(volume,0,1,0,250);
  volcol2 =  map(volume,-1.5,1,250,0);
  pop();
  volume = map(volume,0,1,100,900);

  txtcol1 = volcol;

if (playing){
pfat = volume;
stroke(156,36,21);
strokeWeight(5);
//fill(156,36,21);
noFill();
typeSize = 100 + (volume/3);
content = content;
  } else {
pfat = map(millis(),0,200000,0,900);
//let pfat = map(mouseX,width,0,100,900);
noStroke();
fill(210,211,186);
typeSize = 20;
//content = content2;
  }
  
  textSize(typeSize);
  let contwidth = textWidth(content);
  push();
  translate(width,0);
  rotate(180);
    for (let x = offset; x < width; x += contwidth+20) { //use a for loop to draw the line of text multiple times down the vertical axis
    
    text(content, x, -height+(typeSize)); //display text
  }
  pop();
    for (let x = offset; x < width; x += contwidth+20) { //use a for loop to draw the line of text multiple times down the vertical axis
    //fill(156,36,21);
text(content, x, (typeSize)); //display text
  }

if (playing){
//textSize(50);
scrollspeed = 5;
  } else {
   //textSize(20);
   scrollspeed = 0.1;
  }
  offset-=scrollspeed;

textAlign(CENTER,CENTER);
if(playing){
 content3 = content;
 noStroke();
 fill(volcol);
 textSize(170);

 
} else {
  content3 = content3;
  fill(195,196,169);
  textSize(50);
}
 text(content3, width/2,height/2);
//fill(volcol);

}

function keyTyped(){
  //content = content.substring(0, content.length-14) + key;
    content += key;
    content3 += key;
//    if(sound1.isPlaying){
// sound1.stop(2); 
//}
}


function keyPressed(){
  
if (key == 'a'){
    sound1.play();
  } 
  if (key == 'A'){
    sound1.play();
  } 
  
if (key == 'b'){
    sound2.play();
  }
  
  if (key == 'c'){
    sound3.play();
  } 
  
  // if (key == 'd'){
  //  sound4.play();
   
  //} 
 

if (keyCode != 8){
 content = content; 
 content3 = content;}
 else if (keyCode == 8){
   content=content.substring(0, content.length-1);
   content3=content3.substring(0, content3.length-1);
 }
 

}
  

function mousePressed(){
  //saveCanvas('samplerShot_###', 'jpg');
//if(sound1.isPlaying){
// sound1.pause(); 
//}
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
