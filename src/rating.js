let number = document.querySelector('.ratingjs');
const ratingsjs = document.querySelectorAll('.ratingsjs');

ratingsjs.forEach((rating) => {
    rating.addEventListener('click', () => {
        number.textContent = rating.textContent;
    });
});
