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
            "https://nigerianheritage.ng/img/tours/68779629aefae_aa5.webp"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://www.robertaboyd.com/images/thumbs/0004667_manti-temple-a-house-of-peace_625.jpeg"
    },

    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://www.iglesiadelpilar.com.ar/wp-content/uploads/quien-es-el-lider-de-la-iglesia-mormona.webp"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://edge.fscdn.org/assets/static/media/YigoGuamTemple.a942da1f6e1cc57e0832.webp"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://dctemple.org/wp-content/uploads/2021/12/Washington-DC-Temple1-1.webp"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://www.memo.com.ar/files/image/37/37224/629f4eb0e9432_715_403!.webp?s=90f63964aac649557ec0aee91caa3b5d&d=1654607538&oe=jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://templetours.org/wp-content/uploads/2021/03/mexico-city-temple-lds-591669-wallpaper.webp"
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
        const loading = (temple === temples[0] || temple === temples[1] || temple === temples[3]) ? 'fetchpriority="high"' : 'loading="lazy"'
        card.innerHTML = `
            <img 
                src="${temple.imageUrl}" 
                width= "640"
                height= "360"
                alt="${temple.templeName} Temple" 
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

