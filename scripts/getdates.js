const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// 2. Get the last modified date/time and output it to the paragraph with id "lastModified"
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;