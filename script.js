// Minimal interaction: inline research accordions and publication-year filters.
(() => {
  'use strict';

  // Native <details> works without JavaScript. This only keeps one topic open.
  const panels = Array.from(document.querySelectorAll('.research-panel'));
  panels.forEach(panel => {
    panel.addEventListener('toggle', () => {
      if (!panel.open) return;
      panels.forEach(other => {
        if (other !== panel) other.open = false;
      });
    });
  });

  const yearButtons = Array.from(document.querySelectorAll('.year-button'));
  const groups = Array.from(document.querySelectorAll('.publication-year'));
  function showYear(year) {
    yearButtons.forEach(btn => {
      btn.setAttribute('aria-pressed', String(btn.dataset.year === year));
    });
    groups.forEach(section => {
      section.hidden = year !== 'all' && section.dataset.year !== year;
    });
  }
  yearButtons.forEach(button => {
    button.addEventListener('click', () => showYear(button.dataset.year));
  });
  if (yearButtons.length && groups.length) showYear('2026');
})();
