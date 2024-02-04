const main = document.querySelector('.main');
const themeswitcher = document.querySelector('.themeswitcher');
const footer = document.querySelector('.footer');
const desc = document.querySelector('.desc');
const headerJs = document.querySelector('.headerjs');
const logojs = document.querySelector('.logojs')
const titlesecondjs = document.querySelector('.titlesecondjs')
const cardjs = document.querySelector('.cardjs')
const logoftjs = document.querySelector('.logoftjs')
const assidethemeswitcherjs = document.querySelector('.assidethemeswitcherjs')
const contentjs = document.querySelector('.contentjs')
const bottomjs = document.querySelector('.bottomjs')
const textwitejs = document.querySelector('.textwitejs')


themeswitcher.addEventListener('click', () => themeswitcher.classList.toggle('active'));
footer.addEventListener('click', () => footer.classList.toggle('active'));
desc.addEventListener('click', () => desc.classList.toggle('active'));
headerJs.addEventListener('click', () => headerJs.classList.toggle('active'));
logojs.addEventListener('click', () => logojs.classList.toggle('active'));
titlesecondjs.addEventListener('click', () => titlesecondjs.classList.toggle('active'));
cardjs.addEventListener('click', () => cardjs.classList.toggle('active'));
logoftjs.addEventListener('click', () => logoftjs.classList.toggle('active'));

themeswitcher.addEventListener('click', () => {
    main.classList.toggle('dark')
    footer.classList.toggle('dark')
    desc.classList.toggle('white')
    headerJs.classList.toggle('dark')
    logojs.classList.toggle('white')
    titlesecondjs.classList.toggle('white')
    cardjs.classList.toggle('dark')
    logoftjs.classList.toggle('white')
})

assidethemeswitcherjs.addEventListener('click', () => assidethemeswitcherjs.classList.toggle('active'));
bottomjs.addEventListener('click', () => bottomjs.classList.toggle('active'));
textwitejs.addEventListener('click', () => textwitejs.classList.toggle('active'));

assidethemeswitcherjs.addEventListener('click', () => {
    contentjs.classList.toggle('dark')
    bottomjs.classList.toggle('dark')
    textwitejs.classList.toggle('white')
})
