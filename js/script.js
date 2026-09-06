document.getElementById("year").textContent = new Date().getFullYear();

const progressBar = document.getElementById("progress");

function updateReadingProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${percent}%`;
}

window.addEventListener("scroll", updateReadingProgress);
window.addEventListener("resize", updateReadingProgress);
updateReadingProgress();
