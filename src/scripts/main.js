'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const nodes = Array.from(document.querySelectorAll('.population'));
  const numbers = nodes
    .map((n) => n.textContent.replace(/[^\d]/g, '').trim())
    .map((v) => Number(v))
    .filter((n) => Number.isFinite(n));

  if (!numbers.length) {
    return;
  }

  const total = numbers.reduce((sum, n) => sum + n, 0);
  const average = Math.round(total / numbers.length);

  const fmt = (n) => n.toLocaleString('en-US');

  const totalE1 = document.querySelector('.total-population');
  const avgE1 = document.querySelector('.average-population');

  if (totalE1) {
    totalE1.textContent = fmt(total);
  }

  if (avgE1) {
    avgE1.textContent = fmt(average);
  }
});
