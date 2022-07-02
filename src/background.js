/**
 * Add listener
 */

console.log('extension loaded');
document.addEventListener('click', (e) => {
  console.log('target', e.target);
});
