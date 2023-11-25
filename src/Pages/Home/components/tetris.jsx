import { useEffect, useRef, useState } from 'react';

const Tetris = () => {
  const canvasRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (!gameStarted) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const grid = createGrid(10, 20);
    const scale = 20;

    function createGrid(width, height) {
      const matrix = [];
      while (height--) {
        matrix.push(new Array(width).fill(0));
      }
      return matrix;
    }

    function drawGrid() {
      context.fillStyle = '#000';
      context.fillRect(0, 0, canvas.width, canvas.height);

      drawMatrix(grid, { x: 0, y: 0 });
    }

    function drawMatrix(matrix, offset) {
      matrix.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            context.fillStyle = 'cyan'; // Change color based on block type
            context.fillRect(x * scale + offset.x, y * scale + offset.y, scale, scale);
            context.strokeStyle = 'black';
            context.strokeRect(x * scale + offset.x, y * scale + offset.y, scale, scale);
          }
        });
      });
    }

    // Function to update the game state
    function update() {
      drawGrid();
      requestAnimationFrame(update);
    }

    // Start the game loop
    update();
  }, [gameStarted]);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <article className="game">
    <canvas ref={canvasRef} width={240} height={400}></canvas>
    {!gameStarted && (
      <button onClick={startGame} className="start-button">
        Start Game
      </button>
    )}
  </article>
);
};


export default Tetris;
