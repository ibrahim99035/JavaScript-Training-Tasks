function getLocation(){
    document.getElementById('weather-container').innerText = 'Loading....';
    document.getElementById('weather-container').classList.toggle('wheatherContainerStyle');
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showWeather, showError);
    } else{
        document.getElementById('weather-container').innerText = 'This Browser does not support Geolocation';
    }
}

function showWeather(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const apiKey = '92ee75ac2c3cec25ce8569734c7f9afb';
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetch(weatherApiUrl)
        .then(response => response.json())
        .then(data =>{
            displayWeather(data);
        })
        .catch(error =>{
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(weatherData) {
    const weatherContainer = document.getElementById('weather-container');
    weatherContainer.classList.add('wheatherContainerStyle');
    weatherContainer.innerText = '';
    weatherContainer.innerHTML = `<h2>${weatherData.name}, ${weatherData.sys.country}</h2>
                    <p>${weatherData.weather[0].description}</p> 
                    <p>Temperature: ${weatherData.main.temp} &#8451;</p>`;
}

function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
}