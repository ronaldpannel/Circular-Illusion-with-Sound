const playBtn = document.getElementById("btn");

let midiNotes = [
  "108",
  "107",
  "105",
  "103",
  "101",
  "100",
  "98",
  "96",
  "95",
  "93",
  "91",
  "89",
  "88",
  "86",
  "84",
  "83",
  "81",
  "79",
  "77",
  "76",
  "74",
  "72",
  "71",
  "69",
  "67",
  "65",
  "64",
  "62",
  "60",
];
let radius = 150;

let balls = [];
let num;

let buffer = 5;
let loop = 3;
let val;
let speedSlider;
let ballsSlider

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  stroke(255);

  speedSlider = new Slider(20, 1, 1, 0.5, width/2 - 50, height - 50);
 
 

 
  num = 22 
  console.log()
  for (let i = 0; i < loop; i++) {
    balls[i] = [];
    for (let j = 0; j < num; j++) {
      let startAngle = (360 / loop) * i;
      let shiftAngle = (180 / num) * j;
      let note = midiNotes[j];
      balls[i][j] = new Ball(startAngle, shiftAngle, note, buffer);
    }
  }
}
function draw() {
  background(0, 100);
  playBtn.addEventListener("click", () => {
    if (getAudioContext().state !== "running") {
      getAudioContext().resume();
    }
  });
  speedSlider.display();

  
  // outer circle
  translate(width / 2, height / 2);
  noFill();
  ellipse(0, 0, radius * 2, radius * 2);
  for (let i = 0; i < loop; i++) {
    for (let j = 0; j < num; j++) {
      balls[i][j].update();
      balls[i][j].draw();
    }
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
