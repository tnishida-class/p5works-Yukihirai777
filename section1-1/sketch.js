function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0);
  strokeWeight(4);
  fill(100, 200, 200);
  triangle(12,120,116,120,116,10);
  fill(150, 150, 150);
  triangle(0,108,106,108,106,0);
  fill(255);
  textSize(32);
  textFont("serif");
  text("77", 68, 100);
}

for(let m = 0; m < 16; m++){
  for(let n = 0; n < 16; n++){
    if(m % 2 == 1 && n % 2 == 1 && n < 6 && (m + n) % 4 = 0){
    fill(255, 0, 0);
    }
    circle(size / 2 * i, size / 2 * j, size);
  }
}
