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
