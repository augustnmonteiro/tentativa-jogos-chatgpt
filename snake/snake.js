class Snake {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.segments = [
      { x: 150, y: 150 },
      { x: 140, y: 150 },
      { x: 130, y: 150 },
      { x: 120, y: 150 },
      { x: 110, y: 150 },
    ];
    this.dx = 10;
    this.dy = 0;
    this.foodX = 0;
    this.foodY = 0;
    this.generateFood();
  }

  move() {
    const tail = this.segments.pop();
    const head = { x: this.segments[0].x + this.dx, y: this.segments[0].y + this.dy };
    this.segments.unshift(head);
    if (head.x === this.foodX && head.y === this.foodY) {
      this.generateFood();
      this.segments.push(tail);
    }
  }

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = "orange";
    this.context.fillRect(this.foodX, this.foodY, 10, 10);
    this.context.fillStyle = "black";
    this.segments.forEach(function(segment) {
      this.context.fillRect(segment.x, segment.y, 10, 10);
    }, this);
  }

  generateFood() {
    this.foodX = Math.floor(Math.random() * 30) * 10;
    this.foodY = Math.floor(Math.random() * 30) * 10;
    for (let i = 0; i < this.segments.length; i++) {
      if (this.foodX === this.segments[i].x && this.foodY === this.segments[i].y) {
        this.generateFood();
        break;
      }
    }
  }

  checkCollision() {
    const head = this.segments[0];
    if (head.x < 0 || head.x >= this.canvas.width || head.y < 0 || head.y >= this.canvas.height) {
      return true;
    }
    for (let i = 1; i < this.segments.length; i++) {
      if (head.x === this.segments[i].x && head.y === this.segments[i].y) {
        return true;
      }
    }
    return false;
  }

  changeDirection(direction) {
    switch (direction) {
      case "ArrowLeft":
        if (this.dx !== 10) {
          this.dx = -10;
          this.dy = 0;
        }
        break;
      case "ArrowUp":
        if (this.dy !== 10) {
          this.dx = 0;
          this.dy = -10;
        }
        break;
      case "ArrowRight":
        if (this.dx !== -10) {
          this.dx = 10;
          this.dy = 0;
        }
        break;
      case "ArrowDown":
        if (this.dy !== -10) {
          this.dx = 0;
          this.dy = 10;
        }
        break;
    }
  }
}
