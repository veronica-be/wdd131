const products = [
    {
        id: "fc-1888",
        name: "",
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

function SubmmitDisplay(label, value) {
    const pElementInfo = document.querySelector(`p[data-label="${label}"] .value`);

    if (pElementInfo) {
        if (label === "Review Comments" && value) {
            pElementInfo.innerHTML = `<span class="CommentValue">${value}</span>`;
        } else {
            pElementInfo.textContent = value || "—";
        }
    }
}

const features = info.getAll("features");
SubmmitDisplay("Product Name", product?.name ?? info.get("productName"));
SubmmitDisplay("Product ID", info.get("productName"));
SubmmitDisplay("Overall Rating", info.get("rating"));
SubmmitDisplay("Date of Installation", info.get("installationDate"));
SubmmitDisplay("Useful Features", features.length > 0 ? features.join(", ") : "—");
SubmmitDisplay("Review Comments", info.get("review"));
SubmmitDisplay("User Name", info.get("userName"));


/*footer*/
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

