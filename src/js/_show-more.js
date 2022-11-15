const showMore = document.querySelector('.btn__show-more');
const productsLength = document.querySelectorAll('.works__card').length;
let items = 6;

showMore.addEventListener('click', () => {
  items += 2;
  const array = Array.from(document.querySelector('.works__wrap').children);
  const visItems = array.slice(0, items);

  visItems.forEach(el => el.classList.add('is-visible'));

  if (visItems.length === productsLength) {
    showMore.style.display = 'none';
  }
});
