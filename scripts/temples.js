/*for the nav on the mobile*/
const hamButton = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


/*for my copyright footer*/
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').innerHTML = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').innerHTML = `Last Modified: ${document.lastModified}`;

