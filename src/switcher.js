const themeswitcher = document.querySelector('.themeswitcher');
const darkalljs = document.querySelectorAll('.darkalljs');
const whitealljs = document.querySelectorAll('.whitealljs')

themeswitcher.addEventListener('click', () => themeswitcher.classList.toggle('active'));

darkalljs.forEach((darkjs) => {
  darkjs.addEventListener('click', () => darkjs.classList.toggle('active'));

  themeswitcher.addEventListener('click', () => {
    darkjs.classList.toggle('dark')
  })
});


whitealljs.forEach((whitejs) => {
    whitejs.addEventListener('click', () => whitejs.classList.toggle('active'));

  themeswitcher.addEventListener('click', () => {
    whitejs.classList.toggle('white')
  })
});

