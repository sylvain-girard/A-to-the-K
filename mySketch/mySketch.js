
let content = '';
let currentShader;
let graphic;
let font;

function preload() {
  currentShader = getShader(this._renderer);
  font = loadFont('data/UchenLatin.ttf');
}

function setup() {
  let orientation = windowWidth > windowHeight ? 'landscape' : 'portrait';
  let size = orientation === 'portrait' ? windowWidth : windowHeight;
  
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  
  graphic = createGraphics(size,size);
  graphic.background(255,255,235);
  graphic.noStroke();
  graphic.textFont(font);
  graphic.textSize(windowWidth*0.15);
  graphic.textAlign(CENTER,CENTER);
  graphic.fill(190,30,45);
  graphic.stroke(0);
  graphic.strokeWeight(0);
  graphic.text('Waves',size*0.5,size*0.5);
  //graphic.text(content,size*0.4,size*0.4);
  
  shader(currentShader);
  currentShader.setUniform('tex', graphic);
}

function draw() {
  let freq = map(mouseX, 0, width, 0, 10.0);
  let amp = map(mouseY, 0, height, 0, 0.2);

  currentShader.setUniform('frequency', freq);
  currentShader.setUniform('amplitude', amp);
  currentShader.setUniform('speed', frameCount * 0.01);
  
  rect(0, 0, width, height);
}



function mouseWheel() { 
  return false;
}
