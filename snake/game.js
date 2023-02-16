const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let gameLoop;

function startGame() {
  const snake = new Snake(canvas);

  document.addEventListener('keydown', function(event) {
    if (event.keyCode === 37) {   // left arrow key
      snake.changeDirection('ArrowLeft');
    } else if (event.keyCode === 38) {  // up arrow key
      snake.changeDirection('ArrowUp');
    } else if (event.keyCode === 39) {  // right arrow key
      snake.changeDirection('ArrowRight');
    } else if (event.keyCode === 40) {  // down arrow key
      snake.changeDirection('ArrowDown');
    }
  });

  gameLoop = setInterval(function() {
    snake.move();
    snake.draw(context);
    if (snake.checkCollision()) {
      clearInterval(gameLoop);
      alert("Game over!");
    }
  }, 100);
}

startGame();
