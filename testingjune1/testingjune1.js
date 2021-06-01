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
let content = 'test';
let content3 = 'test';
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

  //   if (sound1.isPlaying){
  ////background(40);
  //background(0);
  //} else {
  //  background(243,244,228);
  //}
  
  
  push();
    volume = volume * 2;
    volcol = map(volume,0,1,0,250);
    volcol2 =  map(volume,-1.5,1,250,0);
  pop();
  volume = map(volume,0,1,100,900);
  
  
  
  
  fill(volcol);
  
   
//if(sound1.isPlaying) {                   //THIS DOES NOT WORK, BUT WORKS IN MY FULL VERSION
// pfat = volume;
//typeSize = 110;
//} else {
//pfat = map(millis(),0,2000,0,900);
//typeSize = 50;
//}


pfat = map(millis(),0,20000,0,900) + volume; //THIS WORKS
typeSize = volume/2;


 text(content, width/2,height/2);


 //txtcol1 = volcol;
  

//textAlign(CENTER,CENTER);
//if(sound1.isPlaying){
// content3 = content;
// noStroke();
// fill(volcol);
// textSize(170);
//} else {
//  content3 = content3;
//  fill(255,0,0);
//  textSize(50);
//}




}

function keyTyped(){
    content += key;
    //content3 += key;
    
   if(sound1.isPlaying){         //THIS IS WHAT I WANT TO CONTROL MY SOUND TURNING OFF, 
 sound1.stop(2) ;                //WORKS SOMETIMES(?) IN THIS SKETCH, BUT BREAKS THE MAIN SKETCH
 }
}


function keyPressed(){
  
if (key == 'a'){
    sound1.play();
}
  
 // if(sound1.isPlaying){
 //sound1.pause(); 
 //}
   
 //  if(sound1.isPlaying){
 //sound1.stop(2); 
 //}
 
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
