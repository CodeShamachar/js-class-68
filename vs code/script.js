// ================= IMAGE CHANGE =================

const images = document.querySelectorAll('.hover-container img');
const mainImg = document.querySelector('.zoom-container img');

images.forEach(img => {
  img.addEventListener('click', () => setActive(img));
});

function setActive(img) {
  images.forEach(i => i.parentElement.classList.remove('active'));
  img.parentElement.classList.add('active');
  mainImg.src = img.src;
}

window.addEventListener('DOMContentLoaded', () => {
  setActive(images[0]);
});

// ================= IMAGE ZOOM EFFECT =================

let zoomBox = document.querySelector('.zoom-container');
let img = zoomBox.querySelector('img');

zoomBox.addEventListener('mousemove', (e) => {
  let x = (e.offsetX / zoomBox.offsetWidth) * 100;
  let y = (e.offsetY / zoomBox.offsetHeight) * 100;

  img.style.transformOrigin = `${x}% ${y}%`;
  img.style.transform = 'scale(2)';
});

zoomBox.addEventListener('mouseleave', () => {
  img.style.transform = 'scale(1)';
});
