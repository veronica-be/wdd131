/*for the nav on the mobile*/
const navButton = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');

navButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    navButton.classList.toggle('open');
});


/*for my copyright footer*/
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').innerHTML = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').innerHTML = `Last Modified: ${document.lastModified}`;

