async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    const errorDiv = document.getElementById('error-message');
    const weatherCard = document.getElementById('weather-card');

    errorDiv.classList.add('hidden');
    weatherCard.classList.add('hidden');

    if (!city) {
        errorDiv.textContent = 'Please enter a city name!';
        errorDiv.classList.remove('hidden');
        return;
    }

    try {
        const response = await fetch(`/weather?city=${encodeURIComponent(city)}`);
        const data = await response.json();

        if (!response.ok) {
            errorDiv.textContent = data.error;
            errorDiv.classList.remove('hidden');
            return;
        }

        document.getElementById('city-name').textContent = `${data.city}, ${data.country}`;
        document.getElementById('description').textContent = data.description;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
        document.getElementById('temperature').textContent = `${data.temperature}°C`;
        document.getElementById('feels-like').textContent = `${data.feels_like}°C`;
        document.getElementById('humidity').textContent = `${data.humidity}%`;
        document.getElementById('wind-speed').textContent = `${data.wind_speed} km/h`;

        weatherCard.classList.remove('hidden');

    } catch (error) {
        errorDiv.textContent = 'Something went wrong. Please try again.';
        errorDiv.classList.remove('hidden');
    }
}

document.getElementById('cityInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        getWeather();
    }
});
