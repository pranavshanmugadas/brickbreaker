class brickClass {
    constructor() {
        this.w = 55;
        this.h = 55;
        this.pos = createVector(random(width - (this.w + 5)), random(height - (height / 2 - 10)));
        this.col = color(255);
    }

    show() {
        fill(this.col);
        noStroke();
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }
}