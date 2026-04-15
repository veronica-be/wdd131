const params = new URLSearchParams(window.location.search);

/* Object requirement  */
const summaryObject = {
    "Reason for Contact": params.get("reason"),
    "Subject": params.get("topic"),
    "Message": params.get("review"),
    "User Name": `${params.get("name")} ${params.get("last-name") || ""}`.trim(),/* Js literals */
    "Email Address": params.get("email"),
    "Telephone Number": params.get("tel")
};

/* Another function to the requirement */
function renderSummary(dataObject) {
    const container = document.querySelector("#summary-container");
    if (!container) return;

    Object.entries(dataObject).forEach(([label, value]) => {
        const div = document.createElement("div");
        div.className = "summary-field";
        /* Js literals */
        div.innerHTML = `
            <p><strong class="label">${label}:</strong> <span>${value || "—"}</span></p>
            <hr>
        `;

        container.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    /* Use of Local Stotrage*/
    let count = Number(localStorage.getItem("contact-count")) || 0;
    count++;
    localStorage.setItem("contact-count", count);

    const counterEl = document.querySelector("#reviewCounter");
    if (counterEl) counterEl.textContent = count;

    renderSummary(summaryObject);
});
