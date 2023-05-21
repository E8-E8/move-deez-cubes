class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100,
        }

        this.velocity = {
            x: 0,
            y: 0,
        }
        this.friction = 1;
        this.gravity = 1;
        this.width = 100;
        this.height = 100;
        this.sides = {
            bottom: this.position.y + this.height
        }
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.sides.bottom = this.position.y + this.height;

        if(this.velocity.x < 0) {
            this.velocity.x += this.friction;
        }
        if(this.velocity.x > 0) {
            this.velocity.x -= this.friction;
        }
        // above the bottom of the canvas
        if(this.sides.bottom + this.velocity.y < canvas.height) {
            this.velocity.y += this.gravity;
        } else {
            this.velocity.y = 0;
        }
    }
}
