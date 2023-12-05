

function updateClock(Hour12Format){
    const clockElement = document.getElementById('clock');
    const is12HourFormat = clockElement.textContent.includes("AM") || clockElement.textContent.includes("PM");
    const dateElement = document.getElementById('date')
    const currentTime = new Date();

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const day = currentTime.getDay();
    const month = currentTime.getMonth() + 1;
    const year = currentTime.getFullYear();

    

    const formattedHours = is12HourFormat ? format12Hour(hours) : format24Hour(hours);
    const formattedMinutes = formatTimeComponent(minutes);
    const formattedSeconds = formatTimeComponent(seconds);

    const formattedDate = `${formatTimeComponent(day)}/${formatTimeComponent(month)}/${year}`;
    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    clockElement.textContent = timeString;
    dateElement.textContent = formattedDate;

    updateBackgroundColor(hours);
}

function formatTimeComponent(component) {
    return component < 10 ? `0${component}` : component;
}

function updateBackgroundColor(hours) {
    const body = document.getElementById('clock-container');
    const currentHour = hours;

    if (currentHour >= 6 && currentHour < 12) {
        body.style.backgroundColor = '#f39c12'; // Morning
    } else if (currentHour >= 12 && currentHour < 18) {
        body.style.backgroundColor = '#3498db'; // Afternoon
    } else {
        body.style.backgroundColor = '#2c3e50'; // Evening/Night
    }
}

function toggleTimeFormat() {
    const clockElement = document.getElementById('clock');
    const is12HourFormat = clockElement.textContent.includes("AM") || clockElement.textContent.includes("PM");
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const formattedHours = is12HourFormat ? format24Hour(hours) : format12Hour(hours);
    const formattedMinutes = formatTimeComponent(minutes);
    const formattedSeconds = formatTimeComponent(seconds);

    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    clockElement.textContent = timeString;
}

function format12Hour(hours) {
    const suffix = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return `${formattedHours} ${suffix}`;
}

function format24Hour(hours) {
    return formatTimeComponent(hours);
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();