const apikey = "919650910e8762399d189e09a5c1c9b5"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric"


document.addEventListener("DOMContentLoaded", () => {
var weathericon = document.querySelector(".weather-icon")
})


async function checkWeather(city, weathericon) {
    const response = await fetch(`${apiURL}&q=${city}&APPID=${apikey}`)
    var data = await response.json();
    
    

    temp = Math.round(data.main.temp)
    wind = Math.round(data.wind.speed)

    document.querySelector(".temp").innerHTML = `${temp} °C` 
    document.querySelector(".city").innerHTML = data.name 
    document.querySelector(".humidityp").innerHTML = `${data.main.humidity} %` 
    document.querySelector(".wind").innerHTML = `${wind} km/h`
    
     
    if(data.weather[0].icon == "01d"){
        weathericon.src = "images/01d.svg" 
    }else if(data.weather[0].icon == "01n"){
        weathericon.src = "images/01n.svg" 
    }
    else if(data.weather[0].icon == "02d"){
        weathericon.src = "images/02d.svg" 
    }else if(data.weather[0].icon == "02n"){
        weathericon.src = "images/02n.svg" 
    }
    else if(data.weather[0].icon == "03d"){
        weathericon.src = "images/03d.svg" 
    }else if(data.weather[0].icon == "03n"){
        weathericon.src = "images/03n.svg" 
    }
    else if(data.weather[0].icon == "04d"){
        weathericon.src = "images/04d.svg" 
    }else if(data.weather[0].icon == "04n"){
        weathericon.src = "images/04n.svg" 
    }
    else if(data.weather[0].icon == "09d"){
        weathericon.src = "images/09d.svg" 
    }else if(data.weather[0].icon == "09n"){
        weathericon.src = "images/09n.svg" 
    }
    else if(data.weather[0].icon == "10d"){
        weathericon.src = "images/10d.svg" 
    }else if(data.weather[0].icon == "10n"){
        weathericon.src = "images/10n.svg" 
    }
    else if(data.weather[0].icon == "11d"){
        weathericon.src = "images/11d.svg" 
    }else if(data.weather[0].icon == "11n"){
        weathericon.src = "images/11n.svg" 
    }
    else if(data.weather[0].icon == "13d"){
        weathericon.src = "images/13d.svg" 
    }else if(data.weather[0].icon == "13n"){
        weathericon.src = "images/13n.svg" 
    }
    else if(data.weather[0].icon == "50d"){
        weathericon.src = "images/50d.svg" 
    }else if(data.weather[0].icon == "50n"){
        weathericon.src = "images/50n.svg" 
    }

    
    document.querySelector(".weather").style.display = "block"
}

document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.querySelector("#cityInput");
    const searchBtn = document.querySelector("#btn");
    const weathericon = document.querySelector(".weather-icon")
    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value, weathericon)
    })
});

