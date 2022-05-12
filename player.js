class playerClass {
    constructor() {
        this.w = 140;
        this.h = 30;
        this.pos = createVector(width / 2 - this.w / 2, height - (this.h + 5));
        this.col = color(255);
        this.speed = 20;
    }

    show() {
        fill(this.col);
        noStroke();
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }

    constraint() {
        if (this.pos.x < 0) {
            this.pos.x = 0;
        }

        if (this.pos.x + this.w > width) {
            this.pos.x = width - this.w;
        }
    }
}