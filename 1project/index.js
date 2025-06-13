const apiKey="d009bf65b9d5a52949031070b3741096";
const city= document.getElementById('city');
const button= document.getElementById('button');
const weatherinfo = document.getElementById('weather-info');
const showError= document.getElementById('showError');

button.addEventListener("click",()=>{
    const cityName= city.value.trim();{
if (cityName === "") {
         error("please enter a city name")  }
    else{
        fetchApi(cityName)
    }
    }
});


async function fetchApi(cityName) {
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    try {
        const response=await fetch(api)
       const data= await response.json()
       console.log(data);
       
       if (data.cod==="404") {
        error("this city doesn't exist")
       } else {
        cityData(data)
       }
        
    } catch (error) {
        error("can't find data")
    }
}

function cityData(data) {
    weatherinfo.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>sunrise: ${data.sys.sunrise}</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Description: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>`
}

function error (message) {
    showError.textContent=message
}