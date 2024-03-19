const apiKey = "f00d9a18cfe8bd7d96f7530cfa66f8d5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

//   if(response.status == 404){
//     document.querySelector(".error").style.display = "block";
//     document.querySelector(".weather").style.display = "none";
//   }
//   else{

    var data = await response.json();

   

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"

    if(data.weather[0].main == "Clouds"){
          weatherIcon.src = "clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
          weatherIcon.src = "clear.jpeg"
    }
    else if(data.weather[0].main == "Rain"){
          weatherIcon.src = "rain.jpeg"
    }
    else if(data.weather[0].main == "Haze"){
          weatherIcon.src = "haze.png"
    }


    //  document.querySelector(".error").style.display = "block";
    // document.querySelector(".weather").style.display = "none";
//   }
    // document.querySelector("weather").style.display = "block";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

