function setup() {
  createCanvas(600, 400);
}

function draw() {
  let bgOsc = sin(frameCount * 0.02) * 10;
  background(15 + bgOsc, 25 + bgOsc / 2, 45);
  noStroke();
  let waveSize1 = sin(frameCount * 0.01) * 30;
  let waveSize2 = cos(frameCount * 0.015) * 40;
  fill(30, 50, 80, 40);
  ellipse(150, 300, 350 + waveSize1, 350 + waveSize1); 
  fill(40, 70, 100, 30);
  ellipse(480, 120, 400 + waveSize2, 400 + waveSize2);
  let timeVal = sin(frameCount * 0.05); 
  let moveY = timeVal * 15; 
  let scaleX = 1 + timeVal * 0.05; 
  let scaleY = 1 - timeVal * 0.03; 
  let legSwing1 = sin(frameCount * 0.08) * 12;
  let legSwing2 = cos(frameCount * 0.07) * 15;
  let legSwing3 = sin(frameCount * 0.06 + 1) * 10;
  let legStretch = 1 + sin(frameCount * 0.1) * 0.1;
  let colorProgress = (sin(frameCount * 0.06) + 1) / 2; 
  let startColor = color(0, 230, 255, 180);
  let targetColor = color(255, 30, 100, 200);
  let legColor1 = lerpColor(startColor, targetColor, colorProgress);
  let legColor2 = lerpColor(startColor, targetColor, (colorProgress + 0.3) % 1.0);
  let legColor3 = lerpColor(startColor, targetColor, (colorProgress + 0.6) % 1.0);
  fill(legColor1); 
  rect(183 + legSwing1, 211 + moveY, 12, 170 * legStretch); 
  rect(215 + legSwing1 * 0.8, 198 + moveY, 8, 150 * legStretch);
  fill(legColor2);
  triangle(
    285 + legSwing2, 220 + moveY, 
    260 + legSwing2 * 1.5, (370 + moveY) * legStretch, 
    315 + legSwing2 * 0.5, (380 + moveY) * legStretch
  ); 
  rect(331 + legSwing2 * 0.7, 205 + moveY, 18, 165 * legStretch);
  fill(legColor3);
  rect(402 + legSwing3, 230 + moveY, 25, 120 * legStretch);
  triangle(
    450 + legSwing3, 210 + moveY, 
    480 + legSwing3 * 1.3, (340 + moveY) * legStretch, 
    420 + legSwing3 * 0.8, (330 + moveY) * legStretch
  ); 
  fill(250, 120, 140, 190); 
  ellipse(314, 165 + moveY, 190 * scaleX, 130 * scaleY); 
  fill(230, 80, 100, 210);
  triangle(320, 45 + moveY, 195, 185 + moveY, 440, 210 + moveY); 
  fill(255, 210, 100, 130); 
  rect(278, 140 + moveY, 45, 45);
  rect(330, 175 + moveY, 20, 60);
  fill(255, 240, 240, 230); 
  ellipse(365, 145 + moveY, 55, 38); 
  fill(10, 60, 70); 
  ellipse(378, 148 + moveY, 18, 18);
  let flash = sin(millis() * 0.005) * 55;
  fill(255, 255, 200, 180 + flash);
  ellipse(105, 80, 12, 12); 
  let drift = sin(frameCount * 0.04) * 5;
  stroke(255, 150, 150, 120); 
  strokeWeight(2);
  line(510 + drift, 280 + drift, 540 + drift, 310 + drift);
  line(515 + drift, 310 + drift, 545 + drift, 280 + drift);
}

function mousePressed() {
  saveGif('squid_animation', 3);
}
