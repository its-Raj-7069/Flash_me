const btn = document.getElementById('revealBtn');
const profile = document.querySelector('.profile');

btn.addEventListener('click', () => {
  btn.style.display = 'none';
  profile.classList.remove('hidden');
});

// Snowfall Generator
const snowContainer = document.getElementById("snowContainer");

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.style.left = `${Math.random() * window.innerWidth}px`;
  snowflake.style.animationDuration = `${6 + Math.random() * 5}s`; // Slower fall
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = `${8 + Math.random() * 6}px`;
  snowContainer.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 12000);
}

setInterval(createSnowflake, 180);
