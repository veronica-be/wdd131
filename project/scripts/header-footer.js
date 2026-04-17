/*HEADER*/
/*Menu mobile for animation X and show nav*/
const navigation = document.querySelector('.navigation');
const menuContainer = document.querySelector('.menu-container');

/*function requirement (1 out of 2)*/
menuContainer.addEventListener('click', function () {
    menuContainer.classList.toggle('change');
    navigation.classList.toggle('open');
});

/*FOOTER */
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').innerHTML = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').innerHTML = `Last Modified: ${document.lastModified}`;
