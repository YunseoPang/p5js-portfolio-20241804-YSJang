function setup() {
  createCanvas(600, 400);
  noLoop(); 
}

function draw() {
  background(220, 230, 240); 
  fill(30); 
  noStroke();
  ellipse(300, 340, 240, 100); 
  rect(180, 150, 240, 220, 50); 
  fill(120, 120, 120); 
  stroke(30);
  strokeWeight(2);
  rect(150, 330, 300, 100, 80, 80, 0, 0); 
  fill(255, 224, 189); 
  noStroke();
  rect(275, 290, 50, 50);
  stroke(30);
  fill(255, 224, 189);
  ellipse(300, 210, 180, 210);
  fill(30);
  noStroke();
  rect(210, 140, 180, 60, 10); 
  fill(25, 45, 110); 
  stroke(30);
  strokeWeight(2);
  arc(300, 160, 190, 160, PI, TWO_PI); 
  fill(235, 210, 180); 
  ellipse(300, 155, 200, 35);
  fill(255);
  stroke(30);
  ellipse(265, 225, 30, 18);
  ellipse(335, 225, 30, 18);
  fill(30);
  circle(265, 225, 10);
  circle(335, 225, 10);
  noFill();
  stroke(150, 100, 80);
  strokeWeight(2);
  arc(300, 255, 15, 10, 0, PI);
  stroke(200, 80, 80);
  strokeWeight(3);
  line(285, 285, 315, 285);
}
