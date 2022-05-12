var player;
var ball;
var brickArray = [];
var pixelFont;
var score;
var limit;
var success;
var fail;

function preload() {
  pixelFont = loadFont(`pixel-font.ttf`);
  success = loadSound(`success.mp3`);
  fail = loadSound(`fail.wav`);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  player = new playerClass();
  ball = new ballClass();
  score = 0;
  limit = 10;

  for (var i = 0; i < 100; i++) {
    brickArray.push(new brickClass());
  }
}

function draw() {
  background(0);
  player.show();
  player.constraint();
  ball.show();
  ball.move();
  ball.bounce();
  ball.respawn();
  playerMove();
  collideBall();
  showBricks();
  showScore();
  winGame();
}

function playerMove() {
  if (keyIsDown(37) || keyIsDown(65)) {
    player.pos.x -= player.speed;
  }

  if (keyIsDown(39) || keyIsDown(68)) {
    player.pos.x += player.speed;
  }
}

function collideBall() {
  if (ball.pos.x >= player.pos.x && ball.pos.x <= player.pos.x + player.w && ball.pos.y >= player.pos.y && ball.pos.y <= player.pos.y + player.h) {
    ball.vel.y *= -1;
    ball.randomVal = 3;
  }
}

function showBricks() {
  for (var j = brickArray.length - 1; j >= 0; j--) {
    brickArray[j].show();
    if (ball.pos.x >= brickArray[j].pos.x && ball.pos.x <= brickArray[j].pos.x + brickArray[j].w && ball.pos.y >= brickArray[j].pos.y && ball.pos.y <= brickArray[j].pos.y + brickArray[j].h) {
      brickArray.splice(j, 1);
      score++;
      ball.vel.y *= -1;
      success.play();
    }
  }
}

function showScore() {
  fill(0, 255, 0);
  textFont(pixelFont);
  textSize(30);
  text(score, width - 90, 40);
}

function winGame() {
  if (score >= limit) {
    clear();
    background(0);
    player.speed = 0;
    ball.vel = 0;
    textSize(120);
    fill(255);
    text(`YOU WIN!`, 500, 500);
  }
}