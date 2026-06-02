/**
 * animations.js — Scroll reveal and avatar photo fallback
 * Desai Lab · Case Western Reserve University
 */

(function () {
  'use strict';

  /* ===== SCROLL REVEAL ===== */

  var revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -32px 0px'
      }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all immediately if IntersectionObserver unavailable
    revealEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }


  /* ===== AVATAR PHOTO FALLBACK ===== */

  // Show initials when headshot image is missing or fails to load.
  // Drop the real photo file into /images/ and the swap is automatic —
  // no HTML edits needed.

  function initAvatarFallback(img) {
    var fallback = img.parentElement.querySelector('.avatar-fallback');
    if (!fallback) return;

    function showFallback() {
      img.style.display = 'none';
      fallback.style.display = 'flex';
    }

    img.addEventListener('error', showFallback);

    // Already failed (cached broken image)
    if (img.complete && img.naturalWidth === 0) {
      showFallback();
    }
  }

  document.querySelectorAll('.avatar-img').forEach(initAvatarFallback);

}());
