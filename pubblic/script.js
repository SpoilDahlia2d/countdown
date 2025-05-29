Sc// MATRIX EFFECT
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&*#".split("");
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#f0a";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height || Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 35);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// COUNTDOWN LOGIC
const countdownElement = document.getElementById("countdown");

// Target = 3 giorni da ora
const now = new Date();
const targetDate = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);

function updateCountdown() {
  const currentTime = new Date().getTime();
  const distance = targetDate - currentTime;

  if (distance <= 0) {
    countdownElement.textContent = "DAHLIAWARE V3 LAUNCHED!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Aspetta 3 secondi prima di mostrare il countdown con dissolvenza
setTimeout(() => {
  countdownElement.classList.add("visible");
  setInterval(updateCountdown, 1000);
}, 3000);