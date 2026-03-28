/*for the nav on the mobile*/
const navButton = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');

navButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    navButton.classList.toggle('open');
});


/* The photo enhancement weel 04*/
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://franktalknow.com/wp-content/uploads/2022/10/TCKk9kpTURBXy8zNGEwMDgzNWRhNzZmNTY5NWM0ZDNlNDk2OTMzMDA3My5qcGeSlQMCHc0DHs0BwpMFzQMWzQGu3gABoTAF.webp"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/800%2C/0/default"
    },
    {
        templeName: "Hong Kong China",
        location: "Hong Kong, China",
        dedicated: "1996, May, 26",
        area: 51921,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQG5YByGVq52uvid0UZ7OOVSGv2bIVVA3evw&s"
    },
    {
        templeName: "Seoul Korea",
        location: "Seoul, Korea",
        dedicated: "1985, December, 14",
        area: 28057,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/57efcc4b6a1c664c934aa672b0f8de38a8f539c4/full/800%2C/0/default?lang=eng"
    },

];

/* MAKING CARDS */
let h1Name = "Home";
let h2Name = "";
const mainElement = document.getElementById("main");

function templeCards(temples) {

    mainElement.innerHTML = "";
    const titleOfPage = document.createElement("h1");
    titleOfPage.innerHTML = `
    ${h1Name}`
    const h2OfPage = document.createElement("h2");
    h2OfPage.innerHTML = `${h2Name}`
    mainElement.appendChild(titleOfPage);
    mainElement.appendChild(h2OfPage);

    temples.forEach(temple => {
        const card = document.createElement("figure");
        const firstElement = temples[0];
        const secondElement = temples[1];
        const thirdElement = temples[2];
        const loading = (firstElement || secondElement || thirdElement) ? 'fetchpriority="high"' : 'loading="lazy"'
        card.innerHTML = `
            <img 
                src="${temple.imageUrl}" 
                alt="${temple.templeName} Temple" 
                width="500px"
                height="auto"
                ${loading}
            >
            <figcaption>
            <h3>${temple.templeName}</h3>
            <div class="fig-grid">
            <p class="label">Location:</p> <p>${temple.location}</p>
            <p class="label">Dedicated:</p> <p>${temple.dedicated}</p>
            <p class="label">Area:</p> <p>${temple.area.toLocaleString()} sq ft</p>
            </div>
            </figcaption>
    `;
        mainElement.appendChild(card);
    });
};

templeCards(temples);


const homeAllTemple = document.querySelector("#home");

homeAllTemple.addEventListener("click", () => {
    h1Name = "Home";
    h2Name = "";
    templeCards(temples);
});

const oldTempleOnly = document.querySelector("#old");

oldTempleOnly.addEventListener("click", () => {
    h1Name = "Old";
    h2Name = "Temples built before 1900";
    let oldTemples = temples.filter(temple => Number(temple.dedicated.slice(0, 4)) < 1900); templeCards(oldTemples);
});

const newTempleOnly = document.querySelector("#new");

newTempleOnly.addEventListener("click", () => {
    h1Name = "New";
    h2Name = "Temples built after 2000";
    let newTemples = temples.filter(temple => Number(temple.dedicated.slice(0, 4)) > 2000);
    templeCards(newTemples);
});

const largeTempleOnly = document.querySelector("#large");

largeTempleOnly.addEventListener("click", () => {
    h1Name = "Large";
    h2Name = "Temples larger than 90,000 square feet";
    let largeTemples = temples.filter(temple => temple.area > 90000);
    templeCards(largeTemples);
});

const smallTempleOnly = document.querySelector("#small");

smallTempleOnly.addEventListener("click", () => {
    h1Name = "Small";
    h2Name = "Temples smaller than 10,000 square feet";
    let smallTemples = temples.filter(temple => temple.area < 10000);
    templeCards(smallTemples);
});


/*for my copyright footer*/
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').innerHTML = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').innerHTML = `Last Modified: ${document.lastModified}`;

