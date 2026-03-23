document.addEventListener("DOMContentLoaded", () => {

    function calculateWindChill(temp, windSpeed) {
        return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16))).toFixed(1);
    }

    // footer
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
    document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

    // weather
    const temp = 9;
    const windSpeed = 10;

    document.getElementById('temperature').textContent = `${temp} °C`;
    document.getElementById('wind').textContent = `${windSpeed} km/h`;

    const windChillElement = document.getElementById('windChill');

    // conditions to check
    if (temp <= 10 && windSpeed > 4.8) {
        const result = calculateWindChill(temp, windSpeed);
        windChillElement.textContent = `${result} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }

    //info being replace at html
    document.getElementById('conditions').textContent = "Sunny";
    document.getElementById('area').textContent = "3,640 km²";
    document.getElementById('population').textContent = "923,000";
    document.getElementById('capital').textContent = "Palma";
    document.getElementById('languages').textContent = "Spanish, Catalan";
    document.getElementById('currency').textContent = "Euro (€)";
    document.getElementById('timeZone').textContent = "CET (UTC+1)";
    document.getElementById('callCode').textContent = "+34";
    document.getElementById('internetTLD').textContent = ".es";
});




