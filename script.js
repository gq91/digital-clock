function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    const dateString = `${dayName}, ${monthName} ${day}, ${year}`;
    
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;

    updateGreeting(hours);
    updateBackground(hours);
}

function updateGreeting(hours) {
    const greetingElement = document.getElementById('greeting');
    if (hours < 12) {
        greetingElement.textContent = 'Good Morning';
    } else if (hours < 18) {
        greetingElement.textContent = 'Good Afternoon';
    } else {
        greetingElement.textContent = 'Good Evening';
    }
}

function updateBackground(hours) {
    const body = document.body;
    if (hours < 6 || hours >= 18) {
        body.style.background = 'linear-gradient(to bottom, #2C3E50, #4CA1AF)';
    } else if (hours < 12) {
        body.style.background = 'linear-gradient(to bottom, #87CEEB, #FFD700)';
    } else {
        body.style.background = 'linear-gradient(to bottom, #FFD700, #FF4500)';
    }
}

function fetchWeather() {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.textContent = 'Sunny 25°C';
}

function fetchTimeFact() {
    const timeFacts = [
        'A day on Venus is longer than a year on Venus.',
        'There are 31,556,952 seconds in a year.',
        'The shortest war in history lasted 38 minutes.',
        'The ancient Romans had an 8-day week.',
        'Time travel is theoretically possible according to Einstein’s general relativity.'
    ];
    const randomFact = timeFacts[Math.floor(Math.random() * timeFacts.length)];
    document.getElementById('time-fact').textContent = randomFact;
}

setInterval(updateTime, 1000);
fetchWeather();
fetchTimeFact();
updateTime();