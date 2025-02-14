// script.js - Adding background music and interactivity

document.addEventListener('DOMContentLoaded', () => {
    // Add background music
    const audio = document.createElement('audio');
    audio.src = 'assets/music/your-favorite-song.mp3';
    audio.autoplay = true;
    audio.loop = true;
    audio.volume = 0.6;
    document.body.appendChild(audio);
  
    // Floating messages animation
    const messages = document.querySelectorAll('.floating-messages span');
    messages.forEach((msg, index) => {
      msg.style.animationDelay = `${index * 1.5}s`;
    });
  
    // Interactive Button to Start Journey
    const journeyButton = document.createElement('button');
    journeyButton.textContent = 'Start Our Journey ❤';
    journeyButton.classList.add('journey-btn');
    document.querySelector('.hero').appendChild(journeyButton);
  
    journeyButton.addEventListener('click', () => {
      window.location.href = 'journey.html';
    });
  });
  // script.js
const canvas = document.getElementById('puzzleCanvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.crossOrigin = 'anonymous';
img.src = '13.jpg'; 

const pieces = 9;
let shuffled = [];

img.onload = () => {
  shuffled = Array.from({ length: pieces }, (_, i) => i).sort(() => Math.random() - 0.5);
  drawPuzzle(shuffled);
};

function drawPuzzle(order) {
  const size = canvas.width / 3;
  order.forEach((pos, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const srcRow = Math.floor(pos / 3);
    const srcCol = pos % 3;
    ctx.drawImage(img, srcCol * size, srcRow * size, size, size, col * size, row * size, size, size);
  });
}

function shuffle() {
  shuffled.sort(() => Math.random() - 0.5);
  drawPuzzle(shuffled);
}
function solve() {
  shuffled = Array.from({ length: pieces }, (_, i) => i);
  drawPuzzle(shuffled);
  alert('tere liye mai humesha hu meri moti! ❤️');
}

document.getElementById('shuffleBtn').addEventListener('click', shuffle);
document.getElementById('solveBtn').addEventListener('click', solve);

  


