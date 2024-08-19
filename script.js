'strict mode';

const leftSide = document.querySelector('.main__leftItems');
const filterBtn = document.querySelector('.filter-button');
const closeBtn = document.querySelector('.modal--close');

filterBtn.addEventListener('click', function (e) {
  e.preventDefault();
  leftSide.style.display = 'block';
});

closeBtn.addEventListener('click', function (e) {
  leftSide.style.display = 'none';
});
