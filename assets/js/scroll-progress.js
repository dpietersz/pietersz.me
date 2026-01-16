// Scroll Progress Bar - Shows reading progress on blog posts
(function() {
  'use strict';

  // Only run on pages with the progress bar element
  const progressBar = document.querySelector('.scroll-progress-bar');
  if (!progressBar) return;

  const rootElement = document.documentElement;

  function updateProgress() {
    const scrollTop = rootElement.scrollTop || document.body.scrollTop;
    const scrollHeight = rootElement.scrollHeight - rootElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  }

  // Use requestAnimationFrame for smooth updates
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(function() {
        updateProgress();
        ticking = false;
      });
      ticking = true;
    }
  }

  // Initialize
  document.addEventListener('scroll', onScroll, { passive: true });
  updateProgress(); // Set initial state
})();

