function startExperience() {
  // background music
  document.getElementById("bgMusic").play();

  // typing text
  const text = "আপনি আমার লাইফের সবচেয়ে annoying কিন্তু সবচেয়ে favourite মানুষ 😆💖";
  let i = 0;

  function type() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }

  document.getElementById("typing").innerHTML = "";
  type();
}

function finalSurprise() {
  document.getElementById("finalText").innerText =
    "আমি অনেক lucky আপনাকে friend হিসেবে পেয়ে 💖🎂";

  // birthday music
  let music = document.getElementById("bdayMusic");
  music.currentTime = 0;
  music.play();

  // confetti
  confetti({
    particleCount: 180,
    spread: 120,
    origin: { y: 0.6 }
  });
}
