document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '50b6cd8a10df172adf614228573b68ec';
  
    const locationInput = document.getElementById('locationInput');
    const locationName = document.getElementById('locationName');
    const temperature = document.getElementById('temperature');
    const weatherMain = document.getElementById('weatherMain');
    const weatherDescription = document.getElementById('weatherDescription');
    const feelsLike = document.getElementById('feelsLike');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');
  
    const clearVideo = 'assets/clearskies.mp4';
    const mistVideo = 'assets/mist.mp4';
    const rainyVideo = 'assets/rainy.mp4';
    const cloudyVideo = 'assets/cloudy.mp4';
    const snowyVideo = 'assets/snowy.mp4';
    const windyVideo = 'assets/windy.mp4';
  
    const getVideoSource = (weather) => {
      switch(weather) {
        case 'Clear':
          return clearVideo;
        case 'Rain':
        case 'Thunderstorm':
          return rainyVideo;
        case 'Clouds':
          return cloudyVideo;
        case 'Snow':
          return snowyVideo;
        case 'Windy':
          return windyVideo;
        case 'Mist':
          return mistVideo;
        default:
          return clearVideo;
      }
    };
  
    const updateWeather = (data) => {
      locationName.textContent = data.name || '';
      temperature.textContent = data.main ? `${data.main.temp}°C` : '';
      weatherMain.textContent = data.weather ? data.weather[0].main : '';
      weatherDescription.textContent = data.weather ? data.weather[0].description : '';
      feelsLike.textContent = data.main ? `${data.main.feels_like}°C` : '';
      humidity.textContent = data.main ? `${data.main.humidity}%` : '';
      windSpeed.textContent = data.wind ? `${data.wind.speed} MPH` : '';
  
      if (data.weather) {
        const videoElement = document.getElementById("bgVideo");
        const sourceElement = videoElement.getElementsByTagName("source")[0];
        sourceElement.src = getVideoSource(data.weather[0].main);
        videoElement.load();
        videoElement.play();
      }
    };
  
    locationInput.addEventListener('keydown', (event) => {
      if (event.key === "Enter") {
        const location = locationInput.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            updateWeather(data);
            locationInput.value = '';
          })
          .catch(error => {
            console.error("Error fetching weather data: ", error);
          });
      }
    });
  });
  