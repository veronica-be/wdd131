const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

let reviewCount = Number(window.localStorage.getItem("review-count")) || 0;
reviewCount += 1;
window.localStorage.setItem("review-count", reviewCount);

const reviewCounter = document.querySelector("#reviewCounter");
reviewCounter.textContent = reviewCount;

const info = new URLSearchParams(window.location.search);

const productReviewed = document.querySelector("#productReviewed");
const product = products.find(product => product.id === info.get("productName"));
productReviewed.textContent = product?.name ?? info.get("productName");

const summaryUser = document.querySelector("#summary");
const Upload = document.createDocumentFragment();

function displayData(label, value) {
    const p = document.createElement("p");
    if (value) {
        const displayValue = (label === "Review Comments")
            ? `<span class="CommentValue">${value}</span>`
            : value;

        p.innerHTML = `<span class="strong">${label}:</span> ${displayValue}`;
    }

    else {
        p.innerHTML = `<span class="strong">${label}:</span> —`;
    }
    Upload.appendChild(p);
}

const features = info.getAll("features");
displayData("Product Name", product?.name ?? info.get("productName"));
displayData("Product ID", info.get("productName"));
displayData("Overall Rating", info.get("rating"));
displayData("Date of Installation", info.get("installationDate"));
if (features.length > 0) {
    displayData("Useful Features", features.join(", "));
}

displayData("Review Comments", info.get("review"));
displayData("User Name", info.get("userName"));

summaryUser.innerHTML = "";
summaryUser.appendChild(Upload);

/*footer*/
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
