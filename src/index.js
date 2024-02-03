const main = document.querySelector('.main');
const themeswitcher = document.querySelector('.themeswitcher');
const footer = document.querySelector('.footer');
const desc = document.querySelector('.desc')

themeswitcher.addEventListener('click', () => themeswitcher.classList.toggle('active'));
footer.addEventListener('click', () => footer.classList.toggle('active'));
desc.addEventListener('click', () => desc.classList.toggle('active'));

themeswitcher.addEventListener('click', () => {
    main.classList.toggle('dark')
    footer.classList.toggle('dark')
    desc.classList.toggle('white')
})
