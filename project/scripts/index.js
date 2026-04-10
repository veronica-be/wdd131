/*HEADER*/
/*Menu mobile for animation X and show nav*/
const navigation = document.querySelector('.navigation');

/*function requirement (1 out of 2)*/
function menuShowMobile(menuMobileX) {
    menuMobileX.classList.toggle("change");
    navigation.classList.toggle('open');
}