
let cnv;
function setup() {
  cnv = createCanvas (windowWidth, windowHeight);

  textAlign(CENTER,BOTTOM);
  //cnv.attribute('font-weight' ,400);
   textFont('vartext', 100);
}


function draw() {
  cnv.background(60);
  
  
  
  let pfat = constrain(map(mouseX,0,width,100,900),100,900);
    fill(220);
    
  
  text('Hello', width/2, height/2);
  cnv.attribute('font-weight' ,pfat);
  //cnv.style('font-weight' ,pfat);

}
