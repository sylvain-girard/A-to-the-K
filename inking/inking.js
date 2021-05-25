let ttp;
let myfont, myfont2;
var contents = "test";

function preload(){
  myfont = loadFont('data/uchenregular-heavy.otf');
  myfont2 = loadFont('data/variabletest2GX.ttf');
}

function setup() {
createCanvas (windowWidth, windowHeight);


  frameRate(10);
  background(243,244,228);
  
  
}

function draw() {
  background(243,244,228,1);

                                                                  //PAPERBACKGROUND
    //for(let i = 0; i < 1000; i++) {
    //let x1 = random() * width;
    //let y1 = random() * height;
    ////let x1 = mouseX + random(50);
    ////let y1 = mouseY + random(50);
    //let theta = random() * 2 * PI;  
    //let segmentLength = random() * 5 ;
    //let x2 = cos(theta) * segmentLength + x1;
    //let y2 = sin(theta) * segmentLength + y1;

    ////stroke(random(20,30),random(20,50),random(70,90),0.2);
    //stroke(random(190,210),200);
    //strokeWeight(random(0.5,1));
    
    //line(x1, y1, x2, y2);
    //}                                                            //BACKGROUNDEND
  
  
  
   ttp = myfont.textToPoints(contents, 0.2*width, 0.2*height, 120,{           //TTP
   sampleFactor: 0.5,
   simplifyThreshold: 0
  });
 stroke(0);
  for(let i =0; i< ttp.length; i++){
   line(ttp[i].x, ttp[i].y, ttp[i].x + random(-1,1), ttp[i].y + random(-1,1));
  }                                                                           //TTPEND
  
   fill(243,244,228);
   push();
   translate(340,160);
   noStroke();
   beginShape();  
   vertex(0, 40+frameCount);
   vertex(35, 10+frameCount);
   vertex(35, 400);
   vertex(0, 400);
   endShape();
   pop();    
   
   push();
   translate(380,160);
   noStroke();
   beginShape();  
   vertex(0, 30+frameCount);
   vertex(35, 0+frameCount);
   vertex(35, 400);
   vertex(0, 400);
   endShape();
   pop();  
   
   push();
   translate(520,160);
   noStroke();
   beginShape();  
   vertex(0, 30+frameCount);
   vertex(35, 0+frameCount);
   vertex(35, 400);
   vertex(0, 400);
   endShape();
   pop();  
   
   push();
   translate(550,160);
   noStroke();
   beginShape();  
   vertex(0, 40+frameCount);
   vertex(35, 10+frameCount);
   vertex(35, 400);
   vertex(0, 400);
   endShape();
   pop();  
                                                                              
                                                                              
                                                                              
  fill(0);                                                                    //TEXT
  stroke(0);                                                     
  strokeWeight(1);
  textFont(myfont2);
  textSize(120);
  text(contents, 0.2*width, 0.2*height);                                        //TEXTEND


  
}

function keyTyped() {
  contents += key;
}
