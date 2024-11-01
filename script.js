const APIKey = "5abd09d4e06c9dac96738e2d88610333"
const apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".hotImg")

async function checkWeather(place) {
    const response = await fetch(apiURL + place + `&appid=${APIKey}`)
    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{
        var data = await response.json()

        document.querySelector(".place").innerHTML = data.name
        document.querySelector(".temp").innerHTML =  Math.round(data.main.temp)  + "°C"
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr"
        
        if(data.weather[0].main == "Clouds")
        {
            weatherIcon.src = "Images/cloud.png"
        }
        else if(data.weather[0].main == "Clear")
            {
                weatherIcon.src = "Images/HotWeather.png"
            }
        
            else if(data.weather[0].main == "Rain")
                {
                    weatherIcon.src = "Images/rain.webp"
                }
        
                else if (data.weather[0].main == "Drizzle")
                    {
                        weatherIcon.src = "Images/drizzle.png"
                    }
        
                    else if(data.weather[0].main == "Mist")
                        {
                            weatherIcon.src = "Images/mist.png"
                        }
        

    }


  
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)

})
