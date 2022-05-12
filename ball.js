class ballClass {
    constructor() {
        this.r = 15;
        this.pos = createVector(width / 2, height / 2);
        this.col = color(255);
        this.vel = createVector(10, 10);
        this.randomArray = [0, 1];
        this.randomVal = random(this.randomArray);
    }

    show() {
        fill(this.col);
        noStroke();
        circle(this.pos.x, this.pos.y, this.r * 2);
    }

    move() {
        if (frameCount >= 100) {
             if (this.randomVal == 1) {
                this.vel.x = -10;
            } else if (this.randomVal == 0) {
                this.vel.x = 10;
            }

            this.pos.add(this.vel);
        }
    }

    bounce() {
        if (this.pos.x <= 0) {
            this.vel.x = 10;
        }

        if (this.pos.x >= width) {
            this.vel.x = -10;
        }

        if (this.pos.y <= 0) {
            this.vel.y = 10;
        }
    }

    respawn() {
        if (this.pos.y >= height) {
            this.pos.x = width / 2;
            this.pos.y = height / 2;
            fill(255, 0, 0);
            score--;
            fail.play();
        }
    }
}