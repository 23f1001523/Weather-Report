const searchCityInput = document.getElementById("searchcity");
const apiKey = "4160bb0998ce11b8ac8dc11807ffd5e9";

window.onload = function() {
  const searchValue = localStorage.getItem('favCity');
  if(searchValue){
    showWeather(searchValue);
  }
};

searchCityInput.addEventListener("change", function () {
  const city = searchCityInput.value;

  getWeather(city);
});

async function showWeather(searchValue) {
  
  
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchValue}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
  } catch (error) {
    document.querySelector(".error").innerHTML =
      "City not found. Please try again.";
  }
}


async function getWeather() {
  
  const searchValue = searchCityInput.value;
  showWeather(searchValue);

}


function addFavouriteCity(){
  const favCity = document.getElementById('searchcity').value;
  if(favCity){
    localStorage.setItem('favCity', favCity);
    alert('City added to favorites!');
  }
  else{
    alert("Please enter City");
  }

}

