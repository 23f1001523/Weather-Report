
const searchCityInput = document.getElementById('searchcity');
const apiKey = '4160bb0998ce11b8ac8dc11807ffd5e9'; 

async function getWeather() {
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchCityInput.value}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
   
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = data.main.temp + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'Km/h';
    
    
  } catch (error) {
   
    document.querySelector('.error').innerHTML = 'City not found. Please try again.';
  }
}

searchCityInput.addEventListener('change', function() {
  const city = searchCityInput.value;
  
  getWeather(city);
});
