/*footer*/
document.getElementById('currentyear').innerHTML = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').innerHTML = `Last Modified: ${document.lastModified}`;

const queryString = window.location.search;


const urlParams = new URLSearchParams(queryString);
const labels = {
    'productName': 'Product:',
    'rating': 'Overall Rating:',
    'installDate': 'Date Installed:',
    'writtenReview': 'Review Notes:',
    'userName': 'Submitted By:'
};

const container = document.getElementById('summary');
container.innerHTML = '';

for (const [key, labelText] of Object.entries(labels)) {
    let value = urlParams.get(key);

    if (!value) {
        if (key === 'writtenReview' || key === 'userName') {
            value = "(Not provided)";
        } else {
            value = "(Unknown)";
        }
    }

    if (key === 'rating' && value >= 1 && value <= 5) {
        value = "&star;".repeat(value);
    }

    const div = document.createElement('div');
    div.className = 'summary-item';
    div.innerHTML = `<span class="summary-label">${labelText}</span> ${value}`;
    container.appendChild(div);
}


const features = urlParams.getAll('features');
if (features.length > 0) {
    const div = document.createElement('div');
    div.className = 'summary-item';

    const featuresList = features.map(feat => `<li>${feat}</li>`).join('');

    div.innerHTML = `<span class="summary-label">Useful Features:</span> <ul>${featuresList}</ul>`;
    container.appendChild(div);
} else {

    const div = document.createElement('div');
    div.className = 'summary-item';
    div.innerHTML = `<span class="summary-label">Useful Features:</span> (None selected)`;
    container.appendChild(div);
}