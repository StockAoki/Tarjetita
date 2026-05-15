// Tarjeta Fiorella — interacción del sobre (HTML/CSS/JS puro)

(function () {
  const scene = document.querySelector('.scene');
  const envelope = document.querySelector('.envelope');
  const resetBtn = document.querySelector('.reset-btn');

  function open() {
    scene.classList.add('opened');
    envelope.classList.add('opened');
    spawnHearts();
  }

  function close() {
    scene.classList.remove('opened');
    envelope.classList.remove('opened');
  }

  envelope.addEventListener('click', function (e) {
    e.stopPropagation();
    if (envelope.classList.contains('opened')) {
      close();
    } else {
      open();
    }
  });

  resetBtn.addEventListener('click', close);

  // Floating hearts when opened
  function spawnHearts() {
    const container = document.querySelector('.hearts-layer');
    container.innerHTML = '';
    for (let i = 0; i < 14; i++) {
      const heart = document.createElement('span');
      heart.className = 'float-heart';
      heart.textContent = '♡';
      heart.style.left = (20 + Math.random() * 60) + '%';
      heart.style.bottom = '40%';
      heart.style.fontSize = (12 + Math.random() * 14) + 'px';
      heart.style.setProperty('--drift', ((Math.random() - 0.5) * 60) + 'px');
      heart.style.animationDelay = (Math.random() * 0.8) + 's';
      heart.style.animationDuration = (3 + Math.random() * 2) + 's';
      container.appendChild(heart);
    }
    setTimeout(function () {
      container.innerHTML = '';
    }, 5500);
  }
})();
