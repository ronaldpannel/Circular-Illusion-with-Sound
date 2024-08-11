class Ball {
  constructor(startAngle, shiftAngle, va, note, buffer) {
    this.startAngle = startAngle
    this.x = 0;
    this.angle = 0;
    this.shiftAngle = shiftAngle;
    this.angle = 0;
    this.va = va;
    this.note = note;
    this.buffer = buffer

    this.env = new p5.Envelope();
    let attackVol = 1;
    let releaseVol = 0;
    let sustainVol = 1;

    let attackTime = 0.01;
    let releaseTime = 0.1;
    let sustainTime = 0.01;
    this.env.setADSR(attackTime, sustainTime, sustainVol, releaseTime);
    this.env.setRange(attackVol, releaseVol);

    this.ocs = new p5.Oscillator();
    this.ocs.start();
    this.ocs.freq(midiToFreq(this.note));
    this.ocs.amp(this.env);
  }

  update() {
    if (this.collision(0)) {
      this.env.play();
    }
    this.angle += this.va;
  }
  collision(x) {
   
    if (this.x >= x - this.buffer && this.x <= x + this.buffer) {
      return true;
    } else {
      return false;
    }
  }
  draw() {
    push();
    this.x = radius * cos(this.startAngle + this.angle + this.shiftAngle);
    rotate(-this.shiftAngle);
    line(-radius, 0, radius, 0);
    fill(255);
    ellipse(this.x, 0, 10, 10);
    pop();
  }
}
