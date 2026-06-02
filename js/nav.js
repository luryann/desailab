/**
 * nav.js — Mobile navigation toggle
 * Desai Lab · Case Western Reserve University
 */

(function () {
  'use strict';

  const hamburger = document.querySelector('.nav-hamburger');
  const menu      = document.querySelector('.nav-menu');

  if (!hamburger || !menu) return;

  function openMenu() {
    hamburger.setAttribute('aria-expanded', 'true');
    menu.classList.add('open');
    document.body.classList.add('nav-open');
  }

  function closeMenu() {
    hamburger.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    document.body.classList.remove('nav-open');
  }

  hamburger.addEventListener('click', function () {
    const isOpen = menu.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  // Close menu when a nav link is clicked
  menu.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
      hamburger.focus();
    }
  });

  // Close when clicking outside the nav
  document.addEventListener('click', function (e) {
    const nav = document.querySelector('.nav');
    if (nav && !nav.contains(e.target) && menu.classList.contains('open')) {
      closeMenu();
    }
  });
}());
