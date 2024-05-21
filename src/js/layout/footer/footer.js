const updateYear = () => {
  const currentYear = new Date().getFullYear();
  const $footerYear = document.querySelector('.footer-year');

  $footerYear.textContent = currentYear;
};

updateYear();
