const $coverMainImage = document.querySelector('.cover-image--main');

window.addEventListener('load', ()=> {
  setTimeout(() => {
    $coverMainImage.classList.remove('cover-image--hidden');
  }, 2000);
});
