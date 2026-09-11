(function () {
  const target = document.getElementById('name-text');
  const fullName = 'Adrien Destefani';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    target.textContent = fullName;
    return;
  }

  let i = 0;
  const typeSpeed = 70;

  function type() {
    if (i <= fullName.length) {
      target.textContent = fullName.slice(0, i);
      i++;
      setTimeout(type, typeSpeed);
    }
  }

  type();
})();

(function () {
  const phoneBtn = document.getElementById('phone-btn');
  const PHONE_DISPLAY = '079 278 71 37';
  const originalHTML = phoneBtn.innerHTML;
  const originalLabel = phoneBtn.getAttribute('aria-label');
  let flipped = false;

  phoneBtn.addEventListener('click', () => {
    phoneBtn.classList.add('flipping');
    setTimeout(() => {
      flipped = !flipped;
      if (flipped) {
        phoneBtn.innerHTML = '<span class="phone-label">' + PHONE_DISPLAY + '</span>';
        phoneBtn.setAttribute('aria-label', 'Numéro de téléphone : ' + PHONE_DISPLAY);
      } else {
        phoneBtn.innerHTML = originalHTML;
        phoneBtn.setAttribute('aria-label', originalLabel);
      }
      phoneBtn.classList.remove('flipping');
    }, 300);
  });
})();
