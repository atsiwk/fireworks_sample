// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/CKeyIbT3vXI

// new Particle(（開始位置）, height（固定値：キャンバスの高さ）, （色）, true（爆発時にfalse）, （初速）, （花火の大きさ）);

function Particle(x, y, color, firework, startVelocity, size) {
  this.pos = createVector(x, y);
  this.firework = firework;
  this.lifespan = 255;
  this.color = color;
  this.acc = createVector(0, 0);
  this.startVelocity = startVelocity;
  this.size = size;

  if (this.firework) {
    this.vel = createVector(0, this.startVelocity);
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0, 10));
  }

  this.applyForce = function (force) {
    this.acc.add(force);
  };

  this.update = function (size) {


    if (!this.firework) {
      this.vel.mult(size);
      this.lifespan -= 4;
    }

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.done = function () {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  };

  this.show = function () {

    if (!this.firework) {
      strokeWeight(2);
      stroke(this.color, 255, 255, this.lifespan);
    } else {
      strokeWeight(4);
      stroke(this.color, 255, 255);
    }

    point(this.pos.x, this.pos.y);
  };
}
