

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0d59074521msh37671062f009b2ap1b5cf8jsn7036e8b5f9ac',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city)=>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {  
        console.log(response);
        min_temp.innerHTML = response.min_temp
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(error => {
        console.error(error);
    });
}
    
Submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")

const getWeatherforShanghai = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
    .then(response => response.json())
    .then(response => {  
        console.log(response);
        shanghai_t.innerHTML = response.temp
        shanghai_cloud.innerHTML = response.cloud_pct
        shanghai_tmin.innerHTML = response.min_temp
        shanghai_humidity.innerHTML = response.humidity
        shanghai_tmax.innerHTML = response.max_temp
        shanghai_wind.innerHTML = response.wind_speed
    })
    .catch(error => {
        console.error(error);
    });
}
getWeatherforShanghai();

const getWeatherforBoston = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
    .then(response => response.json())
    .then(response => {  
        console.log(response);
        boston_t.innerHTML = response.temp
        boston_cloud.innerHTML = response.cloud_pct
        boston_tmin.innerHTML = response.min_temp
        boston_humidity.innerHTML = response.humidity
        boston_tmax.innerHTML = response.max_temp
        boston_wind.innerHTML = response.wind_speed
    })
    .catch(error => {
        console.error(error);
    });
}
getWeatherforBoston();

const getWeatherforLucknow = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then(response => response.json())
    .then(response => {  
        console.log(response);
        lucknow_t.innerHTML = response.temp
        lucknow_cloud.innerHTML = response.cloud_pct
        lucknow_tmin.innerHTML = response.min_temp
        lucknow_humidity.innerHTML = response.humidity
        lucknow_tmax.innerHTML = response.max_temp
        lucknow_wind.innerHTML = response.wind_speed
    })
    .catch(error => {
        console.error(error);
    });
}
getWeatherforLucknow();

const getWeatherforKolkata = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response => response.json())
    .then(response => {  
        console.log(response);
        kolkata_t.innerHTML = response.temp
        kolkata_cloud.innerHTML = response.cloud_pct
        kolkata_tmin.innerHTML = response.min_temp
        kolkata_humidity.innerHTML = response.humidity
        kolkata_tmax.innerHTML = response.max_temp
        kolkata_wind.innerHTML = response.wind_speed
    })
    .catch(error => {
        console.error(error);
    });
}
getWeatherforKolkata();

const getWeatherforLondon = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
    .then(response => response.json())
    .then(response => {  
        console.log(response);
        london_t.innerHTML = response.temp
        london_cloud.innerHTML = response.cloud_pct
        london_tmin.innerHTML = response.min_temp
        london_humidity.innerHTML = response.humidity
        london_tmax.innerHTML = response.max_temp
        london_wind.innerHTML = response.wind_speed
    })
    .catch(error => {
        console.error(error);
    });
}
getWeatherforLondon();

