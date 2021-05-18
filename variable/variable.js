function setup() {
  createCanvas (window.innerWidth,window.innerHeight);
  frameRate(24);
  
  p = createP('The Flexible Future of Typography');
  
}


function draw() {
  background("#F8D153");
  
  let posX = 0;
  let posY = height/8;
  
  let fts = 160;
  
  
  let pfat = constrain(map(mouseX,0,width,100,900),100,900);
  
  p.style('font-size' ,fts+'px');
  p.style('font-weight' ,pfat);
  p.style('align', 'center');
  p.position(posX,posY);
}
